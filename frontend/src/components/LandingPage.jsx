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
  IconChevronDown,
  IconFire,
  IconClock,
  IconShield,
} from "./Icons.jsx";

export const LandingPage = () => {
  const { setAuthModalOpen, setAuthMode } = useAuth();
  const [selectedStreamTab, setSelectedStreamTab] = useState("Science");
  const [expandedSubjectIndex, setExpandedSubjectIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const openAuth = (mode = "register", defaultStream = "Science") => {
    if (setAuthMode) setAuthMode(mode);
    if (setAuthModalOpen) setAuthModalOpen(true);
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const streamData = {
    Science: {
      tag: "PCM / BIOLOGY / IT TRACK",
      badge: "+2 1st & 2nd Year (Class 11 & 12)",
      description:
        "Directly aligned with official Council of Higher Secondary Education syllabus guidelines for Odisha junior colleges, with strong conceptual continuity for JEE Main, NEET UG, and OUAT entrance preparation.",
      chaptersTotal: "84+ Chapters",
      entranceFocus: "JEE Main · NEET UG · OUAT · IISER",
      subjects: [
        {
          name: "Physics",
          units: "Electrostatics, Current Electricity, Optics, Magnetism, Modern Physics, Dual Nature",
          chapters: "24 Chapters",
          syllabusCode: "CHSE-PHY-12",
        },
        {
          name: "Chemistry",
          units: "Solid State, Solutions, Electrochemistry, Chemical Kinetics, Coordination Compounds, Organic",
          chapters: "26 Chapters",
          syllabusCode: "CHSE-CHM-12",
        },
        {
          name: "Mathematics",
          units: "Relations & Functions, Calculus, Vectors, 3D Geometry, Linear Programming, Probability",
          chapters: "22 Chapters",
          syllabusCode: "CHSE-MTH-12",
        },
        {
          name: "Biology (Botany & Zoology)",
          units: "Official 5-Unit Structure: Reproduction, Genetics & Evolution, Biology in Human Welfare, Biotech, Ecology",
          chapters: "28 Chapters",
          syllabusCode: "CHSE-BIO-12",
        },
        {
          name: "Information Technology",
          units: "Computer Networking, Relational Databases, Web Technologies, Object-Oriented Java Programming",
          chapters: "16 Chapters",
          syllabusCode: "CHSE-IT-12",
        },
      ],
    },
    Commerce: {
      tag: "ACCOUNTING & FINANCE TRACK",
      badge: "+2 1st & 2nd Year (Class 11 & 12)",
      description:
        "Comprehensive conceptual coverage for commerce higher secondary students, bridging board syllabus with foundational readiness for CA Foundation, CMA, CS, and university B.Com/BBA admissions.",
      chaptersTotal: "52+ Chapters",
      entranceFocus: "CA Foundation · CMA · CS · CUET B.Com",
      subjects: [
        {
          name: "Accountancy",
          units: "Partnership Accounts, Accounting for Share Capital, Debentures, Financial Statement Analysis, Cash Flow",
          chapters: "18 Chapters",
          syllabusCode: "CHSE-ACT-12",
        },
        {
          name: "Business Studies & Management",
          units: "Principles of Management, Business Environment, Planning, Marketing, Financial Markets, Consumer Protection",
          chapters: "16 Chapters",
          syllabusCode: "CHSE-BSM-12",
        },
        {
          name: "Business Mathematics & Statistics",
          units: "Determinants, Matrices, Measures of Central Tendency & Dispersion, Correlation, Probability Distributions",
          chapters: "14 Chapters",
          syllabusCode: "CHSE-BMS-12",
        },
        {
          name: "Banking & Insurance",
          units: "Commercial Banking Operations, Reserve Bank of India Functions, Life Insurance Principles, Marine & Fire",
          chapters: "12 Chapters",
          syllabusCode: "CHSE-BNK-12",
        },
      ],
    },
    Arts: {
      tag: "HUMANITIES & SOCIAL SCIENCES TRACK",
      badge: "+2 1st & 2nd Year (Class 11 & 12)",
      description:
        "Structured chapter video masterclasses covering official CHSE arts disciplines, building intellectual depth for Central University admissions (CUET UG), state civil services, and law entrance exams.",
      chaptersTotal: "68+ Chapters",
      entranceFocus: "CUET UG · CLAT · OPSC Foundation · Civil Services",
      subjects: [
        {
          name: "Political Science",
          units: "Indian Constitution at Work, Political Theory, Contemporary World Politics, Politics in India Since Independence",
          chapters: "18 Chapters",
          syllabusCode: "CHSE-POL-12",
        },
        {
          name: "History",
          units: "Themes in Ancient Indian History, Medieval Cultural Trends, Colonialism and the National Movement",
          chapters: "16 Chapters",
          syllabusCode: "CHSE-HIS-12",
        },
        {
          name: "Economics",
          units: "Introductory Microeconomics, Macroeconomic Equilibria, Indian Economic Development & Policies",
          chapters: "16 Chapters",
          syllabusCode: "CHSE-ECO-12",
        },
        {
          name: "Sociology",
          units: "Structure of Indian Society, Social Institutions, Social Inequality & Exclusion, Processes of Social Change",
          chapters: "14 Chapters",
          syllabusCode: "CHSE-SOC-12",
        },
        {
          name: "Education",
          units: "Principles of Modern Education, Educational Psychology, Learning Theories, Educational Statistics",
          chapters: "12 Chapters",
          syllabusCode: "CHSE-EDU-12",
        },
      ],
    },
  };

  const activeStream = streamData[selectedStreamTab];

  const faqs = [
    {
      q: "Is CHSETube completely free for Odisha students?",
      a: "Yes. CHSETube is 100% free and open access. There are no paywalls, hidden fees, or subscription tiers. Every syllabus unit breakdown, curated chapter lecture, study notepad, and career roadmap is accessible freely.",
    },
    {
      q: "Does the curriculum strictly follow Council of Higher Secondary Education guidelines?",
      a: "Yes. Every single unit, chapter title, and topic progression is modeled directly on the approved syllabus prescribed by CHSE Odisha for Class 11 (+2 1st Year) and Class 12 (+2 2nd Year), including the official 5-unit Biology format.",
    },
    {
      q: "Why is my Stream and Class locked after registration?",
      a: "Higher secondary board preparation requires sustained focus. Locking your profile to your enrolled Class and Stream (e.g., Class 12 Science) ensures your dashboard is completely tailored to your board exam without unrelated content distractions.",
    },
    {
      q: "How does the built-in lecture notepad work?",
      a: "Every video lecture has a synchronized, real-time notepad. As you type formulas, definitions, and questions while streaming, your notes autosave locally and to your student account. You can download and export all chapter notes as a plain .txt document anytime for offline exam revision.",
    },
    {
      q: "Is CHSETube optimized for mobile phones?",
      a: "Yes, CHSETube is designed mobile-first. Videos stream in clean 16:9 theater format, unit accordions are touch-friendly, and you can switch between your chapter notes and lecture playlist seamlessly on any smartphone screen.",
    },
    {
      q: "What do the Post +2 Career Roadmaps cover?",
      a: "After +2, students face vital competitive entrance exams. Our roadmaps provide structured milestone timelines, exam patterns, eligibility rules, and preparation strategies for JEE Main, NEET UG, OUAT, CA Foundation, CUET UG, CLAT, and state civil services.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-white selection:text-black antialiased">
      {/* Precision Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="CHSETube"
              className="w-8 h-8 object-contain shrink-0 drop-shadow-sm select-none"
              width={32}
              height={32}
              loading="eager"
            />
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white">
                CHSE<span className="text-zinc-500 font-light">Tube</span>
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-white/[0.06] text-zinc-400 hidden sm:inline">
                Odisha (+2)
              </span>
            </div>
          </div>

          {/* Quick anchor links (desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-400">
            <a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#roadmaps" className="hover:text-white transition-colors">Career Roadmaps</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* Direct Auth Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => openAuth("login")}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => openAuth("register")}
              className="px-3.5 py-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-semibold shadow-sm transition-all"
            >
              Create Account
            </button>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO (Clean, No Badges, Single CTA, Interactive Software Preview) */}
      <section className="relative overflow-hidden pt-16 sm:pt-24 pb-16 sm:pb-24 border-b border-white/[0.06] bg-black">
        {/* Soft background radial mask */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-white/[0.02] blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            The Digital Study Platform Built for <span className="text-zinc-500 font-medium">CHSE Odisha (+2)</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Eliminate YouTube distraction loops. Access official syllabus chapter lectures, synchronized revision notebooks, and post-12th career roadmaps in one focused workspace.
          </p>

          {/* Single High-Contrast CTA Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => openAuth("register")}
              className="px-7 py-3.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Create Free Student Account</span>
              <IconArrowRight size={14} />
            </button>
          </div>

          {/* Metric Bar */}
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-white/[0.04] border border-white/[0.06] rounded-xl bg-[#0c0d10] font-mono text-center overflow-hidden">
            <div className="p-3.5 sm:p-4">
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Access</div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">100% Free Forever</div>
            </div>
            <div className="p-3.5 sm:p-4">
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Syllabus</div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">Official CHSE 2026–27</div>
            </div>
            <div className="p-3.5 sm:p-4">
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Streams</div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">Science · Commerce · Arts</div>
            </div>
            <div className="p-3.5 sm:p-4">
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Environment</div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">Ad-Free & Distraction-Free</div>
            </div>
          </div>

          {/* Interactive Live Product Preview Mockup */}
          <div className="mt-14 max-w-5xl mx-auto text-left">
            <div className="rounded-xl border border-white/[0.06] bg-[#0c0d10] shadow-2xl overflow-hidden">
              {/* Window Chrome Header */}
              <div className="px-4 py-3 bg-[#08090b] border-b border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/[0.1]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/[0.1]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/[0.1]" />
                  <span className="text-zinc-500 ml-2 hidden sm:inline">portal.chsetube.edu · Class 12 Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-zinc-400 text-[11px]">Live Syllabus Mode</span>
                </div>
              </div>

              {/* Mock Workspace Interior */}
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.04]">
                {/* Left: Syllabus Tree Preview */}
                <div className="lg:col-span-4 p-4 space-y-3 bg-[#08090b]/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono">Physics · 24 Chapters</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/[0.06] text-zinc-400">
                      Unit 1 of 5
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-4 h-4 rounded bg-emerald-400/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <IconCheck size={10} />
                        </span>
                        <span className="text-xs font-medium text-zinc-100 truncate">Electric Charges & Fields</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 shrink-0">38 min</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-4 h-4 rounded bg-white text-black flex items-center justify-center shrink-0">
                          <IconPlay size={8} />
                        </span>
                        <span className="text-xs font-semibold text-white truncate">Electrostatic Potential</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 shrink-0">Playing</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-transparent border border-white/[0.04] flex items-center justify-between gap-2 text-zinc-500">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-4 h-4 rounded border border-white/[0.06] flex items-center justify-center shrink-0 text-[10px] font-mono">
                          3
                        </span>
                        <span className="text-xs truncate">Capacitance & Dielectrics</span>
                      </div>
                      <span className="text-[10px] font-mono shrink-0">44 min</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-transparent border border-white/[0.04] flex items-center justify-between gap-2 text-zinc-500">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-4 h-4 rounded border border-white/[0.06] flex items-center justify-center shrink-0 text-[10px] font-mono">
                          4
                        </span>
                        <span className="text-xs truncate">Current Electricity & Ohm's Law</span>
                      </div>
                      <span className="text-[10px] font-mono shrink-0">52 min</span>
                    </div>
                  </div>
                </div>

                {/* Right: Theater Screen + Synced Notes */}
                <div className="lg:col-span-8 p-4 sm:p-5 flex flex-col justify-between bg-black/60">
                  {/* Mock Video Canvas */}
                  <div className="aspect-video w-full rounded-lg bg-black border border-white/[0.06] relative flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <div className="text-center z-20 space-y-2 p-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/[0.1] text-white flex items-center justify-center mx-auto shadow-md">
                        <IconPlay size={18} />
                      </div>
                      <div className="text-xs font-semibold text-white">Electrostatic Potential & Capacitance</div>
                      <div className="text-[10px] text-zinc-400 font-mono">CHSE Class 12 Physics · Full Concept Lecture</div>
                    </div>
                  </div>

                  {/* Synchronized Chapter Notepad Mock */}
                  <div className="mt-3 p-3 rounded-lg bg-[#090a0d] border border-white/[0.06] font-mono text-[11px] space-y-1">
                    <div className="flex items-center justify-between text-zinc-500 pb-1 border-b border-white/[0.06]">
                      <span className="flex items-center gap-1.5 text-zinc-400 font-medium">
                        <IconNote size={11} /> Auto-Saving Study Notepad
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">Saved to Cloud</span>
                    </div>
                    <p className="text-zinc-300 pt-1">
                      <span className="text-zinc-500 font-mono">Formula:</span> V = (1 / 4πε₀) · (q / r)
                    </p>
                    <p className="text-zinc-400">
                      <span className="text-zinc-500 font-mono">Key Point:</span> Work done in moving charge around closed equipotential surface = 0.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CURRICULUM ARCHITECTURE (Interactive Split View, Not Box-Inside-Box) */}
      <section id="curriculum" className="py-16 sm:py-24 border-b border-white/[0.06] bg-transparent scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow & Header */}
          <div className="max-w-3xl mb-12">
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
              01 / CURRICULUM ARCHITECTURE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Strictly Mapped to the Council of Higher Secondary Education Syllabus
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Every unit and topic breakdown mirrors official textbook blueprints prescribed for Odisha junior colleges.
            </p>

            {/* Stream Switcher Tabs */}
            <div className="mt-6 inline-flex bg-[#0c0d10] p-1 rounded-lg border border-white/[0.06]">
              {["Science", "Commerce", "Arts"].map((st) => (
                <button
                  key={st}
                  onClick={() => {
                    setSelectedStreamTab(st);
                    setExpandedSubjectIndex(0);
                  }}
                  className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    selectedStreamTab === st
                      ? "bg-white text-black shadow-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {st} Stream
                </button>
              ))}
            </div>
          </div>

          {/* Split Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Stream Profile & Direct Enrollment CTA */}
            <div className="lg:col-span-5 p-6 rounded-xl border border-white/[0.06] bg-[#0c0d10] space-y-5">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                  {activeStream.tag}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedStreamTab} Stream Curriculum
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  {activeStream.badge}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {activeStream.description}
              </p>

              <div className="pt-2 border-t border-white/[0.06] space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Total Video Coverage:</span>
                  <span className="text-white font-bold">{activeStream.chaptersTotal}</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Competitive Scope:</span>
                  <span className="text-zinc-200">{activeStream.entranceFocus}</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => openAuth("register", selectedStreamTab)}
                  className="w-full py-3 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Enroll in {selectedStreamTab} Free</span>
                  <IconArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Subjects & Unit Breakdown */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                Core Subjects & Major Units ({activeStream.subjects.length} Subjects)
              </div>

              {activeStream.subjects.map((sub, idx) => {
                const isExpanded = expandedSubjectIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all ${
                      isExpanded
                        ? "border-white/[0.14] bg-[#0e0f12] shadow-sm"
                        : "border-white/[0.06] bg-[#0c0d10] hover:border-white/[0.12]"
                    }`}
                  >
                    <button
                      onClick={() => setExpandedSubjectIndex(isExpanded ? null : idx)}
                      className="w-full p-4 flex items-center justify-between gap-3 text-left"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-7 h-7 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-300 flex items-center justify-center shrink-0">
                          <IconBook size={13} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{sub.name}</div>
                          <div className="text-[11px] font-mono text-zinc-500 mt-0.5">{sub.syllabusCode}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/[0.06] text-zinc-300">
                          {sub.chapters}
                        </span>
                        <IconChevronDown
                          size={14}
                          className={`text-zinc-400 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 pt-1 text-xs text-zinc-400 border-t border-white/[0.06] space-y-2">
                        <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                          Syllabus Units & Prescribed Chapters:
                        </div>
                        <p className="leading-relaxed text-zinc-300 font-sans">
                          {sub.units}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS (Architectural Numbered Process) */}
      <section id="how-it-works" className="py-16 sm:py-24 border-b border-white/[0.06] bg-black scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
              02 / STUDY WORKFLOW
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineered to Eliminate Distractions & Drive Retention
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              A 4-step academic framework designed specifically for Council of Higher Secondary Education board examinees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0c0d10] relative space-y-3">
              <span className="text-2xl font-black font-mono text-zinc-600">01</span>
              <h3 className="text-sm font-bold text-white">Enroll Stream & Class</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Choose Class 11 or 12 and your stream. Your dashboard is automatically locked to prevent clutter from other courses.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0c0d10] relative space-y-3">
              <span className="text-2xl font-black font-mono text-zinc-600">02</span>
              <h3 className="text-sm font-bold text-white">Clean Collapsed Units</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                All syllabus units start clean and collapsed. Expand one chapter at a time to stay calm and structured.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0c0d10] relative space-y-3">
              <span className="text-2xl font-black font-mono text-zinc-600">03</span>
              <h3 className="text-sm font-bold text-white">Distraction-Free Theater</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Stream verified high-definition YouTube masterclasses with zero algorithm traps, recommendations, or comments.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0c0d10] relative space-y-3">
              <span className="text-2xl font-black font-mono text-zinc-600">04</span>
              <h3 className="text-sm font-bold text-white">Auto-Saving Notepad</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Record formulas and definitions while streaming. Everything synchronizes automatically and exports as text anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PLATFORM ADVANTAGES (Bento Grid) */}
      <section id="features" className="py-16 sm:py-24 border-b border-white/[0.06] bg-transparent scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
              03 / PLATFORM CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Everything Higher Secondary Students Need
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Purpose-built tools designed to give Odisha students an unfair advantage in their board results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Bento 1: Large Span 2 */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-[#0c0d10] space-y-4">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white flex items-center justify-center">
                <IconBook size={16} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                100% CHSE Odisha Syllabus Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
                Unlike generic national portals that follow standard CBSE tracks, CHSETube is organized directly around CHSE Council guidelines—including Odisha-specific unit splits and Biology Botany/Zoology demarcation.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 font-mono text-[10px]">
                <span className="px-2 py-1 rounded bg-black/60 border border-white/[0.06] text-zinc-300">Council Guidelines</span>
                <span className="px-2 py-1 rounded bg-black/60 border border-white/[0.06] text-zinc-300">Unit-by-Unit</span>
                <span className="px-2 py-1 rounded bg-black/60 border border-white/[0.06] text-zinc-300">Odisha Board Mapped</span>
              </div>
            </div>

            {/* Bento 2 */}
            <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0c0d10] space-y-4">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white flex items-center justify-center">
                <IconVideo size={16} />
              </div>
              <h3 className="text-base font-bold text-white">Distraction-Free Theater</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Stream curated top educator lectures in 16:9 theater format without clickbait thumbnails, sidebar algorithmic rabbit holes, or comment arguments.
              </p>
            </div>

            {/* Bento 3 */}
            <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0c0d10] space-y-4">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white flex items-center justify-center">
                <IconNote size={16} />
              </div>
              <h3 className="text-base font-bold text-white">Real-Time Revision Notes</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Jot key formulas and definitions while listening. Everything saves in real time and can be exported as a single offline .txt document for final board exam revision.
              </p>
            </div>

            {/* Bento 4 */}
            <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0c0d10] space-y-4">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white flex items-center justify-center">
                <IconChart size={16} />
              </div>
              <h3 className="text-base font-bold text-white">24-Week Consistency Matrix</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Track your active study streak and syllabus percentage across an activity grid, helping you maintain consistency across all semesters.
              </p>
            </div>

            {/* Bento 5: Large Span 2 */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-xl border border-white/[0.06] bg-[#0c0d10] space-y-4">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white flex items-center justify-center">
                <IconMap size={16} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Post-12th Competitive Exam Roadmaps
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
                Full milestone roadmaps for JEE Main, NEET UG, OUAT Veterinary, CA Foundation, CUET UG, CLAT, and civil services—including eligibility, exam timelines, and syllabus strategies.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 font-mono text-[10px]">
                <span className="px-2 py-1 rounded bg-black/60 border border-white/[0.06] text-zinc-300">JEE Main / OJEE</span>
                <span className="px-2 py-1 rounded bg-black/60 border border-white/[0.06] text-zinc-300">NEET / OUAT</span>
                <span className="px-2 py-1 rounded bg-black/60 border border-white/[0.06] text-zinc-300">CA / CMA / CS</span>
                <span className="px-2 py-1 rounded bg-black/60 border border-white/[0.06] text-zinc-300">CUET UG / CLAT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CAREER ROADMAPS */}
      <section id="roadmaps" className="py-16 sm:py-24 border-b border-white/[0.06] bg-black scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
              04 / HIGHER EDUCATION
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Post-12th Career Roadmaps
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Step-by-step milestone timelines, national exam patterns, and salary insights for Odisha students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-white/[0.06] bg-[#0c0d10] space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/60 border border-white/[0.06] text-zinc-300">
                Engineering & Tech
              </span>
              <h3 className="text-sm font-bold text-white">B.Tech / JEE Roadmap</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Milestones for JEE Main, JEE Advanced, and OJEE state admissions to top NITs, IITs, IIITs, and government engineering colleges.
              </p>
              <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.06]">
                4 Years · Exam: JEE Main
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.06] bg-[#0c0d10] space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/60 border border-white/[0.06] text-zinc-300">
                Medicine & Life Sciences
              </span>
              <h3 className="text-sm font-bold text-white">MBBS & Allied Sciences</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                NEET UG, OUAT Veterinary, BDS, B.Pharm, and Nursing admission tracks for SCB Cuttack, MKCG Berhampur, and VIMSAR Burla.
              </p>
              <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.06]">
                5.5 Years · Exam: NEET UG
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.06] bg-[#0c0d10] space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/60 border border-white/[0.06] text-zinc-300">
                Commerce & Finance
              </span>
              <h3 className="text-sm font-bold text-white">Chartered Accountancy</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Complete ICAI CA Foundation, Intermediate, and Articleship roadmap alongside university B.Com Honours graduation.
              </p>
              <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.06]">
                4.5 Years · Exam: CA Foundation
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.06] bg-[#0c0d10] space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/60 border border-white/[0.06] text-zinc-300">
                Humanities & Law
              </span>
              <h3 className="text-sm font-bold text-white">Law & Civil Services</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                National Law Universities via CLAT Integrated BA-LLB, Central Universities via CUET UG, and early OPSC/UPSC strategy.
              </p>
              <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.06]">
                3–5 Years · Exam: CUET / CLAT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION (Line-divider style, NO chunky boxes) */}
      <section id="faq" className="py-16 sm:py-24 border-b border-white/[0.06] bg-transparent scroll-mt-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
              05 / QUESTIONS & ANSWERS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Clear answers regarding curriculum mapping, mobile accessibility, and academic policies.
            </p>
          </div>

          <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 py-2 hover:text-white transition-colors group select-none"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white">
                      {faq.q}
                    </span>
                    <IconChevronDown
                      size={15}
                      className={`text-zinc-500 group-hover:text-zinc-300 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-2 pb-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION (Stark Black & White) */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt="CHSETube Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-2xl transition-transform hover:scale-105 select-none"
              width={96}
              height={96}
            />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Ace Your CHSE Board Exams?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Create your free student account in 30 seconds. Choose your stream and class to unlock your personalized curriculum dashboard.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
            <button
              onClick={() => openAuth("register")}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white hover:bg-zinc-200 text-black font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              Get Started Free Now
            </button>
            <button
              onClick={() => openAuth("login")}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#0e0f12] hover:bg-white/[0.04] border border-white/[0.06] text-zinc-300 text-xs sm:text-sm font-medium transition-all"
            >
              Sign In to Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Minimalist Public Student Footer (Strictly Student Links, Zero Admin Mentions) */}
      <footer className="border-t border-white/[0.06] bg-black py-10 text-center text-xs text-zinc-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/logo.png"
              alt="CHSETube Logo"
              className="w-5 h-5 object-contain"
              width={20}
              height={20}
            />
            <span className="text-zinc-300 font-sans font-semibold">CHSETube</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Council of Higher Secondary Education, Odisha (+2) Digital Learning Initiative</span>
          </div>
          <p>© {new Date().getFullYear()} CHSETube. Free Open Education Resource for Students across Odisha.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
