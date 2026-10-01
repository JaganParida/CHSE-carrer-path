import app from "../backend/server.js";

// Vercel Serverless Function entry point
export default function handler(req, res) {
  return app(req, res);
}
