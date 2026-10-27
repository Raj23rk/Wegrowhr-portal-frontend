import React, { useState } from 'react';
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Users, 
  Calendar, 
  Plus, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Loader2, 
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Send,
  Eye,
  Edit3,
  Check,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HrEnrollmentForm({ onSubmit, loading }) {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // Step 1: Company Details
    companyName: '',
    website: '',
    industry: 'Information Technology & Software',
    companySize: '50 - 200 Employees',
    location: '',
    
    // Step 2: HR Contact
    hrName: '',
    hrDesignation: 'Talent Acquisition / HR Manager',
    workEmail: '',
    phone: '',
    
    // Step 3: Vacancy & Role
    jobTitle: '',
    department: 'Technology / Engineering',
    employmentType: 'Full-Time',
    vacanciesCount: 2,
    ctcRange: '',
    workLocation: '',
    
    // Step 4: Skills & Drive
    jobDescription: '',
    driveMode: 'Virtual Hiring Drive',
    tentativeDate: '',
  });

  const [skills, setSkills] = useState(['Problem Solving', 'Good Communication']);
  const [skillInput, setSkillInput] = useState('');
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const popularSkills = [
    'React', 'Node.js', 'Python', 'Java', 'SQL', 
    'Full Stack', 'Data Analytics', 'Excel', 'Digital Marketing', 
    'Business Analysis', 'Finance', 'UI/UX Design'
  ];

  const stepsConfig = [
    { number: 1, title: 'Company Profile', subtitle: 'Company & Location' },
    { number: 2, title: 'HR Contact', subtitle: 'Recruiter Details' },
    { number: 3, title: 'Vacancy Details', subtitle: 'Role & Headcount' },
    { number: 4, title: 'Skills & Drive', subtitle: 'Skill Matrix & Mode' },
    { number: 5, title: 'Preview & Submit', subtitle: 'Final Review' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleAddSkill = (skillToAdd) => {
    const trimmed = (skillToAdd || skillInput).trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const scrollToFormHeader = () => {
    const el = document.getElementById('enrollment-form-section');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  // Step-by-step validation
  const validateStep = (step) => {
    if (step === 1) {
      if (!formData.companyName.trim()) {
        setError('Please provide your Company Name.');
        return false;
      }
      if (!formData.location.trim()) {
        setError('Please provide your Head Office / Location.');
        return false;
      }
    } else if (step === 2) {
      if (!formData.hrName.trim()) {
        setError('Please provide HR / Recruiter Full Name.');
        return false;
      }
      if (!formData.workEmail.trim()) {
        setError('Please provide Official Work Email.');
        return false;
      }
      if (!formData.workEmail.includes('@') || !formData.workEmail.includes('.')) {
        setError('Please enter a valid work email address.');
        return false;
      }
      if (!formData.phone.trim()) {
        setError('Please provide Contact Phone / WhatsApp number.');
        return false;
      }
    } else if (step === 3) {
      if (!formData.jobTitle.trim()) {
        setError('Please enter Vacancy Role / Designation.');
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleNext = (e) => {
    if (e) e.preventDefault();
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
      scrollToFormHeader();
    }
  };

  const handleBack = () => {
    setError('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    scrollToFormHeader();
  };

  const goToStep = (targetStep) => {
    if (targetStep < currentStep) {
      setError('');
      setCurrentStep(targetStep);
      scrollToFormHeader();
    } else if (targetStep > currentStep) {
      // Validate current before allowing forward jumps
      if (validateStep(currentStep)) {
        setCurrentStep(targetStep);
        scrollToFormHeader();
      }
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!validateStep(1) || !validateStep(2) || !validateStep(3)) {
      return;
    }

    try {
      const payload = {
        ...formData,
        vacanciesCount: Number(formData.vacanciesCount) || 1,
        requiredSkills: skills,
      };

      const result = await onSubmit(payload);
      setSubmittedData({
        ...payload,
        refId: 'WEGROW-' + Math.floor(100000 + Math.random() * 900000),
      });

      // Confetti celebration
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch (err) {}

      scrollToFormHeader();
    } catch (err) {
      setError(err.message || 'Error submitting enrollment. Please check your connection.');
    }
  };

  // If successfully submitted, show the confirmation screen
  if (submittedData) {
    return (
      <section id="enrollment-form-section" className="py-12 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-emerald-50/80 to-white border border-emerald-200 shadow-xl text-center">
            
            <div className="flex justify-center mb-4">
              <img
                src="/mascot.webp"
                alt="WeGrow Mascot"
                className="w-28 h-auto drop-shadow-md animate-bounce"
                style={{ animationDuration: '3s' }}
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Enrollment Received Successfully
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002D62] tracking-tight">
              Thank You, {submittedData.hrName}!
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
              Your company details and requirement vacancy for{' '}
              <strong className="text-slate-900 font-bold">{submittedData.jobTitle}</strong> at{' '}
              <strong className="text-slate-900 font-bold">{submittedData.companyName}</strong> have been enrolled with WeGrow Skill Campus.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500 font-semibold">Reference ID:</span>
                <span className="font-bold text-[#F26522]">{submittedData.refId}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500 font-semibold">Open Vacancies:</span>
                <span className="font-bold text-slate-800">{submittedData.vacanciesCount} Openings</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-slate-500 font-semibold">Confirmation Sent To:</span>
                <span className="font-bold text-slate-800">{submittedData.workEmail}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-semibold">Status:</span>
                <span className="font-bold text-emerald-600">Assigned to Placement Cell Officer</span>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-500 max-w-md mx-auto">
              Our Corporate Relations & Placement team will review your requirement skills and connect with you at{' '}
              <strong>{submittedData.phone}</strong> to coordinate student profiles and drive scheduling.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  setSubmittedData(null);
                  setCurrentStep(1);
                  setFormData((prev) => ({
                    ...prev,
                    jobTitle: '',
                    ctcRange: '',
                    jobDescription: '',
                  }));
                }}
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#002D62] hover:bg-[#0A2540] shadow-md transition-all active:scale-95 cursor-pointer"
              >
                + Enroll Another Vacancy / Role
              </button>
            </div>

          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enrollment-form-section" className="py-12 lg:py-16 bg-slate-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          
          {/* Form Header */}
          <div className="bg-gradient-to-r from-[#002D62] via-[#0A2540] to-[#134074] p-6 sm:p-8 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-bold mb-2 border border-white/10">
                  <Building2 className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>HR & Employer Portal</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Company & Vacancy Enrollment Form
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-200 max-w-xl">
                  Step-by-step company and vacancy enrollment. Fill details across 5 easy steps, preview, and submit directly to our placement cell.
                </p>
              </div>

              <div className="hidden sm:block flex-shrink-0 animate-mascot">
                <img
                  src="/mascot.webp"
                  alt="WeGrow Mascot"
                  className="w-20 h-auto drop-shadow-lg"
                />
              </div>
            </div>

            {/* 5-STEP STEPPER INDICATOR */}
            <div className="mt-8 pt-6 border-t border-white/15">
              
              {/* Stepper Steps (Desktop / Tablet) */}
              <div className="hidden sm:grid grid-cols-5 gap-2 relative">
                
                {/* Connecting bar behind steps */}
                <div className="absolute top-4 left-6 right-6 h-0.5 bg-white/20 -z-0" />
                <div 
                  className="absolute top-4 left-6 h-0.5 bg-gradient-to-r from-[#F26522] to-amber-400 transition-all duration-300 -z-0"
                  style={{ width: `${((currentStep - 1) / 4) * 85}%` }}
                />

                {stepsConfig.map((step) => {
                  const isActive = currentStep === step.number;
                  const isCompleted = currentStep > step.number;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => goToStep(step.number)}
                      className={`relative z-10 flex flex-col items-center text-center group cursor-pointer focus:outline-none transition-all`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 shadow-md ${
                          isActive
                            ? 'bg-[#F26522] text-white ring-4 ring-[#F26522]/30 scale-110'
                            : isCompleted
                            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                            : 'bg-slate-700/80 text-slate-300 group-hover:bg-slate-600'
                        }`}
                      >
                        {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : step.number}
                      </div>
                      <span className={`text-[11px] font-bold mt-2 transition-colors ${
                        isActive ? 'text-white' : isCompleted ? 'text-emerald-300' : 'text-slate-400'
                      }`}>
                        {step.title}
                      </span>
                      <span className="text-[10px] text-slate-300/80 hidden md:block">
                        {step.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Stepper Header */}
              <div className="sm:hidden">
                <div className="flex items-center justify-between text-xs mb-2 font-bold">
                  <span className="text-orange-300">Step {currentStep} of 5</span>
                  <span className="text-white">{stepsConfig[currentStep - 1].title}</span>
                </div>
                {/* Visual mini-dots */}
                <div className="grid grid-cols-5 gap-1.5">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => goToStep(num)}
                      className={`h-2 rounded-full transition-all ${
                        num === currentStep
                          ? 'bg-[#F26522]'
                          : num < currentStep
                          ? 'bg-emerald-400'
                          : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-10">
            
            {/* Error Banner */}
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-700 font-semibold flex items-center gap-2 animate-shake">
                <X className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* ================= STEP 1: COMPANY PROFILE DETAILS ================= */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#002D62] font-black text-xs flex items-center justify-center border border-blue-200">
                      1
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#002D62] tracking-tight">
                        Company Profile Details
                      </h3>
                      <p className="text-xs text-slate-500">Provide official details about your organization</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#002D62] border border-blue-100">
                    Step 1 of 5
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Wipro / Deloitte / TechStart Ltd."
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Company Website */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company Website URL
                    </label>
                    <div className="relative flex items-center">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://company.com"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Industry Sector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Industry Sector
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                    >
                      <option value="Information Technology & Software">Information Technology & Software</option>
                      <option value="Banking, Financial Services & Insurance (BFSI)">Banking & Finance (BFSI)</option>
                      <option value="Consulting & Business Services">Consulting & Business Services</option>
                      <option value="E-Commerce & Digital Retail">E-Commerce & Digital Retail</option>
                      <option value="Manufacturing & Automobile">Manufacturing & Automobile</option>
                      <option value="Healthcare & Life Sciences">Healthcare & Pharmaceuticals</option>
                      <option value="Marketing, Advertising & Media">Marketing & Media</option>
                    </select>
                  </div>

                  {/* Company Size */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company Employee Size
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                    >
                      <option value="1 - 20 Employees (Early Stage)">1 - 20 Employees (Early Stage)</option>
                      <option value="20 - 50 Employees (Startup)">20 - 50 Employees (Startup)</option>
                      <option value="50 - 200 Employees (Mid-Sized)">50 - 200 Employees (Mid-Sized)</option>
                      <option value="200 - 500 Employees (Large)">200 - 500 Employees (Large)</option>
                      <option value="500+ Employees (Enterprise / MNC)">500+ Employees (Enterprise / MNC)</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Head Office / Location <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Bangalore, Karnataka (or Mumbai / Pune / Hyderabad / Remote)"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                      />
                    </div>
                  </div>

                </div>

                {/* Step 1 Actions */}
                <div className="pt-6 border-t border-slate-200 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-[#002D62] hover:bg-[#0A2540] shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Next: HR Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 2: HR RECRUITER CONTACT ================= */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#F26522] font-black text-xs flex items-center justify-center border border-orange-200">
                      2
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#002D62] tracking-tight">
                        HR & Recruiter Contact Details
                      </h3>
                      <p className="text-xs text-slate-500">Contact person for scheduling drives & sharing profiles</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-[#F26522] border border-orange-100">
                    Step 2 of 5
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* HR Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      HR / Recruiter Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        name="hrName"
                        required
                        value={formData.hrName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Designation */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Designation / Title
                    </label>
                    <input
                      type="text"
                      name="hrDesignation"
                      value={formData.hrDesignation}
                      onChange={handleChange}
                      placeholder="e.g. Head of Talent Acquisition / HR Manager"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Official Work Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="email"
                        name="workEmail"
                        required
                        value={formData.workEmail}
                        onChange={handleChange}
                        placeholder="rajesh.kumar@company.com"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Contact Phone / WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                      />
                    </div>
                  </div>

                </div>

                {/* Step 2 Actions */}
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back: Company Profile</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-[#002D62] hover:bg-[#0A2540] shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Next: Vacancy Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 3: VACANCY DETAILS ================= */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-black text-xs flex items-center justify-center border border-emerald-200">
                      3
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#002D62] tracking-tight">
                        Vacancy & Role Details
                      </h3>
                      <p className="text-xs text-slate-500">Specify job role, department, headcount and salary</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    Step 3 of 5
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Job Title */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Vacancy Role / Designation <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        name="jobTitle"
                        required
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="e.g. Associate Software Engineer / Management Trainee"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Department / Stream */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Department / Domain
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                    >
                      <option value="Technology / Engineering">Technology & Software</option>
                      <option value="Management & Operations">Management & Operations</option>
                      <option value="Data Science & AI">Data Science & AI</option>
                      <option value="Business Analytics">Business Analytics</option>
                      <option value="Human Resources">Human Resources (HR)</option>
                      <option value="Finance & Accounts">Finance & Accounts</option>
                      <option value="Sales & Business Development">Sales & Business Development</option>
                    </select>
                  </div>

                  {/* Number of Vacancies */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Number of Vacancies (Headcount)
                    </label>
                    <div className="relative flex items-center">
                      <Users className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="number"
                        min="1"
                        max="100"
                        name="vacanciesCount"
                        value={formData.vacanciesCount}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Employment Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Employment Type
                    </label>
                    <select
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                    >
                      <option value="Full-Time">Full-Time (Direct Hire)</option>
                      <option value="Internship leading to PPO">Internship leading to PPO</option>
                      <option value="Contract / Trainee">Trainee / Probation</option>
                    </select>
                  </div>

                  {/* CTC / Salary Bracket */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Offered Salary / CTC Bracket
                    </label>
                    <div className="relative flex items-center">
                      <DollarSign className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        name="ctcRange"
                        value={formData.ctcRange}
                        onChange={handleChange}
                        placeholder="e.g. ₹5.0 - ₹8.0 LPA (or negotiable)"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Work Location */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Job Location / Mode
                    </label>
                    <input
                      type="text"
                      name="workLocation"
                      value={formData.workLocation}
                      onChange={handleChange}
                      placeholder="e.g. Bangalore / Hybrid / Remote"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                    />
                  </div>

                </div>

                {/* Step 3 Actions */}
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back: HR Contact</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-[#002D62] hover:bg-[#0A2540] shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Next: Skills & Drive Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 4: SKILLS & HIRING DRIVE ================= */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 font-black text-xs flex items-center justify-center border border-purple-200">
                      4
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#002D62] tracking-tight">
                        Requirement Skills & Drive Details
                      </h3>
                      <p className="text-xs text-slate-500">Pick required skills and preferred drive format</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                    Step 4 of 5
                  </span>
                </div>

                {/* Requirement Skills Matrix */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Requirement Skills & Tech Stack Needed
                  </label>
                  
                  {/* Input field + Add button */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddSkill();
                        }
                      }}
                      placeholder="Type required skill (e.g. React, Python, SQL) and press Enter"
                      className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                    />
                    <button
                      type="button"
                      onClick={() => handleAddSkill()}
                      className="px-4 py-2.5 rounded-xl bg-[#002D62] hover:bg-[#0A2540] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4" /> Add Skill
                    </button>
                  </div>

                  {/* Selected Skills Tags */}
                  {skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 text-[#F26522] text-xs font-bold border border-orange-200 shadow-sm"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            className="text-orange-400 hover:text-orange-700 cursor-pointer"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Popular Skill Suggestions */}
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="text-slate-400 font-semibold text-[11px]">Quick Add:</span>
                    {popularSkills.map((sk) => (
                      <button
                        key={sk}
                        type="button"
                        onClick={() => handleAddSkill(sk)}
                        disabled={skills.includes(sk)}
                        className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors cursor-pointer ${
                          skills.includes(sk)
                            ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                            : 'bg-white hover:bg-orange-50 text-slate-600 hover:text-[#F26522] border-slate-200'
                        }`}
                      >
                        + {sk}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Job Description & Responsibilities */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Job Description / Role Summary
                  </label>
                  <textarea
                    name="jobDescription"
                    rows={3}
                    value={formData.jobDescription}
                    onChange={handleChange}
                    placeholder="Provide brief details about key responsibilities, projects, or expectations for the candidate..."
                    className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all text-slate-800"
                  />
                </div>

                {/* Selection Process & Hiring Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Hiring Drive Mode
                    </label>
                    <select
                      name="driveMode"
                      value={formData.driveMode}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                    >
                      <option value="Virtual Hiring Drive">Virtual / Online Drive</option>
                      <option value="On-Campus Visit Drive">On-Campus Visit Drive</option>
                      <option value="Hybrid (Virtual Test + On-Campus Interview)">Hybrid</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Tentative Drive Date / Month
                    </label>
                    <input
                      type="text"
                      name="tentativeDate"
                      value={formData.tentativeDate}
                      onChange={handleChange}
                      placeholder="e.g. Next Week / November 2026"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] transition-all font-medium text-slate-800"
                    />
                  </div>
                </div>

                {/* Step 4 Actions */}
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back: Vacancy Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#F26522] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] shadow-lg shadow-orange-500/20 transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Next: Final Preview & Submit</span>
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 5: FINAL PREVIEW & SUBMIT ================= */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#F26522] font-black text-xs flex items-center justify-center border border-orange-200">
                      5
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#002D62] tracking-tight">
                        Final Preview & Confirmation
                      </h3>
                      <p className="text-xs text-slate-500">Please review all entered details before submitting</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Ready for Submission
                  </span>
                </div>

                {/* Review Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Card 1: Company Profile */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 relative group hover:border-[#002D62]/30 transition-all">
                    <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#F26522]" />
                        <h4 className="font-bold text-xs uppercase tracking-wider text-[#002D62]">
                          Company Profile
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => goToStep(1)}
                        className="text-[11px] font-bold text-[#002D62] hover:text-[#F26522] flex items-center gap-1 cursor-pointer"
                      >
                        <Edit3 className="w-3 h-3" /> Edit
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 font-semibold block text-[10px]">COMPANY NAME</span>
                        <p className="font-bold text-slate-800 text-sm">{formData.companyName || '—'}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div>
                          <span className="text-slate-400 font-semibold block text-[10px]">SECTOR</span>
                          <p className="font-semibold text-slate-700 truncate">{formData.industry}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block text-[10px]">COMPANY SIZE</span>
                          <p className="font-semibold text-slate-700">{formData.companySize}</p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <span className="text-slate-400 font-semibold block text-[10px]">LOCATION</span>
                        <p className="font-semibold text-slate-700">{formData.location || '—'}</p>
                      </div>
                      {formData.website && (
                        <div className="pt-1">
                          <span className="text-slate-400 font-semibold block text-[10px]">WEBSITE</span>
                          <a href={formData.website} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                            {formData.website}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card 2: HR Recruiter Contact */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 relative group hover:border-[#002D62]/30 transition-all">
                    <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#F26522]" />
                        <h4 className="font-bold text-xs uppercase tracking-wider text-[#002D62]">
                          HR Point of Contact
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => goToStep(2)}
                        className="text-[11px] font-bold text-[#002D62] hover:text-[#F26522] flex items-center gap-1 cursor-pointer"
                      >
                        <Edit3 className="w-3 h-3" /> Edit
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 font-semibold block text-[10px]">HR FULL NAME</span>
                        <p className="font-bold text-slate-800 text-sm">{formData.hrName || '—'}</p>
                      </div>
                      <div className="pt-1">
                        <span className="text-slate-400 font-semibold block text-[10px]">DESIGNATION</span>
                        <p className="font-semibold text-slate-700">{formData.hrDesignation || '—'}</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        <div>
                          <span className="text-slate-400 font-semibold block text-[10px]">WORK EMAIL</span>
                          <p className="font-semibold text-slate-800 truncate">{formData.workEmail || '—'}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block text-[10px]">PHONE / WHATSAPP</span>
                          <p className="font-semibold text-slate-800">{formData.phone || '—'}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Vacancy & Role Information */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 relative group hover:border-[#002D62]/30 transition-all">
                    <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#F26522]" />
                        <h4 className="font-bold text-xs uppercase tracking-wider text-[#002D62]">
                          Vacancy & Role Information
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => goToStep(3)}
                        className="text-[11px] font-bold text-[#002D62] hover:text-[#F26522] flex items-center gap-1 cursor-pointer"
                      >
                        <Edit3 className="w-3 h-3" /> Edit
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 font-semibold block text-[10px]">ROLE / DESIGNATION</span>
                        <p className="font-bold text-[#F26522] text-sm">{formData.jobTitle || '—'}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div>
                          <span className="text-slate-400 font-semibold block text-[10px]">DEPARTMENT</span>
                          <p className="font-semibold text-slate-700 truncate">{formData.department}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block text-[10px]">OPENINGS</span>
                          <p className="font-bold text-slate-800">{formData.vacanciesCount} Candidates</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div>
                          <span className="text-slate-400 font-semibold block text-[10px]">EMPLOYMENT TYPE</span>
                          <p className="font-semibold text-slate-700">{formData.employmentType}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block text-[10px]">SALARY / CTC</span>
                          <p className="font-semibold text-slate-700">{formData.ctcRange || 'To be discussed'}</p>
                        </div>
                      </div>
                      {formData.workLocation && (
                        <div className="pt-1">
                          <span className="text-slate-400 font-semibold block text-[10px]">JOB LOCATION</span>
                          <p className="font-semibold text-slate-700">{formData.workLocation}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card 4: Required Skills & Hiring Drive */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 relative group hover:border-[#002D62]/30 transition-all">
                    <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#F26522]" />
                        <h4 className="font-bold text-xs uppercase tracking-wider text-[#002D62]">
                          Skills & Hiring Drive
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => goToStep(4)}
                        className="text-[11px] font-bold text-[#002D62] hover:text-[#F26522] flex items-center gap-1 cursor-pointer"
                      >
                        <Edit3 className="w-3 h-3" /> Edit
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 font-semibold block text-[10px] mb-1">REQUIRED SKILLS</span>
                        <div className="flex flex-wrap gap-1.5">
                          {skills.map((s, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 font-semibold text-slate-800 text-[11px]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div>
                          <span className="text-slate-400 font-semibold block text-[10px]">HIRING MODE</span>
                          <p className="font-semibold text-slate-700">{formData.driveMode}</p>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block text-[10px]">TENTATIVE DATE</span>
                          <p className="font-semibold text-slate-700">{formData.tentativeDate || 'Immediate'}</p>
                        </div>
                      </div>

                      {formData.jobDescription && (
                        <div className="pt-2">
                          <span className="text-slate-400 font-semibold block text-[10px]">JOB SUMMARY</span>
                          <p className="text-slate-600 line-clamp-2 text-[11px] italic">
                            "{formData.jobDescription}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Final Submit Actions */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back: Edit Skills & Drive</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#F26522] via-[#ea580c] to-[#c2410c] hover:from-[#ea580c] hover:to-[#9a3412] shadow-xl shadow-orange-500/30 active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Submitting Enrollment...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Submit Company & Vacancy Details
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1 text-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    Direct routing to WeGrow Placement & Corporate Relations Cell. Zero placement charges for companies.
                  </span>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
