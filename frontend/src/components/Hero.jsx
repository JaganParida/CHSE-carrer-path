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
  IconSparkles,
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
    playVideo,
    getChapterVideo,
  } = useApp();
  const { user } = useAuth();

  const subjects = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];
  const [selectedPreviewSubject, setSelectedPreviewSubject] = useState(subjects[0] || "Physics");

  // Keep selected preview subject in sync when stream changes
  const activePreviewSubject = subjects.includes(selectedPreviewSubject)
    ? selectedPreviewSubject
    : subjects[0] || "Physics";

  // Get first 3 real chapters for the preview subject
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

  return (
    <section className="relative overflow-hidden py-10 md:py-16 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/40">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Academic Scope Switchers & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/25 text-blue-400 text-xs font-bold tracking-wide">
              <IconSparkles size={14} className="text-blue-400" />
              <span>OFFICIAL CHSE ODISHA (+2) CURRICULUM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Master Your CHSE Board Exams with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Total Precision
              </span>
              .
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Structured syllabus chapters, curated YouTube video lectures, auto-saved revision notes, and post-12th career roadmaps for{" "}
              <span className="text-white font-semibold">Science, Commerce, and Arts</span>.
            </p>

            {/* Quick Interactive Stream & Class Switcher */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              {/* Stream Segmented Controls */}
              <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
                {["Science", "Commerce", "Arts"].map((st) => (
                  <button
                    key={st}
                    onClick={() => {
                      setCurrentStream(st);
                      const newSubs = STREAM_SUBJECTS[st] || [];
                      if (newSubs.length > 0) setSelectedPreviewSubject(newSubs[0]);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      currentStream === st
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Class Toggle */}
              <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
                {["11", "12"].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setCurrentClass(cls)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      currentClass === cls
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Class {cls}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button
                onClick={() => {
                  const el = document.getElementById("syllabus-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Explore Subject Syllabus</span>
                <IconArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  setCurrentSection("career");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center gap-2"
              >
                <IconBook size={16} className="text-blue-400" />
                <span>Career Roadmaps</span>
              </button>
            </div>

            {/* Metrics Trust Row */}
            <div className="pt-6 grid grid-cols-4 gap-3 max-w-md mx-auto lg:mx-0 border-t border-slate-800/80">
              <div>
                <div className="text-lg sm:text-xl font-black text-white">500+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Lectures</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-white">15+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subjects</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-white">11 & 12</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Classes</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-emerald-400">100%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Free</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Syllabus Explorer Preview */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-5 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <IconBook size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      Curriculum Preview
                    </h3>
                    <div className="text-[11px] text-slate-400">
                      {currentStream} Stream · Class {currentClass} (+2)
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Live Syllabus
                </span>
              </div>

              {/* Subject Tabs */}
              <div className="flex gap-1.5 overflow-x-auto py-3 scrollbar-none border-b border-slate-800/80">
                {subjects.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedPreviewSubject(s)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      activePreviewSubject === s
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-950 text-slate-400 hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Interactive Chapters List */}
              <div className="space-y-2.5 pt-4">
                {previewChapters.map((ch, idx) => {
                  const videoData = getChapterVideo(ch);
                  const isDone = Boolean(user?.completedTopics?.[ch.id]);

                  return (
                    <div
                      key={ch.id || idx}
                      className="group p-3 rounded-2xl bg-slate-950/70 hover:bg-slate-950 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between gap-3 transition-all"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-7 h-7 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 group-hover:text-blue-400">
                          {idx + 1}
                        </span>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                            {ch.title}
                          </div>
                          <div className="text-[11px] text-slate-400 truncate flex items-center gap-1.5 mt-0.5">
                            <span>{ch.unitName || activePreviewSubject}</span>
                            <span>•</span>
                            <span className="text-slate-400 font-mono text-[10px]">
                              {ch.duration || "45 min"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isDone && (
                          <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                            <IconCheck size={12} />
                          </span>
                        )}
                        <button
                          onClick={() => handlePlayChapter(ch)}
                          className="px-3 py-1.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 border border-blue-500/20 hover:border-transparent"
                        >
                          <IconPlay size={12} />
                          <span>Watch</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* View Full Subject Syllabus Link */}
              <div className="pt-4 mt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  {currentUnits.reduce((acc, u) => acc + (u.chapters?.length || 0), 0)} total chapters in {activePreviewSubject}
                </span>
                <button
                  onClick={() => {
                    setCurrentSubject(activePreviewSubject);
                    setCurrentSection("subject");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <span>Explore Subject</span>
                  <IconArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
