import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-background-primary border-t border-white/5 py-12 px-6 overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-cyan/20 shadow-[0_0_8px_rgba(6,182,212,0.3)] opacity-40" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
        
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <a 
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="text-lg font-bold font-heading text-accent-cyan text-glow-cyan"
          >
            Dhushyanthan M.
          </a>
          <p className="text-white/40 text-xs font-sans">
            &copy; {currentYear} Dhushyanthan M. All rights reserved.
          </p>
        </div>

        {/* Built details and quick links */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-white/50 text-xs font-mono">
            Built with <span className="text-accent-cyan">React</span> &amp; <span className="text-accent-purple">Tailwind CSS</span>
          </p>
          <p className="text-[10px] text-white/30 font-sans">
            Designed for software placements
          </p>
        </div>

        {/* Social Icons Footer */}
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/Dhushyanthan005" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-slate-900 border border-white/10 text-white hover:text-accent-cyan hover:border-accent-cyan/40 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-base" />
          </a>
          <a 
            href="https://linkedin.com/in/dhushyanthan-m" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#00a0dc] hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5]/50 hover:shadow-[0_0_12px_rgba(0,119,181,0.35)] transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-base" />
          </a>
          <a 
            href="mailto:dhushyanthan12b@gmail.com" 
            className="p-2.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan hover:text-white hover:bg-accent-cyan hover:border-accent-cyan/50 hover:shadow-[0_0_12px_rgba(6,182,212,0.35)] transition-all duration-300 hover:scale-110"
            aria-label="Email Address"
          >
            <FaEnvelope className="text-base" />
          </a>
          <a 
            href="https://wa.me/917695818365" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-500/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp Profile"
          >
            <FaWhatsapp className="text-base" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
