import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from './ui/Card';
import Badge from './ui/Badge';

const projects = [
  {
    title: "MERN Fitness Tracker",
    description: "A comprehensive health tracking app featuring user authentication, calorie monitoring, customized workout schedules, dynamic progress dashboards, and MongoDB database integration.",
    image: "/assets/project-fitness.png",
    tech: ["ReactJS", "NodeJS", "NestJS", "MongoDB", "Framer Motion"],
    github: "https://github.com/Dhushyanthan005/Fitnesss-Tracker-frontend.git",
    live: "https://fitness-tracker-demo.vercel.app/",
    glow: "cyan"
  },
  {
    title: "Irrigation Monitoring System",
    description: "A robust enterprise-level Spring Boot application implementing layered software design patterns. Features REST APIs for water flow metrics, automated schedule logs, and SQL database storage.",
    image: "/assets/project-irrigation.png",
    tech: ["Java", "Spring Boot", "REST API", "SQL", "MVC Architecture"],
    github: "https://github.com/Dhushyanthan005/irrigation-monitor",
    live: "https://irrigation-system-demo.vercel.app/",
    glow: "purple"
  },
  {
    title: "Campus Pollution Monitor",
    description: "Real-time air and noise monitoring dashboard plotting PM2.5, PM10, CO, and decibel scales. Features AI forecasting trends, responsive charts, and user account verification panels.",
    image: "/assets/project-pollution.png",
    tech: ["ReactJS", "Cloud Backend", "AI Integration", "Charts", "Authentication"],
    github: "https://github.com/Dhushyanthan005/campus-pollution",
    live: "https://pollution-monitor-demo.vercel.app/",
    glow: "cyan"
  }
];

const ProjectCard = ({ project, delay }) => {
  return (
    <Card 
      glowColor={project.glow}
      delay={delay}
      hoverGlow={true}
      className="h-full flex flex-col p-0 bg-background-secondary/90 border border-white/5 overflow-hidden transition-all duration-300 relative"
    >
      {/* Content Box */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <div className="flex items-center">
          <span className={`px-3 py-1 text-[10px] font-mono font-bold uppercase rounded-full tracking-wider ${
            project.glow === 'cyan' 
              ? 'bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan' 
              : 'bg-accent-purple/20 border border-accent-purple/30 text-accent-purple'
          }`}>
            Featured Project
          </span>
        </div>

        <h3 className="text-xl font-bold font-heading text-white tracking-tight hover:text-accent-cyan transition-colors">
          {project.title}
        </h3>
        
        <p className="text-white/60 text-sm leading-relaxed font-sans flex-grow">
          {project.description}
        </p>

        {/* Tech Badges Row */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t, idx) => (
            <Badge key={idx} variant={project.glow === 'cyan' ? 'cyan' : 'purple'}>
              {t}
            </Badge>
          ))}
        </div>

        {/* Card Links Footer */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto w-full">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-slate-800/80 text-white/80 hover:text-white hover:border-accent-cyan/40 transition-all duration-300 hover:scale-[1.03] text-xs font-semibold cursor-pointer"
          >
            <FaGithub className="text-base" />
            Codebase
          </a>
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-accent-cyan text-slate-950 hover:brightness-110 font-bold transition-all duration-300 hover:scale-[1.03] text-xs shadow-[0_0_12px_rgba(253,224,71,0.15)] cursor-pointer"
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Demo
          </a>
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-6 bg-background-secondary overflow-hidden">
      
      {/* Dynamic background glows */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent-cyan font-semibold text-sm tracking-widest uppercase mb-2"
          >
            My Showcase
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Key Projects
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] w-20 bg-accent-cyan mx-auto mt-4 origin-left shadow-[0_0_8px_rgba(6,182,212,0.4)]"
          />
        </div>

        {/* Project Card Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              project={project} 
              delay={idx * 0.15} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
