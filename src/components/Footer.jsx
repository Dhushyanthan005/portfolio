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
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan opacity-20" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
        
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <a 
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="text-lg font-bold font-heading bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent"
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
            className="p-2.5 rounded-full bg-slate-900 border border-white/5 text-white/70 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-base" />
          </a>
          <a 
            href="https://linkedin.com/in/dhushyanthan-m" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-slate-900 border border-white/5 text-white/70 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-base" />
          </a>
          <a 
            href="mailto:dhushyanthan12b@gmail.com" 
            className="p-2.5 rounded-full bg-slate-900 border border-white/5 text-white/70 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300 hover:scale-110"
            aria-label="Email Address"
          >
            <FaEnvelope className="text-base" />
          </a>
          <a 
            href="https://wa.me/917695818365" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-full bg-slate-900 border border-white/5 text-white/70 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 hover:scale-110"
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
