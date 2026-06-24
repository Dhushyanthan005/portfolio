import React from 'react';
import { motion } from 'framer-motion';
import { FaFolderOpen, FaCodeBranch, FaAward, FaGraduationCap } from 'react-icons/fa';
import Card from './ui/Card';

const stats = [
  {
    icon: FaFolderOpen,
    value: "3+",
    label: "Projects Completed",
    description: "Full Stack & System tools",
    color: "cyan"
  },
  {
    icon: FaCodeBranch,
    value: "15+",
    label: "Tech Tools Learned",
    description: "Frontend, Backend & DBs",
    color: "purple"
  },
  {
    icon: FaAward,
    value: "2+",
    label: "Hackathons",
    description: "Innovhack Finalist & Winner",
    color: "cyan"
  },
  {
    icon: FaGraduationCap,
    value: "7.6",
    label: "Current CGPA",
    description: "Sri Eshwar College of Eng.",
    color: "purple"
  }
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-background-secondary overflow-hidden">
      
      {/* Background decoration glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent-cyan font-semibold text-sm tracking-widest uppercase mb-2"
          >
            Get To Know Me
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] w-20 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 origin-left"
          />
        </div>

        {/* Layout Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left bio column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl font-bold font-heading text-white">
              An Aspiring <span className="text-accent-cyan">Software Engineer</span> based in Tamil Nadu, India
            </h3>
            
            <p className="text-white/70 leading-relaxed font-sans text-base">
              I am a final-year engineering student pursuing my Bachelor's degree at <strong>Sri Eshwar College of Engineering</strong> (2024 - 2028). I specialize in building robust full-stack applications with contemporary architectures and modern frontend experiences.
            </p>

            <p className="text-white/70 leading-relaxed font-sans text-base">
              My core interests lie in developing scalable distributed systems, cloud integrated microservices, responsive and interactive UI/UX environments, and AI-powered data analytics. I enjoy diving into core computer science fundamentals, including <strong>Data Structures & Algorithms (DSA), Object-Oriented Programming (OOPS), Database Management (DBMS)</strong>, and <strong>Computer Networks</strong>.
            </p>

            <p className="text-white/70 leading-relaxed font-sans text-base">
              As an active learner, I frequently participate in hackathons to build proof-of-concepts under pressure. My design efforts have won recognition including winning UI/UX events, showing my focus on matching technical depth with aesthetic precision.
            </p>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4">
              <div>
                <span className="block text-white/40 text-xs uppercase font-mono tracking-wider">Institution</span>
                <span className="text-white font-medium text-sm">Sri Eshwar College of Eng.</span>
              </div>
              <div>
                <span className="block text-white/40 text-xs uppercase font-mono tracking-wider">Degree Timeline</span>
                <span className="text-white font-medium text-sm">2024 – 2028</span>
              </div>
              <div>
                <span className="block text-white/40 text-xs uppercase font-mono tracking-wider">Location</span>
                <span className="text-white font-medium text-sm">Coimbatore, TN, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right stats cards grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index} 
                  glowColor={stat.color} 
                  delay={index * 0.15}
                  className="flex flex-col justify-between items-start space-y-4 group hover:border-accent-cyan/35"
                >
                  <div className={`p-3.5 rounded-xl ${
                    stat.color === 'cyan' 
                      ? 'bg-accent-cyan/10 text-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                      : 'bg-accent-purple/10 text-accent-purple shadow-[0_0_15px_rgba(139,92,246,0.1)]'
                    } transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-extrabold font-heading text-white tracking-tight mt-2">
                      {stat.value}
                    </h4>
                    <p className="text-white font-medium text-sm mt-1">{stat.label}</p>
                    <p className="text-white/40 text-xs mt-1 font-sans">{stat.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
