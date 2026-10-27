import React from 'react';
import { Phone, Mail, Award, ArrowDown, Database } from 'lucide-react';

export default function Header({ onOpenAdmin }) {
  const scrollToForm = () => {
    const el = document.getElementById('enrollment-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top placement contact bar */}
      <div className="bg-[#002D62] text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="bg-[#F26522] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Corporate Relations
            </span>
            <span className="text-slate-200 text-xs">
              Campus Recruitment & Placement Drive 2026
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-200 text-xs">
            <a href="tel:+919344037331" className="hover:text-white flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-[#F26522]" /> +91 93440 37331
            </a>
            <span className="text-slate-400">|</span>
            <a href="mailto:wegrowjobz@gmail.com" className="hover:text-white flex items-center gap-1 transition-colors">
              <Mail className="w-3 h-3 text-[#F26522]" /> wegrowjobz@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* WeGrow Skill Campus Official Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="/wegrow-logo.webp"
            onError={(e) => {
              // fallback if needed
              e.currentTarget.src = '/wegrow&Bschool.webp';
            }}
            alt="WeGrow Skill Campus"
            className="h-11 sm:h-13 w-auto object-contain"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#F26522] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer"
          >
            Enroll Vacancy <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
}
