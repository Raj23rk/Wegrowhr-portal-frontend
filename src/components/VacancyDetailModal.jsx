import React from 'react';
import { 
  X, 
  Building2, 
  MapPin, 
  Clock, 
  Briefcase, 
  DollarSign, 
  Calendar, 
  CheckCircle2, 
  Users, 
  Share2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function VacancyDetailModal({ vacancy, onClose, onApply }) {
  if (!vacancy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-slide-up">
        
        {/* Header Bar */}
        <div className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 p-6 sm:p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-2">
            <Building2 className="w-4 h-4" />
            <span>{vacancy.companyName}</span>
            <span>&bull;</span>
            <span>{vacancy.department}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {vacancy.title}
          </h2>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-white font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> {vacancy.location}
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-white font-medium flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {vacancy.experienceLevel}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/30 text-emerald-200 font-semibold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> {vacancy.vacanciesCount || 1} Vacancies Open
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Compensation Box */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Offered Salary Package</p>
              <p className="text-lg font-extrabold text-slate-900 mt-0.5">{vacancy.salaryRange}</p>
            </div>
            {vacancy.deadline && (
              <div className="sm:text-right">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Application Deadline</p>
                <p className="text-sm font-bold text-indigo-600 mt-0.5">{vacancy.deadline}</p>
              </div>
            )}
          </div>

          {/* Required Skills Section */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              Required Skills & Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {vacancy.requiredSkills?.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 font-semibold text-xs border border-indigo-100 flex items-center gap-1.5 shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Job Description
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {vacancy.description}
            </p>
          </div>

          {/* Key Responsibilities */}
          {vacancy.responsibilities && vacancy.responsibilities.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                Key Responsibilities & Expectations
              </h3>
              <ul className="space-y-2.5">
                {vacancy.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-200/80 transition-colors"
          >
            Close
          </button>
          
          <button
            onClick={() => {
              onClose();
              onApply(vacancy);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/25 active:scale-95 transition-all"
          >
            Apply for this Vacancy <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
