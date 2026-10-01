import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useApp } from "../context/AppContext.jsx";
import { STREAM_SUBJECTS, SYLLABUS_DATA } from "../data/syllabusData.js";
import { IconCheck, IconFire, IconVideo, IconClock, IconSparkles } from "./Icons.jsx";

export const ProgressTracker = () => {
  const { user, setAuthModalOpen, setAuthMode } = useAuth();
  const { currentStream, currentClass, setCurrentClass } = useApp();

  const completedMap = user?.completedTopics || {};
  const savedIds = user?.savedVideos || [];
  const streak = user?.streak?.count || 1;
  const subjects = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];

  // Activity heatmap weeks (last 24 weeks)
  const weeks = Array.from({ length: 24 }).map((_, w) => {
    return Array.from({ length: 7 }).map((_, d) => {
      const rand = Math.sin(w * 7 + d);
      return rand > 0.6 ? 3 : rand > 0.2 ? 2 : rand > -0.2 ? 1 : 0;
    });
  });

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/25 text-blue-400 text-xs font-bold mb-2">
            <IconSparkles size={14} />
            <span>ACADEMIC ANALYTICS & RETENTION</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Study Progress & Mastery
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl leading-relaxed">
            Monitor completed syllabus units, revision bookmarks, daily learning consistency, and exam readiness.
          </p>
        </div>

        {/* Class Switcher */}
        <div className="flex bg-slate-900 p-1 rounded-2xl border border-slate-800 shrink-0 self-start sm:self-auto">
          {["11", "12"].map((cls) => (
            <button
              key={cls}
              onClick={() => setCurrentClass(cls)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                currentClass === cls
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Class {cls} (+2)
            </button>
          ))}
        </div>
      </div>

      {/* Guest Student Sign In Prompt Banner */}
      {!user && (
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
              <IconCheck size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Create a free student account to save your progress</div>
              <div className="text-xs text-slate-400">Chapters and topics marked as complete will be permanently synchronized across all your devices.</div>
            </div>
          </div>
          <button
            onClick={() => {
              setAuthMode("register");
              setAuthModalOpen(true);
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shrink-0 transition-all shadow-md shadow-blue-500/20"
          >
            Create Account
          </button>
        </div>
      )}

      {/* Key Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 p-5 rounded-3xl border border-slate-800 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
            <IconCheck size={18} />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">{Object.keys(completedMap).length}</div>
          <div className="text-xs text-slate-400 font-medium mt-1">Chapters Completed</div>
        </div>

        <div className="bg-slate-900 p-5 rounded-3xl border border-slate-800 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
            <IconFire size={18} />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">{streak} Days</div>
          <div className="text-xs text-slate-400 font-medium mt-1">Active Study Streak</div>
        </div>

        <div className="bg-slate-900 p-5 rounded-3xl border border-slate-800 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
            <IconVideo size={18} />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">{savedIds.length}</div>
          <div className="text-xs text-slate-400 font-medium mt-1">Saved for Revision</div>
        </div>

        <div className="bg-slate-900 p-5 rounded-3xl border border-slate-800 shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center mb-3">
            <IconClock size={18} />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white">
            {hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`}
          </div>
          <div className="text-xs text-slate-400 font-medium mt-1">Study Time Logged</div>
        </div>
      </div>

      {/* Activity Heatmap Card */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Daily Study Activity Heatmap</h3>
            <p className="text-xs text-slate-400 mt-0.5">24-week consistency matrix tracking lecture completions</p>
          </div>
          <span className="text-xs text-amber-400 font-bold flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <IconFire size={14} /> {streak} day streak active
          </span>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex gap-1.5 min-w-[540px]">
            {weeks.map((days, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5">
                {days.map((lvl, dIdx) => {
                  const bg =
                    lvl === 3
                      ? "bg-blue-500"
                      : lvl === 2
                      ? "bg-blue-600/60"
                      : lvl === 1
                      ? "bg-blue-900/40"
                      : "bg-slate-950";
                  return (
                    <div
                      key={dIdx}
                      className={`w-3.5 h-3.5 rounded-sm ${bg} border border-slate-800/80 transition-colors`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 text-xs text-slate-400 pt-3 border-t border-slate-800">
          <span>Less</span>
          <div className="w-3 h-3 rounded-sm bg-slate-950 border border-slate-800"></div>
          <div className="w-3 h-3 rounded-sm bg-blue-900/40"></div>
          <div className="w-3 h-3 rounded-sm bg-blue-600/60"></div>
          <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
          <span>More</span>
        </div>
      </div>

      {/* Subject-Wise Progress Bars */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-5">
        <div>
          <h3 className="text-base font-bold text-white">
            Subject Breakdown — Class {currentClass} ({currentStream} Stream)
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Syllabus coverage percentage calculated per official CHSE guidelines
          </p>
        </div>

        <div className="space-y-4">
          {subjects.map((subj) => {
            const { total, done, pct } = getSubjDone(subj);
            return (
              <div key={subj} className="space-y-2 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-white text-sm">{subj}</span>
                  <span className="text-blue-400 font-bold">
                    {done} of {total} chapters ({pct}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-500"
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
