import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJs, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, 
  FaFigma, FaGithub, FaDatabase, FaNetworkWired, FaCode, FaCube
} from 'react-icons/fa';
import { 
  SiC, SiCplusplus, SiTailwindcss, SiSpringboot, SiExpress, 
  SiNestjs, SiPostman, SiGit, SiMysql, SiMongodb 
} from 'react-icons/si';
import Card from './ui/Card';
import Progress from './ui/Progress';

const skillsData = [
  {
    category: "Languages",
    glow: "cyan",
    skills: [
      { name: "Java", value: 85, icon: FaJava },
      { name: "JavaScript", value: 85, icon: FaJs },
      { name: "C++", value: 80, icon: SiCplusplus },
      { name: "C", value: 75, icon: SiC },
      { name: "HTML5", value: 90, icon: FaHtml5 },
      { name: "CSS3", value: 85, icon: FaCss3Alt },
    ]
  },
  {
    category: "Frontend",
    glow: "purple",
    skills: [
      { name: "ReactJS", value: 88, icon: FaReact },
      { name: "Tailwind CSS", value: 90, icon: SiTailwindcss },
    ]
  },
  {
    category: "Backend",
    glow: "cyan",
    skills: [
      { name: "NodeJS", value: 82, icon: FaNodeJs },
      { name: "ExpressJS", value: 85, icon: SiExpress },
      { name: "Spring Boot", value: 80, icon: SiSpringboot },
      { name: "NestJS", value: 72, icon: SiNestjs },
    ]
  },
  {
    category: "Databases",
    glow: "purple",
    skills: [
      { name: "SQL (MySQL/PostgreSQL)", value: 82, icon: SiMysql },
      { name: "MongoDB", value: 85, icon: SiMongodb },
    ]
  },
  {
    category: "Tools & Platforms",
    glow: "cyan",
    skills: [
      { name: "Git", value: 85, icon: SiGit },
      { name: "GitHub", value: 88, icon: FaGithub },
      { name: "Postman", value: 85, icon: SiPostman },
      { name: "Figma", value: 78, icon: FaFigma },
    ]
  },
  {
    category: "Core Concepts",
    glow: "purple",
    skills: [
      { name: "Data Structures & Algorithms", value: 82, icon: FaCode },
      { name: "Object-Oriented Programming", value: 85, icon: FaCube },
      { name: "Database Management System", value: 82, icon: FaDatabase },
      { name: "Computer Networks", value: 80, icon: FaNetworkWired },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6 bg-background-primary overflow-hidden grid-bg">
      
      {/* Background glow filters */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />

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
            My Capabilities
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] w-20 bg-accent-cyan mx-auto mt-4 origin-left shadow-[0_0_8px_rgba(6,182,212,0.4)]"
          />
        </div>

        {/* Skill Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((categoryCard, idx) => (
            <Card 
              key={idx}
              glowColor={categoryCard.glow}
              delay={idx * 0.1}
              className="flex flex-col space-y-6 hover:border-accent-cyan/30"
            >
              <h3 className="text-xl font-bold font-heading text-white border-b border-white/5 pb-3">
                {categoryCard.category}
              </h3>
              
              <div className="space-y-4 flex-grow">
                {categoryCard.skills.map((skill, sIdx) => (
                  <Progress 
                    key={sIdx} 
                    label={skill.name} 
                    value={skill.value} 
                    icon={skill.icon} 
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
