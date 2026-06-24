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
    github: "https://github.com/Dhushyanthan005/fitness-tracker",
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

const TiltCard = ({ project, delay }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Tilt angle multiplier (smaller is less tilt)
    const rotateX = -(y / (rect.height / 2)) * 8;
    const rotateY = (x / (rect.width / 2)) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Card 
        ref={cardRef}
        glowColor={project.glow}
        delay={delay}
        hoverGlow={true}
        className="h-full flex flex-col p-0 bg-background-secondary/90 border border-white/5 overflow-hidden transition-all duration-300 relative"
      >
        {/* Project Image Panel */}
        <div className="h-52 w-full overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent z-10 pointer-events-none" />
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            onError={(e) => {
              // Fallback image if asset loading fails
              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80";
            }}
          />
          <div className="absolute top-4 left-4 z-20">
            <span className={`px-3 py-1 text-[10px] font-mono font-bold uppercase rounded-full tracking-wider ${
              project.glow === 'cyan' 
                ? 'bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan' 
                : 'bg-accent-purple/20 border border-accent-purple/30 text-accent-purple'
            }`}>
              Featured Project
            </span>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-6 flex flex-col flex-grow space-y-4">
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
          <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white/70 hover:text-accent-cyan text-sm font-medium transition-colors group"
            >
              <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
              Codebase
            </a>
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white/70 hover:text-accent-cyan text-sm font-medium transition-colors group"
            >
              <FaExternalLinkAlt className="text-sm group-hover:scale-110 transition-transform" />
              Live Demo
            </a>
          </div>
        </div>
      </Card>
    </div>
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
            className="h-[3px] w-20 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 origin-left"
          />
        </div>

        {/* Project Card Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <TiltCard 
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
