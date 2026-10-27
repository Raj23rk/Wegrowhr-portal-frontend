import React, { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  FileText, 
  Globe, 
  Plus, 
  Sparkles, 
  CheckCircle2, 
  Loader2, 
  Trash2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CandidateEnrollModal({ 
  isOpen, 
  onClose, 
  selectedVacancy, 
  allVacancies = [], 
  onApplicationSuccess 
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceYears: '3 - 5 Years',
    vacancyId: '',
    vacancyTitle: '',
    resumeUrl: '',
    portfolioUrl: '',
    coverNote: '',
  });

  const [skills, setSkills] = useState(['React', 'TypeScript', 'Node.js']);
  const [currentSkillInput, setCurrentSkillInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedVacancy) {
      setFormData((prev) => ({
        ...prev,
        vacancyId: selectedVacancy._id,
        vacancyTitle: `${selectedVacancy.title} (${selectedVacancy.companyName})`,
      }));
      if (selectedVacancy.requiredSkills && selectedVacancy.requiredSkills.length > 0) {
        setSkills(selectedVacancy.requiredSkills.slice(0, 4));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        vacancyId: '',
        vacancyTitle: 'General Open Talent Pool',
      }));
    }
  }, [selectedVacancy, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleAddSkill = (e) => {
    e?.preventDefault();
    const trimmed = currentSkillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setCurrentSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setError('Please fill in your name, email, and phone number.');
      return;
    }

    if (skills.length === 0) {
      setError('Please add at least one relevant skill.');
      return;
    }

    try {
      setLoading(true);
      await onApplicationSuccess({
        ...formData,
        skills,
      });

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      onClose();
    } catch (err) {
      setError(err.message || 'Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-slide-up">
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 p-6 sm:p-7 text-white">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Candidate Enrollment & Application</span>
          </div>

          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            Apply For Requirement Skills Vacancy
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-emerald-200">
            {formData.vacancyTitle || 'Direct submission to hiring team & talent pool'}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[72vh] overflow-y-auto">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
              {error}
            </div>
          )}

          {/* Vacancy Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Select Position / Vacancy
            </label>
            <div className="relative flex items-center">
              <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <select
                name="vacancyId"
                value={formData.vacancyId}
                onChange={(e) => {
                  const vac = allVacancies.find((v) => v._id === e.target.value);
                  setFormData((prev) => ({
                    ...prev,
                    vacancyId: e.target.value,
                    vacancyTitle: vac ? `${vac.title} (${vac.companyName})` : 'General Open Talent Pool',
                  }));
                }}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
              >
                <option value="">-- General Open Talent Pool (All Vacancies) --</option>
                {allVacancies.map((v) => (
                  <option key={v._id} value={v._id}>
                    {v.title} - {v.companyName} ({v.jobType})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rahul@example.com"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <div className="relative flex items-center">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 00000"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Total Experience
              </label>
              <select
                name="experienceYears"
                value={formData.experienceYears}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              >
                <option value="Fresher (0 - 1 Year)">Fresher (0 - 1 Year)</option>
                <option value="1 - 3 Years (Junior)">1 - 3 Years (Junior)</option>
                <option value="3 - 5 Years (Mid-Level)">3 - 5 Years (Mid-Level)</option>
                <option value="5 - 8 Years (Senior)">5 - 8 Years (Senior)</option>
                <option value="8+ Years (Lead / Principal)">8+ Years (Lead / Principal)</option>
              </select>
            </div>

          </div>

          {/* Interactive Skills Tag Cloud */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Requirement Skills (Press Enter to Add)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentSkillInput}
                onChange={(e) => setCurrentSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddSkill();
                  }
                }}
                placeholder="Type skill (e.g. React, NestJS, Docker) and click Add"
                className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Add
              </button>
            </div>

            {/* Rendered Skill Tags */}
            <div className="mt-2.5 flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 shadow-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-emerald-500 hover:text-emerald-800"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Resume & Portfolio Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Resume Link (Google Drive / Dropbox)
              </label>
              <div className="relative flex items-center">
                <FileText className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="url"
                  name="resumeUrl"
                  value={formData.resumeUrl}
                  onChange={handleChange}
                  placeholder="https://drive.google.com/..."
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Portfolio or GitHub URL
              </label>
              <div className="relative flex items-center">
                <Globe className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="url"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  placeholder="https://github.com/yourhandle"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Cover Note */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Brief Pitch / Why You are a Great Match
            </label>
            <textarea
              name="coverNote"
              rows={2}
              value={formData.coverNote}
              onChange={handleChange}
              placeholder="Highlight key accomplishments, notice period, or expectations..."
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 active:scale-95 disabled:opacity-50 transition-all"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting Application...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Submit Application
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
