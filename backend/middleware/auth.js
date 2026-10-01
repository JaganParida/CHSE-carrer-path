import jwt from "jsonwebtoken";
import User from "../models/User.js";

const JWT_SECRET = process.env.JWT_SECRET || "chsetube_secret_key_super_secure_2026";

/**
 * Protect middleware supporting:
 * 1. Secure HttpOnly HTTPS Cookies (Primary - survives hard refresh without re-login)
 * 2. Authorization: Bearer <token> header (Secondary / API fallback)
 */
export const protect = async (req, res, next) => {
  let token;

  // 1. Primary: HttpOnly HTTPS Cookie
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }
  // 2. Secondary: Bearer Header
  else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. Authentication token required.",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    let user = null;
    try {
      user = await User.findById(decoded.id).select("-password").lean();
    } catch (dbErr) {
      // Database offline/unreachable fallback
    }

    if (!user) {
      // Resilient fallback using JWT claims
      user = {
        _id: decoded.id,
        id: decoded.id,
        name: decoded.name || "Student",
        email: decoded.email || "",
        role: decoded.role || "student",
        stream: decoded.stream || "Science",
        class: decoded.class || "12",
        savedVideos: [],
        completedTopics: {},
      };
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired session. Please sign in again.",
    });
  }
};

export const requireAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Admin privileges required to perform this action.",
    });
  }
};
