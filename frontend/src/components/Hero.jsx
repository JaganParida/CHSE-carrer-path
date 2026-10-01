import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { STREAM_SUBJECTS, SYLLABUS_DATA } from "../data/syllabusData.js";
import {
  IconPlay,
  IconCheck,
  IconArrowRight,
  IconBook,
  IconVideo,
  IconFire,
} from "./Icons.jsx";

export const Hero = () => {
  const {
    currentStream,
    setCurrentStream,
    currentSubject,
    setCurrentSubject,
    setCurrentSection,
    currentClass,
    setCurrentClass,
    isStudentLocked,
    playVideo,
    getChapterVideo,
  } = useApp();
  const { user, isAdmin } = useAuth();

  const subjects = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];
  const [selectedPreviewSubject, setSelectedPreviewSubject] = useState(subjects[0] || "Physics");

  const activePreviewSubject = subjects.includes(selectedPreviewSubject)
    ? selectedPreviewSubject
    : subjects[0] || "Physics";

  const currentUnits = SYLLABUS_DATA[activePreviewSubject]?.[currentClass] || [];
  const previewChapters = [];
  currentUnits.forEach((unit) => {
    unit.chapters?.forEach((ch) => {
      if (previewChapters.length < 3) {
        previewChapters.push({ ...ch, unitName: unit.unit });
      }
    });
  });

  const handlePlayChapter = (chapter) => {
    setCurrentSubject(activePreviewSubject);
    playVideo(chapter, activePreviewSubject, currentClass);
  };

  const streak = user?.streak?.count || 1;
  const completedCount = Object.keys(user?.completedTopics || {}).length;

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 border-b border-[#1f2127] bg-[#090a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Heading, Scope & CTAs */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            {/* Student Welcome / Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111215] border border-[#23252a] text-zinc-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>
                {user ? `ENROLLED: CLASS ${currentClass} · ${currentStream.toUpperCase()} STREAM` : "CHSE ODISHA (+2) SYLLABUS"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight leading-[1.15]">
              {user ? (
                <>Welcome back, <span className="text-zinc-400">{user.name?.split(" ")[0]}</span></>
              ) : (
                <>Master Your CHSE Board Exams with <span className="text-zinc-400">Precision</span>.</>
              )}
            </h1>

            {/* Sub-headline */}
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Structured CHSE Odisha unit breakdowns, verified YouTube video masterclasses, and auto-saving chapter revision notebooks.
            </p>

            {/* Switchers (Only enabled for admin; students are locked to their enrollment) */}
            {isAdmin ? (
              <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2">
                <div className="flex bg-[#111215] p-1 rounded-lg border border-[#23252a]">
                  {["Science", "Commerce", "Arts"].map((st) => (
                    <button
                      key={st}
                      onClick={() => {
                        setCurrentStream(st);
                        const newSubs = STREAM_SUBJECTS[st] || [];
                        if (newSubs.length > 0) setSelectedPreviewSubject(newSubs[0]);
                      }}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                        currentStream === st
                          ? "bg-zinc-100 text-zinc-950 font-bold shadow-sm"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                <div className="flex bg-[#111215] p-1 rounded-lg border border-[#23252a]">
                  {["11", "12"].map((cls) => (
                    <button
                      key={cls}
                      onClick={() => setCurrentClass(cls)}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                        currentClass === cls
                          ? "bg-zinc-100 text-zinc-950 font-bold shadow-sm"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Class {cls}
                    </button>
                  ))}
                </div>
              </div>
            ) : user ? (
              /* Enrolled Student Quick Summary Bar */
              <div className="pt-1 flex items-center justify-center lg:justify-start gap-3 text-xs font-mono">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111215] border border-[#23252a] text-zinc-300">
                  <IconFire size={13} className="text-amber-400" />
                  <span>{streak} Day Streak</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111215] border border-[#23252a] text-zinc-300">
                  <IconCheck size={13} className="text-emerald-400" />
                  <span>{completedCount} Chapters Done</span>
                </div>
              </div>
            ) : null}

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <a
                href="#syllabus-section"
                className="px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>Browse Syllabus Units</span>
                <IconArrowRight size={13} />
              </a>

              <button
                onClick={() => {
                  setCurrentSection("progress");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-3.5 py-2.5 rounded-lg bg-[#111215] hover:bg-[#18191d] border border-[#23252a] text-zinc-300 text-xs font-medium transition-colors"
              >
                View Study Analytics
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Subject Quick-Preview Widget */}
          <div className="lg:col-span-6">
            <div className="bg-[#111215] rounded-xl border border-[#23252a] p-4 sm:p-5 shadow-sm space-y-3.5">
              {/* Widget Header & Subject Tabs */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1f2127]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-zinc-200">
                    Recommended Next Chapter
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">
                  {currentStream} · Class {currentClass}
                </span>
              </div>

              {/* Subject selector pills */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                {subjects.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedPreviewSubject(s)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
                      activePreviewSubject === s
                        ? "bg-zinc-100 text-zinc-950 font-bold shadow-sm"
                        : "bg-[#0c0d0f] text-zinc-400 border border-[#23252a] hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Chapter Cards List */}
              <div className="space-y-2">
                {previewChapters.map((ch) => {
                  const video = getChapterVideo(ch);
                  return (
                    <div
                      key={ch.id}
                      onClick={() => handlePlayChapter(ch)}
                      className="p-3 rounded-lg bg-[#0c0d0f] border border-[#23252a] hover:border-[#383b44] cursor-pointer transition-all flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-md bg-[#16171b] border border-[#23252a] text-zinc-300 flex items-center justify-center shrink-0 group-hover:bg-zinc-100 group-hover:text-zinc-950 transition-colors">
                          <IconPlay size={13} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-zinc-100 group-hover:text-white truncate">
                            {video.title}
                          </div>
                          <div className="text-[10px] text-zinc-400 font-mono truncate mt-0.5">
                            {ch.unitName?.split(":")[0] || "Unit"} · {activePreviewSubject}
                          </div>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111215] text-zinc-300 border border-[#23252a] shrink-0">
                        Play
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
