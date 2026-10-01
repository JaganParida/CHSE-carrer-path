import express from "express";
import Video from "../models/Video.js";

const router = express.Router();

// @route   GET /api/videos
// @desc    Get videos with optional filters (stream, class, subject, search)
// @access  Public (Cached at Vercel Edge CDN for 60s to reduce serverless invocations)
router.get("/", async (req, res) => {
  try {
    const { stream, class: userClass, subject, search, availableOnly } = req.query;
    const filter = {};

    if (stream) filter.stream = stream;
    if (userClass) filter.class = userClass;
    if (subject) filter.subject = subject;
    if (availableOnly === "true") filter.isAvailable = true;

    if (search && search.trim()) {
      const q = search.trim();
      filter.$or = [
        { title: { $regex: q, $options: "i" } },
        { desc: { $regex: q, $options: "i" } },
        { unitName: { $regex: q, $options: "i" } },
        { subject: { $regex: q, $options: "i" } },
      ];
    }

    // Lean read for sub-millisecond execution & zero document hydration overhead
    const videos = await Video.find(filter)
      .select("-__v")
      .sort({ order: 1, createdAt: 1 })
      .lean();

    // Cache at Vercel Edge for 60 seconds with 5-minute stale-while-revalidate window
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");

    return res.json({
      success: true,
      count: videos.length,
      videos,
    });
  } catch (err) {
    console.error("Fetch Videos Error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve syllabus videos.",
    });
  }
});

// @route   GET /api/videos/:chapterId
// @desc    Get video by chapterId
router.get("/:chapterId", async (req, res) => {
  try {
    const video = await Video.findOne({ chapterId: req.params.chapterId })
      .select("-__v")
      .lean();

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Chapter video not found.",
      });
    }

    res.setHeader("Cache-Control", "public, s-maxage=120, stale-while-revalidate=600");

    return res.json({
      success: true,
      video,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch video details.",
    });
  }
});

export default router;
