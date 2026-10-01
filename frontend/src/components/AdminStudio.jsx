import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { SYLLABUS_DATA, STREAM_SUBJECTS } from "../data/syllabusData.js";
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
  IconSparkles,
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
  const [filterMode, setFilterMode] = useState("all");

  const [editingChapter, setEditingChapter] = useState(null);
  const [inputUrl, setInputUrl] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  const syllabus = SYLLABUS_DATA[selectedSubject]?.[activeTabClass] || [];
  const allChapters = [];
  syllabus.forEach((unit) => {
    unit.chapters?.forEach((ch) => {
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
        <div className="bg-[#111215] border border-[#23252a] rounded-xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="w-12 h-12 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center mx-auto shadow-sm">
            <IconCrown size={22} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Admin Studio Access</h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Adding and editing YouTube lecture links across CHSE streams requires an administrator account.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                setAuthMode("login");
                setAuthModalOpen(true);
              }}
              className="px-6 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold shadow-sm transition-all"
            >
              Sign In as Administrator
            </button>
            <button
              onClick={() => setCurrentSection("dashboard")}
              className="px-5 py-2.5 rounded-lg bg-[#0c0d0f] hover:bg-[#18191d] text-zinc-300 text-xs font-medium border border-[#23252a] transition-all"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="rounded-xl bg-[#111215] p-6 sm:p-8 border border-[#23252a] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-md bg-[#18191d] text-zinc-200 border border-[#27292f]">
                <IconCrown size={16} />
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-zinc-100 tracking-tight">
                CHSE Video Link Manager & Admin Studio
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Add or edit YouTube lecture links for <b className="text-zinc-200">any stream, class, subject, or chapter</b> in the CHSE Odisha curriculum. All changes update instantly on the student portal and sync with the MongoDB backend.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5 shrink-0 bg-[#0c0d0f] p-4 rounded-lg border border-[#23252a]">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              {selectedSubject} (Class {activeTabClass}) Coverage
            </div>
            <div className="text-2xl font-bold text-zinc-100 flex items-baseline gap-1 font-mono">
              <span>{activeChapters} / {totalChapters}</span>
              <span className="text-xs font-normal text-zinc-400">({coveragePercent}%)</span>
            </div>
            <div className="w-36 h-1.5 bg-[#18191d] rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-zinc-200 transition-all duration-500 rounded-full"
                style={{ width: `${coveragePercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Selectors Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Stream Selector */}
        <div className="bg-[#111215] p-4 rounded-xl border border-[#23252a]">
          <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
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
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  activeTabStream === st
                    ? "bg-zinc-100 text-zinc-950 shadow-sm"
                    : "bg-[#0c0d0f] text-zinc-400 border border-[#23252a] hover:text-zinc-200"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Class Selector */}
        <div className="bg-[#111215] p-4 rounded-xl border border-[#23252a]">
          <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
            2. Select Class
          </label>
          <div className="grid grid-cols-2 gap-2">
            {["11", "12"].map((cls) => (
              <button
                key={cls}
                onClick={() => setActiveTabClass(cls)}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  activeTabClass === cls
                    ? "bg-zinc-100 text-zinc-950 shadow-sm"
                    : "bg-[#0c0d0f] text-zinc-400 border border-[#23252a] hover:text-zinc-200"
                }`}
              >
                Class {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Mode */}
        <div className="bg-[#111215] p-4 rounded-xl border border-[#23252a]">
          <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
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
                className={`py-2 px-2 rounded-lg text-[11px] font-semibold transition-all ${
                  filterMode === f.id
                    ? "bg-zinc-100 text-zinc-950 shadow-sm"
                    : "bg-[#0c0d0f] text-zinc-400 border border-[#23252a] hover:text-zinc-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subject Pills Bar */}
      <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
        {subjectsList.map((subj) => (
          <button
            key={subj}
            onClick={() => setSelectedSubject(subj)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedSubject === subj
                ? "bg-zinc-100 text-zinc-950 border-white shadow-sm"
                : "bg-[#111215] text-zinc-400 border-[#23252a] hover:text-zinc-200"
            }`}
          >
            <span>{subj}</span>
          </button>
        ))}
      </div>

      {/* Chapters Table / List */}
      <div className="bg-[#111215] rounded-xl border border-[#23252a] overflow-hidden shadow-sm">
        <div className="p-5 border-b border-[#1f2127] flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-zinc-100 flex items-center gap-2">
              <span>{selectedSubject}</span>
              <span className="text-xs font-normal text-zinc-400">· Class {activeTabClass} · {activeTabStream} Stream</span>
            </h2>
            <div className="text-xs text-zinc-400 mt-0.5">
              Showing {filteredChapters.length} chapters
            </div>
          </div>
        </div>

        <div className="divide-y divide-[#1f2127]">
          {filteredChapters.length === 0 ? (
            <div className="p-12 text-center text-zinc-500 text-sm">
              No chapters match the selected filter.
            </div>
          ) : (
            filteredChapters.map((ch) => {
              const video = getChapterVideo(ch);
              return (
                <div
                  key={ch.id}
                  className="p-4 sm:p-5 hover:bg-[#18191d] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  {/* Left: Thumbnail & Info */}
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-28 sm:w-32 aspect-video rounded-lg overflow-hidden bg-[#0c0d0f] border border-[#23252a] shrink-0 relative group">
                      {video.youtubeId ? (
                        <>
                          <img
                            src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => playVideo(ch, selectedSubject, activeTabClass)}
                            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
                            title="Test video player"
                          >
                            <IconPlay size={18} />
                          </button>
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-zinc-500 gap-1 text-[11px] font-mono">
                          <IconVideo size={16} />
                          <span>No link</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap font-mono">
                        <span className="text-[10px] uppercase px-2 py-0.5 rounded-md bg-[#0c0d0f] text-zinc-400 border border-[#23252a]">
                          {ch.unitName?.split(":")[0] || "Unit"}
                        </span>
                        {video.isAvailable ? (
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-200 border border-zinc-700 flex items-center gap-1">
                            <IconCheck size={10} /> Active YouTube Link
                          </span>
                        ) : (
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#0c0d0f] text-zinc-500 border border-[#23252a]">
                            Coming Soon
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-semibold text-zinc-100 truncate">{video.title}</h3>
                      <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">{video.desc}</p>

                      <div className="text-[11px] text-zinc-500 mt-1 font-mono truncate">
                        {video.videoUrl ? (
                          <a
                            href={video.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-zinc-300 flex items-center gap-1"
                          >
                            <IconLink size={11} /> {video.videoUrl}
                          </a>
                        ) : (
                          <span className="text-zinc-600">No YouTube URL assigned</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                    <button
                      onClick={() => openEditor(ch)}
                      className="px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <IconEdit size={13} />
                      <span>{video.isAvailable ? "Edit Link" : "Add Link"}</span>
                    </button>

                    {video.isAvailable && (
                      <button
                        onClick={() => adminClearVideoLink(ch.id)}
                        className="p-2 rounded-lg bg-[#0c0d0f] hover:bg-rose-500/10 border border-[#23252a] text-zinc-400 hover:text-rose-400 hover:border-rose-500/30 transition-colors"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-lg bg-[#111215] rounded-xl border border-[#27292f] p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-[#1f2127] pb-3">
              <div>
                <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
                  <IconCrown size={16} />
                  <span>Update YouTube Video Link</span>
                </h3>
                <div className="text-xs text-zinc-400 mt-0.5 font-mono">
                  Chapter: {editingChapter.id} · {selectedSubject}
                </div>
              </div>
              <button
                onClick={() => setEditingChapter(null)}
                className="p-1.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <IconClose size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveVideo} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                  YouTube Video URL or Video ID <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. https://youtu.be/P_r3N9pC5p4 or https://www.youtube.com/watch?v=..."
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] focus:border-zinc-400 text-sm text-zinc-100 placeholder-zinc-500 font-mono outline-none transition-colors"
                />
                <p className="text-[11px] text-zinc-500 mt-1">
                  Accepts full YouTube watch URLs, short youtu.be links, or raw video IDs.
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                  Chapter Title
                </label>
                <input
                  type="text"
                  value={inputTitle}
                  onChange={(e) => setInputTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-sm text-zinc-100 focus:border-zinc-400 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                  Description / Key Topics
                </label>
                <textarea
                  rows="3"
                  value={inputDesc}
                  onChange={(e) => setInputDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-sm text-zinc-100 focus:border-zinc-400 resize-none outline-none leading-relaxed transition-colors"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#1f2127]">
                <button
                  type="button"
                  onClick={() => setEditingChapter(null)}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-[#0c0d0f] border border-[#23252a] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-white shadow-sm transition-all"
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
