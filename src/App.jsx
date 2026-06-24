import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // Simulated detailed build logs for recruiter amusement
  useEffect(() => {
    const duration = 1200; // 1.2s total load
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min((currentStep / steps) * 100, 100);
      setLoadProgress(Math.floor(progress));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            className="fixed inset-0 bg-[#0f172a] z-[9999] flex flex-col items-center justify-center"
          >
            {/* Spinning glowing ring loader */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-4 border-t-accent-cyan border-r-accent-purple border-b-transparent border-l-transparent shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 rounded-full border-2 border-t-transparent border-r-transparent border-b-accent-cyan border-l-accent-purple opacity-70"
              />
              <span className="font-mono font-bold text-lg text-white/90">{loadProgress}%</span>
            </div>

            {/* Simulated compilation labels */}
            <div className="mt-8 space-y-1.5 text-center min-h-[40px]">
              <span className="block text-accent-cyan font-mono text-xs tracking-widest uppercase animate-pulse">
                Compiling Portfolio...
              </span>
              <span className="block text-white/40 font-mono text-[10px]">
                {loadProgress < 30 && "Initializing developer modules..."}
                {loadProgress >= 30 && loadProgress < 60 && "Importing MERN Stack dependencies..."}
                {loadProgress >= 60 && loadProgress < 85 && "Optimizing analytics dashboards..."}
                {loadProgress >= 85 && "Dhushyanthan M. profile ready!"}
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-background-primary text-white"
          >
            <Navbar />
            <main>
              <Hero />
              <div className="h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <About />
              <div className="h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <Skills />
              <div className="h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <Projects />
              <div className="h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <Achievements />
              <div className="h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <Education />
              <div className="h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <Certifications />
              <div className="h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
