import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
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
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
 
  // Sync theme class to root html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-mode');
    } else {
      root.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

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
          className="h-full bg-accent-cyan shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="text-xl font-bold tracking-wider font-heading text-accent-cyan text-glow-cyan hover:scale-105 transition-transform"
        >
          DHUSHYANTHAN M.
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-4">
          <nav className="flex items-center space-x-1 bg-slate-950/40 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={cn(
                  'px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 relative',
                  activeSection === link.id 
                    ? 'text-accent-cyan font-bold' 
                    : 'text-white/70 hover:text-white'
                )}
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.id && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>
          
          {/* Theme Switcher Pill */}
          <div className="flex items-center bg-slate-950/40 p-1 rounded-full border border-white/5 backdrop-blur-sm relative">
            <button
              onClick={() => setTheme('light')}
              className={cn(
                'px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 relative z-10 flex items-center gap-1.5 cursor-pointer',
                theme === 'light' ? 'text-slate-950 font-bold' : 'text-white/70 hover:text-white'
              )}
              aria-label="Light Mode"
            >
              <HiSun className="text-sm" />
              <span>Light</span>
              {theme === 'light' && (
                <motion.span
                  layoutId="desktopThemeIndicator"
                  className="absolute inset-0 bg-accent-cyan rounded-full shadow-[0_0_12px_rgba(253,224,71,0.25)] -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={cn(
                'px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 relative z-10 flex items-center gap-1.5 cursor-pointer',
                theme === 'dark' ? 'text-slate-950 font-bold' : 'text-white/70 hover:text-white'
              )}
              aria-label="Dark Mode"
            >
              <HiMoon className="text-sm" />
              <span>Dark</span>
              {theme === 'dark' && (
                <motion.span
                  layoutId="desktopThemeIndicator"
                  className="absolute inset-0 bg-accent-cyan rounded-full shadow-[0_0_12px_rgba(253,224,71,0.25)] -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Trigger & Theme Toggle */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* Mobile Theme Switcher Pill */}
          <div className="flex items-center bg-slate-950/40 p-1 rounded-full border border-white/5 backdrop-blur-sm relative">
            <button
              onClick={() => setTheme('light')}
              className={cn(
                'p-1.5 rounded-full transition-colors duration-300 relative z-10 flex items-center justify-center cursor-pointer',
                theme === 'light' ? 'text-slate-950' : 'text-white/70 hover:text-white'
              )}
              aria-label="Light Mode"
            >
              <HiSun className="text-base" />
              {theme === 'light' && (
                <motion.span
                  layoutId="mobileThemeIndicator"
                  className="absolute inset-0 bg-accent-cyan rounded-full shadow-[0_0_12px_rgba(253,224,71,0.25)] -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={cn(
                'p-1.5 rounded-full transition-colors duration-300 relative z-10 flex items-center justify-center cursor-pointer',
                theme === 'dark' ? 'text-slate-950' : 'text-white/70 hover:text-white'
              )}
              aria-label="Dark Mode"
            >
              <HiMoon className="text-base" />
              {theme === 'dark' && (
                <motion.span
                  layoutId="mobileThemeIndicator"
                  className="absolute inset-0 bg-accent-cyan rounded-full shadow-[0_0_12px_rgba(253,224,71,0.25)] -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white/90 hover:text-white p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
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
