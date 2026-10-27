import React from 'react';
import { X, Building2, User, Mail, Phone, Briefcase, Calendar, CheckCircle2, MapPin, Database } from 'lucide-react';

export default function SubmissionsModal({ isOpen, onClose, submissions = [], onRefresh }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-slide-up">
        
        {/* Header */}
        <div className="bg-[#002D62] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F26522]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Enrolled HR Company & Vacancy Submissions</h3>
              <p className="text-xs text-slate-300">Live records from WeGrow HR Placement Database ({submissions.length} Total)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {submissions.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-2" />
              <p className="font-semibold text-slate-700">No HR enrollments submitted yet</p>
              <p className="text-xs text-slate-400 mt-1">When an HR fills the enrollment form on the landing page, their company and vacancy requirements will appear here in real time.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((sub, idx) => (
                <div key={sub._id || idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#F26522] tracking-wider">
                        {sub.industry || 'Corporate Partner'}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900">{sub.companyName}</h4>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" /> {sub.location}
                        {sub.website && (
                          <>
                            <span>&bull;</span>
                            <a href={sub.website} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                              {sub.website}
                            </a>
                          </>
                        )}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                        {sub.status || 'Received'}
                      </span>
                      <p className="text-[10px] text-slate-400 mt-1">
                        {sub.createdAt ? new Date(sub.createdAt).toLocaleDateString() : 'Just now'}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-bold text-slate-700">HR Contact Person:</p>
                      <p className="text-slate-900 font-semibold">{sub.hrName} ({sub.hrDesignation || 'HR'})</p>
                      <p className="text-slate-600">{sub.workEmail} &bull; {sub.phone}</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-700">Vacancy Enrolled:</p>
                      <p className="text-slate-900 font-semibold">{sub.jobTitle} ({sub.vacanciesCount || 1} Openings)</p>
                      <p className="text-slate-600">{sub.ctcRange || 'CTC Standard'} &bull; {sub.employmentType}</p>
                    </div>
                  </div>

                  {sub.requiredSkills && sub.requiredSkills.length > 0 && (
                    <div className="pt-2">
                      <p className="text-[11px] font-bold text-slate-500 mb-1">Required Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {sub.requiredSkills.map((sk, sIdx) => (
                          <span key={sIdx} className="px-2 py-0.5 rounded bg-orange-100 text-[#F26522] font-semibold text-[10px]">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {sub.jobDescription && (
                    <div className="pt-2 text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200">
                      <span className="font-semibold text-slate-700 block mb-0.5">Role Description:</span>
                      {sub.jobDescription}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
