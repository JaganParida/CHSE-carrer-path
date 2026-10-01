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
    isStudentLocked,
    setSearchModalOpen,
  } = useApp();

  const [academicMenuOpen, setAcademicMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { id: "dashboard", label: "Syllabus" },
    { id: "career", label: "Career Roadmaps" },
    { id: "notes", label: "My Notes" },
    { id: "progress", label: "Progress" },
  ];

  if (isAdmin) {
    navLinks.push({ id: "admin", label: "Admin Studio", isSpecial: true });
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-xl border-b border-white/[0.06] font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-2">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            onClick={() => handleNav("dashboard")}
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <div className="w-7 h-7 rounded-md bg-white text-black flex items-center justify-center font-black shadow-sm transition-transform group-hover:scale-105">
              <IconLogo size={14} />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold tracking-tight text-white">
                CHSE<span className="text-zinc-500 font-light">Tube</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono uppercase bg-white/[0.03] border border-white/[0.06] rounded px-1.5 py-0.5 hidden lg:inline">
                Odisha (+2)
              </span>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Bar (Only on md+) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0e0f12] p-1 rounded-lg border border-white/[0.06]">
          {navLinks.map((link) => {
            const isActive = currentSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white/[0.1] text-white font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                } ${link.isSpecial ? "text-amber-300 font-semibold" : ""}`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Academic Status + Search + User Profile */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Stream & Class: Compact on mobile, rich on desktop */}
          {isStudentLocked ? (
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0e0f12] border border-white/[0.06] text-xs font-mono text-zinc-300 select-none shadow-sm"
              title="Enrolled curriculum locked to your student registration"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
              <span className="font-semibold text-zinc-200 hidden sm:inline">{currentStream}</span>
              <span className="font-semibold text-zinc-200 sm:hidden">
                {currentStream.slice(0, 3)}
              </span>
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-300">Cl {currentClass}</span>
            </div>
          ) : isAdmin ? (
            <div className="relative" ref={academicRef}>
              <button
                onClick={() => setAcademicMenuOpen(!academicMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0e0f12] hover:bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-zinc-300 transition-all shadow-sm"
                title="Admin course switcher"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span className="font-semibold text-zinc-200">{currentStream}</span>
                <span className="text-zinc-500">·</span>
                <span className="text-zinc-300">Cl {currentClass}</span>
                <IconChevronDown size={11} className="text-zinc-400" />
              </button>

              {academicMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-[#0c0d10] border border-white/[0.08] p-3 shadow-2xl z-50 animate-fadeIn space-y-3 font-sans">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5 px-1">
                      Manage Standard
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 p-1 rounded-lg bg-black border border-white/[0.06]">
                      {["11", "12"].map((cls) => (
                        <button
                          key={cls}
                          onClick={() => {
                            setCurrentClass(cls);
                            setAcademicMenuOpen(false);
                          }}
                          className={`py-1 rounded-md text-xs font-medium transition-all ${
                            currentClass === cls
                              ? "bg-white text-black font-bold shadow-sm"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          Class {cls}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5 px-1">
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
                          className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs font-medium flex items-center justify-between transition-colors ${
                            currentStream === st
                              ? "bg-white text-black font-bold"
                              : "text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                          }`}
                        >
                          <span>{st} Stream</span>
                          {currentStream === st && <IconCheck size={12} />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : null}

          {/* Quick Search Button */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1 rounded-md bg-[#0e0f12] hover:bg-white/[0.04] border border-white/[0.06] text-xs font-medium text-zinc-400 transition-colors"
            title="Search topics and syllabus (Ctrl+K)"
          >
            <IconSearch size={14} className="text-zinc-400" />
            <span className="hidden lg:inline text-zinc-400">Search</span>
            <kbd className="hidden lg:inline-block px-1 py-0.2 text-[10px] font-mono bg-black border border-white/[0.06] rounded text-zinc-500">
              ⌘K
            </kbd>
          </button>

          {/* User Profile / Auth Actions */}
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-1.5 p-1 rounded-md bg-[#0e0f12] border border-white/[0.06] hover:border-white/[0.15] transition-colors"
                title={user.name || "Student Profile"}
              >
                <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center text-[11px] font-bold">
                  {user.name ? user.name.charAt(0).toUpperCase() : "S"}
                </div>
                <IconChevronDown size={11} className="text-zinc-400 hidden sm:inline" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-[#0c0d10] border border-white/[0.08] p-2 shadow-2xl z-50 animate-fadeIn font-sans">
                  <div className="px-3 py-2 border-b border-white/[0.06] mb-1">
                    <div className="text-xs font-semibold text-white truncate">{user.name}</div>
                    <div className="text-[11px] text-zinc-400 truncate font-mono">{user.email}</div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black text-zinc-300 border border-white/[0.06]">
                        {isAdmin ? "Administrator" : `Class ${user.class || currentClass} · ${user.stream || currentStream}`}
                      </span>
                    </div>
                  </div>

                  {isAdmin && (
                    <button
                      onClick={() => {
                        handleNav("admin");
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-amber-300 hover:bg-white/[0.04] flex items-center gap-2"
                    >
                      <IconCrown size={13} />
                      <span>Admin Studio</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      handleNav("progress");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:bg-white/[0.04] flex items-center gap-2"
                  >
                    <IconChart size={13} />
                    <span>My Progress</span>
                  </button>

                  <button
                    onClick={() => {
                      handleNav("notes");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:bg-white/[0.04] flex items-center gap-2"
                  >
                    <IconNote size={13} />
                    <span>My Notes</span>
                  </button>

                  <div className="my-1 border-t border-white/[0.06]" />

                  <button
                    onClick={() => {
                      setUserMenuOpen(false);
                      logout();
                    }}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-rose-400 hover:bg-rose-500/10 flex items-center gap-2"
                  >
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                setAuthMode("login");
                setAuthModalOpen(true);
              }}
              className="px-3 py-1.5 rounded-md bg-white text-black text-xs font-semibold hover:bg-zinc-200 shadow-sm transition-all"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
