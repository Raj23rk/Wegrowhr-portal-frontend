import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink 
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Explore Careers', href: '#careers' },
    { label: 'Login / Signup', href: '/submissions' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms & Conditions', href: '#terms' },
  ];

  const services = [
    'Skill Development',
    'Career Counseling',
    'Direct Placement',
    'Expert Mentorship',
  ];

  return (
    <footer className="bg-gradient-to-b from-[#024388] via-[#012f68] to-[#001c44] text-white pt-14 pb-8 border-t border-blue-800/40 text-xs selection:bg-[#FF8A00] selection:text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 5 Columns on desktop for Brand, Quick Links, Services, Office & Location Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12">
          
          {/* COLUMN 1: Brand, Quote & Socials (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            {/* WeGrow Jobz Brand Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-black tracking-tight flex items-center select-none">
                <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-200 bg-clip-text text-transparent drop-shadow-sm">
                  WeGrow
                </span>
                <span className="ml-1.5 text-[#FF8A00] relative inline-flex items-center font-black">
                  Jobz
                  <svg 
                    className="w-4 h-4 ml-0.5 text-[#FF8A00] -mt-3" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </span>
            </div>

            {/* Description */}
            <p className="text-blue-100/90 text-xs leading-relaxed max-w-sm font-normal">
              Leading technical coaching and placement center dedicated to bridging the gap between education and career success.
            </p>

            {/* Highlight Quote Box */}
            <div className="p-3.5 rounded-xl bg-blue-950/50 border border-blue-400/25 text-blue-100 text-[11.5px] italic leading-relaxed backdrop-blur-sm shadow-inner max-w-sm">
              &ldquo;Empowering students with skills, opportunities and career guidance.&rdquo;
            </div>

            {/* CONNECT WITH US */}
            <div className="pt-1">
              <h4 className="text-[11px] font-bold text-slate-300 tracking-wider uppercase mb-3">
                CONNECT WITH US
              </h4>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-blue-400/30 bg-blue-900/40 text-blue-200 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] flex items-center justify-center transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0-.01-3.05 1.53 1.53 0 0 0 .01 3.05M5.07 18.5h2.78v-8.37H5.07v8.37z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-blue-400/30 bg-blue-900/40 text-blue-200 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] flex items-center justify-center transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full border border-blue-400/30 bg-blue-900/40 text-blue-200 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] flex items-center justify-center transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-blue-400/30 bg-blue-900/40 text-blue-200 hover:text-white hover:bg-[#FF8A00] hover:border-[#FF8A00] flex items-center justify-center transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#FF8A00] tracking-wider uppercase mb-3">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 font-normal text-slate-200">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Our Services (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#FF8A00] tracking-wider uppercase mb-3">
              OUR SERVICES
            </h4>
            <ul className="space-y-2.5 font-normal text-slate-200">
              {services.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-blue-300 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Sivakasi Office (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-[#FF8A00] tracking-wider uppercase mb-3">
              SIVAKASI OFFICE
            </h4>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-slate-200 text-xs leading-relaxed font-normal">
                100A/5, 1st Floor,<br />
                Thiruthangal Road, Opposite Bell Hotel,<br />
                <span className="font-semibold text-white">Sivakasi – 626123</span>
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <a
                href="mailto:wegrowjobz@gmail.com"
                className="text-slate-200 hover:text-white transition-colors text-xs font-normal"
              >
                wegrowjobz@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <a
                href="tel:+919344337331"
                className="text-slate-200 hover:text-white transition-colors text-xs font-semibold"
              >
                +91 93443 37331
              </a>
            </div>
          </div>

          {/* COLUMN 5: Google Map Embed ("map need") (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#FF8A00] tracking-wider uppercase mb-3">
              LOCATION MAP
            </h4>
            
            <div className="relative rounded-xl overflow-hidden border border-blue-500/30 shadow-lg bg-slate-900 group">
              <iframe
                title="WeGrow Jobz Sivakasi Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15738.995958296317!2d77.7844!3d9.4533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf72a5a04377%3A0x6b8bc2ebfd1ff73a!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-36 border-0 filter contrast-105 opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=100A/5,+1st+Floor,+Thiruthangal+Road,+Opposite+Bell+Hotel,+Sivakasi"
                target="_blank"
                rel="noreferrer"
                className="absolute top-2 left-2 bg-white/90 hover:bg-white text-slate-900 font-bold text-[10px] px-2 py-0.5 rounded shadow flex items-center gap-1 transition-all"
              >
                Maps <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links Bar */}
        <div className="pt-6 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300 text-[11px] font-normal">
          <p>
            &copy; {new Date().getFullYear()} WeGrow Skill Campus. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
