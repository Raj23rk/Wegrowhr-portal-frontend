import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink,
  Building2
} from 'lucide-react';

export default function Footer() {
  const [activeCampus, setActiveCampus] = useState('sivakasi');

  const resources = [
    { label: 'Library / Blog', href: '#' },
    { label: 'Free Courses', href: '#' },
    { label: 'Community Forum', href: '#' },
    { label: 'Newsletter', href: '#' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Who Can Join', href: '#' },
    { label: 'Mission & Vision', href: '#' },
    { label: 'Featured Courses', href: '#' },
    { label: 'Campus Gallery', href: '#' },
    { label: 'Business Consultancy', href: '#' },
    { label: 'Events & Workshops', href: '#' },
    { label: 'Seminars & Talks', href: '#' },
    { label: 'Industrial Visits', href: '#' },
    { label: 'Rewards & Credits', href: '#' },
    { label: 'Enterprise Training', href: '#' },
    { label: 'Success Stories', href: '#' },
    { label: 'HR Submissions (Admin)', href: '/submissions' },
    { label: 'Contact & Support', href: '#' },
  ];

  return (
    <footer className="bg-[#0C3E7C] text-white pt-16 pb-10 border-t border-blue-900/40 text-xs selection:bg-[#F26522] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12">
          
          {/* COLUMN 1: Brand Logo & Description (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="bg-white rounded-2xl p-4 inline-block shadow-md">
              <img
                src="/wegrow-logo.webp"
                onError={(e) => {
                  e.currentTarget.src = '/wegrow&Bschool.webp';
                }}
                alt="WeGrow Skill Campus"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-slate-200 text-xs leading-relaxed max-w-sm font-normal">
              WeGrow Skill Campus provides industry-focused Business and IT training in Business Management, Entrepreneurship, Digital Marketing, Data Analytics, Software Development, and placement-oriented skill programs in Sivakasi &amp; Srivilliputhur.
            </p>

            <div className="pt-2">
              <h4 className="text-[11px] font-extrabold text-[#F7A600] tracking-wider uppercase mb-3">
                CONNECT WITH US
              </h4>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white text-[#0C3E7C] hover:bg-[#F7A600] hover:text-white flex items-center justify-center transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
                
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white text-[#0C3E7C] hover:bg-[#F7A600] hover:text-white flex items-center justify-center transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919344037331"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full bg-white text-[#0C3E7C] hover:bg-[#F7A600] hover:text-white flex items-center justify-center transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.761.881 2.796.881 3.179 0 5.766-2.587 5.767-5.766.001-3.187-2.575-5.77-5.767-5.768zm3.385 8.167c-.145.407-.739.771-1.206.87-.333.07-.768.127-2.235-.48-1.876-.777-3.078-2.696-3.172-2.822-.092-.124-.754-1.004-.754-1.916s.475-1.36.644-1.545c.171-.184.372-.232.497-.232.124 0 .248.002.355.006.113.004.263-.042.412.316.155.373.53 1.292.577 1.385.047.094.078.204.016.328-.063.125-.094.204-.187.312-.093.109-.197.243-.281.328-.094.093-.191.194-.082.381.109.187.485.801 1.042 1.297.717.639 1.32.837 1.507.93.187.093.297.078.406-.047.109-.125.469-.547.594-.734.125-.187.25-.156.422-.093.172.062 1.094.516 1.282.609.188.094.313.141.359.219.046.078.046.453-.099.86zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white text-[#0C3E7C] hover:bg-[#F7A600] hover:text-white flex items-center justify-center transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0-.01-3.05 1.53 1.53 0 0 0 .01 3.05M5.07 18.5h2.78v-8.37H5.07v8.37z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Resources (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] font-extrabold text-[#F7A600] tracking-wider uppercase flex items-center gap-1.5 mb-4">
              <span>&#9670;</span> RESOURCES
            </h4>
            <ul className="space-y-2.5 font-medium">
              {resources.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-200 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <span className="text-[#F7A600] group-hover:translate-x-0.5 transition-transform">&#10140;</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] font-extrabold text-[#F7A600] tracking-wider uppercase flex items-center gap-1.5 mb-4">
              <span>&#9670;</span> QUICK LINKS
            </h4>
            <ul className="space-y-2 font-medium">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-200 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <span className="text-[#F7A600] group-hover:translate-x-0.5 transition-transform">&#10140;</span>
                    <span className="truncate">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[12px] font-extrabold text-[#F7A600] tracking-wider uppercase flex items-center gap-1.5">
              <span>&#9670;</span> CONTACT US
            </h4>

            {/* Campus Selector Toggle Pills */}
            <div className="inline-flex p-1 rounded-full bg-[#082E5C] border border-blue-800/80">
              <button
                onClick={() => setActiveCampus('sivakasi')}
                className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all ${
                  activeCampus === 'sivakasi'
                    ? 'bg-[#F7A600] text-[#0C3E7C] shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Sivakasi
              </button>
              <button
                onClick={() => setActiveCampus('srivilliputhur')}
                className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all ${
                  activeCampus === 'srivilliputhur'
                    ? 'bg-[#F7A600] text-[#0C3E7C] shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Srivilliputhur
              </button>
            </div>

            {/* Sivakasi Details */}
            {activeCampus === 'sivakasi' ? (
              <div className="space-y-3 text-slate-200 text-xs">
                <div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-rose-400 mt-0.5 text-sm">&#128205;</span>
                    <div>
                      <p className="font-extrabold text-[#F7A600] text-[11px] uppercase tracking-wider">ADDRESS</p>
                      <p className="leading-relaxed mt-0.5">
                        WeGrow Skill Campus, 193/1A, Ground Floor,<br />
                        Ayyapan Kovil Opp. Police Station Road,<br />
                        Sivakasi – 626 123
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-cyan-300 mt-0.5 text-sm">&#127970;</span>
                    <div>
                      <p className="font-extrabold text-slate-300 text-[11px] uppercase tracking-wider">OLD CAMPUS</p>
                      <p className="leading-relaxed mt-0.5">
                        100A/5, 1st Floor, Thiruthangal Road,<br />
                        Opposite Bell Hotel, Sivakasi – 626123
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-slate-200 text-xs">
                <div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-rose-400 mt-0.5 text-sm">&#128205;</span>
                    <div>
                      <p className="font-extrabold text-[#F7A600] text-[11px] uppercase tracking-wider">ADDRESS</p>
                      <p className="leading-relaxed mt-0.5">
                        WeGrow Skill Campus,<br />
                        Madurai - Kollam Main Road,<br />
                        Srivilliputhur – 626 125
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-cyan-300 mt-0.5 text-sm">&#127970;</span>
                    <div>
                      <p className="font-extrabold text-slate-300 text-[11px] uppercase tracking-wider">TRAINING CENTER</p>
                      <p className="leading-relaxed mt-0.5">
                        Main Market Road Branch,<br />
                        Near Town Bus Stand, Srivilliputhur – 626125
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Common Contact Details */}
            <div className="space-y-2 pt-1 border-t border-blue-900/60 text-xs">
              <a href="tel:+919344037331" className="flex items-center gap-2 text-slate-200 hover:text-white font-semibold">
                <span className="text-rose-400 text-sm">&#128222;</span>
                <span>+91 93440 37331</span>
              </a>
              <a href="mailto:wegrowjobz@gmail.com" className="flex items-center gap-2 text-slate-200 hover:text-white">
                <span className="text-slate-300 text-sm">&#9993;</span>
                <span className="break-all">wegrowjobz@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="text-amber-400 text-sm">&#9200;</span>
                <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* COLUMN 5: Find Us Map (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] font-extrabold text-[#F7A600] tracking-wider uppercase flex items-center gap-1.5 mb-4">
              <span>&#9670;</span> FIND US
            </h4>

            {/* Map Preview Card */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-800 shadow-xl bg-slate-900 group">
              <iframe
                title="WeGrow Skill Campus Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15738.995958296317!2d77.7844!3d9.4533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf72a5a04377%3A0x6b8bc2ebfd1ff73a!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-44 border-0 filter contrast-105 opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=WeGrow+Skill+Campus+Sivakasi"
                target="_blank"
                rel="noreferrer"
                className="absolute top-2.5 left-2.5 bg-white/95 hover:bg-white text-slate-900 font-bold text-[10px] px-2 py-1 rounded shadow flex items-center gap-1 transition-all"
              >
                Maps <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-blue-900/60 text-center text-slate-300 text-[11px] font-normal">
          &copy; {new Date().getFullYear()} WeGrow Skill Campus | Business &amp; IT Skill Training &amp; Placement Campus. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
