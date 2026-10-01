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
    <section className="relative overflow-hidden py-12 md:py-20 border-b border-[#1f1f1f] bg-black">
      {/* Vercel subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-white/[0.02] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Academic Scope Switchers & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Vercel Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0a0a] border border-[#262626] text-neutral-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span>OFFICIAL CHSE ODISHA (+2) PLATFORM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Master Your CHSE Board Exams with{" "}
              <span className="text-neutral-400">
                Precision
              </span>
              .
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Structured syllabus chapters, verified YouTube video lectures, auto-saved revision notes, and competitive entrance roadmaps for{" "}
              <span className="text-white font-medium">Science, Commerce, and Arts</span>.
            </p>

            {/* Quick Interactive Stream & Class Switcher (Vercel Style) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              {/* Stream Segmented Controls */}
              <div className="flex bg-[#0a0a0a] p-1 rounded-xl border border-[#222222]">
                {["Science", "Commerce", "Arts"].map((st) => (
                  <button
                    key={st}
                    onClick={() => {
                      setCurrentStream(st);
                      const newSubs = STREAM_SUBJECTS[st] || [];
                      if (newSubs.length > 0) setSelectedPreviewSubject(newSubs[0]);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      currentStream === st
                        ? "bg-white text-black shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Class Toggle */}
              <div className="flex bg-[#0a0a0a] p-1 rounded-xl border border-[#222222]">
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

            {/* Action Buttons (Vercel Style) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button
                onClick={() => {
                  const el = document.getElementById("syllabus-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-black bg-white hover:bg-neutral-200 shadow-sm flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Explore Subject Syllabus</span>
                <IconArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  setCurrentSection("career");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-neutral-300 hover:text-white bg-[#0a0a0a] hover:bg-[#141414] border border-[#222222] transition-colors flex items-center gap-2"
              >
                <IconBook size={16} className="text-white" />
                <span>Career Roadmaps</span>
              </button>
            </div>

            {/* Metrics Trust Row */}
            <div className="pt-6 grid grid-cols-4 gap-3 max-w-md mx-auto lg:mx-0 border-t border-[#1f1f1f]">
              <div>
                <div className="text-lg sm:text-xl font-black text-white">500+</div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Lectures</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-white">15+</div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Subjects</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-white">11 & 12</div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Classes</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-white">100%</div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Free</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Syllabus Explorer Preview */}
          <div className="lg:col-span-6">
            <div className="bg-[#0a0a0a] rounded-3xl border border-[#222222] p-5 sm:p-6 shadow-2xl relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1f1f1f] gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
                    <IconBook size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      Curriculum Preview
                    </h3>
                    <div className="text-[11px] text-neutral-400">
                      {currentStream} Stream · Class {currentClass} (+2)
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                  Live Syllabus
                </span>
              </div>

              {/* Subject Tabs */}
              <div className="flex gap-1.5 overflow-x-auto py-3 scrollbar-none border-b border-[#1f1f1f]">
                {subjects.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedPreviewSubject(s)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      activePreviewSubject === s
                        ? "bg-white text-black shadow-sm"
                        : "bg-black text-neutral-400 border border-[#222222] hover:text-white"
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
                      className="group p-3 rounded-2xl bg-black hover:bg-[#111111] border border-[#1f1f1f] hover:border-[#333333] flex items-center justify-between gap-3 transition-all"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-7 h-7 rounded-xl bg-[#0a0a0a] border border-[#222222] text-neutral-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 group-hover:text-white">
                          {idx + 1}
                        </span>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white truncate">
                            {ch.title}
                          </div>
                          <div className="text-[11px] text-neutral-400 truncate flex items-center gap-1.5 mt-0.5 font-mono">
                            <span>{ch.unitName || activePreviewSubject}</span>
                            <span>•</span>
                            <span className="text-neutral-500 text-[10px]">
                              {ch.duration || "45 min"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isDone && (
                          <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center">
                            <IconCheck size={12} />
                          </span>
                        )}
                        <button
                          onClick={() => handlePlayChapter(ch)}
                          className="px-3 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
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
              <div className="pt-4 mt-2 border-t border-[#1f1f1f] flex items-center justify-between text-xs">
                <span className="text-neutral-400">
                  {currentUnits.reduce((acc, u) => acc + (u.chapters?.length || 0), 0)} total chapters in {activePreviewSubject}
                </span>
                <button
                  onClick={() => {
                    setCurrentSubject(activePreviewSubject);
                    setCurrentSection("subject");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="font-semibold text-white hover:text-neutral-300 flex items-center gap-1"
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
