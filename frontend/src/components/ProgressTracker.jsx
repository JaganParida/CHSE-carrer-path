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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#1f2127]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111215] border border-[#23252a] text-zinc-300 text-xs font-mono mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-200"></span>
            <span>ACADEMIC ANALYTICS & RETENTION</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-100 tracking-tight">
            Study Progress & Mastery
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl leading-relaxed">
            Monitor completed syllabus units, revision bookmarks, daily learning consistency, and exam readiness.
          </p>
        </div>

        {/* Class Switcher */}
        <div className="flex bg-[#111215] p-1 rounded-lg border border-[#23252a] shrink-0 self-start sm:self-auto">
          {["11", "12"].map((cls) => (
            <button
              key={cls}
              onClick={() => setCurrentClass(cls)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                currentClass === cls
                  ? "bg-zinc-100 text-zinc-950 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Class {cls} (+2)
            </button>
          ))}
        </div>
      </div>

      {/* Guest Student Sign In Prompt Banner */}
      {!user && (
        <div className="p-4 sm:p-5 rounded-xl bg-[#111215] border border-[#23252a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center shrink-0">
              <IconCheck size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-100">Create a free student account to save your progress</div>
              <div className="text-xs text-zinc-400">Chapters and topics marked as complete will be permanently synchronized across all your devices.</div>
            </div>
          </div>
          <button
            onClick={() => {
              setAuthMode("register");
              setAuthModalOpen(true);
            }}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-white shrink-0 transition-all shadow-sm"
          >
            Create Account
          </button>
        </div>
      )}

      {/* Key Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] shadow-sm">
          <div className="w-9 h-9 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center mb-3">
            <IconCheck size={16} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-zinc-100">{Object.keys(completedMap).length}</div>
          <div className="text-xs text-zinc-400 font-medium mt-1">Chapters Completed</div>
        </div>

        <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] shadow-sm">
          <div className="w-9 h-9 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center mb-3">
            <IconFire size={16} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-zinc-100">{streak} Days</div>
          <div className="text-xs text-zinc-400 font-medium mt-1">Active Study Streak</div>
        </div>

        <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] shadow-sm">
          <div className="w-9 h-9 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center mb-3">
            <IconVideo size={16} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-zinc-100">{savedIds.length}</div>
          <div className="text-xs text-zinc-400 font-medium mt-1">Saved for Revision</div>
        </div>

        <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] shadow-sm">
          <div className="w-9 h-9 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center mb-3">
            <IconClock size={16} />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-zinc-100 font-mono">
            {hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`}
          </div>
          <div className="text-xs text-zinc-400 font-medium mt-1">Study Time Logged</div>
        </div>
      </div>

      {/* Activity Heatmap Card */}
      <div className="bg-[#111215] rounded-xl p-6 sm:p-7 border border-[#23252a] shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-zinc-100">Daily Study Activity Heatmap</h3>
            <p className="text-xs text-zinc-400 mt-0.5">24-week consistency matrix tracking lecture completions</p>
          </div>
          <span className="text-xs text-zinc-300 font-mono flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0c0d0f] border border-[#23252a]">
            <IconFire size={14} /> {streak} day streak active
          </span>
        </div>

        <div className="overflow-x-auto pb-2 custom-scrollbar">
          <div className="flex gap-1.5 min-w-[540px]">
            {weeks.map((days, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5">
                {days.map((lvl, dIdx) => {
                  const bg =
                    lvl === 3
                      ? "bg-zinc-100"
                      : lvl === 2
                      ? "bg-zinc-400"
                      : lvl === 1
                      ? "bg-zinc-700"
                      : "bg-[#0c0d0f]";
                  return (
                    <div
                      key={dIdx}
                      className={`w-3.5 h-3.5 rounded-sm ${bg} border border-[#1f2127] transition-colors`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 text-xs text-zinc-400 pt-3 border-t border-[#1f2127] font-mono">
          <span>Less</span>
          <div className="w-3 h-3 rounded-sm bg-[#0c0d0f] border border-[#1f2127]"></div>
          <div className="w-3 h-3 rounded-sm bg-zinc-700"></div>
          <div className="w-3 h-3 rounded-sm bg-zinc-400"></div>
          <div className="w-3 h-3 rounded-sm bg-zinc-100"></div>
          <span>More</span>
        </div>
      </div>

      {/* Subject-Wise Progress Bars */}
      <div className="bg-[#111215] rounded-xl p-6 sm:p-7 border border-[#23252a] shadow-sm space-y-5">
        <div>
          <h3 className="text-base font-bold text-zinc-100">
            Subject Breakdown — Class {currentClass} ({currentStream} Stream)
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Syllabus coverage percentage calculated per official CHSE guidelines
          </p>
        </div>

        <div className="space-y-3">
          {subjects.map((subj) => {
            const { total, done, pct } = getSubjDone(subj);
            return (
              <div key={subj} className="space-y-2 p-3.5 rounded-lg bg-[#0c0d0f] border border-[#23252a]">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-zinc-200 text-sm font-semibold">{subj}</span>
                  <span className="text-zinc-400 font-mono">
                    <b className="text-zinc-200 font-bold">{done}</b> of {total} chapters ({pct}%)
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#18191d] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-zinc-200 transition-all duration-500 rounded-full"
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
