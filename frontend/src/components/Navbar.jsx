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
    setCurrentSubject,
    setSearchModalOpen,
  } = useApp();

  const [academicMenuOpen, setAcademicMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const academicRef = useRef(null);
  const userMenuRef = useRef(null);

  // Close dropdowns on outside click or ESC key
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
    <header className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-6">
          <div
            onClick={() => handleNav("dashboard")}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:bg-blue-500 transition-all group-hover:scale-105">
              <IconLogo size={20} />
            </div>
            <div className="flex flex-col">
              <div className="text-base font-black tracking-tight text-white flex items-center gap-1 leading-none">
                CHSE<span className="text-blue-500">Tube</span>
              </div>
              <div className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-1">
                Odisha (+2) Portal
              </div>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800/70">
          {navLinks.map((link) => {
            const isActive = currentSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
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
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-200 transition-all shadow-sm"
              title="Change Stream or Class"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="font-bold text-white hidden sm:inline">{currentStream}</span>
              <span className="text-slate-500 hidden sm:inline">·</span>
              <span className="text-blue-400 font-bold">Class {currentClass}</span>
              <IconChevronDown size={13} className="text-slate-400" />
            </button>

            {academicMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-slate-900 border border-slate-700/80 p-3 shadow-2xl z-50 animate-fadeIn space-y-3">
                {/* Standard selector */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 px-1">
                    Select Standard
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
                    {["11", "12"].map((cls) => (
                      <button
                        key={cls}
                        onClick={() => {
                          setCurrentClass(cls);
                          setAcademicMenuOpen(false);
                        }}
                        className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                          currentClass === cls
                            ? "bg-blue-600 text-white shadow-sm"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Class {cls} (+2)
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stream selector */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 px-1">
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
                            ? "bg-blue-600 text-white"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
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
            className="flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-400 transition-colors"
            title="Search topics and syllabus (Ctrl+K)"
          >
            <IconSearch size={14} className="text-blue-400" />
            <span className="hidden lg:inline text-slate-400">Search</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-950 border border-slate-800 rounded text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Auth: User Profile or Sign In / Register */}
          {user ? (
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-1.5 pl-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-[11px] font-bold text-white">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <span className="text-xs font-bold text-slate-200 max-w-[80px] truncate hidden sm:inline">
                  {user.name?.split(" ")[0] || "Student"}
                </span>
                <IconChevronDown size={13} className="text-slate-400" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-slate-900 border border-slate-700/80 p-2 shadow-2xl z-50 animate-fadeIn">
                  <div className="px-3 py-2 border-b border-slate-800 mb-1">
                    <div className="text-xs font-bold text-white truncate">{user.name}</div>
                    <div className="text-[11px] text-slate-400 truncate">{user.email}</div>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          isAdmin
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                            : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
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
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-amber-300 hover:bg-amber-500/10 flex items-center gap-2"
                    >
                      <IconCrown size={14} className="text-amber-400" />
                      <span>Admin Studio</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      handleNav("progress");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:bg-slate-800 flex items-center gap-2"
                  >
                    <IconChart size={14} className="text-blue-400" />
                    <span>My Progress</span>
                  </button>

                  <button
                    onClick={() => {
                      handleNav("notes");
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:bg-slate-800 flex items-center gap-2"
                  >
                    <IconNote size={14} className="text-blue-400" />
                    <span>My Notes</span>
                  </button>

                  <div className="my-1 border-t border-slate-800"></div>

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
                className="px-3 py-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setAuthMode("register");
                  setAuthModalOpen(true);
                }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/25 transition-all hover:scale-105"
              >
                Get Started
              </button>
            </div>
          )}

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <IconClose size={18} /> : <IconMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-3 animate-fadeIn">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`py-2 px-3 rounded-xl text-xs font-bold text-left transition-colors ${
                  currentSection === link.id
                    ? "bg-blue-600 text-white"
                    : "bg-slate-900 text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Academic Scope selector on mobile */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold">Standard:</span>
            <div className="flex gap-1.5">
              {["11", "12"].map((cls) => (
                <button
                  key={cls}
                  onClick={() => setCurrentClass(cls)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    currentClass === cls ? "bg-blue-600 text-white" : "bg-slate-900 text-slate-400"
                  }`}
                >
                  Class {cls}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold">Stream:</span>
            <div className="flex gap-1.5">
              {["Science", "Commerce", "Arts"].map((st) => (
                <button
                  key={st}
                  onClick={() => {
                    setCurrentStream(st);
                    handleNav("dashboard");
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    currentStream === st ? "bg-blue-600 text-white" : "bg-slate-900 text-slate-400"
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
