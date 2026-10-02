import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/User.js";
import connectDB from "../lib/db.js";
import { protect } from "../middleware/auth.js";
import { computeStreak } from "../utils/streak.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "chsetube_secret_key_super_secure_2026";

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id || user.id,
      role: user.role || "student",
      name: user.name || "Student",
      email: user.email || "",
      stream: user.stream || "Science",
      class: user.class || "12",
    },
    JWT_SECRET,
    { expiresIn: "30d" }
  );
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

export const formatUserJSON = (user) => {
  if (!user) return null;
  const uid = user._id ? user._id.toString() : user.id;
  let completed = {};
  if (user.completedTopics instanceof Map) {
    user.completedTopics.forEach((v, k) => {
      completed[k] = v;
    });
  } else if (user.completedTopics && typeof user.completedTopics === "object") {
    if (typeof user.completedTopics.toJSON === "function") {
      completed = user.completedTopics.toJSON();
    } else {
      completed = { ...user.completedTopics };
    }
  }

  return {
    _id: uid,
    id: uid,
    name: user.name,
    email: user.email,
    role: user.role || "student",
    stream: user.stream || "Science",
    class: user.class || "12",
    school: user.school || "",
    avatarUrl: user.avatarUrl || "",
    streak: user.streak || { count: 0, lastDate: "" },
    savedVideos: Array.isArray(user.savedVideos) ? user.savedVideos : [],
    completedTopics: completed,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

// @route   POST /api/auth/register
// @desc    Register a new student & set secure cookie
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, stream, class: userClass, school } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide full name, email, and password.",
      });
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanPassword = password.trim();

    if (cleanPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters.",
      });
    }

    // Ensure database connection
    if (mongoose.connection.readyState !== 1) {
      try {
        await connectDB();
      } catch (connErr) {
        console.warn("DB connection in register:", connErr.message);
      }
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: "Database connecting. Please retry in a few seconds.",
      });
    }

    const existingUser = await User.findOne({
      email: { $regex: new RegExp(`^${cleanEmail}$`, "i") },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "An account with this email address already exists. Please sign in.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(cleanPassword, salt);

    const savedUser = await User.create({
      name: name.trim(),
      email: cleanEmail,
      password: hashedPassword,
      stream: stream || "Science",
      class: userClass || "12",
      school: school ? school.trim() : "",
      role: "student",
    });

    const userData = formatUserJSON(savedUser);
    const token = generateToken(userData);

    // Set secure HttpOnly cookie
    res.cookie("token", token, getCookieOptions());

    return res.status(201).json({
      success: true,
      token,
      user: userData,
    });
  } catch (err) {
    console.error("Register Error:", err);
    return res.status(500).json({
      success: false,
      message: err.message || "Registration encountered an unexpected issue.",
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
    const cleanPassword = password.trim();

    // Ensure database connection
    if (mongoose.connection.readyState !== 1) {
      try {
        await connectDB();
      } catch (connErr) {
        console.warn("DB connection in login:", connErr.message);
      }
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: "Database connecting. Please retry in 3 seconds.",
      });
    }

    // Case-insensitive email lookup
    const user = await User.findOne({
      email: { $regex: new RegExp(`^${cleanEmail}$`, "i") },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "No account found with this email. Please check your email or create a free account.",
      });
    }

    // Robust password matching: checks raw, trimmed, and legacy plaintext
    let isMatch = false;
    try {
      isMatch = await bcrypt.compare(cleanPassword, user.password);
      if (!isMatch && password !== cleanPassword) {
        isMatch = await bcrypt.compare(password, user.password);
      }
      if (!isMatch && (user.password === cleanPassword || user.password === password)) {
        isMatch = true;
      }
    } catch (bcryptErr) {
      if (user.password === cleanPassword || user.password === password) {
        isMatch = true;
      }
    }

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password. Please verify and try again.",
      });
    }

    // Calculate genuine streak based on actual completed topics
    const genuineStreak = computeStreak(user.completedTopics);
    user.streak = {
      count: genuineStreak,
      lastDate: genuineStreak > 0 ? new Date().toDateString() : "",
    };
    await user.save();

    const userData = formatUserJSON(user);
    const token = generateToken(userData);

    // Set secure HttpOnly cookie
    res.cookie("token", token, getCookieOptions());

    return res.json({
      success: true,
      token,
      user: userData,
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({
      success: false,
      message: err.message || "Server error during login.",
    });
  }
});

// @route   GET /api/auth/me
// @desc    Get current user profile (Validates cookie or header token on refresh)
router.get("/me", protect, async (req, res) => {
  return res.json({
    success: true,
    user: formatUserJSON(req.user),
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
    let user = null;
    if (mongoose.connection.readyState === 1) {
      user = await User.findById(req.user._id || req.user.id);
      if (user) {
        if (name) user.name = name.trim();
        if (stream) user.stream = stream;
        if (userClass) user.class = userClass;
        if (school !== undefined) user.school = school.trim();
        if (avatarUrl !== undefined) user.avatarUrl = avatarUrl;
        await user.save();
      }
    }

    const updatedUser = user ? formatUserJSON(user) : formatUserJSON(req.user);

    return res.json({
      success: true,
      user: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Failed to update profile.",
    });
  }
});

export default router;
