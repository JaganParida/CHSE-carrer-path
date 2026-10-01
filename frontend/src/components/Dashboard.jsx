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
  const { user, isAdmin } = useAuth();
  const {
    currentStream,
    setCurrentStream,
    currentClass,
    setCurrentClass,
    setCurrentSubject,
    setCurrentSection,
    isStudentLocked,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 font-sans">
      {/* Header & Academic Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              {currentStream} Stream · Class {currentClass} (+2)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {greeting}, {userName}
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · Official CHSE Odisha Syllabus
          </p>
        </div>

        {/* Academic Controls: Locked for student, Switcher for Admin */}
        <div className="flex flex-wrap items-center gap-2.5">
          {isStudentLocked ? (
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-sm"
              title="Your stream and class are locked to your student enrollment"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Enrolled: {currentStream} (Class {currentClass})</span>
            </div>
          ) : isAdmin ? (
            <>
              {/* Stream Selector */}
              <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-lg p-1">
                {["Science", "Commerce", "Arts"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setCurrentStream(st)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      currentStream === st
                        ? "bg-white text-black font-bold shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Class Selector */}
              <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-lg p-1">
                {["11", "12"].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setCurrentClass(cls)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      currentClass === cls
                        ? "bg-white text-black font-bold shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Class {cls}
                  </button>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* Overview Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-black border border-zinc-800 text-zinc-300 flex items-center justify-center mb-2.5">
            <IconVideo size={15} />
          </div>
          <div className="text-xl font-bold text-white font-mono">{savedIds.length}</div>
          <div className="text-xs text-zinc-400 mt-0.5">Bookmarked Chapters</div>
        </div>

        <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-black border border-zinc-800 text-emerald-400 flex items-center justify-center mb-2.5">
            <IconCheck size={15} />
          </div>
          <div className="text-xl font-bold text-white font-mono">{Object.keys(completedMap).length}</div>
          <div className="text-xs text-zinc-400 mt-0.5">Completed Topics</div>
        </div>

        <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-black border border-zinc-800 text-amber-400 flex items-center justify-center mb-2.5">
            <IconFire size={15} />
          </div>
          <div className="text-xl font-bold text-white font-mono">{streakCount} Days</div>
          <div className="text-xs text-zinc-400 mt-0.5">Study Streak</div>
        </div>

        <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-black border border-zinc-800 text-zinc-300 flex items-center justify-center mb-2.5">
            <IconClock size={15} />
          </div>
          <div className="text-xl font-bold text-white font-mono">
            {Object.keys(completedMap).length > 0
              ? `${Math.floor((Object.keys(completedMap).length * 45) / 60)}h ${
                  (Object.keys(completedMap).length * 45) % 60
                }m`
              : "0h"}
          </div>
          <div className="text-xs text-zinc-400 mt-0.5">Study Time Logged</div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Class {currentClass} — {currentStream} Subjects
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              Select any subject to view units, chapter breakdowns, and YouTube video lectures
            </p>
          </div>
          {isAdmin && (
            <button
              onClick={() => {
                setCurrentSection("admin");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xs font-medium text-amber-300 hover:text-white flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800"
            >
              <IconCrown size={13} />
              <span>Admin Studio</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
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
                className="group cursor-pointer rounded-xl bg-zinc-950 p-4 sm:p-5 border border-zinc-850 hover:border-zinc-700 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-black border border-zinc-800 text-zinc-300 group-hover:bg-white group-hover:text-black transition-colors">
                    <IconBook size={16} />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black border border-zinc-850 text-zinc-400">
                    {total} Chapters
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {subj}
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">CHSE Odisha Board Syllabus</p>

                {/* Progress bar */}
                <div className="mt-3.5 pt-3 border-t border-zinc-850">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-zinc-400 text-[11px]">
                      {done} of {total} completed
                    </span>
                    <span className="text-white font-mono text-[11px] font-semibold">{pct}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white transition-all duration-500 rounded-full"
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
      <div className="bg-zinc-950 rounded-xl p-5 border border-zinc-850">
        <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3.5">
          Weekly CHSE Readiness Targets
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {[
            { label: "Target Lectures", current: Object.keys(completedMap).length, target: 12 },
            { label: "Practice Units", current: Math.min(8, Math.floor(Object.keys(completedMap).length / 3)), target: 8 },
            { label: "Consistency Streak", current: streakCount, target: 7 },
          ].map((g, i) => {
            const pct = Math.min(100, Math.round((g.current / g.target) * 100));
            return (
              <div
                key={i}
                className="p-3.5 rounded-lg bg-black border border-zinc-850 flex items-center justify-between gap-3.5"
              >
                <div>
                  <div className="text-xs font-medium text-zinc-400">{g.label}</div>
                  <div className="text-base font-bold text-white mt-0.5 font-mono">
                    {g.current} / {g.target}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-white font-semibold">{pct}%</span>
                  <div className="w-16 h-1.5 bg-zinc-900 rounded-full overflow-hidden mt-1">
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
