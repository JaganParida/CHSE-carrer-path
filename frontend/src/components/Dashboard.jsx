import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useApp } from "../context/AppContext.jsx";
import { STREAM_SUBJECTS, SYLLABUS_DATA, SUBJ_THEMES } from "../data/syllabusData.js";
import {
  IconFire,
  IconVideo,
  IconCheck,
  IconClock,
  IconArrowRight,
  IconPlay,
  IconBook,
  IconCrown,
} from "./Icons.jsx";

export const Dashboard = () => {
  const { user } = useAuth();
  const {
    currentStream,
    currentClass,
    setCurrentClass,
    setCurrentSubject,
    setCurrentSection,
    getChapterVideo,
    playVideo,
  } = useApp();

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";
  const userName = user?.name ? user.name.split(" ")[0] : "Student";
  const streakCount = user?.streak?.count || 1;
  const completedMap = user?.completedTopics || {};
  const savedIds = user?.savedVideos || [];

  const subjects = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];

  // Calculate subject progress
  const getSubjectProgress = (subj) => {
    const units = SYLLABUS_DATA[subj]?.[currentClass] || [];
    const total = units.reduce((acc, u) => acc + u.chapters.length, 0);
    const done = Object.keys(completedMap).filter((k) => k.startsWith(subj.toLowerCase().slice(0, 2) + currentClass)).length;
    return {
      total,
      done,
      pct: total ? Math.round((done / total) * 100) : 0,
    };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Greeting & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {greeting}, {userName}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} · Class {currentClass} · {currentStream} Stream
          </p>
        </div>

        {/* Quick Class Switcher */}
        <div className="flex items-center gap-2 self-start sm:self-auto bg-obsidian-900 border border-slate-800 rounded-xl p-1">
          <button
            onClick={() => setCurrentClass("11")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              currentClass === "11" ? "bg-brand-600 text-white shadow" : "text-slate-400 hover:text-white"
            }`}
          >
            Class 11
          </button>
          <button
            onClick={() => setCurrentClass("12")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              currentClass === "12" ? "bg-brand-600 text-white shadow" : "text-slate-400 hover:text-white"
            }`}
          >
            Class 12
          </button>
        </div>
      </div>

      {/* Motivation Streak Banner */}
      <div className="relative overflow-hidden rounded-2xl glass-panel p-5 sm:p-6 border border-amber-500/25 bg-gradient-to-r from-amber-500/10 via-obsidian-900 to-brand-600/10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
            <IconFire size={24} />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-white">
              Your Daily Study Momentum is Strong!
            </h3>
            <p className="text-xs text-slate-300 mt-0.5 max-w-xl">
              Consistency outperforms cramming. Complete a chapter video and maintain your CHSE rank readiness.
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <div className="text-2xl sm:text-3xl font-black text-amber-400">{streakCount}</div>
          <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Day Streak</div>
        </div>
      </div>

      {/* Bento Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800">
          <div className="w-9 h-9 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center mb-3">
            <IconVideo size={18} />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">{savedIds.length}</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Bookmarked Videos</div>
        </div>

        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-3">
            <IconCheck size={18} />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">{Object.keys(completedMap).length}</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Chapters Completed</div>
        </div>

        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800">
          <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-3">
            <IconFire size={18} />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">{streakCount} Days</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Learning Streak</div>
        </div>

        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-3">
            <IconClock size={18} />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white">
            {Object.keys(completedMap).length > 0 ? `${Math.floor((Object.keys(completedMap).length * 45) / 60)}h` : "45m"}
          </div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Estimated Study Time</div>
        </div>
      </div>

      {/* Subjects Grid Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white">
              Class {currentClass} — {currentStream} Curriculum
            </h2>
            <p className="text-xs text-slate-400">Click any subject to open the chapter breakdown and video syllabus</p>
          </div>
          <button
            onClick={() => setCurrentSection("admin")}
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            <IconCrown size={14} />
            <span>Manage Video Links</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {subjects.map((subj) => {
            const { total, done, pct } = getSubjectProgress(subj);
            const theme = SUBJ_THEMES[subj] || SUBJ_THEMES["Physics"];
            return (
              <div
                key={subj}
                onClick={() => {
                  setCurrentSubject(subj);
                  setCurrentSection("subject");
                }}
                className={`group cursor-pointer rounded-2xl glass-panel p-5 border border-slate-800 hover:border-brand-500/40 hover:bg-obsidian-850 transition-all hover:-translate-y-1 shadow-lg relative overflow-hidden`}
              >
                {/* Accent glow corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${theme.color} blur-xl pointer-events-none`}></div>

                <div className="flex items-center justify-between mb-3 relative">
                  <div className={`p-2.5 rounded-xl bg-obsidian-900 border border-slate-800 ${theme.text}`}>
                    <IconBook size={20} />
                  </div>
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${theme.badge}`}>
                    {total} Chapters
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-white group-hover:text-brand-400 transition-colors">
                  {subj}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Class {currentClass} · CHSE Board</p>

                {/* Progress bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-400">{done} of {total} done</span>
                    <span className={theme.text}>{pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-obsidian-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-600 to-indigo-500 transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Targets Section */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 mb-4">
          Weekly Study Goals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Target Lectures", current: 5, target: 12, color: "text-sky-400", bar: "bg-sky-500" },
            { label: "Practice Units", current: 3, target: 8, color: "text-indigo-400", bar: "bg-indigo-500" },
            { label: "Revision Streak", current: streakCount, target: 7, color: "text-amber-400", bar: "bg-amber-500" },
          ].map((g, i) => {
            const pct = Math.min(100, Math.round((g.current / g.target) * 100));
            return (
              <div key={i} className="p-4 rounded-xl bg-obsidian-900/80 border border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-medium text-slate-400">{g.label}</div>
                  <div className="text-lg font-black text-white mt-0.5">
                    {g.current} / {g.target}
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-black ${g.color}`}>{pct}%</span>
                  <div className="w-20 h-1.5 bg-obsidian-800 rounded-full overflow-hidden mt-1">
                    <div className={`h-full ${g.bar}`} style={{ width: `${pct}%` }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

