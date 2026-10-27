import React from 'react';
import { 
  Building2, 
  CheckCircle, 
  Globe, 
  MapPin, 
  Users, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles,
  Target,
  Clock,
  Award
} from 'lucide-react';

export default function CompanyShowcase({ companies = [], onOpenCompanyEnroll }) {
  const benefits = [
    {
      icon: Target,
      title: 'Targeted Skill Matching',
      desc: 'Define non-negotiable tech skills, frameworks, and experience levels with automated filtering.',
    },
    {
      icon: Clock,
      title: 'Fast-Track HR Onboarding',
      desc: 'Enroll your company within 2 minutes and start receiving matching candidate profiles within 24 hours.',
    },
    {
      icon: ShieldCheck,
      title: 'Pre-Screened Candidates',
      desc: 'All candidates are screened on both core competencies and technical fundamentals before profile submission.',
    },
    {
      icon: Award,
      title: 'Zero Hiring Overhead',
      desc: 'Eliminate cluttered recruiter inboxes with a centralized dashboard for all vacancies and applications.',
    },
  ];

  return (
    <section id="companies-section" className="py-16 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-700">
            <Building2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Enterprise Partner Ecosystem</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Enrolled Companies & Hiring Partners
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Leading tech innovators, SaaS enterprises, and high-growth startups rely on WeGrow HR to power their talent acquisition pipelines.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Enrolled Companies Directory */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>Verified Enrolled Companies</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                  {companies.length} Active Partners
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Companies currently hiring through WeGrow HR</p>
            </div>
            <button
              onClick={onOpenCompanyEnroll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all"
            >
              <Building2 className="w-4 h-4" />
              Enroll Your Company
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div 
                key={company._id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-indigo-700 text-white font-black text-lg flex items-center justify-center shadow-md shadow-indigo-500/20">
                      {company.companyName.charAt(0)}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      {company.status || 'Verified'}
                    </span>
                  </div>

                  <h4 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {company.companyName}
                  </h4>

                  <div className="mt-2 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{company.companySize || '50-200 Employees'} &bull; {company.industry}</span>
                    </div>
                  </div>

                  {company.hiringNeeds && (
                    <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <span className="font-semibold text-indigo-700 block mb-0.5">Hiring Needs:</span>
                      {company.hiringNeeds}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-700">HR: {company.contactPerson}</span>
                  {company.website && (
                    <a
                      href={company.website.startsWith('http') ? company.website : `https://${company.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-semibold"
                    >
                      Website <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 p-8 sm:p-10 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Looking To Hire Elite Developers & Specialists?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-indigo-200">
              Enroll your company details today. Provide requirement skills, job description, and salary bracket to access pre-matched candidates.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenCompanyEnroll}
                className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-bold text-sm hover:bg-indigo-50 shadow-lg transition-transform active:scale-95"
              >
                Enroll Company Details
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
