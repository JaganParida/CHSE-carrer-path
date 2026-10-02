import React, { createContext, useContext, useState, useEffect } from "react";
import { SYLLABUS_DATA, STREAM_SUBJECTS } from "../data/syllabusData.js";
import { useAuth } from "./AuthContext.jsx";
import { calculateStreak } from "../utils/streak.js";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { user, updateProfile, setAuthModalOpen, setAuthMode } = useAuth();

  const [currentSection, setCurrentSection] = useState("dashboard");
  const [currentStream, setCurrentStream] = useState(user?.stream || "Science");
  const [currentClass, setCurrentClass] = useState(user?.class || "12");
  const [currentSubject, setCurrentSubject] = useState("Physics");
  const [currentVideo, setCurrentVideo] = useState(null);

  // Video Links store (allows Admin editing & adding for all streams/classes/subjects/chapters)
  const [videoLinks, setVideoLinks] = useState(() => {
    try {
      const saved = localStorage.getItem("chsetube_video_links");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem("chsetube_notes");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const isStudentLocked = Boolean(user && user.role === "student");

  useEffect(() => {
    if (user?.stream) setCurrentStream(user.stream);
    if (user?.class) setCurrentClass(user.class);
  }, [user?.stream, user?.class, user?.role]);

  const updateStream = (st) => {
    if (isStudentLocked) {
      showToast(`Stream locked to ${user.stream} per your registered student enrollment.`, "info");
      return;
    }
    setCurrentStream(st);
  };

  const updateClass = (cls) => {
    if (isStudentLocked) {
      showToast(`Class locked to Class ${user.class} per your registered student enrollment.`, "info");
      return;
    }
    setCurrentClass(cls);
  };

  const showToast = (message, type = "info") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // Helper to extract YouTube video ID (supporting raw 11-char IDs and full watch/share URLs)
  const getYouTubeId = (url) => {
    if (!url) return "";
    const trimmed = url.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
    const match = trimmed.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|live\/)|youtu\.be\/)([^&\n?#]+)/
    );
    return match ? match[1] : "";
  };

  // Fetch all video links directly from MongoDB Atlas so updates made by admin are immediately visible to all users
  const fetchVideoLinks = async () => {
    try {
      const res = await fetch("/api/videos", {
        headers: { "Cache-Control": "no-cache" },
      });
      if (!res.ok) return;
      const data = await res.json();
      if (data.success && Array.isArray(data.videos)) {
        const map = {};
        data.videos.forEach((v) => {
          if (v.chapterId) {
            map[v.chapterId] = {
              videoUrl: v.videoUrl || "",
              title: v.title || undefined,
              desc: v.desc || undefined,
              youtubeId: v.youtubeId || "",
              isAvailable: Boolean(v.isAvailable),
              updatedAt: v.updatedAt,
            };
          }
        });
        setVideoLinks((prev) => {
          const merged = { ...prev, ...map };
          try {
            localStorage.setItem("chsetube_video_links", JSON.stringify(merged));
          } catch (e) {}
          return merged;
        });
      }
    } catch (err) {
      console.warn("Could not fetch remote video links from DB, using cache:", err);
    }
  };

  // Initial load from DB and window focus synchronization
  useEffect(() => {
    fetchVideoLinks();
    const handleFocus = () => fetchVideoLinks();
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  // Admin function: Update or add YouTube video link for any chapter directly into MongoDB database
  const adminUpdateVideoLink = async (
    chapterId,
    newUrl,
    title,
    desc,
    subject,
    stream,
    userClass,
    unitName,
    unitId
  ) => {
    const trimmedUrl = (newUrl || "").trim();
    const ytId = getYouTubeId(trimmedUrl);

    // Optimistic client update so admin immediately sees changes
    const updated = {
      ...videoLinks,
      [chapterId]: {
        videoUrl: trimmedUrl,
        title: title ? title.trim() : undefined,
        desc: desc ? desc.trim() : undefined,
        youtubeId: ytId,
        isAvailable: Boolean(ytId),
        updatedAt: new Date().toISOString(),
      },
    };
    setVideoLinks(updated);
    try {
      localStorage.setItem("chsetube_video_links", JSON.stringify(updated));
    } catch (e) {}

    // Persist to MongoDB database so all students and devices receive the update
    try {
      const headers = { "Content-Type": "application/json" };
      const localToken = localStorage.getItem("chsetube_token");
      if (localToken) headers["Authorization"] = `Bearer ${localToken}`;

      const res = await fetch(`/api/admin/videos/${chapterId}`, {
        method: "PUT",
        headers,
        credentials: "include",
        body: JSON.stringify({
          videoUrl: trimmedUrl,
          title: title ? title.trim() : undefined,
          desc: desc ? desc.trim() : undefined,
          subject: subject || currentSubject,
          stream: stream || currentStream,
          class: userClass || currentClass,
          unitName: unitName || "General Unit",
          unitId: unitId || "unit_1",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || `Server responded with ${res.status}`);
      }

      // Re-fetch all video links from DB to guarantee 100% database synchronization
      await fetchVideoLinks();
      showToast("Video link saved to database and live for all students!", "success");
    } catch (e) {
      console.error("Backend admin sync error:", e);
      showToast(`Warning: Saved locally, but DB sync error: ${e.message}`, "error");
    }
  };

  // Admin function: Clear video link directly in MongoDB database
  const adminClearVideoLink = async (
    chapterId,
    subject,
    stream,
    userClass,
    unitName,
    unitId
  ) => {
    const updated = { ...videoLinks };
    if (updated[chapterId]) {
      updated[chapterId].videoUrl = "";
      updated[chapterId].youtubeId = "";
      updated[chapterId].isAvailable = false;
    } else {
      updated[chapterId] = { videoUrl: "", youtubeId: "", isAvailable: false };
    }
    setVideoLinks(updated);
    try {
      localStorage.setItem("chsetube_video_links", JSON.stringify(updated));
    } catch (e) {}

    try {
      const headers = { "Content-Type": "application/json" };
      const localToken = localStorage.getItem("chsetube_token");
      if (localToken) headers["Authorization"] = `Bearer ${localToken}`;

      const res = await fetch(`/api/admin/videos/${chapterId}/link`, {
        method: "DELETE",
        headers,
        credentials: "include",
        body: JSON.stringify({
          subject: subject || currentSubject,
          stream: stream || currentStream,
          class: userClass || currentClass,
          unitName: unitName || "General Unit",
          unitId: unitId || "unit_1",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to remove video link.");
      }

      await fetchVideoLinks();
      showToast("Video link removed from database for all students.", "info");
    } catch (e) {
      console.error("Backend admin clear video error:", e);
      showToast(`Cleared locally, but DB sync error: ${e.message}`, "error");
    }
  };

  // Helper to get effective videoUrl for any chapter (checking admin overrides)
  const getChapterVideo = (ch) => {
    if (!ch) return null;
    const override = videoLinks[ch.id];
    const url = override && override.videoUrl !== undefined ? override.videoUrl : (ch.videoUrl || "");
    const title = override && override.title ? override.title : ch.title;
    const desc = override && override.desc ? override.desc : ch.desc;
    const ytId = getYouTubeId(url);
    const thumbnailUrl = ytId ? `https://img.youtube.com/vi/${ytId}/mqdefault.jpg` : null;
    return {
      ...ch,
      title,
      desc,
      videoUrl: url,
      youtubeId: ytId,
      thumbnailUrl,
      isAvailable: Boolean(ytId),
    };
  };

  const playVideo = (chapter, subject, cls) => {
    const effective = getChapterVideo(chapter);
    setCurrentVideo({ ...effective, subject, class: cls || currentClass });
    setCurrentSection("player");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleComplete = async (chapterId) => {
    if (!user) {
      if (setAuthMode) setAuthMode("login");
      if (setAuthModalOpen) setAuthModalOpen(true);
      showToast("Please sign in or create an account to save your study progress.", "info");
      return;
    }
    const completed = { ...(user.completedTopics || {}) };
    const isDone = Boolean(completed[chapterId]);
    if (isDone) {
      delete completed[chapterId];
      showToast("Chapter marked as incomplete.", "info");
    } else {
      completed[chapterId] = new Date().toISOString();
      showToast("Chapter marked as complete!", "success");
    }
    const newStreak = calculateStreak(completed);
    updateProfile({
      completedTopics: completed,
      streak: { count: newStreak, lastDate: newStreak > 0 ? new Date().toISOString() : "" },
    });

    // Server sync with session cookie
    try {
      await fetch(`/api/user/complete/${chapterId}`, {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {}
  };

  const toggleSave = async (chapterId) => {
    if (!user) {
      if (setAuthMode) setAuthMode("login");
      if (setAuthModalOpen) setAuthModalOpen(true);
      showToast("Please sign in to bookmark chapters to your personal study list.", "info");
      return;
    }
    let saved = [...(user.savedVideos || [])];
    const idx = saved.indexOf(chapterId);
    if (idx >= 0) {
      saved.splice(idx, 1);
      showToast("Removed from bookmarks.", "info");
    } else {
      saved.push(chapterId);
      showToast("Chapter bookmarked to your library!", "success");
    }
    updateProfile({ savedVideos: saved });

    try {
      await fetch(`/api/user/save/${chapterId}`, {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {}
  };

  const saveNote = async (chapterId, text, subject) => {
    if (!user) {
      if (setAuthMode) setAuthMode("login");
      if (setAuthModalOpen) setAuthModalOpen(true);
      showToast("Please sign in to save personal chapter notes.", "info");
      return;
    }
    const updated = {
      ...notes,
      [chapterId]: {
        text,
        subject: subject || currentSubject,
        updatedAt: new Date().toISOString(),
      },
    };
    setNotes(updated);
    localStorage.setItem("chsetube_notes", JSON.stringify(updated));

    try {
      await fetch(`/api/user/notes/${chapterId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ content: text, subject: subject || currentSubject }),
      });
    } catch (e) {}
  };

  return (
    <AppContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        currentStream,
        setCurrentStream: updateStream,
        currentClass,
        setCurrentClass: updateClass,
        isStudentLocked,
        updateStream,
        updateClass,
        currentSubject,
        setCurrentSubject,
        currentVideo,
        setCurrentVideo,
        videoLinks,
        fetchVideoLinks,
        adminUpdateVideoLink,
        adminClearVideoLink,
        getChapterVideo,
        playVideo,
        toggleComplete,
        toggleSave,
        notes,
        saveNote,
        searchModalOpen,
        setSearchModalOpen,
        toast,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
