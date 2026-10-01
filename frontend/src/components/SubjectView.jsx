import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { SYLLABUS_DATA } from "../data/syllabusData.js";
import {
  IconArrowLeft,
  IconPlay,
  IconCheck,
  IconBookmark,
  IconBookmarkFilled,
  IconChevronDown,
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

  const units = SYLLABUS_DATA[currentSubject]?.[currentClass] || [];

  // All units expanded by default
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
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            setCurrentSection("dashboard");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
        >
          <IconArrowLeft size={16} />
          <span>Back to Syllabus Dashboard</span>
        </button>

        {/* Quick Class Switcher */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5 text-xs font-bold">
          <button
            onClick={() => setCurrentClass("11")}
            className={`px-3 py-1 rounded-lg transition-all ${
              currentClass === "11"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Class 11
          </button>
          <button
            onClick={() => setCurrentClass("12")}
            className={`px-3 py-1 rounded-lg transition-all ${
              currentClass === "12"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Class 12
          </button>
        </div>
      </div>

      {/* Subject Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-6 sm:p-8 border border-slate-800 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300 mb-2">
              <span>CHSE Odisha Curriculum</span>
              <span>·</span>
              <span className="text-blue-400">Class {currentClass}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {currentSubject}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl leading-relaxed">
              Complete unit-wise syllabus breakdown with curated masterclass video lectures, chapter notes, and exam roadmap.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 self-start sm:self-auto bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center shrink-0">
            <div className="px-3">
              <div className="text-xl font-black text-white">{units.length}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">Units</div>
            </div>
            <div className="px-3 border-x border-slate-800">
              <div className="text-xl font-black text-white">{totalChapters}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">Chapters</div>
            </div>
            <div className="px-3">
              <div className="text-xl font-black text-blue-400">{progressPct}%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">Done</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-1.5">
            <span>Syllabus Completion</span>
            <span className="text-white">
              {doneCount} of {totalChapters} chapters ({progressPct}%)
            </span>
          </div>
          <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Units Accordion List */}
      <div className="space-y-4">
        {units.length === 0 ? (
          <div className="p-12 rounded-2xl bg-slate-900 text-center text-slate-400 border border-slate-800">
            Syllabus units for this subject and class are being updated.
          </div>
        ) : (
          units.map((unit, uIdx) => {
            const isOpen = openUnits[uIdx];
            const unitDone = unit.chapters.filter((c) => Boolean(completedMap[c.id])).length;
            const unitPct = unit.chapters.length
              ? Math.round((unitDone / unit.chapters.length) * 100)
              : 0;

            return (
              <div
                key={uIdx}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-sm"
              >
                {/* Unit Header Bar */}
                <div
                  onClick={() => toggleUnit(uIdx)}
                  className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-850 transition-colors select-none"
                >
                  <div className="flex items-center gap-3.5 min-w-0 pr-4">
                    <span className="w-8 h-8 rounded-xl bg-slate-950 border border-slate-800 text-xs font-black text-blue-400 flex items-center justify-center shrink-0">
                      {uIdx + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-white truncate">
                        {unit.unit}
                      </h3>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {unit.chapters.length} chapters · {unitDone} completed ({unitPct}%)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
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
                  <div className="border-t border-slate-800 divide-y divide-slate-800/60 bg-slate-950/60">
                    {unit.chapters.map((ch) => {
                      const video = getChapterVideo(ch);
                      const isDone = Boolean(completedMap[ch.id]);
                      const isSaved = savedIds.includes(ch.id);

                      return (
                        <div
                          key={ch.id}
                          className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-900/50 transition-colors"
                        >
                          <div className="flex items-start gap-4 flex-1 min-w-0">
                            {/* Thumbnail or Play Box */}
                            <div
                              onClick={() => playVideo(ch, currentSubject, currentClass)}
                              className="w-24 sm:w-28 aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0 relative cursor-pointer group"
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
                                  <span>Lecture</span>
                                </div>
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4
                                  onClick={() => playVideo(ch, currentSubject, currentClass)}
                                  className="text-sm font-bold text-white hover:text-blue-400 cursor-pointer truncate"
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

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                            <button
                              onClick={() => playVideo(ch, currentSubject, currentClass)}
                              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                            >
                              <IconPlay size={13} />
                              <span>Watch</span>
                            </button>

                            <button
                              onClick={() => toggleSave(ch.id)}
                              className={`p-2 rounded-xl border text-xs transition-colors ${
                                isSaved
                                  ? "bg-blue-600/20 text-blue-400 border-blue-500/40"
                                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                              }`}
                              title={isSaved ? "Saved in bookmarks" : "Bookmark chapter"}
                            >
                              {isSaved ? <IconBookmarkFilled size={14} /> : <IconBookmark size={14} />}
                            </button>

                            <button
                              onClick={() => toggleComplete(ch.id)}
                              className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors ${
                                isDone
                                  ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
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
