import React from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { STREAM_SUBJECTS, SYLLABUS_DATA } from "../data/syllabusData.js";
import {
  IconPlay,
  IconCheck,
  IconFire,
  IconArrowRight,
  IconCrown,
} from "./Icons.jsx";

export const Hero = () => {
  const { currentStream, setCurrentSubject, setCurrentSection, currentClass, playVideo } = useApp();
  const { setAuthModalOpen, setAuthMode, user } = useAuth();

  const subjects = STREAM_SUBJECTS[currentStream] || STREAM_SUBJECTS["Science"];

  const handleStartSampleVideo = () => {
    const physicsUnits = SYLLABUS_DATA["Physics"]?.["12"] || [];
    const firstChapter = physicsUnits[0]?.chapters?.[0] || {
      id: "phy12-u1-c1",
      title: "Electric Charges and Fields",
      desc: "Coulomb's Law, forces between charges, electric fields, flux and Gauss's theorem.",
      videoUrl: "https://youtu.be/P_r3N9pC5p4",
    };
    setCurrentSubject("Physics");
    playVideo(firstChapter, "Physics", "12");
  };

  return (
    <div className="relative overflow-hidden py-10 md:py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>CHSE ODISHA · CURRICULUM DIRECTORY (2026–2027)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Master CHSE with{" "}
              <span className="text-blue-500">
                Curated Video Lectures
              </span>{" "}
              & Syllabus Precision.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Updated board syllabus, auto-saving chapter notes, daily streak tracking, and verified career pathways for <b className="text-white">Science, Commerce, and Arts</b>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={() => {
                  const el = document.getElementById("syllabus-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all"
              >
                <span>Browse Chapter Syllabus</span>
                <IconArrowRight size={16} />
              </button>

              <button
                onClick={() => setCurrentSection("admin")}
                className="px-5 py-3 rounded-xl font-bold text-sm text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors flex items-center gap-2"
              >
                <IconCrown size={16} className="text-amber-400" />
                <span>Admin Studio</span>
              </button>
            </div>

            {/* Metrics */}
            <div className="pt-6 grid grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0 border-t border-slate-800">
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
          <div className="lg:col-span-5">
            <div
              onClick={handleStartSampleVideo}
              className="relative cursor-pointer group rounded-2xl bg-slate-900 p-4 border border-slate-800 shadow-2xl transition-all hover:border-slate-700"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-0.5 rounded-full border border-slate-800">
                  chse.odisha.gov.in · syllabus
                </div>
              </div>

              {/* Video Mockup Preview */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 mb-3 group/thumb">
                <img
                  src="https://img.youtube.com/vi/P_r3N9pC5p4/mqdefault.jpg"
                  alt="Physics Class"
                  className="w-full h-full object-cover opacity-85 group-hover/thumb:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/40 group-hover/thumb:scale-110 transition-transform">
                    <IconPlay size={20} />
                  </div>
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white font-bold">
                  <span className="truncate pr-2">Class 12 · Physics: Electric Charges</span>
                  <span className="px-2 py-0.5 rounded bg-black/70 font-mono text-[10px] shrink-0">
                    Watch HD
                  </span>
                </div>
              </div>

              {/* Micro stats cards */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
                  <span className="text-emerald-400 p-1.5 rounded-lg bg-emerald-500/10">
                    <IconCheck size={14} />
                  </span>
                  <div>
                    <div className="text-xs font-bold text-white">Unit 1 Completed</div>
                    <div className="text-[10px] text-slate-400">Class 12 Physics</div>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
                  <span className="text-amber-400 p-1.5 rounded-lg bg-amber-500/10">
                    <IconFire size={14} />
                  </span>
                  <div>
                    <div className="text-xs font-bold text-white">Study Streak</div>
                    <div className="text-[10px] text-slate-400">Track daily progress</div>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-center text-slate-400 pt-1 font-medium group-hover:text-blue-400 transition-colors">
                Click to open interactive video lecture & notes player →
              </div>
            </div>
          </div>
        </div>

        {/* Subjects Directory Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="text-center text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
            CHSE ODISHA · COMPLETE {currentStream.toUpperCase()} SUBJECT DIRECTORY
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {subjects.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setCurrentSubject(s);
                  setCurrentSection("subject");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-all"
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
