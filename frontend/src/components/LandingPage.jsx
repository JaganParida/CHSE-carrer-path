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
  IconChevronDown,
  IconFire,
  IconClock,
  IconUser,
} from "./Icons.jsx";

export const LandingPage = () => {
  const { setAuthModalOpen, setAuthMode } = useAuth();
  const [selectedStreamTab, setSelectedStreamTab] = useState("Science");
  const [activeFaq, setActiveFaq] = useState(null);

  const openAuth = (mode = "register", defaultStream = "Science") => {
    if (setAuthMode) setAuthMode(mode);
    if (setAuthModalOpen) setAuthModalOpen(true);
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const streamDetails = {
    Science: {
      tag: "PCM / Biology / IT",
      badge: "Class 11 & 12 · Engineering & Medical Track",
      subjects: [
        { name: "Physics", units: "Electrostatics, Optics, Magnetism, Modern Physics", chapters: "24 Chapters" },
        { name: "Chemistry", units: "Solid State, Solutions, Electrochemistry, Organic", chapters: "26 Chapters" },
        { name: "Mathematics", units: "Relations, Calculus, Vectors, 3D Geometry, Linear Prog", chapters: "22 Chapters" },
        { name: "Biology (Botany & Zoology)", units: "Official 5-Unit Format: Reproduction, Genetics, Biotech", chapters: "28 Chapters" },
        { name: "Information Technology", units: "Networking, Database Systems, Web Tech, Java", chapters: "16 Chapters" },
      ],
      description: "Directly mapped to Council of Higher Secondary Education guidelines for Odisha science colleges, with seamless integration for JEE Main, NEET UG, and OUAT entrance preparation.",
      chaptersTotal: "84+ Chapters",
    },
    Commerce: {
      tag: "Accounting, Finance & Trade",
      badge: "Class 11 & 12 · Corporate & Finance Track",
      subjects: [
        { name: "Accountancy", units: "Partnership, Share Capital, Debentures, Cash Flow", chapters: "18 Chapters" },
        { name: "Business Studies", units: "Principles of Management, Marketing, Financial Markets", chapters: "16 Chapters" },
        { name: "Business Math & Stats", units: "Determinants, Matrices, Measures of Dispersion, Probability", chapters: "14 Chapters" },
        { name: "Banking & Insurance", units: "Commercial Banking, Central Banking, Life Insurance, Fire", chapters: "12 Chapters" },
      ],
      description: "Robust conceptual mastery for commerce higher secondary students preparing for CA Foundation, CMA, CS, and top B.Com / BBA entrance examinations across India.",
      chaptersTotal: "52+ Chapters",
    },
    Arts: {
      tag: "Humanities & Social Sciences",
      badge: "Class 11 & 12 · Civil Services & Law Track",
      subjects: [
        { name: "Political Science", units: "Constitution at Work, Political Theory, Contemporary World", chapters: "18 Chapters" },
        { name: "History", units: "Ancient India, Medieval Trends, Modern National Movement", chapters: "16 Chapters" },
        { name: "Economics", units: "Microeconomics, Macroeconomics, Indian Economic Development", chapters: "16 Chapters" },
        { name: "Sociology", units: "Indian Society, Social Institutions, Social Change", chapters: "14 Chapters" },
        { name: "Education", units: "Principles of Education, Educational Psychology, Statistics", chapters: "12 Chapters" },
      ],
      description: "In-depth conceptual lectures covering the complete CHSE Odisha arts syllabus, designed to build strong foundations for CUET UG, OPSC, and UPSC civil service aspirants.",
      chaptersTotal: "68+ Chapters",
    },
  };

  const faqs = [
    {
      q: "Is CHSETube completely free for Odisha students?",
      a: "Yes, CHSETube is 100% free and open access. There are no paywalls, paid subscriptions, or locked units. Every chapter lecture, syllabus unit breakdown, notepad, and career guide is accessible at zero cost.",
    },
    {
      q: "Does the curriculum strictly follow official CHSE Odisha guidelines?",
      a: "Yes. Every single unit, chapter name, and breakdown is modeled directly on the approved syllabus prescribed by the Council of Higher Secondary Education (CHSE), Odisha for Class 11 (+2 1st Year) and Class 12 (+2 2nd Year), including the official 5-unit Biology format.",
    },
    {
      q: "Can I use CHSETube comfortably on my smartphone?",
      a: "Absolutely. CHSETube is optimized mobile-first. Videos play in clean 16:9 theater format, unit accordions are easy to tap, and you can switch between your chapter notes and playlist with a single tap on small screens.",
    },
    {
      q: "Why is my Stream and Class locked after registration?",
      a: "CHSE board exams demand deep focus. Once you enroll in your Class and Stream (e.g., Class 12 Science), your dashboard locks to your syllabus so you are never distracted by unrelated content or accidentally studying the wrong course.",
    },
    {
      q: "How does the built-in study notepad work?",
      a: "Every video lecture has a dedicated notepad. As you type formulas, definitions, or questions, your notes autosave in real time. You can export all your chapter notes as a clean .txt document anytime for offline exam revision.",
    },
    {
      q: "What are the Post +2 Career Roadmaps?",
      a: "After +2, students face crucial entrance exams (JEE, NEET, OUAT, CA Foundation, CUET, CLAT, NDA, OPSC). Our Career Guide gives you step-by-step milestones, exam dates, eligibility criteria, salary ranges, and prep strategies.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#090a0c] text-zinc-100 flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-[#090a0c]/90 backdrop-blur-md border-b border-[#1f2127]">
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

          {/* Quick anchor links (desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-400">
            <a href="#curriculum" className="hover:text-zinc-100 transition-colors">Curriculum</a>
            <a href="#how-it-works" className="hover:text-zinc-100 transition-colors">How It Works</a>
            <a href="#features" className="hover:text-zinc-100 transition-colors">Features</a>
            <a href="#roadmaps" className="hover:text-zinc-100 transition-colors">Career Roadmaps</a>
            <a href="#faq" className="hover:text-zinc-100 transition-colors">FAQ</a>
          </nav>

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

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden py-14 sm:py-20 md:py-28 border-b border-[#1f2127]">
        {/* Soft background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-white/[0.018] blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111215] border border-[#23252a] text-zinc-300 text-xs font-mono mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>COUNCIL OF HIGHER SECONDARY EDUCATION, ODISHA (+2)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-zinc-100 tracking-tight leading-[1.12] max-w-4xl mx-auto">
            The Digital Study Platform Built for <span className="text-zinc-400">CHSE Odisha (+2)</span>.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Eliminate YouTube clutter, distractions, and confusion. Access official syllabus chapters, curated teacher masterclasses, autosaved chapter notebooks, and entrance roadmaps in one focused portal.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <button
              onClick={() => openAuth("register")}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Enroll Free as Student</span>
              <IconArrowRight size={14} />
            </button>
            <button
              onClick={() => openAuth("login")}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#111215] hover:bg-[#18191d] border border-[#23252a] text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all"
            >
              Sign In to Dashboard
            </button>
          </div>

          {/* Key Value Highlights Grid */}
          <div className="mt-12 pt-8 border-t border-[#1f2127] grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto text-left font-mono">
            <div className="bg-[#111215] p-3.5 rounded-xl border border-[#23252a] shadow-sm">
              <div className="text-zinc-500 text-[10px] uppercase tracking-wider">Access Model</div>
              <div className="text-xs sm:text-sm font-bold text-zinc-100 mt-1">100% Free Forever</div>
            </div>
            <div className="bg-[#111215] p-3.5 rounded-xl border border-[#23252a] shadow-sm">
              <div className="text-zinc-500 text-[10px] uppercase tracking-wider">Board Curriculum</div>
              <div className="text-xs sm:text-sm font-bold text-zinc-100 mt-1">CHSE 2026–2027</div>
            </div>
            <div className="bg-[#111215] p-3.5 rounded-xl border border-[#23252a] shadow-sm">
              <div className="text-zinc-500 text-[10px] uppercase tracking-wider">Streams Covered</div>
              <div className="text-xs sm:text-sm font-bold text-zinc-100 mt-1">Science · Com · Arts</div>
            </div>
            <div className="bg-[#111215] p-3.5 rounded-xl border border-[#23252a] shadow-sm">
              <div className="text-zinc-500 text-[10px] uppercase tracking-wider">Study Focus</div>
              <div className="text-xs sm:text-sm font-bold text-zinc-100 mt-1">Zero Distraction</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CURRICULUM BREAKDOWN */}
      <section id="curriculum" className="py-14 sm:py-20 border-b border-[#1f2127] bg-[#0c0d0f] scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#111215] border border-[#23252a] text-zinc-400 mb-2">
              SYLLABUS ARCHITECTURE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Curriculum Tailored for Every Stream
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Official unit-by-unit syllabus breakdown with curated masterclass video lectures, chapter notes, and exam roadmap.
            </p>

            {/* Stream Switcher Tabs */}
            <div className="mt-6 inline-flex bg-[#111215] p-1 rounded-lg border border-[#23252a]">
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

          {/* Active Stream Detailed Box */}
          <div className="max-w-4xl mx-auto bg-[#111215] rounded-xl border border-[#23252a] p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1f2127]">
              <div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0c0d0f] border border-[#23252a] text-zinc-300">
                  {streamDetails[selectedStreamTab].tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mt-2">
                  {selectedStreamTab} Stream (+2 1st & 2nd Year)
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  {streamDetails[selectedStreamTab].badge}
                </p>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-[#0c0d0f] border border-[#23252a] text-zinc-300 self-start sm:self-auto">
                {streamDetails[selectedStreamTab].chaptersTotal}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {streamDetails[selectedStreamTab].description}
            </p>

            {/* Subjects List */}
            <div>
              <div className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                Core Subjects & Major Unit Breakdown:
              </div>
              <div className="space-y-2">
                {streamDetails[selectedStreamTab].subjects.map((sub, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-[#0c0d0f] border border-[#23252a] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-[#16171b] border border-[#23252a] text-zinc-300 flex items-center justify-center shrink-0">
                        <IconBook size={12} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-zinc-100">{sub.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono sm:text-right">
                      <span className="text-[11px] text-zinc-500 truncate max-w-xs">{sub.units}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#111215] border border-[#23252a] text-zinc-300 shrink-0">
                        {sub.chapters}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#1f2127]">
              <span className="text-xs text-zinc-500 font-mono">
                Class 11 & Class 12 unit breakdowns fully indexed
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

      {/* SECTION 3: HOW IT WORKS (STEP-BY-STEP) */}
      <section id="how-it-works" className="py-14 sm:py-20 border-b border-[#1f2127] bg-[#090a0c] scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#111215] border border-[#23252a] text-zinc-400 mb-2">
              LEARNING SYSTEM
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              How CHSETube Elevates Your Board Scores
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              A 5-step academic loop engineered specifically for Council of Higher Secondary Education syllabus mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3 shadow-sm">
              <span className="text-xs font-mono font-bold text-zinc-500">STEP 01</span>
              <h3 className="text-sm font-bold text-zinc-100">Enroll Stream & Class</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Pick Class 11 or 12 and your stream. Your dashboard locks so you only focus on your specific syllabus.
              </p>
            </div>

            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3 shadow-sm">
              <span className="text-xs font-mono font-bold text-zinc-500">STEP 02</span>
              <h3 className="text-sm font-bold text-zinc-100">Clean Collapsed Units</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                All units start closed to prevent clutter. Expand any unit to reveal structured chapter lectures.
              </p>
            </div>

            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3 shadow-sm">
              <span className="text-xs font-mono font-bold text-zinc-500">STEP 03</span>
              <h3 className="text-sm font-bold text-zinc-100">Distraction-Free Theater</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Stream verified high-definition YouTube lectures with zero ads, comments, or algorithmic traps.
              </p>
            </div>

            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3 shadow-sm">
              <span className="text-xs font-mono font-bold text-zinc-500">STEP 04</span>
              <h3 className="text-sm font-bold text-zinc-100">Auto-Saving Notepad</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Jot key formulas and definitions while listening. Everything saves in real time and exports as text.
              </p>
            </div>

            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3 shadow-sm">
              <span className="text-xs font-mono font-bold text-zinc-500">STEP 05</span>
              <h3 className="text-sm font-bold text-zinc-100">Daily Study Streak</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Track syllabus completion percentage and build your consistency streak matrix over 24 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PLATFORM ADVANTAGES */}
      <section id="features" className="py-14 sm:py-20 border-b border-[#1f2127] bg-[#0c0d0f] scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#111215] border border-[#23252a] text-zinc-400 mb-2">
              WHY CHSETUBE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Built for Higher Secondary Students
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Every detail engineered to give Odisha students the sharpest advantage in their board examinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center">
                <IconBook size={16} />
              </div>
              <h3 className="text-sm font-bold text-zinc-100">100% CHSE Syllabus Mapping</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Unit-by-unit curriculum matching official CHSE Odisha text structure. Never waste time on non-board content.
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
                <IconChart size={16} />
              </div>
              <h3 className="text-sm font-bold text-zinc-100">24-Week Consistency Heatmap</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Monitor your daily study consistency and lecture completions across a GitHub-style activity grid.
              </p>
            </div>

            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center">
                <IconMap size={16} />
              </div>
              <h3 className="text-sm font-bold text-zinc-100">Post +2 Career Roadmaps</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Step-by-step guidance for national entrances: JEE, NEET, OUAT, CA Foundation, CUET, and Civil Services.
              </p>
            </div>

            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#18191d] border border-[#27292f] text-zinc-200 flex items-center justify-center">
                <IconCheck size={16} />
              </div>
              <h3 className="text-sm font-bold text-zinc-100">100% Free & Open Access</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Committed to educational equity across Odisha. No subscription fees, paywalls, or premium locks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CAREER ROADMAPS PREVIEW */}
      <section id="roadmaps" className="py-14 sm:py-20 border-b border-[#1f2127] bg-[#090a0c] scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#111215] border border-[#23252a] text-zinc-400 mb-2">
              HIGHER EDUCATION ADVISORY
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Verified Post-12th Career Roadmaps
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Clear timelines, exam schedules, eligibility, and salary insights for national higher education paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0c0d0f] border border-[#23252a] text-zinc-300">
                Engineering
              </span>
              <h3 className="text-base font-bold text-zinc-100">B.Tech / JEE Roadmaps</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                JEE Main, JEE Advanced, and OJEE milestones. Top NITs, IITs, IIITs, and Odisha state engineering colleges.
              </p>
              <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-[#1f2127]">
                Duration: 4 Years · Exam: JEE Main
              </div>
            </div>

            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0c0d0f] border border-[#23252a] text-zinc-300">
                Medicine & Bio
              </span>
              <h3 className="text-base font-bold text-zinc-100">MBBS & Allied Sciences</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                NEET UG, OUAT Veterinary, BDS, B.Pharm, and Nursing requirements for SCB, MKCG, and VIMSAR.
              </p>
              <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-[#1f2127]">
                Duration: 5.5 Years · Exam: NEET UG
              </div>
            </div>

            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0c0d0f] border border-[#23252a] text-zinc-300">
                Commerce & Finance
              </span>
              <h3 className="text-base font-bold text-zinc-100">Chartered Accountancy</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                CA Foundation, Intermediate, and Articleship training structure through ICAI alongside B.Com honors.
              </p>
              <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-[#1f2127]">
                Duration: 4.5 Years · Exam: CA Foundation
              </div>
            </div>

            <div className="bg-[#111215] p-5 rounded-xl border border-[#23252a] space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0c0d0f] border border-[#23252a] text-zinc-300">
                Humanities & Law
              </span>
              <h3 className="text-base font-bold text-zinc-100">Civil Services & Law</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                CLAT Integrated BA-LLB, CUET UG Central Universities, and early foundation strategy for OPSC / UPSC.
              </p>
              <div className="text-[11px] font-mono text-zinc-500 pt-2 border-t border-[#1f2127]">
                Duration: 3–5 Years · Exam: CUET / CLAT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section id="faq" className="py-14 sm:py-20 border-b border-[#1f2127] bg-[#0c0d0f] scroll-mt-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#111215] border border-[#23252a] text-zinc-400 mb-2">
              QUESTIONS & ANSWERS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Everything you need to know about using CHSETube for your Odisha higher secondary education.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#111215] border border-[#23252a] overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-[#15161a] transition-colors select-none"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-zinc-100">
                      {faq.q}
                    </span>
                    <IconChevronDown
                      size={16}
                      className={`text-zinc-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs text-zinc-400 leading-relaxed border-t border-[#1e2025] pt-3 bg-[#0c0d0f] animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL BOTTOM CALL TO ACTION */}
      <section className="py-16 sm:py-24 bg-[#090a0c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-950 flex items-center justify-center mx-auto font-bold shadow-md">
            <IconLogo size={22} />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-100 tracking-tight leading-tight">
            Ready to Ace Your CHSE Board Exams?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Create your free student profile in 30 seconds. Select your stream and class to unlock your personalized curriculum dashboard.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
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
              Sign In to Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Clean Public Footer (Strictly Student Links, Zero Admin Mentions) */}
      <footer className="border-t border-[#1f2127] bg-[#090a0c] py-10 text-center text-xs text-zinc-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-zinc-400 font-medium">Council of Higher Secondary Education, Odisha (+2) Learning Initiative</span>
          </div>
          <p>© {new Date().getFullYear()} CHSETube. 100% Free Open Education Resource for Students across Odisha.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
