import express from "express";
import User from "../models/User.js";
import Note from "../models/Note.js";
import { protect } from "../middleware/auth.js";
import { computeStreak } from "../utils/streak.js";

const router = express.Router();
router.use(protect);

// @route   POST /api/user/complete/:chapterId
// @desc    Toggle chapter completion status
router.post("/complete/:chapterId", async (req, res) => {
  try {
    const { chapterId } = req.params;
    const user = await User.findById(req.user._id);

    const completed = user.completedTopics || new Map();
    const isDone = completed.has(chapterId);

    if (isDone) {
      completed.delete(chapterId);
    } else {
      completed.set(chapterId, new Date().toISOString());
    }

    user.completedTopics = completed;
    const currentStreak = computeStreak(completed);
    user.streak = {
      count: currentStreak,
      lastDate: currentStreak > 0 ? new Date().toDateString() : "",
    };
    await user.save();

    return res.json({
      success: true,
      isDone: !isDone,
      completedTopics: user.completedTopics,
      streak: user.streak,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to update completion status.",
    });
  }
});

// @route   POST /api/user/save/:chapterId
// @desc    Toggle bookmark for video
router.post("/save/:chapterId", async (req, res) => {
  try {
    const { chapterId } = req.params;
    const user = await User.findById(req.user._id);

    const index = user.savedVideos.indexOf(chapterId);
    let isSaved = false;

    if (index >= 0) {
      user.savedVideos.splice(index, 1);
    } else {
      user.savedVideos.push(chapterId);
      isSaved = true;
    }

    await user.save();

    return res.json({
      success: true,
      isSaved,
      savedVideos: user.savedVideos,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to update saved videos.",
    });
  }
});

// @route   GET /api/user/notes
// @desc    Get all notes created by current user
router.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user._id }).sort({ updatedAt: -1 });
    return res.json({
      success: true,
      notes,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve notes.",
    });
  }
});

// @route   POST /api/user/notes/:chapterId
// @desc    Auto-save or update note for a chapter
router.post("/notes/:chapterId", async (req, res) => {
  try {
    const { chapterId } = req.params;
    const { content, subject } = req.body;

    const note = await Note.findOneAndUpdate(
      { userId: req.user._id, chapterId },
      { content: content || "", subject: subject || "General" },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    return res.json({
      success: true,
      note,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to save note.",
    });
  }
});

// @route   DELETE /api/user/notes/:chapterId
// @desc    Delete a chapter note
router.delete("/notes/:chapterId", async (req, res) => {
  try {
    await Note.findOneAndDelete({
      userId: req.user._id,
      chapterId: req.params.chapterId,
    });
    return res.json({
      success: true,
      message: "Note deleted.",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete note.",
    });
  }
});

// @route   POST /api/user/notes/batch-sync
// @desc    Batch sync multiple local notes to MongoDB database for the logged-in student
router.post("/notes/batch-sync", async (req, res) => {
  try {
    const { notes } = req.body;
    if (!Array.isArray(notes) || notes.length === 0) {
      return res.json({ success: true, count: 0 });
    }

    let syncedCount = 0;
    for (const item of notes) {
      if (!item.chapterId || !item.content?.trim()) continue;

      await Note.findOneAndUpdate(
        { userId: req.user._id, chapterId: item.chapterId },
        { content: item.content.trim(), subject: item.subject || "General" },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      syncedCount++;
    }

    return res.json({
      success: true,
      message: `Synced ${syncedCount} notes to database.`,
      syncedCount,
    });
  } catch (err) {
    console.error("Batch sync notes error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to batch sync notes.",
    });
  }
});

export default router;
