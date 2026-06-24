import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { cn } from '../utils/cn';

const navLinks = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'achievements', name: 'Achievements' },
  { id: 'education', name: 'Education' },
  { id: 'certifications', name: 'Certifications' },
  { id: 'contact', name: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for styling and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.pageYOffset / totalScroll) * 100;
        setScrollProgress(progress);
      }
      
      setScrolled(window.pageYOffset > 50);

      // Track active section
      const scrollPosition = window.pageYOffset + 200;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-background-secondary/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/20' 
          : 'bg-transparent py-6'
      )}
    >
      {/* Scroll Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-900/50">
        <div 
          className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="text-xl font-bold tracking-wider font-heading bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent hover:scale-105 transition-transform"
        >
          DHUSHYANTHAN M.
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative',
                activeSection === link.id 
                  ? 'text-accent-cyan' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              )}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span 
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent-cyan"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white/90 hover:text-white p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-background-secondary border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={cn(
                    'px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 block',
                    activeSection === link.id 
                      ? 'text-accent-cyan bg-accent-cyan/5 border-l-2 border-accent-cyan' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
