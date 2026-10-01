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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/25 text-blue-400 text-xs font-bold mb-2">
            <IconSparkles size={14} />
            <span>POST +2 HIGHER EDUCATION ADVISORY</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Complete Career Roadmaps After Class 12
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Verified higher education roadmaps, national entrance examinations, salary brackets, and curriculum requirements for Odisha students.
          </p>
        </div>

        {/* Stream Filter Switcher */}
        <div className="flex bg-slate-900 p-1 rounded-2xl border border-slate-800 shrink-0 self-start md:self-auto">
          {["Science", "Commerce", "Arts"].map((st) => (
            <button
              key={st}
              onClick={() => {
                setActiveStream(st);
                setCurrentStream(st);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeStream === st
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {st} Stream
            </button>
          ))}
        </div>
      </div>

      {/* Guest Sign-In Banner */}
      {!user && (
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
              <IconBook size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Save career goals to your student dashboard</div>
              <div className="text-xs text-slate-400">Track target entrance exam deadlines and syllabus milestones across all your devices.</div>
            </div>
          </div>
          <button
            onClick={() => {
              setAuthMode("register");
              setAuthModalOpen(true);
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shrink-0 transition-all shadow-md shadow-blue-500/20"
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
              className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-7 space-y-5 hover:border-slate-700 transition-all shadow-xl"
            >
              {/* Header & Tag */}
              <div>
                <div className="inline-block text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
                  {c.tag}
                </div>
                <h3 className="text-xl font-black text-white tracking-tight leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              {/* Badges / Metrics Row */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Salary: {c.salary}
                </span>
                <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Exam: {c.exam}
                </span>
                <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700">
                  Duration: {c.duration}
                </span>
              </div>

              {/* Expand Toggle */}
              <button
                onClick={() => toggleExpand(c.id)}
                className="w-full pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-slate-400 hover:text-white transition-colors"
              >
                <span>{isExpanded ? "Hide detailed roadmap" : "View step-by-step career milestones"}</span>
                <IconChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>

              {/* Step-by-Step Milestones */}
              {isExpanded && (
                <div className="space-y-5 pt-3 border-t border-slate-800/80 animate-fadeIn">
                  {/* Milestones list */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Milestone Timeline
                    </h4>
                    <div className="space-y-2.5">
                      {c.roadmap?.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs text-slate-200">
                          <span className="w-5 h-5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Required Skills */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Key Required Skills & Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {c.skills?.map((s, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800 text-slate-300"
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
                      className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <IconBookmark size={14} className="text-blue-400" />
                      <span>Bookmark Career Goal</span>
                    </button>

                    <button
                      onClick={() => {
                        setCurrentSection("dashboard");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
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
