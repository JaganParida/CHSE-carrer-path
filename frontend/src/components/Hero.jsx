import React from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { STREAM_SUBJECTS, SUBJ_THEMES } from "../data/syllabusData.js";
import {
  IconPlay,
  IconCheck,
  IconFire,
  IconClock,
  IconArrowRight,
  IconCrown,
} from "./Icons.jsx";

export const Hero = () => {
  const { currentStream, setCurrentSubject, setCurrentSection, setCurrentClass } = useApp();
  const { setAuthModalOpen, setAuthMode, user } = useAuth();

  const subjects = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];

  return (
    <div className="relative overflow-hidden py-12 md:py-20 border-b border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-600/15 to-indigo-500/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Microcopy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-300 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
              <span>CHSE ODISHA · COMPLETE PREP PLATFORM (2026-27)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Master CHSE with{" "}
              <span className="bg-gradient-to-r from-brand-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">
                Curated Video Lectures
              </span>{" "}
              & Syllabus Precision.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Structured chapters, updated board syllabus, auto-saving smart notes, 52-week streak tracking, and verified competitive entrance pathways for <b className="text-white">Science, Commerce, and Arts</b>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => setCurrentSection("dashboard")}
                className="px-6 py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-xl shadow-brand-500/25 flex items-center gap-2 group transition-all"
              >
                <span>Go to Student Dashboard</span>
                <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setCurrentSection("admin")}
                className="px-5 py-3.5 rounded-xl font-bold text-sm text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors flex items-center gap-2"
              >
                <IconCrown size={16} className="text-amber-400" />
                <span>Admin Studio</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 grid grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0 border-t border-slate-800/80">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">500+</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase">Videos</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">15+</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase">Subjects</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">11 & 12</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase">Classes</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase">Free</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Mockup */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => setCurrentSection("dashboard")}
              className="relative cursor-pointer group rounded-2xl glass-panel p-4 border border-slate-800 shadow-2xl transition-transform hover:-translate-y-1"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="text-[11px] font-mono text-slate-500 bg-obsidian-900 px-3 py-0.5 rounded-full border border-slate-800">
                  chsetube.edu/chse-dashboard
                </div>
              </div>

              {/* Video Mockup Preview */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-obsidian-900 border border-slate-800 mb-3 group/thumb">
                <img
                  src="https://img.youtube.com/vi/P_r3N9pC5p4/mqdefault.jpg"
                  alt="Physics Class"
                  className="w-full h-full object-cover opacity-85 group-hover/thumb:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand-600/90 text-white flex items-center justify-center shadow-lg shadow-brand-500/40 group-hover/thumb:scale-110 transition-transform">
                    <IconPlay size={20} />
                  </div>
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white font-bold">
                  <span>Class 12 · Physics: Electric Charges</span>
                  <span className="px-2 py-0.5 rounded bg-black/60 font-mono text-[10px]">YouTube HD</span>
                </div>
              </div>

              {/* Micro stats cards */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="p-2.5 rounded-xl bg-obsidian-900/90 border border-slate-800/90 flex items-center gap-2">
                  <span className="text-emerald-400 p-1.5 rounded-lg bg-emerald-500/10">
                    <IconCheck size={14} />
                  </span>
                  <div>
                    <div className="text-xs font-bold text-white">Unit 1 Completed</div>
                    <div className="text-[10px] text-slate-400">Class 12 Physics</div>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-obsidian-900/90 border border-slate-800/90 flex items-center gap-2">
                  <span className="text-amber-400 p-1.5 rounded-lg bg-amber-500/10">
                    <IconFire size={14} />
                  </span>
                  <div>
                    <div className="text-xs font-bold text-white">12 Day Streak</div>
                    <div className="text-[10px] text-slate-400">Consistent study</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="text-[11px] text-center text-slate-400 pt-1 font-medium">
                Click anywhere to open live interactive student dashboard →
              </div>
            </div>
          </div>
        </div>

        {/* Subjects Directory Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="text-center text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-4">
            CHSE ODISHA · COMPLETE {currentStream.toUpperCase()} SYLLABUS DIRECTORY
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {subjects.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setCurrentSubject(s);
                  setCurrentSection("subject");
                }}
                className="px-4 py-2 rounded-full glass-panel border border-slate-800 hover:border-brand-500/40 hover:bg-obsidian-800 text-xs font-bold text-slate-300 hover:text-white transition-all hover:-translate-y-0.5"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

