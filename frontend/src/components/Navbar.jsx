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
  IconFire,
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

  if (isAdmin) {
    navLinks.push({ id: "admin", label: "Admin Studio", isSpecial: true });
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090a0c]/90 backdrop-blur-md border-b border-[#1e2025]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-3">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-4">
          <div
            onClick={() => handleNav("dashboard")}
            className="flex items-center gap-2 cursor-pointer group select-none shrink-0"
          >
            <div className="w-7 h-7 rounded-md bg-zinc-100 text-zinc-950 flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105">
              <IconLogo size={15} />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold tracking-tight text-zinc-100">
                CHSE<span className="text-zinc-400">Tube</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase border border-zinc-800 rounded px-1.5 py-0.5 hidden lg:inline">
                Odisha (+2)
              </span>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111215] p-1 rounded-lg border border-[#23252a]">
          {navLinks.map((link) => {
            const isActive = currentSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  isActive
                    ? "bg-zinc-800 text-white font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                } ${link.isSpecial ? "text-amber-300 font-semibold" : ""}`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Academic Scope Selector + Search + Auth */}
        <div className="flex items-center gap-2">
          {/* Stream & Class: Locked for students, switcher for admin */}
          {isStudentLocked ? (
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#111215] border border-[#23252a] text-xs font-medium text-zinc-300 select-none shadow-sm"
              title="Enrolled curriculum locked to your student registration"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="font-semibold text-zinc-200">{currentStream}</span>
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-300">Class {currentClass}</span>
            </div>
          ) : isAdmin ? (
            <div className="relative" ref={academicRef}>
              <button
                onClick={() => setAcademicMenuOpen(!academicMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#111215] hover:bg-[#16181d] border border-[#23252a] text-xs font-medium text-zinc-300 transition-all shadow-sm"
                title="Admin course switcher"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="font-semibold text-zinc-200">{currentStream}</span>
                <span className="text-zinc-500">·</span>
                <span className="text-zinc-300">Class {currentClass}</span>
                <IconChevronDown size={12} className="text-zinc-400" />
              </button>

              {academicMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-60 rounded-xl bg-[#121316] border border-[#27292f] p-3 shadow-2xl z-50 animate-fadeIn space-y-3">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 px-1">
                      Manage Standard
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 p-1 rounded-lg bg-[#0c0d0f] border border-[#1e2024]">
                      {["11", "12"].map((cls) => (
                        <button
                          key={cls}
                          onClick={() => {
                            setCurrentClass(cls);
                            setAcademicMenuOpen(false);
                          }}
                          className={`py-1 rounded-md text-xs font-medium transition-all ${
                            currentClass === cls
                              ? "bg-zinc-100 text-zinc-950 font-bold shadow-sm"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          Class {cls} (+2)
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 px-1">
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
                              ? "bg-zinc-100 text-zinc-950 font-bold"
                              : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
                          }`}
                        >
                          <span>{st} Stream</span>
                          {currentStream === st && <IconCheck size={13} />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : null}

          {/* Search Button */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-[#111215] hover:bg-[#16181d] border border-[#23252a] text-xs font-medium text-zinc-400 transition-colors"
            title="Search topics and syllabus (Ctrl+K)"
          >
            <IconSearch size={14} className="text-zinc-300" />
            <span className="hidden lg:inline text-zinc-400">Search</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-[#0c0d0f] border border-[#23252a] rounded text-zinc-400">
              ⌘K
            </kbd>
          </button>

          {/* User Profile Menu */}
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-1 pl-2 rounded-lg bg-[#111215] border border-[#23252a] hover:border-[#33363f] transition-colors"
              >
                <div className="w-5 h-5 rounded bg-zinc-100 text-zinc-950 flex items-center justify-center text-[10px] font-bold">
                  {user.name ? user.name.charAt(0).toUpperCase() : "S"}
                </div>
                <span className="text-xs font-medium text-zinc-200 max-w-[80px] truncate hidden sm:inline">
                  {user.name?.split(" ")[0] || "Student"}
                </span>
                <IconChevronDown size={12} className="text-zinc-400" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-[#121316] border border-[#27292f] p-2 shadow-2xl z-50 animate-fadeIn">
                  <div className="px-3 py-2 border-b border-[#1e2024] mb-1">
                    <div className="text-xs font-semibold text-white truncate">{user.name}</div>
                    <div className="text-[11px] text-zinc-400 truncate">{user.email}</div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0c0d0f] text-zinc-300 border border-[#23252a]">
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
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-amber-300 hover:bg-zinc-800 flex items-center gap-2"
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
                    className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:bg-zinc-800 flex items-center gap-2"
                  >
                    <IconChart size={13} />
                    <span>My Progress</span>
                  </button>

                  <button
                    onClick={() => {
                      handleNav("notes");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:bg-zinc-800 flex items-center gap-2"
                  >
                    <IconNote size={13} />
                    <span>My Notes</span>
                  </button>

                  <div className="my-1 border-t border-[#1e2024]" />

                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
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
              className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 text-xs font-semibold hover:bg-white shadow-sm transition-all"
            >
              Sign In
            </button>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg bg-[#111215] border border-[#23252a] text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <IconClose size={16} /> : <IconMenu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1e2025] bg-[#0c0d0f] p-4 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`p-2.5 rounded-lg text-xs font-medium text-left border ${
                  currentSection === link.id
                    ? "bg-zinc-100 text-zinc-950 border-white font-bold"
                    : "bg-[#111215] text-zinc-300 border-[#23252a]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {user && (
            <div className="pt-2 border-t border-[#1e2025] flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono truncate">{user.email}</span>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="text-xs text-rose-400 font-medium hover:underline"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
