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
        <div className="max-w-md mx-auto p-6 rounded-xl bg-[#111215] border border-[#23252a] space-y-3.5">
          <IconBook size={28} className="mx-auto text-zinc-300" />
          <h2 className="text-lg font-bold text-zinc-100">No Lecture Selected</h2>
          <p className="text-xs text-zinc-400">
            Choose a chapter from the syllabus dashboard to begin watching.
          </p>
          <button
            onClick={() => setCurrentSection("dashboard")}
            className="px-4 py-2 rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold transition-all shadow-sm"
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-5">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
          <button
            onClick={() => setCurrentSection("subject")}
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            <IconArrowLeft size={13} />
            <span>{currentSubject}</span>
          </button>
          <span>/</span>
          <span className="text-zinc-500 truncate max-w-[150px]">Class {currentClass}</span>
          <span>/</span>
          <span className="text-zinc-200 truncate max-w-[250px]">{currentVideo.title}</span>
        </div>

        <button
          onClick={() => setCurrentSection("dashboard")}
          className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
        >
          Close Player ✕
        </button>
      </div>

      {/* Main Layout: Video Player + Playlist Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: Player & Notes */}
        <div className="lg:col-span-8 space-y-4">
          {/* 16:9 Video Container */}
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-[#23252a] shadow-2xl relative">
            {currentVideo.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0c0d0f] text-zinc-400">
                <div className="w-10 h-10 rounded-lg bg-[#111215] border border-[#23252a] text-zinc-300 flex items-center justify-center mb-2.5">
                  <IconClock size={18} />
                </div>
                <h3 className="text-sm font-semibold text-zinc-100 mb-1">
                  Video Lecture Coming Soon
                </h3>
                <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
                  Our educators are uploading the curated lecture for <b>{currentVideo.title}</b>. In the meantime, you can review the syllabus topics and write notes below.
                </p>
              </div>
            )}
          </div>

          {/* Controls Bar */}
          <div className="bg-[#111215] p-3 rounded-xl border border-[#23252a] flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavigate(-1)}
                disabled={currentIndex <= 0}
                className="p-1.5 rounded-lg bg-[#0c0d0f] hover:bg-[#16181d] disabled:opacity-30 border border-[#23252a] text-zinc-300 transition-colors"
                title="Previous chapter"
              >
                <IconSkipBack size={15} />
              </button>

              <button
                onClick={() => handleNavigate(1)}
                disabled={currentIndex >= playlist.length - 1}
                className="p-1.5 rounded-lg bg-[#0c0d0f] hover:bg-[#16181d] disabled:opacity-30 border border-[#23252a] text-zinc-300 transition-colors"
                title="Next chapter"
              >
                <IconSkipForward size={15} />
              </button>

              <span className="text-xs text-zinc-400 font-mono ml-1.5">
                Chapter {currentIndex + 1} of {playlist.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleSave(currentVideo.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors ${
                  isSaved
                    ? "bg-white text-zinc-950 border-white"
                    : "bg-[#0c0d0f] text-zinc-300 border-[#23252a] hover:text-white"
                }`}
              >
                {isSaved ? <IconBookmarkFilled size={13} /> : <IconBookmark size={13} />}
                <span>{isSaved ? "Saved" : "Bookmark"}</span>
              </button>

              <button
                onClick={() => toggleComplete(currentVideo.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
                  isDone
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    : "bg-white hover:bg-zinc-200 text-zinc-950 border-transparent shadow-sm"
                }`}
              >
                <IconCheck size={13} />
                <span>{isDone ? "Completed" : "Mark Complete"}</span>
              </button>
            </div>
          </div>

          {/* Chapter Details and Auto-Saving Notepad */}
          <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3.5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0c0d0f] text-zinc-400 border border-[#23252a]">
                  {currentSubject} · Class {currentClass}
                </span>
                {isDone && (
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <IconCheck size={11} /> Mastered
                  </span>
                )}
              </div>
              <h2 className="text-lg font-bold text-zinc-100">{currentVideo.title}</h2>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                {currentVideo.desc}
              </p>
            </div>

            {/* Smart Auto-Saving Notes Box */}
            <div className="pt-3.5 border-t border-[#1e2025]">
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
                className="w-full p-3 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-sm text-zinc-200 placeholder-zinc-500 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 outline-none resize-none font-sans"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Right Column: Playlist Sidebar */}
        <div className="lg:col-span-4 bg-[#111215] rounded-xl border border-[#23252a] p-3.5 space-y-2.5">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#1e2025]">
            <div>
              <h3 className="text-sm font-semibold text-zinc-100">Subject Playlist</h3>
              <div className="text-[10px] text-zinc-500 font-mono">{playlist.length} chapters total</div>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              {currentIndex + 1} / {playlist.length}
            </span>
          </div>

          <div className="space-y-1 max-h-[500px] overflow-y-auto pr-1">
            {playlist.map((p, idx) => {
              const isActive = p.id === currentVideo.id;
              const isPdone = Boolean(completedMap[p.id]);
              return (
                <div
                  key={p.id}
                  onClick={() => playVideo(p, currentSubject, currentClass)}
                  className={`p-2 rounded-lg text-xs flex items-center gap-2.5 cursor-pointer transition-colors ${
                    isActive
                      ? "bg-white text-zinc-950 shadow-sm font-semibold"
                      : "text-zinc-300 hover:bg-[#16181d] border border-transparent"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded flex items-center justify-center shrink-0 font-mono font-bold text-[10px] ${
                      isActive ? "bg-zinc-950 text-white" : "bg-[#0c0d0f] text-zinc-400 border border-[#23252a]"
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
                    <span className={`shrink-0 ${isActive ? "text-zinc-950" : "text-emerald-400"}`}>
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
