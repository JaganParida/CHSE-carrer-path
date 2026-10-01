import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useApp } from "../context/AppContext.jsx";
import { STREAM_SUBJECTS, SYLLABUS_DATA } from "../data/syllabusData.js";
import { IconCheck, IconFire, IconVideo, IconClock, IconSparkles, IconBook } from "./Icons.jsx";

export const ProgressTracker = () => {
  const { user, setAuthModalOpen, setAuthMode } = useAuth();
  const { currentStream, currentClass, setCurrentClass, setCurrentSection } = useApp();

  const completedMap = user?.completedTopics || {};
  const savedIds = user?.savedVideos || [];
  const streak = user?.streak?.count || 1;
  const subjects = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];

  // Activity heatmap 24 weeks (7 days per week)
  const weeks = Array.from({ length: 24 }).map((_, w) => {
    return Array.from({ length: 7 }).map((_, d) => {
      const rand = Math.sin((w + 1) * 7 + (d + 2));
      return rand > 0.5 ? 3 : rand > 0.15 ? 2 : rand > -0.2 ? 1 : 0;
    });
  });

  const months = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];

  const getSubjDone = (subj) => {
    const units = SYLLABUS_DATA[subj]?.[currentClass] || [];
    const total = units.reduce((acc, u) => acc + (u.chapters?.length || 0), 0);
    const done = Object.keys(completedMap).filter((k) =>
      k.startsWith(subj.toLowerCase().slice(0, 2) + currentClass)
    ).length;
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  };

  const totalMinutes = Object.keys(completedMap).length * 45;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-7 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0c0d10] border border-white/[0.06] text-zinc-300 text-xs font-mono mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>ACADEMIC ANALYTICS & RETENTION MATRIX</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Study Progress & Mastery
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl leading-relaxed">
            Monitor completed syllabus units, revision bookmarks, daily learning consistency, and exam readiness.
          </p>
        </div>

        {/* Class Switcher */}
        <div className="flex bg-[#0c0d10] p-1 rounded-lg border border-white/[0.06] shrink-0 self-start sm:self-auto">
          {["11", "12"].map((cls) => (
            <button
              key={cls}
              onClick={() => setCurrentClass(cls)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                currentClass === cls
                  ? "bg-white text-black shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Class {cls} (+2)
            </button>
          ))}
        </div>
      </div>

      {/* Guest Student Sign In Prompt Banner */}
      {!user && (
        <div className="p-4 sm:p-5 rounded-xl bg-[#0c0d10] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/[0.04] text-zinc-200 flex items-center justify-center shrink-0">
              <IconCheck size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Create a free student account to save your progress</div>
              <div className="text-xs text-zinc-400">Chapters and topics marked as complete will be permanently synchronized across all your devices.</div>
            </div>
          </div>
          <button
            onClick={() => {
              setAuthMode("register");
              setAuthModalOpen(true);
            }}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-black bg-white hover:bg-zinc-200 shrink-0 transition-all shadow-sm"
          >
            Create Account
          </button>
        </div>
      )}

      {/* Key Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-[#0c0d10] p-4 sm:p-5 rounded-xl border border-white/[0.06] shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
            <IconCheck size={16} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">{Object.keys(completedMap).length}</div>
          <div className="text-xs text-zinc-400 font-medium mt-1">Chapters Mastered</div>
        </div>

        <div className="bg-[#0c0d10] p-4 sm:p-5 rounded-xl border border-white/[0.06] shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
            <IconFire size={16} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">{streak} Days</div>
          <div className="text-xs text-zinc-400 font-medium mt-1">Active Study Streak</div>
        </div>

        <div className="bg-[#0c0d10] p-4 sm:p-5 rounded-xl border border-white/[0.06] shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-white/[0.04] text-zinc-300 flex items-center justify-center mb-3">
            <IconVideo size={16} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">{savedIds.length}</div>
          <div className="text-xs text-zinc-400 font-medium mt-1">Saved for Revision</div>
        </div>

        <div className="bg-[#0c0d10] p-4 sm:p-5 rounded-xl border border-white/[0.06] shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-white/[0.04] text-zinc-300 flex items-center justify-center mb-3">
            <IconClock size={16} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
            {hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`}
          </div>
          <div className="text-xs text-zinc-400 font-medium mt-1">Total Study Time</div>
        </div>
      </div>

      {/* Redesigned Activity Heatmap Card */}
      <div className="bg-[#0c0d10] rounded-xl p-5 sm:p-7 border border-white/[0.06] shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-white">Daily Study Activity Heatmap</h3>
            <p className="text-xs text-zinc-400 mt-0.5">24-week consistency matrix tracking lecture completions</p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/60 border border-white/[0.06] text-xs text-zinc-300 font-mono self-start sm:self-auto">
            <IconFire size={13} className="text-amber-400" />
            <span>{streak} day streak active</span>
          </div>
        </div>

        {/* Month labels header */}
        <div className="overflow-x-auto pb-2 custom-scrollbar">
          <div className="min-w-[620px] space-y-1.5">
            <div className="flex justify-between text-[10px] font-mono text-zinc-500 pl-8 pr-2">
              {months.map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>

            <div className="flex gap-2">
              {/* Day Labels */}
              <div className="flex flex-col justify-between text-[9px] font-mono text-zinc-600 py-0.5 w-6 shrink-0">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* Heatmap Grid */}
              <div className="flex gap-1.5 flex-1 justify-between">
                {weeks.map((days, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
                    {days.map((lvl, dIdx) => {
                      const bg =
                        lvl === 3
                          ? "bg-white"
                          : lvl === 2
                          ? "bg-zinc-400"
                          : lvl === 1
                          ? "bg-zinc-700"
                          : "bg-black/80";
                      return (
                        <div
                          key={dIdx}
                          className={`w-full aspect-square max-w-[15px] rounded-sm ${bg} border border-white/[0.04] transition-all hover:scale-110`}
                          title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${lvl > 0 ? `${lvl * 2} topics studied` : "Rest day"}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs text-zinc-500 pt-3 border-t border-white/[0.06] font-mono">
          <span>Continuous Daily Board Preparation</span>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <div className="w-3 h-3 rounded-sm bg-black border border-white/[0.06]"></div>
            <div className="w-3 h-3 rounded-sm bg-zinc-700"></div>
            <div className="w-3 h-3 rounded-sm bg-zinc-400"></div>
            <div className="w-3 h-3 rounded-sm bg-white"></div>
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Subject-Wise Progress Bars */}
      <div className="bg-[#0c0d10] rounded-xl p-5 sm:p-7 border border-white/[0.06] shadow-sm space-y-5">
        <div>
          <h3 className="text-base font-bold text-white">
            Subject Breakdown — Class {currentClass} ({currentStream} Stream)
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Syllabus coverage calculated per official CHSE Odisha guidelines
          </p>
        </div>

        <div className="space-y-3">
          {subjects.map((subj) => {
            const { total, done, pct } = getSubjDone(subj);
            return (
              <div key={subj} className="space-y-2 p-3.5 rounded-lg bg-black/60 border border-white/[0.04]">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-white text-sm font-semibold">{subj}</span>
                  <span className="text-zinc-400 font-mono">
                    <b className="text-white font-bold">{done}</b> of {total} chapters ({pct}%)
                  </span>
                </div>
                <div className="w-full h-1.5 bg-black/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-500 rounded-full"
                    style={{ width: `${pct}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
