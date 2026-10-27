import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  ArrowLeft, 
  RefreshCw, 
  Search, 
  Download, 
  Filter,
  DollarSign,
  Users,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { getEnrollments } from '../services/api';

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('ALL');
  const [selectedSub, setSelectedSub] = useState(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const data = await getEnrollments();
      setSubmissions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to load submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  // Filtered submissions
  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch = 
      (sub.companyName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (sub.hrName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (sub.jobTitle || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (sub.location || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (sub.requiredSkills || []).some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesIndustry = industryFilter === 'ALL' || sub.industry === industryFilter;

    return matchesSearch && matchesIndustry;
  });

  // Calculate stats
  const totalVacancies = submissions.reduce((acc, curr) => acc + (Number(curr.vacanciesCount) || 1), 0);
  const uniqueCompanies = new Set(submissions.map(s => s.companyName)).size;

  // Export to CSV
  const handleExportCSV = () => {
    if (submissions.length === 0) return;

    const headers = [
      'Company Name',
      'Website',
      'Industry',
      'Location',
      'HR Name',
      'HR Designation',
      'Work Email',
      'Phone',
      'Job Title',
      'Vacancies',
      'Employment Type',
      'CTC Range',
      'Drive Mode',
      'Tentative Date',
      'Required Skills',
      'Date Enrolled'
    ];

    const rows = submissions.map(s => [
      `"${s.companyName || ''}"`,
      `"${s.website || ''}"`,
      `"${s.industry || ''}"`,
      `"${s.location || ''}"`,
      `"${s.hrName || ''}"`,
      `"${s.hrDesignation || ''}"`,
      `"${s.workEmail || ''}"`,
      `"${s.phone || ''}"`,
      `"${s.jobTitle || ''}"`,
      `"${s.vacanciesCount || 1}"`,
      `"${s.employmentType || ''}"`,
      `"${s.ctcRange || ''}"`,
      `"${s.driveMode || ''}"`,
      `"${s.tentativeDate || ''}"`,
      `"${(s.requiredSkills || []).join(', ')}"`,
      `"${s.createdAt ? new Date(s.createdAt).toLocaleString() : ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `WeGrow_HR_Submissions_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-800 font-sans">
      
      {/* Top Admin Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors" title="Back to Enrollment Landing Page">
              <ArrowLeft className="w-5 h-5 text-[#002D62]" />
            </Link>
            
            <img
              src="/wegrow-logo.webp"
              onError={(e) => { e.currentTarget.src = '/wegrow&Bschool.webp'; }}
              alt="WeGrow Skill Campus"
              className="h-9 w-auto object-contain"
            />
            
            <div className="border-l border-slate-200 pl-3 hidden sm:block">
              <h1 className="text-sm font-black text-[#002D62] tracking-tight">
                HR Submissions Portal
              </h1>
              <p className="text-[11px] text-slate-500">Placement & Corporate Relations Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer disabled:opacity-50"
              title="Refresh submissions"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={handleExportCSV}
              disabled={submissions.length === 0}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all cursor-pointer disabled:opacity-50"
              title="Export all submissions to Excel / CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#002D62] hover:bg-[#0A2540] transition-all"
            >
              <span>+ Enroll Vacancy</span>
            </Link>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#002D62] flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5 text-[#002D62]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Companies</span>
              <p className="text-xl sm:text-2xl font-black text-[#002D62]">{uniqueCompanies}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#F26522] flex items-center justify-center font-bold">
              <Users className="w-5 h-5 text-[#F26522]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Total Openings</span>
              <p className="text-xl sm:text-2xl font-black text-[#F26522]">{totalVacancies}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Briefcase className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Total Roles</span>
              <p className="text-xl sm:text-2xl font-black text-slate-900">{submissions.length}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Placement Desk</span>
              <p className="text-xs font-bold text-emerald-600 mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Active & Online
              </p>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96 flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search company, HR name, role or skill..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] text-slate-800"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="absolute right-3 text-xs text-slate-400 hover:text-slate-600">
                &times;
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="w-full md:w-auto px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] text-slate-700"
            >
              <option value="ALL">All Industry Sectors</option>
              <option value="Information Technology & Software">Information Technology & Software</option>
              <option value="Banking, Financial Services & Insurance (BFSI)">Banking & Finance</option>
              <option value="Consulting & Business Services">Consulting & Business Services</option>
              <option value="E-Commerce & Digital Retail">E-Commerce & Retail</option>
              <option value="Manufacturing & Automobile">Manufacturing & Auto</option>
              <option value="Healthcare & Life Sciences">Healthcare & Pharma</option>
            </select>
          </div>
        </div>

        {/* Submissions List */}
        {loading ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
            <RefreshCw className="w-8 h-8 text-[#002D62] animate-spin mx-auto mb-2" />
            <p className="text-sm font-bold text-slate-700">Loading HR enrollments...</p>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No Submissions Found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
              {searchTerm || industryFilter !== 'ALL' 
                ? 'Try clearing your search filters to view all enrolled HR vacancies.' 
                : 'No companies have enrolled yet. When HRs submit the landing page form, entries appear here instantly.'}
            </p>
            <div className="mt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#002D62] hover:bg-[#0A2540]"
              >
                Go to Enrollment Form
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSubmissions.map((sub, idx) => (
              <div
                key={sub._id || idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all p-5 sm:p-6 space-y-4"
              >
                
                {/* Header Row: Company Title, Sector & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-blue-50 text-[#002D62] uppercase tracking-wider">
                        {sub.industry || 'Corporate Partner'}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">
                        {sub.companySize || 'Corporate'}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-[#002D62]">
                      {sub.companyName}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                      <span className="flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {sub.location || 'Location Not Specified'}
                      </span>
                      {sub.website && (
                        <a
                          href={sub.website}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-blue-600 hover:underline font-medium"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>{sub.website.replace(/^https?:\/\//, '')}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="sm:text-right flex sm:flex-col items-center sm:items-end justify-between gap-1">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{sub.status || 'Enrollment Received'}</span>
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {sub.createdAt ? new Date(sub.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      }) : 'Recent'}
                    </span>
                  </div>
                </div>

                {/* Details Grid: HR Recruiter & Vacancy Requirements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  
                  {/* HR Contact Box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                      <User className="w-3.5 h-3.5 text-[#F26522]" />
                      <span>HR Point of Contact</span>
                    </div>
                    <p className="font-bold text-slate-800 text-sm">
                      {sub.hrName}{' '}
                      <span className="text-xs font-normal text-slate-500">
                        &bull; {sub.hrDesignation || 'HR'}
                      </span>
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1 text-slate-600 font-medium">
                      <a href={`mailto:${sub.workEmail}`} className="flex items-center gap-1 text-blue-600 hover:underline">
                        <Mail className="w-3.5 h-3.5" /> {sub.workEmail}
                      </a>
                      <span className="hidden sm:inline text-slate-300">|</span>
                      <a href={`tel:${sub.phone}`} className="flex items-center gap-1 text-slate-800 hover:text-[#F26522]">
                        <Phone className="w-3.5 h-3.5 text-[#F26522]" /> {sub.phone}
                      </a>
                    </div>
                  </div>

                  {/* Vacancy Info Box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                      <Briefcase className="w-3.5 h-3.5 text-[#002D62]" />
                      <span>Vacancy Role & Department</span>
                    </div>
                    <p className="font-bold text-[#F26522] text-sm">
                      {sub.jobTitle}{' '}
                      <span className="text-xs font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200 ml-1">
                        {sub.vacanciesCount || 1} Openings
                      </span>
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-slate-600 font-medium">
                      <span>{sub.department || 'Technology'}</span>
                      <span className="text-slate-300">&bull;</span>
                      <span>{sub.employmentType || 'Full-Time'}</span>
                      {sub.ctcRange && (
                        <>
                          <span className="text-slate-300">&bull;</span>
                          <span className="font-bold text-slate-700">{sub.ctcRange}</span>
                        </>
                      )}
                    </div>
                  </div>

                </div>

                {/* Skills & Hiring Mode */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-slate-400 font-bold text-[11px] mr-1">Required Skills:</span>
                    {(sub.requiredSkills && sub.requiredSkills.length > 0 ? sub.requiredSkills : ['Not specified']).map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-orange-50 text-[#F26522] border border-orange-200 font-bold text-[10px]"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-slate-600 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#002D62]" />
                      <span>Drive: {sub.driveMode || 'Virtual'}</span>
                    </span>
                    {sub.tentativeDate && (
                      <span className="text-slate-500 font-normal">
                        ({sub.tentativeDate})
                      </span>
                    )}
                  </div>
                </div>

                {/* Optional Job Description snippet */}
                {sub.jobDescription && (
                  <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-200/60 text-[11px] text-slate-600 italic">
                    <span className="font-semibold text-slate-700 not-italic mr-1">Role Summary:</span>
                    "{sub.jobDescription}"
                  </div>
                )}

              </div>
            ))}
          </div>
        )}

      </main>

    </div>
  );
}
