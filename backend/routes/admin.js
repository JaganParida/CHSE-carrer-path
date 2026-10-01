import express from "express";
import Video from "../models/Video.js";
import User from "../models/User.js";
import { protect, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// Apply auth & admin protection to all routes in this file
router.use(protect);
router.use(requireAdmin);

// @route   GET /api/admin/stats
// @desc    Get dashboard metrics for admin studio
router.get("/stats", async (req, res) => {
  try {
    const totalVideos = await Video.countDocuments();
    const availableVideos = await Video.countDocuments({ isAvailable: true });
    const totalUsers = await User.countDocuments({ role: "student" });

    // Calculate coverage by stream & subject
    const subjectsAggregate = await Video.aggregate([
      {
        $group: {
          _id: { stream: "$stream", class: "$class", subject: "$subject" },
          total: { $sum: 1 },
          available: {
            $sum: { $cond: [{ $eq: ["$isAvailable", true] }, 1, 0] },
          },
        },
      },
      { $sort: { "_id.class": -1, "_id.stream": 1, "_id.subject": 1 } },
    ]);

    return res.json({
      success: true,
      stats: {
        totalChapters: totalVideos,
        activeVideoLinks: availableVideos,
        coveragePct: totalVideos ? Math.round((availableVideos / totalVideos) * 100) : 0,
        totalStudents: totalUsers,
        breakdown: subjectsAggregate,
      },
    });
  } catch (err) {
    console.error("Admin stats error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to generate admin statistics.",
    });
  }
});

// @route   POST /api/admin/videos
// @desc    Add a new chapter or video link for any stream, class, subject
router.post("/videos", async (req, res) => {
  try {
    const {
      chapterId,
      stream,
      class: userClass,
      subject,
      unitId,
      unitName,
      title,
      desc,
      videoUrl,
      order,
    } = req.body;

    if (!chapterId || !stream || !userClass || !subject || !unitName || !title) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields (chapterId, stream, class, subject, unitName, title).",
      });
    }

    const existing = await Video.findOne({ chapterId });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: `A chapter with ID "${chapterId}" already exists. Use PUT to edit it.`,
      });
    }

    const newVideo = new Video({
      chapterId: chapterId.trim(),
      stream,
      class: userClass,
      subject: subject.trim(),
      unitId: unitId ? unitId.trim() : "unit_" + Date.now(),
      unitName: unitName.trim(),
      title: title.trim(),
      desc: desc ? desc.trim() : "",
      videoUrl: videoUrl ? videoUrl.trim() : "",
      order: order || 0,
      updatedBy: req.user._id,
    });

    await newVideo.save();

    return res.status(201).json({
      success: true,
      message: "New chapter & video link added successfully.",
      video: newVideo,
    });
  } catch (err) {
    console.error("Create video error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to add new video link.",
    });
  }
});

// @route   PUT /api/admin/videos/:chapterId
// @desc    Update or add YouTube video link to an existing chapter
router.put("/videos/:chapterId", async (req, res) => {
  try {
    const { videoUrl, title, desc, unitName, unitId, subject, stream, class: userClass, order } = req.body;
    let video = await Video.findOne({ chapterId: req.params.chapterId });

    if (!video) {
      // Upsert: Create a new video entry if it didn't exist in MongoDB yet
      video = new Video({
        chapterId: req.params.chapterId,
        stream: stream || "Science",
        class: userClass || "12",
        subject: subject || "General",
        unitId: unitId || "unit_1",
        unitName: unitName || "General Unit",
        title: title || req.params.chapterId,
        desc: desc || "",
        videoUrl: videoUrl ? videoUrl.trim() : "",
        order: order || 0,
        updatedBy: req.user._id,
      });
    } else {
      if (videoUrl !== undefined) video.videoUrl = videoUrl.trim();
      if (title) video.title = title.trim();
      if (desc !== undefined) video.desc = desc.trim();
      if (unitName) video.unitName = unitName.trim();
      if (unitId) video.unitId = unitId.trim();
      if (subject) video.subject = subject.trim();
      if (stream) video.stream = stream;
      if (userClass) video.class = userClass;
      if (order !== undefined) video.order = order;
      video.updatedBy = req.user._id;
    }

    await video.save();

    return res.json({
      success: true,
      message: "Video link updated successfully.",
      video,
    });
  } catch (err) {
    console.error("Update video error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to update video link.",
    });
  }
});

// @route   DELETE /api/admin/videos/:chapterId/link
// @desc    Clear/remove YouTube video link from chapter without deleting syllabus entry
router.delete("/videos/:chapterId/link", async (req, res) => {
  try {
    const video = await Video.findOne({ chapterId: req.params.chapterId });
    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Chapter not found.",
      });
    }

    video.videoUrl = "";
    video.youtubeId = "";
    video.isAvailable = false;
    video.updatedBy = req.user._id;
    await video.save();

    return res.json({
      success: true,
      message: "Video link removed from chapter.",
      video,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to clear video link.",
    });
  }
});

export default router;
