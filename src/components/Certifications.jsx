import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import Card from './ui/Card';
import Button from './ui/Button';

const certifications = [
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    date: "Issued 2025",
    skills: ["DSA", "Memory Management", "C / C++", "Complexity Analysis"],
    verifyUrl: "https://www.udemy.com/certificate/UC-dsa-placeholder/",
    glow: "cyan"
  },
  {
    title: "Figma for UI/UX Design",
    issuer: "Udemy",
    date: "Issued 2025",
    skills: ["Wireframing", "High-Fidelity Prototyping", "Design Systems", "User Journeys"],
    verifyUrl: "https://www.udemy.com/certificate/UC-figma-placeholder/",
    glow: "purple"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 px-6 bg-background-primary overflow-hidden grid-bg">
      
      {/* Background radial overlays */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent-cyan font-semibold text-sm tracking-widest uppercase mb-2"
          >
            Verified Qualifications
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Certifications
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] w-20 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 origin-left"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <Card
              key={idx}
              glowColor={cert.glow}
              delay={idx * 0.15}
              className="flex flex-col bg-background-secondary/90 border border-white/5 p-6 hover:border-accent-cyan/35 justify-between h-full group"
            >
              <div className="space-y-4">
                
                {/* Header Icon + Details */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    cert.glow === 'cyan' 
                      ? 'bg-accent-cyan/10 text-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.1)]' 
                      : 'bg-accent-purple/10 text-accent-purple shadow-[0_0_10px_rgba(139,92,246,0.1)]'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <FaCertificate className="text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-white/40 text-xs font-mono mt-1">
                      {cert.issuer} &bull; {cert.date}
                    </p>
                  </div>
                </div>

                {/* Gained Skills badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-2.5 py-0.5 rounded bg-white/5 border border-white/5 text-[11px] text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Verify Button */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <a 
                  href={cert.verifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full inline-block"
                >
                  <Button 
                    variant="secondary" 
                    className="w-full gap-2 text-sm justify-center py-2.5 border border-white/10 hover:border-accent-cyan/30"
                  >
                    Verify Credentials
                    <FaExternalLinkAlt className="text-xs" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
