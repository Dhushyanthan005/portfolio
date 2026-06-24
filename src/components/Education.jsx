import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaCalendarAlt, FaAward } from 'react-icons/fa';
import Card from './ui/Card';
import Badge from './ui/Badge';

const educationData = [
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "Bachelor of Engineering (B.E.)",
    timeline: "2024 – 2028",
    gradeType: "Current CGPA",
    grade: "7.6",
    details: [
      "Specializing in Software Systems and Web Development.",
      "Active participant in technical symposiums, hackathons, and design sprints.",
      "Key coursework: Data Structures, OOPs, Database Management Systems, Computer Networks."
    ],
    icon: FaGraduationCap,
    glow: "cyan"
  },
  {
    institution: "Sri Jayendra Saraswathi Golden Jubilee Higher Secondary School",
    degree: "Higher Secondary Certificate (HSC) & Secondary School Leaving Certificate (SSLC)",
    timeline: "Completed 2024",
    gradeType: "HSC & SSLC Scores",
    grade: "HSC: 90.1% | SSLC: 83.1%",
    details: [
      "Completed secondary education with high marks in Mathematics and Computer Science.",
      "Participated in school level science exhibitions and quiz championships."
    ],
    icon: FaSchool,
    glow: "purple"
  }
];

const Education = () => {
  return (
    <section id="education" className="relative py-24 px-6 bg-background-secondary overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent-cyan font-semibold text-sm tracking-widest uppercase mb-2"
          >
            My Academic Path
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] w-20 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto mt-4 origin-left"
          />
        </div>

        {/* Education Timeline */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-8 space-y-12 max-w-2xl mx-auto">
          
          {/* Glowing vertical line track */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent-purple via-accent-cyan to-transparent pointer-events-none" />

          {educationData.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="relative timeline-item">
                
                {/* Timeline node */}
                <span className={`absolute -left-[30px] sm:-left-[34px] top-1.5 p-1.5 rounded-full z-20 ${
                  item.glow === 'cyan'
                    ? 'bg-background-secondary border-2 border-accent-cyan text-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.6)]'
                    : 'bg-background-secondary border-2 border-accent-purple text-accent-purple shadow-[0_0_10px_rgba(139,92,246,0.6)]'
                }`}>
                  <IconComp className="text-xs sm:text-sm" />
                </span>

                {/* Info Card */}
                <Card
                  glowColor={item.glow}
                  delay={idx * 0.2}
                  className="flex flex-col p-6 bg-background-primary/95 border border-white/5 hover:border-accent-cyan/35"
                >
                  <div className="space-y-4">
                    
                    {/* Header: Degree & timeline */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold font-heading text-white">
                          {item.institution}
                        </h3>
                        <p className="text-accent-cyan font-medium text-sm mt-0.5">
                          {item.degree}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/50 text-xs font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        <FaCalendarAlt className="text-[10px]" />
                        {item.timeline}
                      </div>
                    </div>

                    {/* Grade Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs">
                      <FaAward className={item.glow === 'cyan' ? 'text-accent-cyan' : 'text-accent-purple'} />
                      <span className="text-white/60 font-medium">{item.gradeType}:</span>
                      <span className="text-white font-bold">{item.grade}</span>
                    </div>

                    {/* Core details bullet points */}
                    <ul className="space-y-2 text-white/60 text-sm list-disc pl-4 leading-relaxed font-sans">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>

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

export default Education;
