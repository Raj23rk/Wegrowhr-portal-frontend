import React, { useState } from 'react';
import { 
  Building2, 
  Briefcase, 
  Users, 
  Layers, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Plus, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  Clock, 
  Eye, 
  Trash2,
  RefreshCw
} from 'lucide-react';

export default function HrAdminDashboard({ 
  companies = [], 
  vacancies = [], 
  applications = [],
  onOpenCompanyEnroll,
  onOpenPostVacancy,
  onRefreshData,
  onSelectVacancy,
  loading = false
}) {
  const [activeTab, setActiveTab] = useState('companies');
  const [filterQuery, setFilterQuery] = useState('');

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-700 mb-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              <span>HR Operations & Enrollment Management</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              WeGrow HR Enterprise Portal Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real-time oversight of enrolled company details, requirement skills vacancies, and candidate applications.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onRefreshData}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button
              onClick={onOpenPostVacancy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" /> Post Vacancy
            </button>
            <button
              onClick={onOpenCompanyEnroll}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/25 transition-all"
            >
              <Building2 className="w-3.5 h-3.5" /> Enroll Company
            </button>
          </div>
        </div>

        {/* Dashboard Top Metric Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Enrolled Companies</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-1">{companies.length}</p>
              <p className="text-[11px] text-emerald-600 font-medium mt-1">Verified partner organizations</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Building2 className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Posted Vacancies</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-1">{vacancies.length}</p>
              <p className="text-[11px] text-indigo-600 font-medium mt-1">Live hiring requisitions</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <Briefcase className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Candidate Enrollments</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-1">{applications.length}</p>
              <p className="text-[11px] text-violet-600 font-medium mt-1">Candidate profiles received</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
              <Users className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="mt-8 flex items-center gap-2 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('companies')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'companies'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Building2 className="w-4 h-4" />
            Enrolled Companies ({companies.length})
          </button>

          <button
            onClick={() => setActiveTab('vacancies')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'vacancies'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Requirement Vacancies ({vacancies.length})
          </button>

          <button
            onClick={() => setActiveTab('applications')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'applications'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Users className="w-4 h-4" />
            Candidate Applications ({applications.length})
          </button>
        </div>

        {/* TAB 1: Enrolled Companies Table */}
        {activeTab === 'companies' && (
          <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 text-sm">Enrolled Company Details & Hiring Profiles</h3>
              <span className="text-xs text-slate-500">{companies.length} Total Partners</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4">Company Name</th>
                    <th className="py-3.5 px-4">Contact Person & Email</th>
                    <th className="py-3.5 px-4">Phone & Location</th>
                    <th className="py-3.5 px-4">Industry & Size</th>
                    <th className="py-3.5 px-4">Hiring Needs</th>
                    <th className="py-3.5 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {companies.map((c) => (
                    <tr key={c._id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                            {c.companyName.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">{c.companyName}</p>
                            {c.website && (
                              <a 
                                href={c.website.startsWith('http') ? c.website : `https://${c.website}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[11px] text-indigo-600 hover:underline"
                              >
                                {c.website}
                              </a>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="text-slate-800 font-semibold">{c.contactPerson}</p>
                        <p className="text-slate-500 text-[11px]">{c.email}</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="text-slate-800">{c.phone}</p>
                        <p className="text-slate-500 text-[11px]">{c.location}</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="block text-slate-800 font-semibold">{c.industry}</span>
                        <span className="text-slate-500 text-[11px]">{c.companySize}</span>
                      </td>
                      <td className="py-3.5 px-4 max-w-xs">
                        <p className="truncate text-slate-600 text-[11px]" title={c.hiringNeeds}>
                          {c.hiringNeeds || 'Standard tech recruitment requirements'}
                        </p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          {c.status || 'Verified Partner'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: Posted Requirement Vacancies Table */}
        {activeTab === 'vacancies' && (
          <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 text-sm">Active Job Vacancies & Required Skills</h3>
              <span className="text-xs text-slate-500">{vacancies.length} Total Postings</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4">Role Title & Company</th>
                    <th className="py-3.5 px-4">Department & Mode</th>
                    <th className="py-3.5 px-4">Required Skills</th>
                    <th className="py-3.5 px-4">Compensation & Exp</th>
                    <th className="py-3.5 px-4">Openings</th>
                    <th className="py-3.5 px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {vacancies.map((v) => (
                    <tr key={v._id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4">
                        <p className="font-bold text-slate-900">{v.title}</p>
                        <p className="text-slate-500 text-[11px]">{v.companyName} &bull; {v.location}</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="block font-semibold text-slate-800">{v.department}</span>
                        <span className="text-[11px] text-indigo-600">{v.jobType}</span>
                      </td>
                      <td className="py-3.5 px-4 max-w-xs">
                        <div className="flex flex-wrap gap-1">
                          {v.requiredSkills?.map((s, idx) => (
                            <span key={idx} className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[10px]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-bold text-slate-900">{v.salaryRange}</p>
                        <p className="text-slate-500 text-[11px]">{v.experienceLevel}</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-slate-800">{v.vacanciesCount || 1} Openings</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <button
                          onClick={() => onSelectVacancy(v)}
                          className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-semibold text-xs hover:bg-indigo-100 transition-colors flex items-center gap-1"
                        >
                          <Eye className="w-3 h-3" /> View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: Candidate Applications Table */}
        {activeTab === 'applications' && (
          <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 text-sm">Enrolled Candidate Applications & Skill Profiles</h3>
              <span className="text-xs text-slate-500">{applications.length} Received Applications</span>
            </div>
            
            {applications.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                <Users className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-700">No applications received yet</p>
                <p className="text-xs text-slate-400 mt-0.5">When candidates apply for vacancies or join the talent pool, their profiles will appear here.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4">Candidate Name</th>
                      <th className="py-3.5 px-4">Applied Position</th>
                      <th className="py-3.5 px-4">Candidate Skills</th>
                      <th className="py-3.5 px-4">Experience</th>
                      <th className="py-3.5 px-4">Links & Pitch</th>
                      <th className="py-3.5 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {applications.map((app) => (
                      <tr key={app._id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3.5 px-4">
                          <p className="font-bold text-slate-900">{app.fullName}</p>
                          <p className="text-slate-500 text-[11px]">{app.email} &bull; {app.phone}</p>
                        </td>
                        <td className="py-3.5 px-4">
                          <p className="font-semibold text-slate-800">{app.vacancyTitle || 'General Talent Pool'}</p>
                        </td>
                        <td className="py-3.5 px-4 max-w-xs">
                          <div className="flex flex-wrap gap-1">
                            {app.skills?.map((s, idx) => (
                              <span key={idx} className="bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded text-[10px] font-semibold border border-emerald-100">
                                {s}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-medium text-slate-700">{app.experienceYears}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            {app.resumeUrl && (
                              <a
                                href={app.resumeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-indigo-600 hover:underline text-[11px] font-semibold flex items-center gap-0.5"
                              >
                                Resume <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                            {app.portfolioUrl && (
                              <a
                                href={app.portfolioUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-600 hover:underline text-[11px] font-semibold flex items-center gap-0.5"
                              >
                                Portfolio <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                            <Clock className="w-3 h-3 text-indigo-600" />
                            {app.status || 'Under Review'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
