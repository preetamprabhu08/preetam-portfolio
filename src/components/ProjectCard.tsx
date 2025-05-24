import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
      className="overflow-hidden rounded-lg shadow-md bg-background border border-muted hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div> */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-foreground/80 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 rounded-full bg-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.demoLink && (
            <Button 
              variant="outline"
              size="sm"
              icon={<ExternalLink size={16} />}
              onClick={() => window.open(project.demoLink, '_blank')}
            >
              Demo
            </Button>
          )}
          {project.githubLink && (
            <Button 
              variant="ghost"
              size="sm"
              icon={<Github size={16} />}
              onClick={() => window.open(project.githubLink, '_blank')}
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;