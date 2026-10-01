import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useApp } from "../context/AppContext.jsx";
import { STREAM_SUBJECTS } from "../data/syllabusData.js";
import {
  IconLogo,
  IconSearch,
  IconCrown,
  IconChevronDown,
  IconCheck,
  IconMenu,
  IconClose,
  IconBook,
  IconUser,
  IconNote,
  IconChart,
  IconMap,
} from "./Icons.jsx";

export const Navbar = () => {
  const { user, isAdmin, logout, setAuthModalOpen, setAuthMode } = useAuth();
  const {
    currentSection,
    setCurrentSection,
    currentStream,
    setCurrentStream,
    currentClass,
    setCurrentClass,
    setSearchModalOpen,
  } = useApp();

  const [academicMenuOpen, setAcademicMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const academicRef = useRef(null);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (academicRef.current && !academicRef.current.contains(e.target)) {
        setAcademicMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setAcademicMenuOpen(false);
        setUserMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNav = (section) => {
    setCurrentSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { id: "dashboard", label: "Syllabus" },
    { id: "career", label: "Career Roadmaps" },
    { id: "notes", label: "My Notes" },
    { id: "progress", label: "Progress" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-black/85 backdrop-blur-xl border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-6">
          <div
            onClick={() => handleNav("dashboard")}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center font-black transition-transform group-hover:scale-105">
              <IconLogo size={18} />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-black tracking-tight text-white flex items-center gap-1 leading-none">
                CHSE<span className="text-neutral-400">Tube</span>
              </div>
              <div className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase mt-1">
                Odisha (+2)
              </div>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Bar (Vercel Style) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0a0a0a] p-1 rounded-full border border-[#222222]">
          {navLinks.map((link) => {
            const isActive = currentSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-white text-black shadow-sm"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Academic Scope Selector + Search + Auth */}
        <div className="flex items-center gap-2.5">
          {/* Stream & Class Compact Dropdown */}
          <div className="relative" ref={academicRef}>
            <button
              onClick={() => setAcademicMenuOpen(!academicMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0a0a0a] hover:bg-[#141414] border border-[#222222] hover:border-neutral-600 text-xs font-medium text-neutral-200 transition-all shadow-sm"
              title="Change Stream or Class"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span className="font-semibold text-white hidden sm:inline">{currentStream}</span>
              <span className="text-neutral-500 hidden sm:inline">·</span>
              <span className="text-neutral-300 font-semibold">Class {currentClass}</span>
              <IconChevronDown size={13} className="text-neutral-400" />
            </button>

            {academicMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-[#0a0a0a] border border-[#262626] p-3 shadow-2xl z-50 animate-fadeIn space-y-3">
                {/* Standard selector */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5 px-1">
                    Select Standard
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-black border border-[#222222]">
                    {["11", "12"].map((cls) => (
                      <button
                        key={cls}
                        onClick={() => {
                          setCurrentClass(cls);
                          setAcademicMenuOpen(false);
                        }}
                        className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                          currentClass === cls
                            ? "bg-white text-black shadow-sm"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        Class {cls} (+2)
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stream selector */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1.5 px-1">
                    Academic Stream
                  </div>
                  <div className="space-y-1">
                    {["Science", "Commerce", "Arts"].map((st) => (
                      <button
                        key={st}
                        onClick={() => {
                          setCurrentStream(st);
                          setAcademicMenuOpen(false);
                          handleNav("dashboard");
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                          currentStream === st
                            ? "bg-white text-black font-bold"
                            : "text-neutral-300 hover:bg-[#141414] hover:text-white"
                        }`}
                      >
                        <span>{st} Stream</span>
                        {currentStream === st && <IconCheck size={14} />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Search Button */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 rounded-xl bg-[#0a0a0a] hover:bg-[#141414] border border-[#222222] hover:border-neutral-600 text-xs font-medium text-neutral-400 transition-colors"
            title="Search topics and syllabus (Ctrl+K)"
          >
            <IconSearch size={14} className="text-white" />
            <span className="hidden lg:inline text-neutral-400">Search</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-black border border-[#262626] rounded text-neutral-400">
              ⌘K
            </kbd>
          </button>

          {/* Auth: User Profile or Sign In / Register */}
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-1.5 pl-2.5 rounded-xl bg-[#0a0a0a] border border-[#222222] hover:border-neutral-600 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-white text-black flex items-center justify-center text-[11px] font-bold">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <span className="text-xs font-semibold text-neutral-200 max-w-[80px] truncate hidden sm:inline">
                  {user.name?.split(" ")[0] || "Student"}
                </span>
                <IconChevronDown size={13} className="text-neutral-400" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-[#0a0a0a] border border-[#262626] p-2 shadow-2xl z-50 animate-fadeIn">
                  <div className="px-3 py-2 border-b border-[#222222] mb-1">
                    <div className="text-xs font-bold text-white truncate">{user.name}</div>
                    <div className="text-[11px] text-neutral-400 truncate">{user.email}</div>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/15">
                        {isAdmin ? "Admin User" : `Class ${user.class || currentClass} · ${user.stream || currentStream}`}
                      </span>
                    </div>
                  </div>

                  {isAdmin && (
                    <button
                      onClick={() => {
                        handleNav("admin");
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-white hover:bg-neutral-900 flex items-center gap-2"
                    >
                      <IconCrown size={14} />
                      <span>Admin Studio</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      handleNav("progress");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:bg-neutral-900 flex items-center gap-2"
                  >
                    <IconChart size={14} />
                    <span>My Progress</span>
                  </button>

                  <button
                    onClick={() => {
                      handleNav("notes");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:bg-neutral-900 flex items-center gap-2"
                  >
                    <IconNote size={14} />
                    <span>My Notes</span>
                  </button>

                  <div className="my-1 border-t border-[#222222]"></div>

                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-rose-400 hover:bg-rose-500/10"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setAuthMode("login");
                  setAuthModalOpen(true);
                }}
                className="px-3 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setAuthMode("register");
                  setAuthModalOpen(true);
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-black bg-white hover:bg-neutral-200 shadow-sm transition-all"
              >
                Get Started
              </button>
            </div>
          )}

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#0a0a0a] border border-[#222222] text-neutral-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <IconClose size={18} /> : <IconMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1f1f1f] bg-black px-4 py-4 space-y-3 animate-fadeIn">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`py-2 px-3 rounded-xl text-xs font-bold text-left transition-colors ${
                  currentSection === link.id
                    ? "bg-white text-black"
                    : "bg-[#0a0a0a] text-neutral-300 hover:text-white border border-[#222222]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Academic Scope selector on mobile */}
          <div className="pt-2 border-t border-[#1f1f1f] flex items-center justify-between">
            <span className="text-xs text-neutral-400 font-semibold">Standard:</span>
            <div className="flex gap-1.5">
              {["11", "12"].map((cls) => (
                <button
                  key={cls}
                  onClick={() => setCurrentClass(cls)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    currentClass === cls ? "bg-white text-black" : "bg-[#0a0a0a] text-neutral-400 border border-[#222222]"
                  }`}
                >
                  Class {cls}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-400 font-semibold">Stream:</span>
            <div className="flex gap-1.5">
              {["Science", "Commerce", "Arts"].map((st) => (
                <button
                  key={st}
                  onClick={() => {
                    setCurrentStream(st);
                    handleNav("dashboard");
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    currentStream === st ? "bg-white text-black" : "bg-[#0a0a0a] text-neutral-400 border border-[#222222]"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
