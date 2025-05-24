import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    title: "Smart Trolley",
    description: "A full-stack website for a smart trolley service, featuring real-time payment tracking, payment processing, and customer support. Featuring a user-friendly interface, real-time updates, and secure payment processing",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    technologies: ["React", "Node.js", "MySql", "Tailwind CSS"]
  },
  {
    title: "Anmaya App",
    description: "Developed a Web application using React and Node.js, emphasizing seamless user experience through efficient UI/UX design and state management. Integrated Firebase for real-time data synchronization, user authentication, and cloud storage, ensuring a robust and scalable solution. Developing an Android application using Flutter and Dart for the same.",
    image: "/Screenshot (4).pn",
    demoLink: "https://anmaya.in",
    technologies: ["React", "Firebase", "Tailwind CSS", "Node.js"]
  },
  {
    title: "ResumeMatch",
    description: "Developed ResumeMatch, a web application that generates professional resumes for users by integrating Gemini Key API for AI-powered resume creation. Implemented multiple customizable resume templates, allowing users to select and personalize their documents seamlessly. Built a scalable full-stack solution with React, Tailwind CSS, Node.js, and MongoDB, featuring an intuitive and responsive user interface.",
    image: "g",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"]
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle text-foreground/80 mb-12">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-foreground/80 mb-4">
            Interested in seeing more of my work?
          </p>
          <a 
            href="https://github.com/preetamprabhu08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            Visit my GitHub profile
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;