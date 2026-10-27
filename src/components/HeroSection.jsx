import React from 'react';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Award,
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function HeroSection({ 
  searchQuery, 
  setSearchQuery, 
  selectedDepartment, 
  setSelectedDepartment, 
  onExploreVacancies, 
  onOpenCompanyEnroll,
  onOpenCandidateEnroll,
  totalVacanciesCount = 5,
  totalCompaniesCount = 4
}) {
  const popularSkills = ['React', 'Node.js', 'NestJS', 'AWS', 'Python', 'Kubernetes', 'Figma', 'TypeScript'];

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-indigo-200/40 via-purple-100/30 to-emerald-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-36 right-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top pill badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 shadow-sm text-xs font-semibold text-indigo-700 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>AI-Powered HR Enrollment & Requirement Skills Engine</span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span className="text-slate-500 font-normal">Next-Gen Hiring Ecosystem</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mt-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Accelerate Hiring With <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent">
              Precision Requirement Skills
            </span> & Seamless Enrollment
          </h1>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            WeGrow HR empowers companies to enroll their organization details, publish vacancy skill requirements, and connect with pre-screened elite talent with zero friction.
          </p>
        </div>

        {/* Interactive Search & Filter Console */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-xl shadow-slate-200/60">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              
              {/* Keyword / Skill Search */}
              <div className="md:col-span-6 relative flex items-center">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Job title, skill (e.g. React, NestJS, AWS), or company..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 transition-all font-medium"
                />
              </div>

              {/* Department Dropdown */}
              <div className="md:col-span-3 relative flex items-center">
                <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-slate-700 font-medium appearance-none cursor-pointer transition-all"
                >
                  <option value="All">All Departments</option>
                  <option value="Engineering">Engineering & Tech</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="DevOps & Infrastructure">DevOps & Cloud</option>
                  <option value="Product & Design">Product & UI/UX</option>
                  <option value="AI & Data Science">AI & Data Science</option>
                </select>
              </div>

              {/* Search Submit CTA */}
              <div className="md:col-span-3">
                <button
                  onClick={onExploreVacancies}
                  className="w-full py-3 px-5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Explore Vacancies
                </button>
              </div>

            </div>

            {/* Quick Skill Tags */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" /> In-Demand Skills:
              </span>
              {popularSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSearchQuery(skill)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-colors ${
                    searchQuery === skill 
                      ? 'bg-indigo-600 text-white border-indigo-600' 
                      : 'bg-slate-100/80 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 border-slate-200'
                  }`}
                >
                  {skill}
                </button>
              ))}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-rose-500 hover:underline ml-auto font-medium"
                >
                  Clear filter
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Dual Onboarding Cards (HR Enrollment vs Candidate Application) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Card 1: For Companies / HR */}
          <div className="relative group p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white shadow-xl overflow-hidden border border-indigo-800/50">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-36 h-36 bg-indigo-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-indigo-300 bg-indigo-500/20 px-2.5 py-1 rounded-full border border-indigo-400/20">
                For Employers & HR
              </span>
            </div>
            <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-white">
              Enroll Your Company Details
            </h2>
            <p className="mt-2 text-sm text-indigo-200/90 leading-relaxed">
              Register company profile, publish skill requirements, define vacancy headcounts, and get automated candidate matches within 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenCompanyEnroll}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-indigo-900 font-bold text-sm hover:bg-indigo-50 shadow-md transition-all active:scale-95"
              >
                Enroll Company Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: For Candidates */}
          <div className="relative group p-6 sm:p-7 rounded-2xl bg-white text-slate-800 shadow-xl overflow-hidden border border-slate-200">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                For Job Seekers & Talent
              </span>
            </div>
            <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Apply For Active Vacancies
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Submit your requirement skills profile, portfolio, and experience level directly to verified partner companies with zero recruiters spam.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenCandidateEnroll}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-95"
              >
                Join Talent Pool <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Live Metrics Grid */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600">
              {totalCompaniesCount}+
            </div>
            <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
              Enrolled Companies
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {totalVacanciesCount}+
            </div>
            <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
              Active Vacancies
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
              98.4%
            </div>
            <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
              Skill Match Ratio
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-violet-600">
              &lt; 24 Hrs
            </div>
            <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
              HR Verification Time
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
