import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { SYLLABUS_DATA, SUBJ_THEMES } from "../data/syllabusData.js";
import {
  IconArrowLeft,
  IconSkipBack,
  IconSkipForward,
  IconBookmark,
  IconBookmarkFilled,
  IconCheck,
  IconPlay,
  IconEdit,
  IconClock,
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
        <h2 className="text-xl font-bold text-white mb-2">No Video Selected</h2>
        <button
          onClick={() => setCurrentSection("dashboard")}
          className="px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  const completedMap = user?.completedTopics || {};
  const isDone = Boolean(completedMap[currentVideo.id]);
  const isSaved = (user?.savedVideos || []).includes(currentVideo.id);

  // Chapter Note
  const [noteText, setNoteText] = useState(notes[currentVideo.id]?.text || "");
  const [saveStatus, setSaveStatus] = useState("Saved");

  useEffect(() => {
    setNoteText(notes[currentVideo.id]?.text || "");
  }, [currentVideo.id]);

  const handleNoteChange = (e) => {
    const val = e.target.value;
    setNoteText(val);
    setSaveStatus("Saving...");
    saveNote(currentVideo.id, val, currentSubject);
    setTimeout(() => {
      setSaveStatus("Auto-saved");
    }, 600);
  };

  // Build subject playlist
  const subjectUnits = SYLLABUS_DATA[currentSubject]?.[currentClass] || [];
  const playlist = [];
  subjectUnits.forEach((u) => {
    u.chapters.forEach((c) => playlist.push({ ...c, unitName: u.unit }));
  });

  const currentIndex = playlist.findIndex((p) => p.id === currentVideo.id);

  const handleNavigate = (dir) => {
    const nextIdx = currentIndex + dir;
    if (nextIdx >= 0 && nextIdx < playlist.length) {
      playVideo(playlist[nextIdx], currentSubject, currentClass);
    } else {
      showToast(dir > 0 ? "You have reached the last chapter in this subject." : "This is the first chapter.", "info");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
        <button
          onClick={() => setCurrentSection("subject")}
          className="hover:text-white flex items-center gap-1.5"
        >
          <IconArrowLeft size={14} />
          <span>{currentSubject}</span>
        </button>
        <span>/</span>
        <span className="text-slate-500 truncate max-w-[200px]">Class {currentClass}</span>
        <span>/</span>
        <span className="text-white truncate max-w-[300px]">{currentVideo.title}</span>
      </div>

      {/* Main Layout: Video + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Player & Notes */}
        <div className="lg:col-span-8 space-y-5">
          {/* 16:9 Video Container */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-2xl relative">
            {currentVideo.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-obsidian-900 to-obsidian-950 text-slate-300">
                <div className="w-14 h-14 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mb-3">
                  <IconClock size={28} />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-1">
                  Video Coming Soon
                </h3>
                <p className="text-xs text-slate-400 max-w-md">
                  Our educators are uploading the curated lecture for <b>{currentVideo.title}</b>. Admins can add this YouTube link instantly via Admin Studio.
                </p>
              </div>
            )}
          </div>

          {/* Controls Bar */}
          <div className="glass-panel p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavigate(-1)}
                disabled={currentIndex <= 0}
                className="p-2.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 disabled:opacity-30 border border-slate-800 text-slate-300 transition-colors"
                title="Previous chapter"
              >
                <IconSkipBack size={16} />
              </button>

              <button
                onClick={() => handleNavigate(1)}
                disabled={currentIndex >= playlist.length - 1}
                className="p-2.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 disabled:opacity-30 border border-slate-800 text-slate-300 transition-colors"
                title="Next chapter"
              >
                <IconSkipForward size={16} />
              </button>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => toggleSave(currentVideo.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-colors ${
                  isSaved
                    ? "bg-brand-500/20 text-brand-400 border-brand-500/30"
                    : "bg-obsidian-850 text-slate-300 border-slate-800 hover:text-white"
                }`}
              >
                {isSaved ? <IconBookmarkFilled size={14} /> : <IconBookmark size={14} />}
                <span>{isSaved ? "Bookmarked" : "Bookmark"}</span>
              </button>

              <button
                onClick={() => toggleComplete(currentVideo.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-colors ${
                  isDone
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    : "bg-brand-600 hover:bg-brand-500 text-white border-transparent shadow-lg shadow-brand-500/20"
                }`}
              >
                <IconCheck size={14} />
                <span>{isDone ? "Completed" : "Mark as Complete"}</span>
              </button>
            </div>
          </div>

          {/* Chapter Details and Auto-Saving Notes */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  {currentSubject} · Class {currentClass}
                </span>
                {isDone && (
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                    <IconCheck size={12} /> Mastered
                  </span>
                )}
              </div>
              <h2 className="text-xl font-black text-white">{currentVideo.title}</h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                {currentVideo.desc}
              </p>
            </div>

            {/* Smart Auto-Saving Notes Box */}
            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
                  My Chapter Study Notes
                </label>
                <span className="text-[11px] font-medium text-slate-400">
                  {saveStatus}
                </span>
              </div>
              <textarea
                rows="4"
                value={noteText}
                onChange={handleNoteChange}
                placeholder="Type your summary, key formulas, or questions here... Notes auto-save in real-time."
                className="w-full p-3.5 rounded-xl bg-obsidian-950 border border-slate-800 text-sm text-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none font-sans"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Right Column: Playlist Sidebar */}
        <div className="lg:col-span-4 glass-panel rounded-2xl border border-slate-800 p-4 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-sm font-extrabold text-white">Subject Playlist</h3>
              <div className="text-[11px] text-slate-400">{playlist.length} chapters total</div>
            </div>
            <span className="text-xs font-bold text-brand-400">
              {currentIndex + 1} of {playlist.length}
            </span>
          </div>

          <div className="space-y-1.5 max-h-[550px] overflow-y-auto pr-1">
            {playlist.map((p, idx) => {
              const isActive = p.id === currentVideo.id;
              const isPdone = Boolean(completedMap[p.id]);
              return (
                <div
                  key={p.id}
                  onClick={() => playVideo(p, currentSubject, currentClass)}
                  className={`p-2.5 rounded-xl text-xs flex items-center gap-3 cursor-pointer transition-colors ${
                    isActive
                      ? "bg-brand-600/20 text-white border border-brand-500/40"
                      : "text-slate-300 hover:bg-obsidian-850 border border-transparent"
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 font-bold text-[10px] ${
                    isActive ? "bg-brand-600 text-white" : "bg-obsidian-850 text-slate-400"
                  }`}>
                    {idx + 1}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="font-bold truncate">{p.title}</div>
                    <div className="text-[10px] text-slate-500 truncate">{p.unitName.split(":")[0]}</div>
                  </div>

                  {isPdone && (
                    <span className="text-emerald-400 shrink-0">
                      <IconCheck size={14} />
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

