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

  // Calculate subject progress
  const getSubjectProgress = (subj) => {
    const units = SYLLABUS_DATA[subj]?.[currentClass] || [];
    const total = units.reduce((acc, u) => acc + u.chapters.length, 0);
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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              {currentStream} Stream · Class {currentClass} (+2)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {greeting}, {userName}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · Official CHSE Odisha Syllabus
          </p>
        </div>

        {/* Stream & Class Segmented Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Stream Selector */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
            {["Science", "Commerce", "Arts"].map((st) => (
              <button
                key={st}
                onClick={() => setCurrentStream(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentStream === st
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Class Selector */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
            {["11", "12"].map((cls) => (
              <button
                key={cls}
                onClick={() => setCurrentClass(cls)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentClass === cls
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
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
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
              <IconUser size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Save your completed chapters and study notes</div>
              <div className="text-xs text-slate-400">Create a free student profile to sync your retention streaks across your phone and laptop.</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => {
                setAuthMode("login");
                setAuthModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setAuthMode("register");
                setAuthModalOpen(true);
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all"
            >
              Create Account
            </button>
          </div>
        </div>
      )}

      {/* Overview Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
            <IconVideo size={18} />
          </div>
          <div className="text-2xl font-black text-white">{savedIds.length}</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Bookmarked Chapters</div>
        </div>

        <div className="bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
            <IconCheck size={18} />
          </div>
          <div className="text-2xl font-black text-white">{Object.keys(completedMap).length}</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Completed Topics</div>
        </div>

        <div className="bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
            <IconFire size={18} />
          </div>
          <div className="text-2xl font-black text-white">{streakCount} Days</div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Study Streak</div>
        </div>

        <div className="bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
            <IconClock size={18} />
          </div>
          <div className="text-2xl font-black text-white">
            {Object.keys(completedMap).length > 0
              ? `${Math.floor((Object.keys(completedMap).length * 45) / 60)}h ${
                  (Object.keys(completedMap).length * 45) % 60
                }m`
              : "0h"}
          </div>
          <div className="text-xs text-slate-400 font-medium mt-0.5">Study Time Logged</div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
              Class {currentClass} — {currentStream} Subjects
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Select any subject to view units, chapter breakdowns, and YouTube video lectures
            </p>
          </div>
          {isAdmin && (
            <button
              onClick={() => {
                setCurrentSection("admin");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20"
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
                className="group cursor-pointer rounded-2xl bg-slate-900 p-5 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconBook size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-400 font-mono">
                    {total} Chapters
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                  {subj}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">CHSE Odisha Board Syllabus</p>

                {/* Progress bar */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-400">
                      {done} of {total} completed
                    </span>
                    <span className="text-blue-400 font-bold">{pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 transition-all duration-500"
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
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
          Weekly CHSE Readiness Targets
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Target Lectures", current: Object.keys(completedMap).length, target: 12, color: "text-blue-400", bar: "bg-blue-500" },
            { label: "Practice Units", current: Math.min(8, Math.floor(Object.keys(completedMap).length / 3)), target: 8, color: "text-emerald-400", bar: "bg-emerald-500" },
            { label: "Consistency Streak", current: streakCount, target: 7, color: "text-amber-400", bar: "bg-amber-500" },
          ].map((g, i) => {
            const pct = Math.min(100, Math.round((g.current / g.target) * 100));
            return (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="text-xs font-medium text-slate-400">{g.label}</div>
                  <div className="text-lg font-black text-white mt-0.5">
                    {g.current} / {g.target}
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-bold ${g.color}`}>{pct}%</span>
                  <div className="w-20 h-1.5 bg-slate-900 rounded-full overflow-hidden mt-1">
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
