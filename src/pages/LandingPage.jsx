import React, { useState } from 'react';
import Header from '../components/Header';
import HrEnrollmentForm from '../components/HrEnrollmentForm';
import Footer from '../components/Footer';
import Toast from '../components/Toast';
import { api } from '../services/api';
import { 
  Building2, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  ArrowDown, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Layers,
  Award
} from 'lucide-react';

export default function LandingPage() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, title, message) => {
    setToast({ type, title, message });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 5000);
  };

  // Handle Form Submission
  const handleEnrollmentSubmit = async (formData) => {
    setLoading(true);
    try {
      const res = await api.submitEnrollment(formData);
      showToast(
        'success',
        'Company & Vacancy Enrolled!',
        `Thank you ${formData.hrName}! Your requirements for ${formData.jobTitle} at ${formData.companyName} have been recorded.`
      );
      return res;
    } catch (err) {
      showToast('error', 'Submission Failed', err.message || 'Please try again.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('enrollment-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans selection:bg-[#F26522] selection:text-white">
      
      {/* Toast Feedback */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Header with Official Logo (Without HR Submissions button) */}
      <Header />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200">
          
          {/* Subtle brand glow effects */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute top-20 left-10 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Hero Copy */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#002D62]">
                  <GraduationCap className="w-4 h-4 text-[#F26522]" />
                  <span>Campus Hiring & Talent Partner Network</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002D62] tracking-tight leading-[1.2]">
                  Hire Pre-Trained, Industry-Ready Talent From{' '}
                  <span className="text-[#F26522]">WeGrow Skill Campus</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Welcome HR & Talent Acquisition Leaders! Enroll your company details and open vacancy requirements below. Our placement cell matches skilled freshers & trainees for immediate hiring drives.
                </p>

                {/* Trust points */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700 max-w-lg mx-auto lg:mx-0">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F26522] flex-shrink-0" />
                    <span>Zero Placement Charges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F26522] flex-shrink-0" />
                    <span>Pre-Screened Candidates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F26522] flex-shrink-0" />
                    <span>Virtual / Campus Drives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F26522] flex-shrink-0" />
                    <span>48-Hour Response SLA</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={scrollToForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#F26522] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] shadow-lg shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Fill Company & Vacancy Form Below</span>
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </button>

                  <a
                    href="#how-it-works"
                    className="text-xs font-bold text-[#002D62] hover:text-[#F26522] transition-colors"
                  >
                    How Campus Drives Work &rarr;
                  </a>
                </div>

              </div>

              {/* Right Column: Animated Mascot Visual + Floating HR Handshake Card */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-4 lg:pt-0">
                {/* Main Visual: Mascot Shaking Hands With HR Girl */}
                <div className="relative w-full max-w-[420px] sm:max-w-[460px] flex items-center justify-center">
                  
                  {/* Glowing background aura */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#F26522]/25 via-[#002D62]/25 to-blue-500/20 rounded-3xl blur-3xl animate-pulse-glow -z-10" />

                  {/* Animated Mascot Handshake Card */}
                  <div className="relative animate-mascot z-10 cursor-pointer group rounded-3xl overflow-hidden p-2 bg-white/95 backdrop-blur-md border-2 border-white shadow-2xl transition-all duration-300 hover:shadow-orange-500/20">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                      <img
                        src="/mascot-handshake.jpg"
                        alt="WeGrow Mascot Shaking Hands with HR Partner"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#002D62]/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider flex items-center gap-1.5 shadow-lg border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Corporate Placement Tie-Up</span>
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-md text-[#002D62] px-2.5 py-1 rounded-xl text-[10px] font-black tracking-wide shadow-md border border-slate-100 flex items-center gap-1">
                        <span className="text-[#F26522]">★ 4.9/5</span> &bull; 480+ Hired
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 4 TALENT DOMAINS PILLARS */}
        <section className="py-10 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider">Our Talent Pool</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#002D62] tracking-tight mt-1">
                Specialized Disciplines Ready For Immediate Deployment
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Discipline 1 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#002D62]/40 transition-all hover:shadow-md group">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#002D62] flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
                  💻
                </div>
                <h3 className="font-extrabold text-sm text-[#002D62] mb-1">Software & Web Dev</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  React, Node.js, Python, Java, SQL, Full-stack web applications & REST APIs.
                </p>
              </div>

              {/* Discipline 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#002D62]/40 transition-all hover:shadow-md group">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#F26522] flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
                  📊
                </div>
                <h3 className="font-extrabold text-sm text-[#002D62] mb-1">Data & Business Analytics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Advanced Excel, PowerBI, Python for Data, SQL queries, and predictive modeling.
                </p>
              </div>

              {/* Discipline 3 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#002D62]/40 transition-all hover:shadow-md group">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
                  🤝
                </div>
                <h3 className="font-extrabold text-sm text-[#002D62] mb-1">Management & HR</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Talent acquisition, organizational behavior, business development & client relations.
                </p>
              </div>

              {/* Discipline 4 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#002D62]/40 transition-all hover:shadow-md group">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
                  📈
                </div>
                <h3 className="font-extrabold text-sm text-[#002D62] mb-1">Finance & Marketing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Financial analysis, digital marketing, SEO/SEM, market research & sales funnels.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* WHY PARTNER WITH WEGROW SKILL CAMPUS */}
        <section className="py-12 bg-gradient-to-r from-[#002D62] via-[#0A2540] to-[#002D62] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Mascot image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl max-w-sm">
                  <img
                    src="/mascot-handshake.jpg"
                    alt="Corporate Partner with Mascot"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <p className="text-xs font-bold text-white drop-shadow">
                      Direct Campus Recruiter Agreement &bull; Instant Profile Delivery
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Partnership Value Props */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-bold border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>Corporate Relations Commitment</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Why 100+ Enterprise Recruiters Partner With WeGrow Skill Campus
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  We bridge the gap between academic theory and real-world execution. When your company partners with us, our placement team customizes talent pools based on your specific required tech stacks and operational needs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-left">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="font-extrabold text-[#F7A600] flex items-center gap-1.5">
                      <span>✓</span> Zero Hiring Overhead
                    </p>
                    <p className="text-slate-300 text-[11px] mt-0.5">No agency commissions or hidden recruitment fees.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="font-extrabold text-[#F7A600] flex items-center gap-1.5">
                      <span>✓</span> Project-Tested Talent
                    </p>
                    <p className="text-slate-300 text-[11px] mt-0.5">Students complete 4+ live enterprise capstone projects.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="font-extrabold text-[#F7A600] flex items-center gap-1.5">
                      <span>✓</span> Flexible Drive Scheduling
                    </p>
                    <p className="text-slate-300 text-[11px] mt-0.5">Virtual online coding rounds or on-campus interview drives.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="font-extrabold text-[#F7A600] flex items-center gap-1.5">
                      <span>✓</span> Fast-Track Joining
                    </p>
                    <p className="text-slate-300 text-[11px] mt-0.5">Immediate joining availability for 2026/latest batches.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* INLINE 5-STEP ENROLLMENT FORM */}
        <HrEnrollmentForm onSubmit={handleEnrollmentSubmit} loading={loading} />

        {/* HOW CAMPUS HIRING WORKS */}
        <section id="how-it-works" className="py-14 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider">Simple 4-Step Process</span>
              <h2 className="text-2xl font-black text-[#002D62] tracking-tight mt-1">
                How Our Campus Recruitment Drive Works
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                From requirement enrollment to final offer letter rollout, our team manages the entire coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002D62] font-black text-base flex items-center justify-center mx-auto mb-3 border border-blue-200">
                  1
                </div>
                <h3 className="font-bold text-sm text-slate-900">Enroll Vacancy</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill the form above with your company details and required skills.
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F26522] font-black text-base flex items-center justify-center mx-auto mb-3 border border-orange-200">
                  2
                </div>
                <h3 className="font-bold text-sm text-slate-900">Resume Matching</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Our placement officers curate pre-screened student profiles matching your criteria.
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 font-black text-base flex items-center justify-center mx-auto mb-3 border border-emerald-200">
                  3
                </div>
                <h3 className="font-bold text-sm text-slate-900">Interview Drive</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Conduct online tests and interviews virtually or during a campus visit.
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 font-black text-base flex items-center justify-center mx-auto mb-3 border border-purple-200">
                  4
                </div>
                <h3 className="font-bold text-sm text-slate-900">Offer & Onboard</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Roll out offers and welcome trained, motivated graduates into your teams.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
