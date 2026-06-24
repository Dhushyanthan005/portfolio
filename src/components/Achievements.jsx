import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaCrown, FaLightbulb } from 'react-icons/fa';
import Card from './ui/Card';

const achievements = [
  {
    title: "Innovhack 2026 Finalist",
    organization: "SAASTRA GDG",
    date: "2026",
    description: "Shortlisted as a finalist among hundreds of engineering teams in the national-level Innovhack hackathon, developing AI-driven solutions.",
    icon: FaTrophy,
    glow: "cyan"
  },
  {
    title: "UI UX Royale Winner",
    organization: "Kongu Engineering College",
    date: "2025",
    description: "Secured 1st Place in the UI/UX design challenge by creating user-centric design layouts, wireframes, and high-fidelity interactive prototypes.",
    icon: FaCrown,
    glow: "purple"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 px-6 bg-background-primary overflow-hidden grid-bg">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent-cyan font-semibold text-sm tracking-widest uppercase mb-2"
          >
            My Recognitions
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Achievements
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] w-20 bg-accent-cyan mx-auto mt-4 origin-left shadow-[0_0_8px_rgba(6,182,212,0.4)]"
          />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-8 space-y-12 max-w-2xl mx-auto">
          
          {/* Vertical line glow overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent pointer-events-none" />

          {achievements.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="relative timeline-item">
                {/* Timeline node icon */}
                <span className={`absolute -left-[30px] sm:-left-[34px] top-1 p-1.5 rounded-full z-20 ${
                  item.glow === 'cyan' 
                    ? 'bg-background-primary border-2 border-accent-cyan text-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.6)]' 
                    : 'bg-background-primary border-2 border-accent-purple text-accent-purple shadow-[0_0_10px_rgba(139,92,246,0.6)]'
                }`}>
                  <IconComponent className="text-xs sm:text-sm" />
                </span>

                {/* Achievement Card */}
                <Card
                  glowColor={item.glow}
                  delay={idx * 0.2}
                  className="flex flex-col sm:flex-row gap-6 p-6 items-start bg-background-secondary/95 border border-white/5 hover:border-accent-cyan/30"
                >
                  <div className="flex-grow space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight">
                        {item.title}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                        item.glow === 'cyan'
                          ? 'bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan'
                          : 'bg-accent-purple/10 border border-accent-purple/20 text-accent-purple'
                      }`}>
                        {item.date}
                      </span>
                    </div>
                    
                    <h5 className="text-sm font-semibold font-heading text-white/50">
                      {item.organization}
                    </h5>
                    
                    <p className="text-white/60 text-sm leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
