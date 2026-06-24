import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaGithub, FaJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import Button from './ui/Button';

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Problem Solver",
  "Engineering Student"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typing effect loop
  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setTypingSpeed(40); // Faster delete
      }, typingSpeed);
    } else {
      // Typing characters
      timer = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    // Handle full string typed or fully deleted
    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  // Orbiting icons coordinates and delay settings
  const floatingIcons = [
    { Icon: FaReact, color: 'text-cyan-400', label: 'React', delay: 0, x: -140, y: -120 },
    { Icon: FaNodeJs, color: 'text-green-500', label: 'Node.js', delay: 0.5, x: 140, y: -120 },
    { Icon: SiMongodb, color: 'text-emerald-500', label: 'MongoDB', delay: 1, x: 180, y: 40 },
    { Icon: FaJs, color: 'text-yellow-400', label: 'JavaScript', delay: 1.5, x: -180, y: 40 },
    { Icon: FaJava, color: 'text-orange-500', label: 'Java', delay: 2, x: -80, y: 160 },
    { Icon: FaGithub, color: 'text-white', label: 'GitHub', delay: 2.5, x: 80, y: 160 },
  ];

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSec = document.getElementById('projects');
    if (projectsSec) {
      window.scrollTo({
        top: projectsSec.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 bg-background-primary grid-bg"
    >
      {/* Background Animated Gradients */}
      <div className="gradient-mesh">
        <div className="mesh-circle-1" />
        <div className="mesh-circle-2" />
        <div className="mesh-circle-3" />
      </div>

      {/* Floating Glowing Particle Effects */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent-cyan/15 blur-sm"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.1, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* Left Content Side */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            Available for Placements & Internships
          </motion.div>

          <div className="space-y-2">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/60 font-medium text-lg lg:text-xl tracking-wide"
            >
              Hi there, I am
            </motion.h4>
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-extrabold font-heading text-white tracking-tight"
            >
              Dhushyanthan M
            </motion.h1>
            <div className="h-10 lg:h-12 flex items-center">
              <h2 className="text-xl lg:text-3xl font-bold font-heading text-white">
                {displayText}
                <span className="animate-pulse ml-0.5 border-r-2 border-white h-6 inline-block" />
              </h2>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/70 max-w-xl text-base lg:text-lg leading-relaxed font-sans"
          >
            Engineering student passionate about building scalable full-stack applications, modern UI experiences, cloud-integrated systems, and real-time analytics platforms.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <a href="/Dhushyanthan_M_Resume.pdf" download="Dhushyanthan_M_Resume.pdf" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto min-w-[160px]">
                Download Resume
              </Button>
            </a>
            <a href="#projects" onClick={handleScrollToProjects} className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto min-w-[160px]">
                View Projects
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right Circular Avatar and Floating Icons Side */}
        <div className="lg:col-span-5 flex justify-center items-center py-12 lg:py-0">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] flex items-center justify-center">
            
            {/* Ambient Background Glow behind profile */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: 360 
              }}
              transition={{ 
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 40, repeat: Infinity, ease: 'linear' }
              }}
              className="absolute w-4/5 h-4/5 rounded-full bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/20 blur-2xl z-0"
            />

            {/* Profile Avatar Container with glowing border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[300px] lg:h-[300px] rounded-full p-1 bg-gradient-to-tr from-accent-cyan via-purple-500 to-accent-purple shadow-2xl shadow-accent-cyan/10 z-10 overflow-hidden"
            >
              <div className="w-full h-full rounded-full bg-background-primary overflow-hidden relative">
                <img 
                  src="/assets/profile.png" 
                  alt="Dhushyanthan M" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback profile if image fails
                    e.target.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Orbiting Tech Icons */}
            {floatingIcons.map((item, idx) => {
              const { Icon, color, label, delay, x, y } = item;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: x,
                    y: y
                  }}
                  transition={{ 
                    delay: delay + 0.5,
                    type: 'spring',
                    stiffness: 80
                  }}
                  className="absolute z-20"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: delay * 0.8
                    }}
                    className="glass-panel p-3 rounded-full flex items-center justify-center shadow-lg shadow-black/40 hover:border-accent-cyan/40 hover:scale-110 transition-all duration-300 group cursor-pointer"
                    title={label}
                  >
                    <Icon className={`text-xl lg:text-2xl ${color}`} />
                    
                    {/* Tooltip on Hover */}
                    <span className="absolute bottom-full mb-2 scale-0 group-hover:scale-100 bg-background-secondary text-white text-xs px-2.5 py-1 rounded-md border border-white/5 whitespace-nowrap transition-all duration-200 z-30 shadow-md pointer-events-none">
                      {label}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}

          </div>
        </div>

      </div>

      {/* Scroll Down Indicator Mouse */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <a 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const aboutSec = document.getElementById('about');
            if (aboutSec) {
              window.scrollTo({
                top: aboutSec.offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }}
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="text-white/40 text-xs font-mono group-hover:text-accent-cyan transition-colors">SCROLL DOWN</span>
          <div className="w-[20px] h-[34px] rounded-full border-2 border-white/20 group-hover:border-accent-cyan flex justify-center p-[4px] transition-colors">
            <motion.div 
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-[4px] h-[8px] bg-white group-hover:bg-accent-cyan rounded-full transition-colors"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
