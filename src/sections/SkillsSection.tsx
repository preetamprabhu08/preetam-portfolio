import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillBar from '../components/SkillBar';
import { Skill } from '../types';
import { Code, Server, Lightbulb } from 'lucide-react';

const skills: Skill[] = [
  { name: 'JavaScript', level: 9, category: 'frontend' },
  { name: 'TypeScript', level: 8, category: 'frontend' },
  { name: 'React', level: 9, category: 'frontend' },
  { name: 'HTML/CSS', level: 9, category: 'frontend' },
  { name: 'Node.js', level: 8, category: 'backend' },
  { name: 'Express', level: 8, category: 'backend' },
  { name: 'MongoDB', level: 7, category: 'backend' },
  { name: 'SQL', level: 7, category: 'backend' },
  { name: 'Git', level: 8, category: 'other' },
];

type Category = 'all' | 'frontend' | 'backend' | 'other';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Skills', icon: Lightbulb },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'other', label: 'Other', icon: Lightbulb }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle text-foreground/80">
            A collection of technologies and tools I've worked with
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`
                  flex items-center px-4 py-2 rounded-full text-sm font-medium 
                  ${activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-muted hover:bg-muted/80'}
                `}
              >
                <Icon size={16} className="mr-2" />
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* <motion.div 
          className="mt-16 p-6 bg-muted/30 rounded-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Teamwork', 'Communication', 'Problem Solving', 'Time Management',
              'Adaptability', 'Critical Thinking', 'Leadership', 'Creativity'
            ].map((skill, index) => (
              <div 
                key={skill}
                className="bg-background p-3 rounded-md text-center shadow-sm border border-muted"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default SkillsSection;