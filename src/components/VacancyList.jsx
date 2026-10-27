import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Calendar, 
  DollarSign, 
  Users, 
  Building2, 
  ChevronRight, 
  Sparkles,
  Filter,
  CheckCircle2,
  Tag
} from 'lucide-react';

export default function VacancyList({ 
  vacancies = [], 
  searchQuery, 
  setSearchQuery,
  selectedDepartment, 
  setSelectedDepartment,
  selectedJobType,
  setSelectedJobType,
  onSelectVacancy,
  onApplyVacancy,
  onOpenPostVacancy
}) {
  const departments = [
    'All',
    'Engineering',
    'Human Resources',
    'DevOps & Infrastructure',
    'Product & Design',
    'AI & Data Science',
  ];

  const jobTypes = ['All', 'Full-time', 'Remote', 'Hybrid'];

  // Filter vacancies
  const filtered = vacancies.filter((v) => {
    const matchesDept = selectedDepartment === 'All' || v.department === selectedDepartment;
    const matchesType = selectedJobType === 'All' || v.jobType === selectedJobType;
    
    let matchesSearch = true;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = v.title?.toLowerCase().includes(q);
      const inCompany = v.companyName?.toLowerCase().includes(q);
      const inSkills = v.requiredSkills?.some(s => s.toLowerCase().includes(q));
      const inDesc = v.description?.toLowerCase().includes(q);
      matchesSearch = inTitle || inCompany || inSkills || inDesc;
    }

    return matchesDept && matchesType && matchesSearch;
  });

  return (
    <section id="vacancies-section" className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-700 mb-2">
              <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
              <span>Current Opportunities</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Open Requirement Skills Vacancies
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Explore high-impact positions with verified skill requirements and competitive compensation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPostVacancy}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all"
            >
              + Post New Vacancy
            </button>
          </div>
        </div>

        {/* Filter Bars */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          
          {/* Department Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 max-w-full no-scrollbar">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDepartment === dept
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                {dept === 'All' ? 'All Roles' : dept}
              </button>
            ))}
          </div>

          {/* Job Type Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs">
            {jobTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedJobType(type)}
                className={`px-3 py-1 rounded-lg font-medium transition-all ${
                  selectedJobType === type
                    ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

        </div>

        {/* Active Results Counter */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Showing {filtered.length} matching job vacancies</span>
          {searchQuery && (
            <span>Filtered by "{searchQuery}"</span>
          )}
        </div>

        {/* Vacancies Grid / List */}
        {filtered.length === 0 ? (
          <div className="mt-8 text-center p-12 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No matching vacancies found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search keywords, clearing filters, or post a new vacancy requirement.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDepartment('All');
                setSelectedJobType('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-white hover:bg-slate-900 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((vacancy) => (
              <div
                key={vacancy._id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-300 shadow-sm hover:shadow-xl transition-all duration-200"
              >
                <div>
                  
                  {/* Top Metadata */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-base shadow-sm">
                        {vacancy.companyName ? vacancy.companyName.charAt(0) : 'J'}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                          {vacancy.companyName}
                          <span className="w-1 h-1 rounded-full bg-slate-300" />
                          <span className="text-indigo-600">{vacancy.department}</span>
                        </h4>
                        <h3 
                          onClick={() => onSelectVacancy(vacancy)}
                          className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer mt-0.5 line-clamp-1"
                        >
                          {vacancy.title}
                        </h3>
                      </div>
                    </div>

                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      vacancy.jobType === 'Remote' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                        : vacancy.jobType === 'Hybrid'
                        ? 'bg-purple-50 text-purple-700 border-purple-200'
                        : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    }`}>
                      {vacancy.jobType}
                    </span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{vacancy.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{vacancy.experienceLevel}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg col-span-2 sm:col-span-1">
                      <Users className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{vacancy.vacanciesCount || 1} Openings</span>
                    </div>
                  </div>

                  {/* Salary Highlight */}
                  <div className="mt-3 text-xs font-semibold text-emerald-700 bg-emerald-50/70 px-3 py-1.5 rounded-lg border border-emerald-100 flex items-center justify-between">
                    <span>Package / CTC:</span>
                    <span className="font-bold text-slate-900">{vacancy.salaryRange}</span>
                  </div>

                  {/* Description snippet */}
                  <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {vacancy.description}
                  </p>

                  {/* Required Skills Badges */}
                  <div className="mt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                      <Tag className="w-3 h-3 text-indigo-500" /> Required Skills & Stack:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {vacancy.requiredSkills?.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          onClick={() => setSearchQuery(skill)}
                          className="cursor-pointer text-[11px] font-medium bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 px-2.5 py-0.5 rounded-md border border-slate-200/80 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectVacancy(vacancy)}
                    className="text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    View Details & Requirements &rarr;
                  </button>

                  <button
                    onClick={() => onApplyVacancy(vacancy)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all active:scale-95"
                  >
                    Apply Now
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
