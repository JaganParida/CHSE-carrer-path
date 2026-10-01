import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./lib/db.js";

import authRoutes from "./routes/auth.js";
import videoRoutes from "./routes/videos.js";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middlewares
app.use(
  cors({
    origin: (origin, callback) => {
      // Reflects caller origin to support cross-domain Vercel previews & production
      callback(null, true);
    },
    credentials: true, // Crucial: Allows httpOnly HTTPS cookies across requests
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

// Hardened Security Headers
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});

// Immediate Health check endpoint (Instantly responds without waiting for DB)
app.get(["/api/health", "/health"], (req, res) => {
  const dbStates = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
  };
  const currentState = dbStates[mongoose.connection.readyState] || "unknown";

  res.status(200).json({
    status: "online",
    platform: "CHSETube MERN SaaS API",
    version: "2.0.0",
    serverless: Boolean(process.env.VERCEL),
    database: currentState,
    hasMongoUri: Boolean(process.env.MONGODB_URI),
    timestamp: new Date().toISOString(),
  });
});

app.get(["/api", "/"], (req, res, next) => {
  // If request is specifically for the API status
  if (req.path === "/api" || req.path === "/api/") {
    return res.status(200).json({
      message: "CHSE Odisha Learning Portal Backend API",
      status: "active",
      version: "2.0.0",
    });
  }
  next();
});

// Serverless DB Connection Middleware for operational API routes:
// Reuses cached Mongoose singleton across Vercel function invocations
app.use(async (req, res, next) => {
  try {
    await connectDB();
  } catch (err) {
    console.warn("MongoDB connection fallback in request:", err.message);
  }
  next();
});

// API Route Mounts
app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err);
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start local listener only in standalone node development (NEVER on Vercel)
if (!process.env.VERCEL && process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`CHSETube Backend running on http://localhost:${PORT}`);
  });
}

export default app;
