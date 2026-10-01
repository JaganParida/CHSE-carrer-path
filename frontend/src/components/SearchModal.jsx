import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { SearchIcon, CloseIcon, VideoIcon, BookOpenIcon, ArrowRightIcon } from './Icons';

export default function SearchModal({ isOpen, onClose }) {
  const { syllabus, activeStream, activeClass, selectSubject, selectChapter, getVideoForChapter } = useApp();
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedFilter('all');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else window.dispatchEvent(new CustomEvent('open-search-modal'));
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Flatten chapters from active syllabus
  const allChapters = [];
  syllabus.forEach((subject) => {
    subject.units?.forEach((unit) => {
      unit.chapters?.forEach((chapter) => {
        const video = getVideoForChapter(chapter.id);
        allChapters.push({
          ...chapter,
          subjectId: subject.id,
          subjectName: subject.name,
          unitName: unit.title,
          hasVideo: video?.youtubeUrl && video?.youtubeUrl.length > 0
        });
      });
    });
  });

  const filtered = allChapters.filter((item) => {
    const matchesFilter = selectedFilter === 'all' || item.subjectId === selectedFilter;
    if (!matchesFilter) return false;
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subjectName.toLowerCase().includes(q) ||
      (item.unitName && item.unitName.toLowerCase().includes(q)) ||
      (item.topics && item.topics.some(t => t.toLowerCase().includes(q)))
    );
  });

  const handleSelect = (item) => {
    selectSubject(item.subjectId);
    selectChapter(item);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/60">
          <SearchIcon className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chapters, units, topics (e.g. Optics, Matrices, Genetics)..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm sm:text-base outline-none font-medium"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-500 hover:text-slate-300 px-2 py-1 rounded bg-slate-800 mr-2"
            >
              Clear
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-950/40 border-b border-slate-800/80 overflow-x-auto text-xs no-scrollbar">
          <span className="text-slate-500 uppercase tracking-wider text-[10px] font-semibold mr-1">Filter:</span>
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap font-medium ${
              selectedFilter === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            All Subjects
          </button>
          {syllabus.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedFilter(s.id)}
              className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap font-medium ${
                selectedFilter === s.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto divide-y divide-slate-800/60 p-2">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <BookOpenIcon className="w-10 h-10 mx-auto mb-2 text-slate-600 stroke-1" />
              <p className="text-sm font-medium text-slate-400">No chapters matched your search</p>
              <p className="text-xs mt-1 text-slate-500">Try searching with a broader topic name or switch subjects</p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/70 cursor-pointer transition-all"
              >
                <div className="flex items-start gap-3 min-w-0 pr-2">
                  <div className={`p-2 rounded-lg mt-0.5 flex-shrink-0 ${
                    item.hasVideo ? 'bg-indigo-500/10 text-indigo-400' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {item.hasVideo ? <VideoIcon className="w-4 h-4" /> : <BookOpenIcon className="w-4 h-4" />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        {item.subjectName}
                      </span>
                      <span className="text-xs text-slate-500 truncate">
                        {item.unitName}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors mt-0.5 truncate">
                      {item.title}
                    </p>
                    {item.topics && item.topics.length > 0 && (
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        {item.topics.slice(0, 3).join(' • ')}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                    item.hasVideo 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {item.hasVideo ? 'Video Ready' : 'Notes Only'}
                  </span>
                  <ArrowRightIcon className="w-4 h-4 text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-950/70 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[10px]">ESC</kbd> to close</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[10px]">↵</kbd> to open</span>
          </div>
          <span>Showing {filtered.length} chapters ({activeStream.toUpperCase()} • Class {activeClass})</span>
        </div>
      </div>
    </div>
  );
}
