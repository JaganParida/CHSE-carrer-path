import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { SYLLABUS_DATA, STREAM_SUBJECTS, SUBJ_THEMES } from "../data/syllabusData.js";
import {
  IconCrown,
  IconPlay,
  IconCheck,
  IconEdit,
  IconLink,
  IconPlus,
  IconTrash,
  IconVideo,
  IconClose,
} from "./Icons.jsx";

export const AdminStudio = () => {
  const { isAdmin, user, setAuthModalOpen, setAuthMode } = useAuth();
  const {
    currentStream,
    setCurrentStream,
    currentClass,
    setCurrentClass,
    setCurrentSection,
    adminUpdateVideoLink,
    adminClearVideoLink,
    getChapterVideo,
    playVideo,
    showToast,
  } = useApp();

  const [activeTabStream, setActiveTabStream] = useState(currentStream);
  const [activeTabClass, setActiveTabClass] = useState(currentClass);
  const subjectsList = STREAM_SUBJECTS[activeTabStream] || STREAM_SUBJECTS["Science"];
  const [selectedSubject, setSelectedSubject] = useState(subjectsList[0] || "Physics");
  const [filterMode, setFilterMode] = useState("all"); // 'all' | 'active' | 'missing'

  // Modal / Drawer state for editing a video link
  const [editingChapter, setEditingChapter] = useState(null);
  const [inputUrl, setInputUrl] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  const syllabus = SYLLABUS_DATA[selectedSubject]?.[activeTabClass] || [];
  const allChapters = [];
  syllabus.forEach((unit) => {
    unit.chapters.forEach((ch) => {
      allChapters.push({ ...ch, unitName: unit.unit });
    });
  });

  const totalChapters = allChapters.length;
  const activeChapters = allChapters.filter((ch) => getChapterVideo(ch).isAvailable).length;
  const coveragePercent = totalChapters ? Math.round((activeChapters / totalChapters) * 100) : 0;

  const filteredChapters = allChapters.filter((ch) => {
    const isAvail = getChapterVideo(ch).isAvailable;
    if (filterMode === "active") return isAvail;
    if (filterMode === "missing") return !isAvail;
    return true;
  });

  const openEditor = (ch) => {
    const effective = getChapterVideo(ch);
    setEditingChapter(ch);
    setInputUrl(effective.videoUrl || "");
    setInputTitle(effective.title || "");
    setInputDesc(effective.desc || "");
  };

  const handleSaveVideo = (e) => {
    e.preventDefault();
    if (!editingChapter) return;
    adminUpdateVideoLink(editingChapter.id, inputUrl, inputTitle, inputDesc);
    setEditingChapter(null);
  };

  if (!user) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center animate-fadeIn">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/10">
            <IconCrown size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">Admin Studio Access</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Adding and editing YouTube lecture links across CHSE streams requires an administrator account.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                setAuthMode("login");
                setAuthModalOpen(true);
              }}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-500/25 transition-all"
            >
              Sign In as Administrator
            </button>
            <button
              onClick={() => setCurrentSection("dashboard")}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition-all"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl glass-panel p-6 sm:p-8 mb-8 border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-obsidian-900 to-brand-600/10 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <IconCrown size={22} />
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                CHSE Video Link Manager & Admin Studio
              </h1>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Add or edit YouTube lecture links for <b className="text-white">any stream, class, subject, or chapter</b> in the CHSE Odisha curriculum. All changes update instantly on the student portal and sync with the MongoDB backend.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5 shrink-0 bg-obsidian-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {selectedSubject} (Class {activeTabClass}) Coverage
            </div>
            <div className="text-2xl font-black text-amber-400 flex items-baseline gap-1">
              <span>{activeChapters} / {totalChapters}</span>
              <span className="text-xs font-semibold text-slate-400">({coveragePercent}%)</span>
            </div>
            <div className="w-36 h-2 bg-obsidian-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${coveragePercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Selectors Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Stream Selector */}
        <div className="glass-panel p-3.5 rounded-xl border border-slate-800">
          <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
            1. Select Stream
          </label>
          <div className="grid grid-cols-3 gap-2">
            {["Science", "Commerce", "Arts"].map((st) => (
              <button
                key={st}
                onClick={() => {
                  setActiveTabStream(st);
                  setSelectedSubject(STREAM_SUBJECTS[st][0]);
                }}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTabStream === st
                    ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                    : "bg-obsidian-850 text-slate-300 hover:bg-obsidian-800"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Class Selector */}
        <div className="glass-panel p-3.5 rounded-xl border border-slate-800">
          <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
            2. Select Class
          </label>
          <div className="grid grid-cols-2 gap-2">
            {["11", "12"].map((cls) => (
              <button
                key={cls}
                onClick={() => setActiveTabClass(cls)}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTabClass === cls
                    ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                    : "bg-obsidian-850 text-slate-300 hover:bg-obsidian-800"
                }`}
              >
                Class {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Mode */}
        <div className="glass-panel p-3.5 rounded-xl border border-slate-800">
          <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
            3. Chapter Status Filter
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: "all", label: "All" },
              { id: "active", label: "Has Video" },
              { id: "missing", label: "Missing" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterMode(f.id)}
                className={`py-2 px-2 rounded-lg text-[11px] font-bold transition-all ${
                  filterMode === f.id
                    ? "bg-slate-700 text-white"
                    : "bg-obsidian-850 text-slate-400 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subject Pills Bar */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {subjectsList.map((subj) => (
          <button
            key={subj}
            onClick={() => setSelectedSubject(subj)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
              selectedSubject === subj
                ? "bg-obsidian-800 text-brand-400 border-brand-500/50 shadow-md"
                : "bg-obsidian-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
            }`}
          >
            <span>{subj}</span>
          </button>
        ))}
      </div>

      {/* Chapters Table / List */}
      <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-base font-extrabold text-white flex items-center gap-2">
              <span>{selectedSubject}</span>
              <span className="text-xs font-normal text-slate-400">· Class {activeTabClass} · {activeTabStream} Stream</span>
            </h2>
            <div className="text-xs text-slate-400 mt-0.5">
              Showing {filteredChapters.length} chapters
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-800/80">
          {filteredChapters.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-sm">
              No chapters match the selected filter.
            </div>
          ) : (
            filteredChapters.map((ch, idx) => {
              const video = getChapterVideo(ch);
              return (
                <div
                  key={ch.id}
                  className="p-4 sm:p-5 hover:bg-obsidian-850/60 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  {/* Left: Thumbnail & Info */}
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-28 sm:w-32 aspect-video rounded-lg overflow-hidden bg-obsidian-900 border border-slate-800 shrink-0 relative group">
                      {video.youtubeId ? (
                        <>
                          <img
                            src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => playVideo(ch, selectedSubject, activeTabClass)}
                            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
                            title="Test video player"
                          >
                            <IconPlay size={18} />
                          </button>
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-1 text-[11px] font-semibold">
                          <IconVideo size={18} className="text-slate-600" />
                          <span>No link</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {ch.unitName.split(":")[0]}
                        </span>
                        {video.isAvailable ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                            <IconCheck size={10} /> Active YouTube Link
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            Coming Soon
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-bold text-white truncate">{video.title}</h3>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{video.desc}</p>

                      <div className="text-[11px] text-slate-500 mt-1 font-mono truncate">
                        {video.videoUrl ? (
                          <a
                            href={video.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand-400 flex items-center gap-1"
                          >
                            <IconLink size={11} /> {video.videoUrl}
                          </a>
                        ) : (
                          <span className="text-slate-600">No YouTube URL assigned</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                    <button
                      onClick={() => openEditor(ch)}
                      className="px-3.5 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow"
                    >
                      <IconEdit size={13} />
                      <span>{video.isAvailable ? "Edit Link" : "Add Link"}</span>
                    </button>

                    {video.isAvailable && (
                      <button
                        onClick={() => adminClearVideoLink(ch.id)}
                        className="p-1.5 rounded-lg bg-obsidian-850 hover:bg-rose-500/20 border border-slate-800 hover:border-rose-500/30 text-slate-400 hover:text-rose-400 transition-colors"
                        title="Remove link"
                      >
                        <IconTrash size={14} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Edit Video Link Modal */}
      {editingChapter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-lg glass-panel rounded-2xl border border-slate-700 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <IconCrown size={18} className="text-amber-400" />
                  <span>Update YouTube Video Link</span>
                </h3>
                <div className="text-xs text-slate-400 mt-0.5">
                  Chapter: {editingChapter.id} · {selectedSubject}
                </div>
              </div>
              <button
                onClick={() => setEditingChapter(null)}
                className="p-1.5 rounded-lg bg-obsidian-800 hover:bg-obsidian-700 text-slate-400 hover:text-white"
              >
                <IconClose size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveVideo} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  YouTube Video URL or Video ID <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. https://youtu.be/P_r3N9pC5p4 or https://www.youtube.com/watch?v=..."
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-900 border border-slate-700 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-sm text-white placeholder-slate-500 font-mono"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Accepts full YouTube watch URLs, short youtu.be links, or raw video IDs.
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Chapter Title
                </label>
                <input
                  type="text"
                  value={inputTitle}
                  onChange={(e) => setInputTitle(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-obsidian-900 border border-slate-700 text-sm text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1.5">
                  Description / Key Topics
                </label>
                <textarea
                  rows="3"
                  value={inputDesc}
                  onChange={(e) => setInputDesc(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-obsidian-900 border border-slate-700 text-sm text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingChapter(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-obsidian-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-500/25"
                >
                  Save & Publish Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminStudio;

