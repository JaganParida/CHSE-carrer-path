import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useApp } from "../context/AppContext.jsx";
import { STREAM_SUBJECTS, SYLLABUS_DATA } from "../data/syllabusData.js";
import {
  IconFire,
  IconVideo,
  IconCheck,
  IconClock,
  IconArrowRight,
  IconBook,
  IconCrown,
  IconUser,
} from "./Icons.jsx";

export const Dashboard = () => {
  const { user, setAuthModalOpen, setAuthMode, isAdmin } = useAuth();
  const {
    currentStream,
    setCurrentStream,
    currentClass,
    setCurrentClass,
    setCurrentSubject,
    setCurrentSection,
  } = useApp();

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";
  const userName = user?.name ? user.name.split(" ")[0] : "Student";
  const streakCount = user?.streak?.count || 1;
  const completedMap = user?.completedTopics || {};
  const savedIds = user?.savedVideos || [];

  const subjects = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];

  const getSubjectProgress = (subj) => {
    const units = SYLLABUS_DATA[subj]?.[currentClass] || [];
    const total = units.reduce((acc, u) => acc + (u.chapters?.length || 0), 0);
    const done = Object.keys(completedMap).filter((k) =>
      k.startsWith(subj.toLowerCase().slice(0, 2) + currentClass)
    ).length;
    return {
      total,
      done,
      pct: total ? Math.round((done / total) * 100) : 0,
    };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header & Academic Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1f1f1f]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              {currentStream} Stream · Class {currentClass} (+2)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {greeting}, {userName}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · Official CHSE Odisha Syllabus
          </p>
        </div>

        {/* Stream & Class Segmented Controls (Vercel Style) */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Stream Selector */}
          <div className="flex items-center bg-[#0a0a0a] border border-[#222222] rounded-xl p-1">
            {["Science", "Commerce", "Arts"].map((st) => (
              <button
                key={st}
                onClick={() => setCurrentStream(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentStream === st
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Class Selector */}
          <div className="flex items-center bg-[#0a0a0a] border border-[#222222] rounded-xl p-1">
            {["11", "12"].map((cls) => (
              <button
                key={cls}
                onClick={() => setCurrentClass(cls)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentClass === cls
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Class {cls}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Guest Sign-In Banner */}
      {!user && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0a0a0a] border border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
              <IconUser size={18} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Save your completed chapters and study notes</div>
              <div className="text-xs text-neutral-400">Create a free student profile to sync your retention streaks across your devices.</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => {
                setAuthMode("login");
                setAuthModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white bg-black border border-[#262626] transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setAuthMode("register");
                setAuthModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-white hover:bg-neutral-200 shadow-sm transition-all"
            >
              Create Account
            </button>
          </div>
        </div>
      )}

      {/* Overview Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0a0a0a] p-4 sm:p-5 rounded-2xl border border-[#222222] shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-3">
            <IconVideo size={16} />
          </div>
          <div className="text-2xl font-black text-white">{savedIds.length}</div>
          <div className="text-xs text-neutral-400 font-medium mt-0.5">Bookmarked Chapters</div>
        </div>

        <div className="bg-[#0a0a0a] p-4 sm:p-5 rounded-2xl border border-[#222222] shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-3">
            <IconCheck size={16} />
          </div>
          <div className="text-2xl font-black text-white">{Object.keys(completedMap).length}</div>
          <div className="text-xs text-neutral-400 font-medium mt-0.5">Completed Topics</div>
        </div>

        <div className="bg-[#0a0a0a] p-4 sm:p-5 rounded-2xl border border-[#222222] shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-3">
            <IconFire size={16} />
          </div>
          <div className="text-2xl font-black text-white">{streakCount} Days</div>
          <div className="text-xs text-neutral-400 font-medium mt-0.5">Study Streak</div>
        </div>

        <div className="bg-[#0a0a0a] p-4 sm:p-5 rounded-2xl border border-[#222222] shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-3">
            <IconClock size={16} />
          </div>
          <div className="text-2xl font-black text-white">
            {Object.keys(completedMap).length > 0
              ? `${Math.floor((Object.keys(completedMap).length * 45) / 60)}h ${
                  (Object.keys(completedMap).length * 45) % 60
                }m`
              : "0h"}
          </div>
          <div className="text-xs text-neutral-400 font-medium mt-0.5">Study Time Logged</div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
              Class {currentClass} — {currentStream} Subjects
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Select any subject to view units, chapter breakdowns, and YouTube video lectures
            </p>
          </div>
          {isAdmin && (
            <button
              onClick={() => {
                setCurrentSection("admin");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xs font-semibold text-white hover:text-neutral-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a0a0a] border border-[#262626]"
            >
              <IconCrown size={14} />
              <span>Admin Studio</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {subjects.map((subj) => {
            const { total, done, pct } = getSubjectProgress(subj);
            return (
              <div
                key={subj}
                onClick={() => {
                  setCurrentSubject(subj);
                  setCurrentSection("subject");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group cursor-pointer rounded-2xl bg-[#0a0a0a] p-5 border border-[#222222] hover:border-neutral-500 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-black border border-[#222222] text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <IconBook size={18} />
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-black border border-[#222222] text-neutral-400 font-mono">
                    {total} Chapters
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-neutral-300 transition-colors">
                  {subj}
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">CHSE Odisha Board Syllabus</p>

                {/* Progress bar */}
                <div className="mt-4 pt-3 border-t border-[#1f1f1f]">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                    <span className="text-neutral-400">
                      {done} of {total} completed
                    </span>
                    <span className="text-white font-mono">{pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Goals Section */}
      <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-[#222222]">
        <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
          Weekly CHSE Readiness Targets
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Target Lectures", current: Object.keys(completedMap).length, target: 12 },
            { label: "Practice Units", current: Math.min(8, Math.floor(Object.keys(completedMap).length / 3)), target: 8 },
            { label: "Consistency Streak", current: streakCount, target: 7 },
          ].map((g, i) => {
            const pct = Math.min(100, Math.round((g.current / g.target) * 100));
            return (
              <div
                key={i}
                className="p-4 rounded-xl bg-black border border-[#222222] flex items-center justify-between gap-4"
              >
                <div>
                  <div className="text-xs font-medium text-neutral-400">{g.label}</div>
                  <div className="text-lg font-black text-white mt-0.5">
                    {g.current} / {g.target}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-white">{pct}%</span>
                  <div className="w-20 h-1.5 bg-neutral-900 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-white" style={{ width: `${pct}%` }}></div>
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
