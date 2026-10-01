import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { SYLLABUS_DATA, SUBJ_THEMES } from "../data/syllabusData.js";
import {
  IconArrowLeft,
  IconPlay,
  IconCheck,
  IconBookmark,
  IconBookmarkFilled,
  IconChevronDown,
  IconEdit,
  IconVideo,
} from "./Icons.jsx";

export const SubjectView = () => {
  const { user } = useAuth();
  const {
    currentSubject,
    currentClass,
    setCurrentClass,
    setCurrentSection,
    getChapterVideo,
    playVideo,
    toggleComplete,
    toggleSave,
  } = useApp();

  const theme = SUBJ_THEMES[currentSubject] || SUBJ_THEMES["Physics"];
  const units = SYLLABUS_DATA[currentSubject]?.[currentClass] || [];

  // Collapsible unit accordion state (all open by default)
  const [openUnits, setOpenUnits] = useState(() => {
    const initial = {};
    units.forEach((u, i) => (initial[i] = true));
    return initial;
  });

  const toggleUnit = (idx) => {
    setOpenUnits((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const completedMap = user?.completedTopics || {};
  const savedIds = user?.savedVideos || [];

  const totalChapters = units.reduce((acc, u) => acc + u.chapters.length, 0);
  const doneCount = units.reduce(
    (acc, u) => acc + u.chapters.filter((ch) => Boolean(completedMap[ch.id])).length,
    0
  );
  const progressPct = totalChapters ? Math.round((doneCount / totalChapters) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Back button */}
      <div>
        <button
          onClick={() => setCurrentSection("dashboard")}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
        >
          <IconArrowLeft size={16} />
          <span>Back to Dashboard</span>
        </button>
      </div>

      {/* Subject Hero Header */}
      <div
        className={`relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-8 border border-slate-800 bg-gradient-to-r ${theme.color} shadow-2xl`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-obsidian-900/80 border border-slate-700/60 text-xs font-bold text-slate-300 mb-3">
              <span>CHSE Odisha Board</span>
              <span>·</span>
              <span className={theme.text}>Class {currentClass}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {currentSubject}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
              Complete unit-wise syllabus, curated video lectures, and revision roadmap for Class {currentClass} students.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 self-start sm:self-auto bg-obsidian-900/80 p-3.5 rounded-2xl border border-slate-800 text-center">
            <div className="px-2">
              <div className="text-lg font-black text-white">{units.length}</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase">Units</div>
            </div>
            <div className="px-2 border-x border-slate-800">
              <div className="text-lg font-black text-white">{totalChapters}</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase">Chapters</div>
            </div>
            <div className="px-2">
              <div className={`text-lg font-black ${theme.text}`}>{progressPct}%</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase">Done</div>
            </div>
          </div>
        </div>

        {/* Class Switcher Inside Subject */}
        <div className="flex items-center gap-2 mt-6 pt-6 border-t border-slate-800/80">
          <span className="text-xs font-bold text-slate-400 mr-2">Syllabus Year:</span>
          <button
            onClick={() => setCurrentClass("11")}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentClass === "11"
                ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                : "bg-obsidian-900 text-slate-400 hover:text-white"
            }`}
          >
            Class 11 Syllabus
          </button>
          <button
            onClick={() => setCurrentClass("12")}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              currentClass === "12"
                ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                : "bg-obsidian-900 text-slate-400 hover:text-white"
            }`}
          >
            Class 12 Syllabus
          </button>
        </div>
      </div>

      {/* Units Accordion */}
      <div className="space-y-4">
        {units.length === 0 ? (
          <div className="glass-panel p-12 rounded-2xl text-center text-slate-400 border border-slate-800">
            Syllabus units for this class are being prepared.
          </div>
        ) : (
          units.map((unit, uIdx) => {
            const isOpen = openUnits[uIdx];
            const unitDone = unit.chapters.filter((c) => Boolean(completedMap[c.id])).length;
            const unitPct = unit.chapters.length ? Math.round((unitDone / unit.chapters.length) * 100) : 0;

            return (
              <div
                key={uIdx}
                className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-md"
              >
                {/* Unit Header */}
                <div
                  onClick={() => toggleUnit(uIdx)}
                  className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-obsidian-850/60 transition-colors select-none"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-8 h-8 rounded-xl bg-obsidian-850 border border-slate-700/80 text-xs font-black text-slate-300 flex items-center justify-center shrink-0">
                      {uIdx + 1}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-white">
                        {unit.unit}
                      </h3>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {unit.chapters.length} chapters · {unitDone} completed ({unitPct}%)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 hidden sm:inline">
                      {unitPct}%
                    </span>
                    <IconChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Unit Chapters */}
                {isOpen && (
                  <div className="border-t border-slate-800/80 divide-y divide-slate-800/50 bg-obsidian-950/40">
                    {unit.chapters.map((ch) => {
                      const video = getChapterVideo(ch);
                      const isDone = Boolean(completedMap[ch.id]);
                      const isSaved = savedIds.includes(ch.id);

                      return (
                        <div
                          key={ch.id}
                          className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-obsidian-900/40 transition-colors"
                        >
                          <div className="flex items-start gap-4 flex-1 min-w-0">
                            {/* Video Thumbnail */}
                            <div
                              onClick={() => playVideo(ch, currentSubject, currentClass)}
                              className="w-24 sm:w-28 aspect-video rounded-lg overflow-hidden bg-obsidian-900 border border-slate-800 shrink-0 relative cursor-pointer group"
                            >
                              {video.youtubeId ? (
                                <>
                                  <img
                                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                  />
                                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                                    <IconPlay size={16} />
                                  </div>
                                </>
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-1 text-[10px] font-bold">
                                  <IconVideo size={16} />
                                  <span>Soon</span>
                                </div>
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4
                                  onClick={() => playVideo(ch, currentSubject, currentClass)}
                                  className="text-sm font-bold text-white hover:text-brand-400 cursor-pointer truncate"
                                >
                                  {video.title}
                                </h4>
                                {isDone && (
                                  <span className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                                    <IconCheck size={12} />
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-400 line-clamp-1">{video.desc}</p>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                            <button
                              onClick={() => playVideo(ch, currentSubject, currentClass)}
                              className="px-3.5 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow"
                            >
                              <IconPlay size={13} />
                              <span>Watch</span>
                            </button>

                            <button
                              onClick={() => toggleSave(ch.id)}
                              className={`p-2 rounded-lg border text-xs transition-colors ${
                                isSaved
                                  ? "bg-brand-500/20 text-brand-400 border-brand-500/30"
                                  : "bg-obsidian-850 text-slate-400 border-slate-800 hover:text-white"
                              }`}
                              title={isSaved ? "Saved" : "Bookmark chapter"}
                            >
                              {isSaved ? <IconBookmarkFilled size={14} /> : <IconBookmark size={14} />}
                            </button>

                            <button
                              onClick={() => toggleComplete(ch.id)}
                              className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-colors ${
                                isDone
                                  ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                                  : "bg-obsidian-850 text-slate-400 border-slate-800 hover:text-white"
                              }`}
                            >
                              <IconCheck size={13} />
                              <span>{isDone ? "Done" : "Complete"}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SubjectView;

