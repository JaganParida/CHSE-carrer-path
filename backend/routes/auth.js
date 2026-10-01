import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "chsetube_secret_key_super_secure_2026";

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, JWT_SECRET, { expiresIn: "30d" });
};

// Standard production-ready secure cookie options
const getCookieOptions = () => {
  const isProd = process.env.NODE_ENV === "production";
  return {
    httpOnly: true, // Prevents XSS script access
    secure: isProd, // True on HTTPS in production
    sameSite: isProd ? "none" : "lax", // "none" allows cross-domain HTTPS on Vercel
    path: "/",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days (Survives hard refresh)
  };
};

// @route   POST /api/auth/register
// @desc    Register a new student or admin & set secure cookie
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, stream, class: userClass, school, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide full name, email, and password.",
      });
    }

    const cleanEmail = email.toLowerCase().trim();
    const existingUser = await User.findOne({ email: cleanEmail }).lean();
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "An account with this email address already exists.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name: name.trim(),
      email: cleanEmail,
      password: hashedPassword,
      stream: stream || "Science",
      class: userClass || "12",
      school: school ? school.trim() : "",
      role: role === "admin" ? "admin" : "student",
    });

    const token = generateToken(user._id, user.role);

    // Set secure HttpOnly cookie
    res.cookie("token", token, getCookieOptions());

    return res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        stream: user.stream,
        class: user.class,
        school: user.school,
        avatarUrl: user.avatarUrl,
        streak: user.streak,
        savedVideos: user.savedVideos,
        completedTopics: user.completedTopics,
      },
    });
  } catch (err) {
    console.error("Register Error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error during registration.",
    });
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate email & password, set secure cookie
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password.",
      });
    }

    const cleanEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: cleanEmail });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Update daily streak
    const today = new Date().toDateString();
    if (user.streak.lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (user.streak.lastDate === yesterday.toDateString()) {
        user.streak.count += 1;
      } else {
        user.streak.count = 1;
      }
      user.streak.lastDate = today;
      await user.save();
    }

    const token = generateToken(user._id, user.role);

    // Set secure HttpOnly cookie
    res.cookie("token", token, getCookieOptions());

    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        stream: user.stream,
        class: user.class,
        school: user.school,
        avatarUrl: user.avatarUrl,
        streak: user.streak,
        savedVideos: user.savedVideos,
        completedTopics: user.completedTopics,
      },
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error during login.",
    });
  }
});

// @route   GET /api/auth/me
// @desc    Get current user profile (Validates cookie or header token on refresh)
router.get("/me", protect, async (req, res) => {
  return res.json({
    success: true,
    user: req.user,
  });
});

// @route   POST /api/auth/logout
// @desc    Clear authentication cookie
router.post("/logout", (req, res) => {
  const isProd = process.env.NODE_ENV === "production";
  res.clearCookie("token", {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
  });
  return res.json({
    success: true,
    message: "Logged out successfully.",
  });
});

// @route   PUT /api/auth/update
// @desc    Update profile info
router.put("/update", protect, async (req, res) => {
  try {
    const { name, stream, class: userClass, school, avatarUrl } = req.body;
    const user = await User.findById(req.user._id);

    if (name) user.name = name.trim();
    if (stream) user.stream = stream;
    if (userClass) user.class = userClass;
    if (school !== undefined) user.school = school.trim();
    if (avatarUrl !== undefined) user.avatarUrl = avatarUrl;

    await user.save();

    return res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        stream: user.stream,
        class: user.class,
        school: user.school,
        avatarUrl: user.avatarUrl,
        streak: user.streak,
        savedVideos: user.savedVideos,
        completedTopics: user.completedTopics,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to update profile.",
    });
  }
});

export default router;
