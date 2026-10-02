import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    chapterId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    stream: {
      type: String,
      required: true,
      enum: ["Science", "Commerce", "Arts"],
    },
    class: {
      type: String,
      required: true,
      enum: ["11", "12"],
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    unitId: {
      type: String,
      required: true,
      trim: true,
    },
    unitName: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      default: "",
    },
    videoUrl: {
      type: String,
      default: "",
      trim: true,
    },
    youtubeId: {
      type: String,
      default: "",
      trim: true,
    },
    isAvailable: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// High-performance compound indexes for serverless sub-millisecond lookups
videoSchema.index({ stream: 1, class: 1, subject: 1 });
videoSchema.index({ isAvailable: 1 });


// Helper to extract YouTube video ID from URL
videoSchema.methods.extractYouTubeId = function (url) {
  if (!url) return "";
  const trimmed = url.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const match = trimmed.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|live\/)|youtu\.be\/)([^&\n?#]+)/
  );
  return match ? match[1] : "";
};

videoSchema.pre("save", function (next) {
  if (this.videoUrl && this.videoUrl.trim()) {
    this.youtubeId = this.extractYouTubeId(this.videoUrl);
    this.isAvailable = Boolean(this.youtubeId);
  } else {
    this.videoUrl = "";
    this.youtubeId = "";
    this.isAvailable = false;
  }
  next();
});

export default mongoose.model("Video", videoSchema);
