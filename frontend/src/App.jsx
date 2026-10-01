import React, { useState, useEffect } from 'react';
import { useApp } from './context/AppContext';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import SubjectView from './components/SubjectView';
import VideoPlayer from './components/VideoPlayer';
import CareerGuide from './components/CareerGuide';
import ProgressTracker from './components/ProgressTracker';
import NotesView from './components/NotesView';
import AdminStudio from './components/AdminStudio';
import AuthModal from './components/AuthModal';
import SearchModal from './components/SearchModal';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const { activeChapter, activeSubject, selectChapter } = useApp();
  const { user } = useAuth();

  // Listen to open search event
  useEffect(() => {
    const handleOpenSearch = () => setIsSearchModalOpen(true);
    const handleOpenAuth = () => setIsAuthModalOpen(true);
    const handleOpenAdmin = () => setActiveTab('admin');

    window.addEventListener('open-search-modal', handleOpenSearch);
    window.addEventListener('open-auth-modal', handleOpenAuth);
    window.addEventListener('open-admin', handleOpenAdmin);

    return () => {
      window.removeEventListener('open-search-modal', handleOpenSearch);
      window.removeEventListener('open-auth-modal', handleOpenAuth);
      window.removeEventListener('open-admin', handleOpenAdmin);
    };
  }, []);

  // When chapter is selected from anywhere, switch to player tab automatically if not already
  const handleChapterSelect = (chapter) => {
    selectChapter(chapter);
    setActiveTab('player');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative pb-16 md:pb-0">
      {/* Background ambient subtle gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-violet-900/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      {/* Main Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenAdmin={() => setActiveTab('admin')}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main View Router */}
      <main className="flex-1 z-10">
        {activeTab === 'dashboard' && (
          <>
            <Hero 
              onExploreSyllabus={() => {
                const el = document.getElementById('syllabus-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenSearch={() => setIsSearchModalOpen(true)}
            />
            
            <div id="syllabus-section" className="scroll-mt-20">
              <Dashboard onSelectChapter={handleChapterSelect} />
            </div>

            {activeSubject && (
              <div className="border-t border-slate-800/80 bg-slate-950/50">
                <SubjectView onSelectChapter={handleChapterSelect} />
              </div>
            )}
          </>
        )}

        {activeTab === 'player' && (
          <div className="py-6 sm:py-10 animate-fadeIn">
            <VideoPlayer onBackToSyllabus={() => setActiveTab('dashboard')} />
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="py-6 sm:py-10 animate-fadeIn">
            <ProgressTracker />
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="py-6 sm:py-10 animate-fadeIn">
            <NotesView />
          </div>
        )}

        {activeTab === 'careers' && (
          <div className="py-6 sm:py-10 animate-fadeIn">
            <CareerGuide />
          </div>
        )}

        {activeTab === 'admin' && (
          <div className="py-6 sm:py-10 animate-fadeIn">
            <AdminStudio onBackToSyllabus={() => setActiveTab('dashboard')} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenAdmin={() => setActiveTab('admin')}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* Mobile Navigation Dock */}
      <MobileBottomNav 
        currentTab={activeTab} 
        setCurrentTab={setActiveTab} 
      />

      {/* Command Palette Search Modal */}
      <SearchModal 
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />

      {/* Student / Admin Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
