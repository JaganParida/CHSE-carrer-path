import React, { createContext, useContext, useState, useEffect } from "react";
import { SYLLABUS_DATA, STREAM_SUBJECTS } from "../data/syllabusData.js";
import { useAuth } from "./AuthContext.jsx";

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

  // Helper to extract YouTube video ID
  const getYouTubeId = (url) => {
    if (!url) return "";
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|live\/)|youtu\.be\/)([^&\n?#]+)/
    );
    return match ? match[1] : "";
  };

  // Admin function: Update or add YouTube video link for any chapter
  const adminUpdateVideoLink = async (chapterId, newUrl, title, desc, subject, stream, userClass) => {
    const updated = {
      ...videoLinks,
      [chapterId]: {
        videoUrl: newUrl.trim(),
        title: title ? title.trim() : undefined,
        desc: desc ? desc.trim() : undefined,
        updatedAt: new Date().toISOString(),
      },
    };
    setVideoLinks(updated);
    localStorage.setItem("chsetube_video_links", JSON.stringify(updated));

    // Backend API sync with credentials include
    try {
      const headers = { "Content-Type": "application/json" };
      const localToken = localStorage.getItem("chsetube_token");
      if (localToken) headers["Authorization"] = `Bearer ${localToken}`;

      await fetch(`/api/admin/videos/${chapterId}`, {
        method: "PUT",
        headers,
        credentials: "include",
        body: JSON.stringify({
          videoUrl: newUrl,
          title,
          desc,
          subject: subject || currentSubject,
          stream: stream || currentStream,
          class: userClass || currentClass,
        }),
      });
    } catch (e) {
      console.warn("Backend admin sync offline, saved to client cache.");
    }

    showToast("YouTube lecture link updated successfully!", "success");
  };

  // Admin function: Clear video link
  const adminClearVideoLink = async (chapterId) => {
    const updated = { ...videoLinks };
    if (updated[chapterId]) {
      updated[chapterId].videoUrl = "";
    } else {
      updated[chapterId] = { videoUrl: "" };
    }
    setVideoLinks(updated);
    localStorage.setItem("chsetube_video_links", JSON.stringify(updated));

    try {
      const headers = {};
      const localToken = localStorage.getItem("chsetube_token");
      if (localToken) headers["Authorization"] = `Bearer ${localToken}`;

      await fetch(`/api/admin/videos/${chapterId}/link`, {
        method: "DELETE",
        headers,
        credentials: "include",
      });
    } catch (e) {}

    showToast("Video link cleared for this chapter.", "info");
  };

  // Helper to get effective videoUrl for any chapter (checking admin overrides)
  const getChapterVideo = (ch) => {
    const override = videoLinks[ch.id];
    const url = override && override.videoUrl !== undefined ? override.videoUrl : ch.videoUrl;
    const title = override && override.title ? override.title : ch.title;
    const desc = override && override.desc ? override.desc : ch.desc;
    const ytId = getYouTubeId(url);
    return {
      ...ch,
      title,
      desc,
      videoUrl: url,
      youtubeId: ytId,
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
    updateProfile({ completedTopics: completed });

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
