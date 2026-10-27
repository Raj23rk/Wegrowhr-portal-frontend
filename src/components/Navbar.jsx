import React, { useState } from 'react';
import { 
  Building2, 
  Briefcase, 
  Sparkles, 
  PlusCircle, 
  Layers, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  onOpenCompanyEnroll, 
  onOpenPostVacancy 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'landing', label: 'Overview', icon: Sparkles },
    { id: 'vacancies', label: 'Open Vacancies', icon: Briefcase },
    { id: 'companies', label: 'Company Showcase', icon: Building2 },
    { id: 'admin', label: 'HR Portal Dashboard', icon: Layers, badge: 'Live Data' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/80 border-b border-slate-200/80 transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white text-xs font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 bg-indigo-500/30 text-indigo-200 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-indigo-400/30">
          <TrendingUp className="w-3 h-3 text-emerald-400" /> Hiring Surge
        </span>
        <span>Over 450+ verified high-impact tech & HR vacancies enrolled this month.</span>
        <button 
          onClick={onOpenCompanyEnroll}
          className="underline hover:text-indigo-200 ml-1 font-semibold hidden sm:inline-flex items-center gap-0.5"
        >
          Enroll your company <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  WeGrow
                </span>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  HR
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Portal
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Enterprise Talent & Vacancies</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-sm shadow-indigo-100' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  {link.label}
                  {link.badge && (
                    <span className="text-[10px] font-semibold bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenPostVacancy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/60 border border-slate-200 transition-all"
            >
              <PlusCircle className="w-4 h-4 text-indigo-500" />
              Post Vacancy
            </button>
            <button
              onClick={onOpenCompanyEnroll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/35 active:scale-95 transition-all"
            >
              <ShieldCheck className="w-4 h-4" />
              Enroll Company
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-indigo-600" />
                  {link.label}
                </div>
                {link.badge && (
                  <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenPostVacancy();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold border border-slate-200 text-slate-800"
            >
              <PlusCircle className="w-4 h-4 text-indigo-600" />
              Post Job Vacancy
            </button>
            <button
              onClick={() => {
                onOpenCompanyEnroll();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 text-white shadow"
            >
              <ShieldCheck className="w-4 h-4" />
              Enroll Company Details
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
