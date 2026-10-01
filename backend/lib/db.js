import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env") });
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
dotenv.config();

/**
 * Global connection cache for serverless environments (Vercel).
 * Prevents exhausting MongoDB Atlas connection limits on function invocations
 * and eliminates cold-start connection latency on warm lambdas.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null, lastError: null };
}

export async function connectDB() {
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri && (process.env.VERCEL || process.env.NODE_ENV === "production")) {
    console.warn("MONGODB_URI is not configured in environment variables.");
    cached.lastError = "MONGODB_URI environment variable not set";
    return null;
  }

  const effectiveUri = uri || "mongodb://127.0.0.1:27017/chsetube";

  if (!cached.promise) {
    const opts = {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000, // 10s for serverless cold start DNS & SSL
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose
      .connect(effectiveUri, opts)
      .then((m) => {
        cached.lastError = null;
        console.log("Connected to MongoDB via Serverless Singleton");
        return m;
      })
      .catch((err) => {
        cached.promise = null;
        cached.lastError = err.message;
        console.warn("MongoDB connection failed:", err.message);
        return null;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    cached.lastError = e.message;
    return null;
  }

  return cached.conn;
}

export default connectDB;
