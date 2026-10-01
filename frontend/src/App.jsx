import React, { useEffect } from "react";
import { useApp } from "./context/AppContext.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SubjectView from "./components/SubjectView.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";
import CareerGuide from "./components/CareerGuide.jsx";
import ProgressTracker from "./components/ProgressTracker.jsx";
import NotesView from "./components/NotesView.jsx";
import AdminStudio from "./components/AdminStudio.jsx";
import AuthModal from "./components/AuthModal.jsx";
import SearchModal from "./components/SearchModal.jsx";
import MobileBottomNav from "./components/MobileBottomNav.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { currentSection, setCurrentSection, toast, setSearchModalOpen } = useApp();
  const { setAuthModalOpen, setAuthMode } = useAuth();

  // Global keyboard shortcuts (Ctrl+K for search)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setSearchModalOpen]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200 relative pb-16 md:pb-0">
      {/* Subtle clean background atmosphere (restrained 2-color slate base) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/5 blur-[140px] rounded-full" />
      </div>

      {/* Main Navbar */}
      <Navbar />

      {/* Main View Router driven by single AppContext currentSection */}
      <main className="flex-1 z-10">
        {currentSection === "dashboard" && (
          <div className="animate-fadeIn">
            <Hero />
            <div id="syllabus-section" className="scroll-mt-16">
              <Dashboard />
            </div>
          </div>
        )}

        {currentSection === "subject" && (
          <div className="py-2 animate-fadeIn">
            <SubjectView />
          </div>
        )}

        {currentSection === "player" && (
          <div className="py-2 animate-fadeIn">
            <VideoPlayer />
          </div>
        )}

        {currentSection === "career" && (
          <div className="py-2 animate-fadeIn">
            <CareerGuide />
          </div>
        )}

        {currentSection === "progress" && (
          <div className="py-2 animate-fadeIn">
            <ProgressTracker />
          </div>
        )}

        {currentSection === "notes" && (
          <div className="py-2 animate-fadeIn">
            <NotesView />
          </div>
        )}

        {currentSection === "admin" && (
          <div className="py-2 animate-fadeIn">
            <AdminStudio />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Navigation Dock */}
      <MobileBottomNav />

      {/* Command Palette Search Modal */}
      <SearchModal />

      {/* Student / Admin Auth Modal */}
      <AuthModal />

      {/* Global Interactive Toast Notification */}
      {toast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl text-xs font-semibold text-white animate-bounce-subtle">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              toast.type === "success"
                ? "bg-emerald-400"
                : toast.type === "error"
                ? "bg-rose-400"
                : "bg-blue-400"
            }`}
          />
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}
