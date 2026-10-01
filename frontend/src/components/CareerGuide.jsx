import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { CAREERS_DATA } from "../data/careersData.js";
import {
  IconChevronDown,
  IconCheck,
  IconArrowRight,
  IconBook,
  IconBookmark,
  IconSparkles,
} from "./Icons.jsx";

export const CareerGuide = () => {
  const { currentStream, setCurrentStream, setCurrentSection } = useApp();
  const { user, setAuthModalOpen, setAuthMode } = useAuth();

  const [activeStream, setActiveStream] = useState(currentStream || "Science");
  const [expandedCards, setExpandedCards] = useState({
    "sci-btech": true,
    "com-ca": true,
    "art-civil": true,
  });

  const careers = CAREERS_DATA[activeStream] || [];

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSaveGoal = (careerTitle) => {
    if (!user) {
      if (setAuthMode) setAuthMode("login");
      if (setAuthModalOpen) setAuthModalOpen(true);
      return;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1f1f1f]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-[#262626] text-neutral-300 text-xs font-mono mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span>POST +2 HIGHER EDUCATION ADVISORY</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Complete Career Roadmaps After Class 12
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-2xl leading-relaxed">
            Verified higher education roadmaps, national entrance examinations, salary brackets, and curriculum requirements for Odisha students.
          </p>
        </div>

        {/* Stream Filter Switcher (Vercel Style) */}
        <div className="flex bg-[#0a0a0a] p-1 rounded-2xl border border-[#222222] shrink-0 self-start md:self-auto">
          {["Science", "Commerce", "Arts"].map((st) => (
            <button
              key={st}
              onClick={() => {
                setActiveStream(st);
                setCurrentStream(st);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeStream === st
                  ? "bg-white text-black shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {st} Stream
            </button>
          ))}
        </div>
      </div>

      {/* Guest Sign-In Banner */}
      {!user && (
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0a0a0a] border border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0">
              <IconBook size={18} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Save career goals to your student dashboard</div>
              <div className="text-xs text-neutral-400">Track target entrance exam deadlines and syllabus milestones across all your devices.</div>
            </div>
          </div>
          <button
            onClick={() => {
              setAuthMode("register");
              setAuthModalOpen(true);
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-white hover:bg-neutral-200 shrink-0 transition-all shadow-sm"
          >
            Create Free Account
          </button>
        </div>
      )}

      {/* Career Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {careers.map((c) => {
          const isExpanded = Boolean(expandedCards[c.id]);

          return (
            <div
              key={c.id}
              className="rounded-3xl bg-[#0a0a0a] border border-[#222222] p-6 sm:p-7 space-y-5 hover:border-neutral-500 transition-all shadow-xl"
            >
              {/* Header & Tag */}
              <div>
                <div className="inline-block text-[10px] font-mono uppercase px-2.5 py-1 rounded-lg bg-black text-neutral-300 border border-[#262626] mb-3">
                  {c.tag}
                </div>
                <h3 className="text-xl font-black text-white tracking-tight leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              {/* Badges / Metrics Row */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-black text-white border border-[#262626]">
                  Salary: {c.salary}
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-black text-neutral-300 border border-[#262626]">
                  Exam: {c.exam}
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-black text-neutral-400 border border-[#262626]">
                  Duration: {c.duration}
                </span>
              </div>

              {/* Expand Toggle */}
              <button
                onClick={() => toggleExpand(c.id)}
                className="w-full pt-4 border-t border-[#1f1f1f] flex items-center justify-between text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
              >
                <span>{isExpanded ? "Hide detailed roadmap" : "View step-by-step career milestones"}</span>
                <IconChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>

              {/* Step-by-Step Milestones */}
              {isExpanded && (
                <div className="space-y-5 pt-3 border-t border-[#1f1f1f] animate-fadeIn">
                  {/* Milestones list */}
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-3">
                      Milestone Timeline
                    </h4>
                    <div className="space-y-2.5">
                      {c.roadmap?.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs text-neutral-300">
                          <span className="w-5 h-5 rounded-lg bg-black border border-[#262626] text-white flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Required Skills */}
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
                      Key Required Skills & Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {c.skills?.map((s, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-black border border-[#222222] text-neutral-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => handleSaveGoal(c.title)}
                      className="text-xs font-semibold text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <IconBookmark size={14} className="text-white" />
                      <span>Bookmark Career Goal</span>
                    </button>

                    <button
                      onClick={() => {
                        setCurrentSection("dashboard");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-xs font-semibold text-white hover:text-neutral-300 flex items-center gap-1"
                    >
                      <span>Study Syllabus</span>
                      <IconArrowRight size={13} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerGuide;
