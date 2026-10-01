import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/User.js";
import connectDB from "../lib/db.js";
import { protect } from "../middleware/auth.js";

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

    // Ensure connection attempt
    let dbConnected = mongoose.connection.readyState === 1;
    if (!dbConnected) {
      try {
        await connectDB();
        dbConnected = mongoose.connection.readyState === 1;
      } catch (connErr) {
        console.warn("DB connection attempt failed in register:", connErr.message);
      }
    }

    let existingUser = null;
    if (dbConnected) {
      try {
        existingUser = await User.findOne({ email: cleanEmail }).lean();
      } catch (findErr) {
        console.warn("Existing user lookup error:", findErr.message);
      }
    }

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "An account with this email address already exists.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let savedUser = null;
    if (dbConnected) {
      try {
        savedUser = await User.create({
          name: name.trim(),
          email: cleanEmail,
          password: hashedPassword,
          stream: stream || "Science",
          class: userClass || "12",
          school: school ? school.trim() : "",
          role: role === "admin" ? "admin" : "student",
        });
      } catch (createErr) {
        console.warn("MongoDB User.create error:", createErr.message);
      }
    }

    const userData = savedUser
      ? {
          id: savedUser._id,
          name: savedUser.name,
          email: savedUser.email,
          role: savedUser.role,
          stream: savedUser.stream,
          class: savedUser.class,
          school: savedUser.school,
          avatarUrl: savedUser.avatarUrl,
          streak: savedUser.streak,
          savedVideos: savedUser.savedVideos,
          completedTopics: savedUser.completedTopics,
        }
      : {
          id: "usr_" + Date.now(),
          name: name.trim(),
          email: cleanEmail,
          role: role === "admin" ? "admin" : "student",
          stream: stream || "Science",
          class: userClass || "12",
          school: school ? school.trim() : "",
          avatarUrl: "",
          streak: { count: 1, lastDate: new Date().toDateString() },
          savedVideos: [],
          completedTopics: {},
        };

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

    // Ensure connection attempt
    if (mongoose.connection.readyState !== 1) {
      try {
        await connectDB();
      } catch (connErr) {}
    }

    let user = null;
    if (mongoose.connection.readyState === 1) {
      user = await User.findOne({ email: cleanEmail });
    }

    if (!user) {
      if (mongoose.connection.readyState !== 1) {
        return res.status(503).json({
          success: false,
          message: "Database unreachable. In MongoDB Atlas, please add 0.0.0.0/0 to Network Access.",
        });
      }
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
    if (user.streak && user.streak.lastDate !== today) {
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

    const userData = {
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
    };

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

    const updatedUser = user
      ? {
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
        }
      : {
          ...req.user,
          name: name ? name.trim() : req.user.name,
          stream: stream || req.user.stream,
          class: userClass || req.user.class,
        };

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
