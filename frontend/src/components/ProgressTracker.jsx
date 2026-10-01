import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useApp } from "../context/AppContext.jsx";
import { STREAM_SUBJECTS, SYLLABUS_DATA, SUBJ_THEMES } from "../data/syllabusData.js";
import { IconCheck, IconFire, IconVideo, IconClock } from "./Icons.jsx";

export const ProgressTracker = () => {
  const { user } = useAuth();
  const { currentStream, currentClass } = useApp();

  const completedMap = user?.completedTopics || {};
  const savedIds = user?.savedVideos || [];
  const streak = user?.streak?.count || 1;
  const subjects = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];

  // Mock activity heatmap weeks (last 24 weeks)
  const weeks = Array.from({ length: 24 }).map((_, w) => {
    return Array.from({ length: 7 }).map((_, d) => {
      // Activity level 0 - 4
      const rand = Math.sin(w * 7 + d);
      return rand > 0.6 ? 3 : rand > 0.2 ? 2 : rand > -0.2 ? 1 : 0;
    });
  });

  const getSubjDone = (subj) => {
    const units = SYLLABUS_DATA[subj]?.[currentClass] || [];
    const total = units.reduce((acc, u) => acc + u.chapters.length, 0);
    const done = Object.keys(completedMap).filter((k) =>
      k.startsWith(subj.toLowerCase().slice(0, 2) + currentClass)
    ).length;
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          My Study Progress — Class {currentClass}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Track completed chapters, retention streak, and syllabus coverage across all subjects.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-2">
            <IconCheck size={16} />
          </div>
          <div className="text-2xl font-black text-white">{Object.keys(completedMap).length}</div>
          <div className="text-xs text-slate-400 mt-0.5">Chapters Completed</div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center mb-2">
            <IconFire size={16} />
          </div>
          <div className="text-2xl font-black text-white">{streak} Days</div>
          <div className="text-xs text-slate-400 mt-0.5">Current Streak</div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center mb-2">
            <IconVideo size={16} />
          </div>
          <div className="text-2xl font-black text-white">{savedIds.length}</div>
          <div className="text-xs text-slate-400 mt-0.5">Saved for Revision</div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-2">
            <IconClock size={16} />
          </div>
          <div className="text-2xl font-black text-white">
            {Object.keys(completedMap).length * 45} mins
          </div>
          <div className="text-xs text-slate-400 mt-0.5">Total Study Time</div>
        </div>
      </div>

      {/* Activity Heatmap Card */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-white">Daily Study Activity Heatmap</h3>
          <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
            <IconFire size={13} /> {streak} day streak active
          </span>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="flex gap-1.5 min-w-[500px]">
            {weeks.map((days, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5">
                {days.map((lvl, dIdx) => {
                  const bg =
                    lvl === 3
                      ? "bg-brand-500"
                      : lvl === 2
                      ? "bg-brand-600/70"
                      : lvl === 1
                      ? "bg-brand-800/50"
                      : "bg-obsidian-850";
                  return <div key={dIdx} className={`w-3.5 h-3.5 rounded-sm ${bg} border border-slate-800/40`} />;
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
          <span>Less</span>
          <div className="w-3 h-3 rounded-sm bg-obsidian-850 border border-slate-800"></div>
          <div className="w-3 h-3 rounded-sm bg-brand-800/50"></div>
          <div className="w-3 h-3 rounded-sm bg-brand-600/70"></div>
          <div className="w-3 h-3 rounded-sm bg-brand-500"></div>
          <span>More</span>
        </div>
      </div>

      {/* Subject-Wise Progress Bars */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <h3 className="text-sm font-extrabold text-white">
          Subject Breakdown — Class {currentClass} ({currentStream})
        </h3>
        <div className="space-y-4">
          {subjects.map((subj) => {
            const { total, done, pct } = getSubjDone(subj);
            const theme = SUBJ_THEMES[subj] || SUBJ_THEMES["Physics"];
            return (
              <div key={subj} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-200">{subj}</span>
                  <span className={theme.text}>
                    {done} of {total} chapters ({pct}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-obsidian-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-600 to-indigo-500 transition-all duration-500"
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

