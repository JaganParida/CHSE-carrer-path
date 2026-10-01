import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import {
  IconLogo,
  IconPlay,
  IconCheck,
  IconArrowRight,
  IconBook,
  IconVideo,
  IconNote,
  IconChart,
  IconMap,
  IconSparkles,
} from "./Icons.jsx";

export const LandingPage = () => {
  const { setAuthModalOpen, setAuthMode } = useAuth();
  const [selectedStreamTab, setSelectedStreamTab] = useState("Science");

  const openAuth = (mode = "register", defaultStream = "Science") => {
    if (setAuthMode) setAuthMode(mode);
    if (setAuthModalOpen) setAuthModalOpen(true);
  };

  const streamDetails = {
    Science: {
      tag: "PCM / Biology / IT",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology (Botany & Zoology)", "Information Technology"],
      description: "Complete unit-by-unit syllabus coverage for engineering & medical aspirants with direct entrance alignment (JEE / NEET / OUAT).",
      chaptersCount: "84+ Chapters",
    },
    Commerce: {
      tag: "Accounting & Business",
      subjects: ["Accountancy", "Business Studies", "Business Mathematics & Statistics", "Banking & Insurance"],
      description: "Structured foundations for CA Foundation, CMA, CS, and university finance programs with real-world case studies.",
      chaptersCount: "52+ Chapters",
    },
    Arts: {
      tag: "Humanities & Social Sciences",
      subjects: ["Political Science", "History", "Economics", "Sociology", "Education"],
      description: "Comprehensive notes, constitution fundamentals, and civil services (UPSC / OPSC) orientation after Class 12.",
      chaptersCount: "68+ Chapters",
    },
  };

  return (
    <div className="min-h-screen bg-[#090a0c] text-zinc-100 flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Landing Header */}
      <header className="sticky top-0 z-30 w-full bg-[#090a0c]/90 backdrop-blur-md border-b border-[#1f2127]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-zinc-100 text-zinc-950 flex items-center justify-center font-bold shadow-sm">
              <IconLogo size={15} />
            </div>
            <span className="font-bold text-sm tracking-tight text-zinc-100">
              CHSE<span className="text-zinc-400">Tube</span>
            </span>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-[#23252a] text-zinc-400 hidden sm:inline">
              Odisha (+2)
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => openAuth("login")}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => openAuth("register")}
              className="px-3.5 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white text-xs font-semibold shadow-sm transition-all"
            >
              Create Account
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 md:py-24 border-b border-[#1f2127]">
        {/* Soft background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-white/[0.018] blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111215] border border-[#23252a] text-zinc-300 text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>COUNCIL OF HIGHER SECONDARY EDUCATION, ODISHA (+2)</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-100 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            The Digital Study Platform Built for <span className="text-zinc-400">CHSE Odisha (+2)</span>.
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Eliminate YouTube clutter and distractions. Access official syllabus chapters, curated teacher lectures, autosaved chapter notebooks, and career roadmaps in one focused portal.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <button
              onClick={() => openAuth("register")}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Create Free Student Account</span>
              <IconArrowRight size={14} />
            </button>
            <button
              onClick={() => openAuth("login")}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#111215] hover:bg-[#18191d] border border-[#23252a] text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all"
            >
              Sign In to Your Dashboard
            </button>
          </div>

          {/* Key Value Highlights */}
          <div className="mt-12 pt-8 border-t border-[#1f2127] grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left font-mono">
            <div className="bg-[#111215] p-3.5 rounded-lg border border-[#23252a]">
              <div className="text-zinc-400 text-[11px] uppercase tracking-wider">Access</div>
              <div className="text-sm font-bold text-zinc-100 mt-1">100% Free Forever</div>
            </div>
            <div className="bg-[#111215] p-3.5 rounded-lg border border-[#23252a]">
              <div className="text-zinc-400 text-[11px] uppercase tracking-wider">Curriculum</div>
              <div className="text-sm font-bold text-zinc-100 mt-1">CHSE 2026–2027</div>
            </div>
            <div className="bg-[#111215] p-3.5 rounded-lg border border-[#23252a]">
              <div className="text-zinc-400 text-[11px] uppercase tracking-wider">Streams</div>
              <div className="text-sm font-bold text-zinc-100 mt-1">Science · Com · Arts</div>
            </div>
            <div className="bg-[#111215] p-3.5 rounded-lg border border-[#23252a]">
              <div className="text-zinc-400 text-[11px] uppercase tracking-wider">Focus</div>
              <div className="text-sm font-bold text-zinc-100 mt-1">Zero Distractions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Streams Breakdown */}
      <section className="py-12 sm:py-16 border-b border-[#1f2127] bg-[#0c0d0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
              Curriculum Tailored for Every Stream
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Select your academic stream to see how your syllabus is structured with verified lectures.
            </p>

            {/* Stream Tabs */}
            <div className="mt-5 inline-flex bg-[#111215] p-1 rounded-lg border border-[#23252a]">
              {["Science", "Commerce", "Arts"].map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStreamTab(st)}
                  className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    selectedStreamTab === st
                      ? "bg-zinc-100 text-zinc-950 shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {st} Stream
                </button>
              ))}
            </div>
          </div>

          {/* Active Stream Card */}
          <div className="max-w-3xl mx-auto bg-[#111215] rounded-xl border border-[#23252a] p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1f2127]">
              <div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-[#0c0d0f] border border-[#23252a] text-zinc-300">
                  {streamDetails[selectedStreamTab].tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mt-2">
                  {selectedStreamTab} Stream (+2 1st & 2nd Year)
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-[#0c0d0f] border border-[#23252a] text-zinc-300 self-start sm:self-auto">
                {streamDetails[selectedStreamTab].chaptersCount}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {streamDetails[selectedStreamTab].description}
            </p>

            <div>
              <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2.5">
                Core Subjects Included:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {streamDetails[selectedStreamTab].subjects.map((sub, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0c0d0f] border border-[#23252a] text-xs text-zinc-200"
                  >
                    <IconBook size={14} className="text-zinc-400 shrink-0" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-zinc-500 font-mono">
                Class 11 & Class 12 unit breakdowns available
              </span>
              <button
                onClick={() => openAuth("register", selectedStreamTab)}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <span>Enroll in {selectedStreamTab} Free</span>
                <IconArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars Grid */}
      <section className="py-12 sm:py-16 border-b border-[#1f2127] bg-[#090a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
              Why Serious CHSE Students Use CHSETube
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Everything you need to master your +2 Board Examinations without tuition stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center">
                <IconBook size={16} />
              </div>
              <h3 className="text-sm font-bold text-zinc-100">100% CHSE Syllabus Mapping</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Unit-by-unit curriculum matching official CHSE Odisha text structure. Never study off-syllabus content.
              </p>
            </div>

            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center">
                <IconVideo size={16} />
              </div>
              <h3 className="text-sm font-bold text-zinc-100">Distraction-Free Theater</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Watch verified top educator lectures in high definition without algorithmic rabbit holes or comments.
              </p>
            </div>

            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center">
                <IconNote size={16} />
              </div>
              <h3 className="text-sm font-bold text-zinc-100">Auto-Saving Chapter Notes</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Jot key formulas, definitions, and questions while streaming. Export all revision notes anytime as plain text.
              </p>
            </div>

            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center">
                <IconMap size={16} />
              </div>
              <h3 className="text-sm font-bold text-zinc-100">Post +2 Career Roadmaps</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Step-by-step guidance for national entrances: JEE, NEET, CA, CUET, NDA, and civil service milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-12 sm:py-16 bg-[#0c0d0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-950 flex items-center justify-center mx-auto font-bold shadow-md">
            <IconLogo size={22} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-100 tracking-tight">
            Ready to Ace Your CHSE Board Exams?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Create your personalized student profile in seconds. Select your stream and class to access your dedicated learning portal.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openAuth("register")}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              Get Started Free Now
            </button>
            <button
              onClick={() => openAuth("login")}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#111215] hover:bg-[#18191d] border border-[#23252a] text-zinc-300 text-xs sm:text-sm font-medium transition-all"
            >
              Already Registered? Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Simple Clean Footer */}
      <footer className="border-t border-[#1f2127] bg-[#090a0c] py-8 text-center text-xs text-zinc-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p>© {new Date().getFullYear()} CHSETube — Council of Higher Secondary Education, Odisha (+2) Digital Learning Initiative.</p>
          <p className="text-zinc-600 text-[11px]">100% Free Open Education Resource for Students across Odisha.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
