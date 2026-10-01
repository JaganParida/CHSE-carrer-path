import React from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { AcademicCapIcon, ShieldCheckIcon, CheckCircleIcon, SparklesIcon } from './Icons';

export default function Footer({ onOpenAdmin, onOpenAuth }) {
  const { setStream, setClassNumber, activeStream, activeClass } = useApp();
  const { user } = useAuth();

  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/70 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <AcademicCapIcon className="w-5 h-5" />
              </div>
              <span className="font-bold text-base text-slate-100 tracking-tight">
                CHSE<span className="text-indigo-400">Tube</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Curated YouTube masterclasses and syllabus navigator for Council of Higher Secondary Education, Odisha.
            </p>
            <div className="flex items-center gap-2 pt-1 text-slate-400 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Syllabus Verified for 2026–2027</span>
            </div>
          </div>

          {/* Streams */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">Academic Streams</h4>
            <ul className="space-y-2">
              {[
                { id: 'science', label: 'Science (PCM / Biology / IT)' },
                { id: 'commerce', label: 'Commerce (Accounts / BST)' },
                { id: 'arts', label: 'Arts (Pol Science / History)' },
              ].map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      setStream(s.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`hover:text-indigo-400 transition-colors ${
                      activeStream === s.id ? 'text-indigo-400 font-semibold' : 'text-slate-400'
                    }`}
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes & Standards */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">Curriculum Standards</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    setClassNumber(12);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`hover:text-indigo-400 transition-colors ${
                    activeClass === 12 ? 'text-indigo-400 font-semibold' : 'text-slate-400'
                  }`}
                >
                  Class 12 (+2 2nd Year)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setClassNumber(11);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`hover:text-indigo-400 transition-colors ${
                    activeClass === 11 ? 'text-indigo-400 font-semibold' : 'text-slate-400'
                  }`}
                >
                  Class 11 (+2 1st Year)
                </button>
              </li>
              <li className="text-slate-400">PW Live BSE Odisha Standards</li>
              <li className="text-slate-400">CHSE Biology 5-Unit Framework</li>
            </ul>
          </div>

          {/* Admin & Management */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">Platform Control</h4>
            <div className="space-y-2.5">
              <p className="text-slate-400 leading-relaxed">
                Authorized educators and administrators can update YouTube masterclasses across all streams.
              </p>
              {user?.role === 'admin' ? (
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 transition-colors text-xs font-medium"
                >
                  <ShieldCheckIcon className="w-4 h-4" />
                  Open Admin Studio
                </button>
              ) : (
                <button
                  onClick={onOpenAuth}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-xs font-medium border border-slate-700/50"
                >
                  Admin / Student Sign In
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} CHSETube Odisha. Free student educational portal built with MERN & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />
              100% Free & Open Access
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <SparklesIcon className="w-3.5 h-3.5 text-indigo-400" />
              Pure SVG Design
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
