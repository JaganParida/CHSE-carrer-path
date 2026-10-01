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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-5 sm:space-y-6">
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
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#111215] border border-[#23252a] text-xs font-medium text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Class {currentClass}</span>
            <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">(Enrolled)</span>
          </div>
        ) : (
          <div className="flex items-center bg-[#111215] border border-[#23252a] rounded-lg p-0.5 text-xs font-medium">
            {["11", "12"].map((cls) => (
              <button
                key={cls}
                onClick={() => setCurrentClass(cls)}
                className={`px-3 py-1 rounded-md transition-all ${
                  currentClass === cls
                    ? "bg-zinc-100 text-zinc-950 font-bold shadow-sm"
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
      <div className="relative overflow-hidden rounded-xl bg-[#111215] p-5 sm:p-6 border border-[#23252a] shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0c0d0f] border border-[#1e2024] text-xs font-mono text-zinc-400 mb-2">
              <span>CHSE Odisha (+2)</span>
              <span>·</span>
              <span className="text-zinc-200 font-bold">Class {currentClass}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
              {currentSubject}
            </h1>
            <p className="text-xs text-zinc-400 mt-1 max-w-xl leading-relaxed">
              Official unit-wise syllabus breakdown. Tap any unit below to expand and watch curated masterclasses.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 self-start sm:self-auto bg-[#0c0d0f] p-3 rounded-lg border border-[#1e2024] text-center shrink-0 w-full sm:w-auto">
            <div className="px-3">
              <div className="text-base sm:text-lg font-bold text-zinc-100 font-mono">{units.length}</div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Units</div>
            </div>
            <div className="px-3 border-x border-[#1e2024]">
              <div className="text-base sm:text-lg font-bold text-zinc-100 font-mono">{totalChapters}</div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Chapters</div>
            </div>
            <div className="px-3">
              <div className="text-base sm:text-lg font-bold text-zinc-100 font-mono">{progressPct}%</div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Done</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 pt-3.5 border-t border-[#1e2025]">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-zinc-400 text-[11px]">Syllabus Completion</span>
            <span className="text-zinc-200 font-mono text-[11px] font-semibold">
              {doneCount} of {totalChapters} chapters ({progressPct}%)
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#0c0d0f] rounded-full overflow-hidden">
            <div
              className="h-full bg-zinc-200 transition-all duration-500 rounded-full"
              style={{ width: `${progressPct}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Units Accordion List - ALL CLOSED INITIALLY */}
      <div className="space-y-3">
        {units.length === 0 ? (
          <div className="p-10 rounded-xl bg-[#111215] text-center text-zinc-400 border border-[#23252a] text-sm">
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
                className="rounded-xl bg-[#111215] border border-[#23252a] overflow-hidden shadow-sm transition-all"
              >
                {/* Unit Header Bar (Click to Expand / Collapse) */}
                <button
                  type="button"
                  onClick={() => toggleUnit(uIdx)}
                  className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between hover:bg-[#16181d] transition-colors select-none"
                >
                  <div className="flex items-center gap-3 min-w-0 pr-3">
                    <span className="w-7 h-7 rounded-md bg-[#0c0d0f] border border-[#1e2024] text-xs font-mono font-bold text-zinc-300 flex items-center justify-center shrink-0">
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
                    <div className="w-6 h-6 rounded-md bg-[#0c0d0f] border border-[#23252a] flex items-center justify-center">
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
                  <div className="border-t border-[#1e2025] divide-y divide-[#1e2024] bg-[#0c0d0f] animate-fadeIn">
                    {unit.chapters?.map((ch) => {
                      const video = getChapterVideo(ch);
                      const isDone = Boolean(completedMap[ch.id]);
                      const isSaved = savedIds.includes(ch.id);

                      return (
                        <div
                          key={ch.id}
                          className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#111215] transition-colors"
                        >
                          {/* Thumbnail & Title */}
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            <div
                              onClick={() => playVideo(ch, currentSubject, currentClass)}
                              className="w-24 sm:w-28 aspect-video rounded-lg overflow-hidden bg-black border border-[#23252a] shrink-0 relative cursor-pointer group"
                            >
                              {video.youtubeId ? (
                                <>
                                  <img
                                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                  />
                                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                                    <IconPlay size={14} />
                                  </div>
                                </>
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center text-zinc-500 gap-1 text-[10px] font-mono">
                                  <IconVideo size={14} />
                                  <span>Lecture</span>
                                </div>
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-1">
                                <h4
                                  onClick={() => playVideo(ch, currentSubject, currentClass)}
                                  className="text-xs sm:text-sm font-semibold text-zinc-100 hover:text-white cursor-pointer truncate"
                                >
                                  {video.title}
                                </h4>
                                {isDone && (
                                  <span className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                                    <IconCheck size={11} />
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-zinc-400 line-clamp-1">{video.desc}</p>
                            </div>
                          </div>

                          {/* Mobile-Friendly Action Buttons */}
                          <div className="flex items-center gap-2 self-end sm:self-center shrink-0 w-full sm:w-auto justify-end pt-1 sm:pt-0">
                            <button
                              onClick={() => playVideo(ch, currentSubject, currentClass)}
                              className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                            >
                              <IconPlay size={12} />
                              <span>Watch</span>
                            </button>

                            <button
                              onClick={() => toggleSave(ch.id)}
                              className={`p-2 rounded-lg border text-xs transition-colors ${
                                isSaved
                                  ? "bg-zinc-100 text-zinc-950 border-white"
                                  : "bg-[#111215] text-zinc-400 border-[#23252a] hover:text-white"
                              }`}
                              title={isSaved ? "Saved in bookmarks" : "Bookmark chapter"}
                            >
                              {isSaved ? <IconBookmarkFilled size={13} /> : <IconBookmark size={13} />}
                            </button>

                            <button
                              onClick={() => toggleComplete(ch.id)}
                              className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
                                isDone
                                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                                  : "bg-[#111215] text-zinc-400 border-[#23252a] hover:text-white"
                              }`}
                            >
                              <IconCheck size={12} />
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
