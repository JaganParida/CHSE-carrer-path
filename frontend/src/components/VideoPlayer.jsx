import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { SYLLABUS_DATA } from "../data/syllabusData.js";
import {
  IconArrowLeft,
  IconSkipBack,
  IconSkipForward,
  IconBookmark,
  IconBookmarkFilled,
  IconCheck,
  IconPlay,
  IconClock,
  IconBook,
  IconClose,
} from "./Icons.jsx";

export const VideoPlayer = () => {
  const { user } = useAuth();
  const {
    currentVideo,
    currentSubject,
    currentClass,
    setCurrentSection,
    playVideo,
    toggleComplete,
    toggleSave,
    notes,
    saveNote,
    showToast,
  } = useApp();

  if (!currentVideo) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto p-6 rounded-xl bg-[#0c0d10] border border-white/[0.06] space-y-3.5">
          <IconBook size={28} className="mx-auto text-zinc-300" />
          <h2 className="text-lg font-bold text-white">No Lecture Selected</h2>
          <p className="text-xs text-zinc-400">
            Choose a chapter from the syllabus dashboard to begin watching.
          </p>
          <button
            onClick={() => setCurrentSection("dashboard")}
            className="px-4 py-2 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition-all shadow-sm"
          >
            Go to Syllabus
          </button>
        </div>
      </div>
    );
  }

  const completedMap = user?.completedTopics || {};
  const isDone = Boolean(completedMap[currentVideo.id]);
  const isSaved = (user?.savedVideos || []).includes(currentVideo.id);

  // Chapter Note
  const [noteText, setNoteText] = useState(notes[currentVideo.id]?.text || "");
  const [saveStatus, setSaveStatus] = useState("Auto-saved");

  useEffect(() => {
    setNoteText(notes[currentVideo.id]?.text || "");
  }, [currentVideo.id]);

  const handleNoteChange = (e) => {
    const val = e.target.value;
    setNoteText(val);
    setSaveStatus("Saving...");
    saveNote(currentVideo.id, val, currentSubject);
    setTimeout(() => {
      setSaveStatus("Saved");
    }, 500);
  };

  // Build subject playlist
  const subjectUnits = SYLLABUS_DATA[currentSubject]?.[currentClass] || [];
  const playlist = [];
  subjectUnits.forEach((u) => {
    u.chapters?.forEach((c) => playlist.push({ ...c, unitName: u.unit }));
  });

  const currentIndex = playlist.findIndex((p) => p.id === currentVideo.id);

  const handleNavigate = (dir) => {
    const nextIdx = currentIndex + dir;
    if (nextIdx >= 0 && nextIdx < playlist.length) {
      playVideo(playlist[nextIdx], currentSubject, currentClass);
    } else {
      showToast(
        dir > 0
          ? "You have reached the last chapter in this subject."
          : "This is the first chapter.",
        "info"
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4 font-sans">
      {/* Precision Top Header (Zero overlap on mobile) */}
      <div className="flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-lg bg-[#0c0d10] border border-white/[0.06]">
        <button
          onClick={() => setCurrentSection("subject")}
          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors min-w-0 truncate"
        >
          <IconArrowLeft size={13} className="shrink-0" />
          <span className="truncate">Back to {currentSubject}</span>
        </button>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-zinc-400 border border-white/[0.06] hidden sm:inline">
            Class {currentClass}
          </span>
          <button
            onClick={() => setCurrentSection("dashboard")}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-black/60 hover:bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <span>Close</span>
            <IconClose size={12} />
          </button>
        </div>
      </div>

      {/* Main Layout: Video Player + Playlist Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Player & Notes */}
        <div className="lg:col-span-8 space-y-4">
          {/* 16:9 Video Container */}
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/[0.06] shadow-2xl relative">
            {currentVideo.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0c0d10] text-zinc-400">
                <div className="w-10 h-10 rounded-lg bg-black/60 border border-white/[0.06] text-zinc-300 flex items-center justify-center mb-2.5">
                  <IconClock size={18} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  Video Lecture Coming Soon
                </h3>
                <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
                  Our educators are uploading the curated lecture for <b>{currentVideo.title}</b>. In the meantime, you can review the syllabus topics and write notes below.
                </p>
              </div>
            )}
          </div>

          {/* Controls Bar */}
          <div className="bg-[#0c0d10] p-3 rounded-xl border border-white/[0.06] flex items-center justify-between gap-2.5 flex-wrap">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => handleNavigate(-1)}
                disabled={currentIndex <= 0}
                className="p-1.5 rounded-lg bg-black/60 hover:bg-white/[0.04] disabled:opacity-30 border border-white/[0.06] text-zinc-300 transition-colors"
                title="Previous chapter"
              >
                <IconSkipBack size={14} />
              </button>

              <button
                onClick={() => handleNavigate(1)}
                disabled={currentIndex >= playlist.length - 1}
                className="p-1.5 rounded-lg bg-black/60 hover:bg-white/[0.04] disabled:opacity-30 border border-white/[0.06] text-zinc-300 transition-colors"
                title="Next chapter"
              >
                <IconSkipForward size={14} />
              </button>

              <span className="text-[11px] sm:text-xs text-zinc-400 font-mono ml-1">
                Chapter {currentIndex + 1} of {playlist.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleSave(currentVideo.id)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors ${
                  isSaved
                    ? "bg-white text-black border-white"
                    : "bg-black/60 text-zinc-300 border-white/[0.06] hover:text-white"
                }`}
              >
                {isSaved ? <IconBookmarkFilled size={12} /> : <IconBookmark size={12} />}
                <span>{isSaved ? "Saved" : "Bookmark"}</span>
              </button>

              <button
                onClick={() => toggleComplete(currentVideo.id)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
                  isDone
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    : "bg-white hover:bg-zinc-200 text-black border-transparent shadow-sm"
                }`}
              >
                <IconCheck size={12} />
                <span>{isDone ? "Completed" : "Mark Complete"}</span>
              </button>
            </div>
          </div>

          {/* Chapter Details and Auto-Saving Notepad */}
          <div className="bg-[#0c0d10] p-4 sm:p-5 rounded-xl border border-white/[0.06] space-y-3.5">
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/60 text-zinc-400 border border-white/[0.06]">
                  {currentSubject} · Class {currentClass}
                </span>
                {isDone && (
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <IconCheck size={11} /> Mastered
                  </span>
                )}
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white">{currentVideo.title}</h2>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                {currentVideo.desc}
              </p>
            </div>

            {/* Smart Auto-Saving Notes Box */}
            <div className="pt-3.5 border-t border-white/[0.06]">
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Chapter Study Notes
                </label>
                <span className="text-[11px] font-mono text-zinc-500">
                  {saveStatus}
                </span>
              </div>
              <textarea
                rows="4"
                value={noteText}
                onChange={handleNoteChange}
                placeholder="Write your key points, formulas, definitions, and exam reminders here... Notes autosave in real-time."
                className="w-full p-3 rounded-lg bg-black/60 border border-white/[0.06] text-sm text-zinc-200 placeholder-zinc-500 focus:border-white/20 outline-none resize-none font-sans"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Right Column: Playlist Sidebar */}
        <div className="lg:col-span-4 bg-[#0c0d10] rounded-xl border border-white/[0.06] p-3.5 space-y-2.5">
          <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06]">
            <div>
              <h3 className="text-sm font-semibold text-white">Subject Playlist</h3>
              <div className="text-[10px] text-zinc-500 font-mono">{playlist.length} chapters total</div>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              {currentIndex + 1} / {playlist.length}
            </span>
          </div>

          <div className="space-y-1 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
            {playlist.map((p, idx) => {
              const isActive = p.id === currentVideo.id;
              const isPdone = Boolean(completedMap[p.id]);
              return (
                <div
                  key={p.id}
                  onClick={() => playVideo(p, currentSubject, currentClass)}
                  className={`p-2 rounded-lg text-xs flex items-center gap-2.5 cursor-pointer transition-colors ${
                    isActive
                      ? "bg-white text-black shadow-sm font-semibold"
                      : "text-zinc-300 hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded flex items-center justify-center shrink-0 font-mono font-bold text-[10px] ${
                      isActive ? "bg-black text-white" : "bg-black/60 text-zinc-400 border border-white/[0.06]"
                    }`}
                  >
                    {idx + 1}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="truncate">{p.title}</div>
                    <div className={`text-[10px] truncate ${isActive ? "text-zinc-700" : "text-zinc-500"}`}>
                      {p.unitName.split(":")[0]}
                    </div>
                  </div>

                  {isPdone && (
                    <span className={`shrink-0 ${isActive ? "text-black" : "text-emerald-400"}`}>
                      <IconCheck size={12} />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
