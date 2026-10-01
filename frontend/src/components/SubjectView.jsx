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
  IconClock,
} from "./Icons.jsx";

export const SubjectView = () => {
  const { user, isAdmin } = useAuth();
  const {
    currentSubject,
    currentClass,
    setCurrentClass,
    setCurrentSection,
    isStudentLocked,
    getChapterVideo,
    playVideo,
    toggleComplete,
    toggleSave,
  } = useApp();

  const units = SYLLABUS_DATA[currentSubject]?.[currentClass] || [];

  // Default: ALL unit dropdowns/accordions are closed initially per requirement
  const [openUnits, setOpenUnits] = useState({});

  const toggleUnit = (idx) => {
    setOpenUnits((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const completedMap = user?.completedTopics || {};
  const savedIds = user?.savedVideos || [];

  const totalChapters = units.reduce((acc, u) => acc + (u.chapters?.length || 0), 0);
  const doneCount = units.reduce(
    (acc, u) => acc + (u.chapters?.filter((ch) => Boolean(completedMap[ch.id]))?.length || 0),
    0
  );
  const progressPct = totalChapters ? Math.round((doneCount / totalChapters) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-5 sm:space-y-6 font-sans">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => {
            setCurrentSection("dashboard");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <IconArrowLeft size={14} />
          <span>Back to Syllabus</span>
        </button>

        {/* Class Badge / Switcher */}
        {isStudentLocked ? (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0c0d10] border border-white/[0.06] text-xs font-medium text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Class {currentClass}</span>
            <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">(Enrolled)</span>
          </div>
        ) : (
          <div className="flex items-center bg-[#0c0d10] border border-white/[0.06] rounded-lg p-0.5 text-xs font-medium">
            {["11", "12"].map((cls) => (
              <button
                key={cls}
                onClick={() => setCurrentClass(cls)}
                className={`px-3 py-1 rounded-md transition-all ${
                  currentClass === cls
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Class {cls}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Subject Header Banner */}
      <div className="relative overflow-hidden rounded-xl bg-[#0c0d10] p-5 sm:p-6 border border-white/[0.06] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/60 border border-white/[0.06] text-xs font-mono text-zinc-400 mb-2">
              <span>CHSE Odisha (+2)</span>
              <span>·</span>
              <span className="text-zinc-200 font-bold">Class {currentClass}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {currentSubject}
            </h1>
            <p className="text-xs text-zinc-400 mt-1 max-w-xl leading-relaxed">
              Official unit-wise syllabus breakdown. Tap any unit below to expand and watch curated masterclasses.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 self-start sm:self-auto bg-black/60 p-3 rounded-lg border border-white/[0.04] text-center shrink-0 w-full sm:w-auto">
            <div className="px-3">
              <div className="text-base sm:text-lg font-bold text-white font-mono">{units.length}</div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Units</div>
            </div>
            <div className="px-3 border-x border-white/[0.06]">
              <div className="text-base sm:text-lg font-bold text-white font-mono">{totalChapters}</div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Chapters</div>
            </div>
            <div className="px-3">
              <div className="text-base sm:text-lg font-bold text-white font-mono">{progressPct}%</div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Done</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 pt-3.5 border-t border-white/[0.06]">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-zinc-400 text-[11px]">Syllabus Completion</span>
            <span className="text-zinc-200 font-mono text-[11px] font-semibold">
              {doneCount} of {totalChapters} chapters ({progressPct}%)
            </span>
          </div>
          <div className="w-full h-1.5 bg-black/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500 rounded-full"
              style={{ width: `${progressPct}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Units Accordion List - ALL CLOSED INITIALLY */}
      <div className="space-y-3">
        {units.length === 0 ? (
          <div className="p-10 rounded-xl bg-[#0c0d10] text-center text-zinc-400 border border-white/[0.06] text-sm">
            Syllabus units for this subject and class are being updated.
          </div>
        ) : (
          units.map((unit, uIdx) => {
            const isOpen = Boolean(openUnits[uIdx]);
            const unitDone = unit.chapters?.filter((c) => Boolean(completedMap[c.id]))?.length || 0;
            const unitPct = unit.chapters?.length
              ? Math.round((unitDone / unit.chapters.length) * 100)
              : 0;

            return (
              <div
                key={uIdx}
                className="rounded-xl bg-[#0c0d10] border border-white/[0.06] overflow-hidden shadow-sm transition-all"
              >
                {/* Unit Header Bar (Click to Expand / Collapse) */}
                <button
                  type="button"
                  onClick={() => toggleUnit(uIdx)}
                  className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors select-none"
                >
                  <div className="flex items-center gap-3 min-w-0 pr-3">
                    <span className="w-7 h-7 rounded-md bg-white/[0.04] text-xs font-mono font-bold text-zinc-300 flex items-center justify-center shrink-0">
                      {uIdx + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm font-semibold text-zinc-100 truncate">
                        {unit.unit}
                      </h3>
                      <div className="text-[11px] text-zinc-500 mt-0.5 font-mono">
                        {unit.chapters?.length || 0} chapters · {unitDone} done ({unitPct}%)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
                      {unitPct}%
                    </span>
                    <div className="w-6 h-6 rounded-md bg-white/[0.04] flex items-center justify-center">
                      <IconChevronDown
                        size={14}
                        className={`text-zinc-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Unit Chapters (Rendered only when expanded) */}
                {isOpen && (
                  <div className="border-t border-white/[0.06] divide-y divide-white/[0.04] bg-black/40 animate-fadeIn">
                    {unit.chapters?.map((ch) => {
                      const video = getChapterVideo(ch);
                      const isDone = Boolean(completedMap[ch.id]);
                      const isSaved = savedIds.includes(ch.id);

                      return (
                        <div
                          key={ch.id}
                          className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/[0.02] transition-colors"
                        >
                          {/* Chapter Thumbnail + Details Container */}
                          <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                            {/* Small 16:9 Video Thumbnail Preview */}
                            <div
                              onClick={() => playVideo(ch, currentSubject, currentClass)}
                              className="relative w-20 sm:w-24 h-12 sm:h-14 rounded-lg overflow-hidden bg-black/80 border border-white/[0.06] shrink-0 cursor-pointer group/thumb select-none flex items-center justify-center transition-all hover:border-white/[0.18]"
                              title={video?.isAvailable ? `Watch: ${ch.title}` : `Coming Soon: ${ch.title}`}
                            >
                              {video?.thumbnailUrl ? (
                                <>
                                  <img
                                    src={video.thumbnailUrl}
                                    alt={ch.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                                    loading="lazy"
                                    onError={(e) => {
                                      e.currentTarget.style.display = "none";
                                    }}
                                  />
                                  <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/10 transition-colors flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-white/95 text-black flex items-center justify-center shadow-md transition-transform group-hover/thumb:scale-110">
                                      <IconPlay size={10} className="ml-0.5" />
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-[#0e0f12] text-zinc-500 p-1 text-center">
                                  <IconClock size={14} className="text-zinc-500 mb-0.5" />
                                  <span className="text-[9px] font-mono text-zinc-400 tracking-tight uppercase">Soon</span>
                                </div>
                              )}
                            </div>

                            {/* Chapter Title, Description & Badges */}
                            <div className="min-w-0 space-y-1 flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-mono text-zinc-500">{ch.id}</span>
                                <h4 className="text-xs sm:text-sm font-medium text-zinc-200">
                                  {ch.title}
                                </h4>
                                {video?.isAvailable ? (
                                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-400 text-[10px] font-mono border border-white/[0.06]">
                                    Lecture
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-mono font-medium">
                                    Coming Soon
                                  </span>
                                )}
                                {isDone && (
                                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">
                                    <IconCheck size={10} /> Done
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                                {ch.desc}
                              </p>
                            </div>
                          </div>

                          {/* Chapter Actions */}
                          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto pl-1 sm:pl-0">
                            <button
                              type="button"
                              onClick={() => toggleComplete(ch.id)}
                              className={`p-1.5 rounded-lg border text-xs transition-colors ${
                                isDone
                                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                                  : "bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-white"
                              }`}
                              title={isDone ? "Mark as Incomplete" : "Mark as Completed"}
                            >
                              <IconCheck size={13} />
                            </button>

                            <button
                              type="button"
                              onClick={() => toggleSave(ch.id)}
                              className={`p-1.5 rounded-lg border text-xs transition-colors ${
                                isSaved
                                  ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                                  : "bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-white"
                              }`}
                              title={isSaved ? "Saved in Bookmarks" : "Save for Revision"}
                            >
                              {isSaved ? <IconBookmarkFilled size={13} /> : <IconBookmark size={13} />}
                            </button>

                            {video?.isAvailable ? (
                              <button
                                type="button"
                                onClick={() => playVideo(ch, currentSubject, currentClass)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition-all shadow-sm shrink-0"
                              >
                                <IconPlay size={12} />
                                <span>Watch</span>
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={() => playVideo(ch, currentSubject, currentClass)}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 text-xs font-medium transition-colors shrink-0"
                                title="Lecture video uploading soon · View notes and syllabus details"
                              >
                                <IconClock size={12} className="text-zinc-400" />
                                <span>Details</span>
                              </button>
                            )}
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
