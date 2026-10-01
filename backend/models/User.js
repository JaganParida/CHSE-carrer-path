import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },
    stream: {
      type: String,
      enum: ["Science", "Commerce", "Arts"],
      default: "Science",
    },
    class: {
      type: String,
      enum: ["11", "12"],
      default: "12",
    },
    school: {
      type: String,
      default: "",
    },
    avatarUrl: {
      type: String,
      default: "",
    },
    streak: {
      count: { type: Number, default: 0 },
      lastDate: { type: String, default: "" },
    },
    savedVideos: [{ type: String }],
    completedTopics: {
      type: Map,
      of: String,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
