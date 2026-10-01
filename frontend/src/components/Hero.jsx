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

  return (
    <section className="relative overflow-hidden py-10 md:py-16 border-b border-[#1e2025] bg-[#090a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Academic Scope Switchers & CTAs */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111215] border border-[#23252a] text-zinc-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>OFFICIAL CHSE ODISHA (+2) PLATFORM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight leading-[1.15]">
              Master Your CHSE Board Exams with{" "}
              <span className="text-zinc-400">
                Precision
              </span>
              .
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Structured syllabus chapters, verified YouTube video lectures, auto-saved revision notes, and competitive entrance roadmaps for{" "}
              <span className="text-zinc-200 font-medium">Science, Commerce, and Arts</span>.
            </p>

            {/* Quick Interactive Stream & Class Switcher */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5">
              {/* Stream Segmented Controls */}
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
                        ? "bg-white text-zinc-950 font-bold shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Class Toggle */}
              <div className="flex bg-[#111215] p-1 rounded-lg border border-[#23252a]">
                {["11", "12"].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setCurrentClass(cls)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      currentClass === cls
                        ? "bg-white text-zinc-950 font-bold shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Class {cls}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={() => {
                  const el = document.getElementById("syllabus-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm text-zinc-950 bg-white hover:bg-zinc-200 shadow-sm flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>Explore Subject Syllabus</span>
                <IconArrowRight size={15} />
              </button>

              <button
                onClick={() => {
                  setCurrentSection("career");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-4 py-2.5 rounded-lg font-medium text-xs sm:text-sm text-zinc-300 hover:text-white bg-[#111215] hover:bg-[#16181d] border border-[#23252a] transition-colors flex items-center gap-2"
              >
                <IconBook size={15} className="text-zinc-300" />
                <span>Career Roadmaps</span>
              </button>
            </div>

            {/* Metrics Trust Row */}
            <div className="pt-5 grid grid-cols-4 gap-2 max-w-md mx-auto lg:mx-0 border-t border-[#1e2025]">
              <div>
                <div className="text-lg font-bold text-zinc-100">500+</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Lectures</div>
              </div>
              <div>
                <div className="text-lg font-bold text-zinc-100">15+</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Subjects</div>
              </div>
              <div>
                <div className="text-lg font-bold text-zinc-100">11 & 12</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Classes</div>
              </div>
              <div>
                <div className="text-lg font-bold text-emerald-400">100%</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Free</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Syllabus Explorer Preview */}
          <div className="lg:col-span-6">
            <div className="bg-[#111215] rounded-xl border border-[#23252a] p-5 shadow-xl relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#1e2025] gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#0c0d0f] border border-[#23252a] text-zinc-200 flex items-center justify-center shrink-0">
                    <IconBook size={14} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-200 leading-tight">
                      Curriculum Preview
                    </h3>
                    <div className="text-[11px] text-zinc-500 font-mono">
                      {currentStream} Stream · Class {currentClass} (+2)
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0c0d0f] text-zinc-400 border border-[#23252a]">
                  Live Syllabus
                </span>
              </div>

              {/* Subject Tabs */}
              <div className="flex gap-1.5 overflow-x-auto py-2.5 scrollbar-none border-b border-[#1e2025]">
                {subjects.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedPreviewSubject(s)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                      activePreviewSubject === s
                        ? "bg-white text-zinc-950 font-semibold shadow-sm"
                        : "bg-[#0c0d0f] text-zinc-400 border border-[#1e2024] hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Interactive Chapters List */}
              <div className="space-y-2 pt-3">
                {previewChapters.map((ch, idx) => {
                  const videoData = getChapterVideo(ch);
                  const isDone = Boolean(user?.completedTopics?.[ch.id]);

                  return (
                    <div
                      key={ch.id || idx}
                      className="group p-2.5 rounded-lg bg-[#0c0d0f] hover:bg-[#141518] border border-[#1e2024] hover:border-[#2f323a] flex items-center justify-between gap-3 transition-all"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-6 h-6 rounded-md bg-[#111215] border border-[#23252a] text-zinc-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 group-hover:text-white">
                          {idx + 1}
                        </span>
                        <div className="min-w-0">
                          <div className="text-xs font-medium text-zinc-200 truncate">
                            {ch.title}
                          </div>
                          <div className="text-[10px] text-zinc-500 truncate flex items-center gap-1.5 mt-0.5 font-mono">
                            <span>{ch.unitName || activePreviewSubject}</span>
                            <span>•</span>
                            <span>{ch.duration || "45 min"}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isDone && (
                          <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                            <IconCheck size={10} />
                          </span>
                        )}
                        <button
                          onClick={() => handlePlayChapter(ch)}
                          className="px-2.5 py-1 rounded-md bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-semibold transition-all flex items-center gap-1 shadow-sm"
                        >
                          <IconPlay size={11} />
                          <span>Watch</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* View Full Subject Syllabus Link */}
              <div className="pt-3 mt-2 border-t border-[#1e2025] flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-mono text-[11px]">
                  {currentUnits.reduce((acc, u) => acc + (u.chapters?.length || 0), 0)} total chapters in {activePreviewSubject}
                </span>
                <button
                  onClick={() => {
                    setCurrentSubject(activePreviewSubject);
                    setCurrentSection("subject");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="font-medium text-zinc-200 hover:text-white flex items-center gap-1"
                >
                  <span>Explore Subject</span>
                  <IconArrowRight size={12} />
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
