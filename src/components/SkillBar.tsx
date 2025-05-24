import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const percentage = (skill.level / 10) * 100;
  
  // Color based on category
  const getColor = (category: string) => {
    switch(category) {
      case 'frontend': return 'bg-primary';
      case 'backend': return 'bg-secondary';
      default: return 'bg-accent';
    }
  };
  
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-foreground/60">{skill.level}/10</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5">
        <motion.div 
          className={`h-2.5 rounded-full ${getColor(skill.category)}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;