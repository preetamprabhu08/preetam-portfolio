import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../components/TimelineItem';
import { Experience } from '../types';

const experienceData: Experience[] = [
  {
    company: "Anmaya Technologies Ltd.Pvt",
    position: "Intern",
    duration: "Jan 2025-Present",
    location: "Kukikatte, Udupi",
    description: "Developed a Web application using React and Node.js, emphasizing seamless user experience through efficient UI/UX design and state management. Integrated Firebase for real-time data synchronization, user authentication, and cloud storage, ensuring a robust and scalable solution. Developing an Android application using Flutter and Dart for the same.",
    technologies: ["React", "Node.js", "Express.js", "Firebase" , "Flutter", "Dart"]
  },
  {
    company: "Saara IT",
    position: "Intern",
    duration: "June 2024-July 2024",
    location: "Karkala, Udupi",
    description: "I gained hands-on experience in C# and SQL by developing a task management web application using Visual Studio and SQL Server. This involved building a fully functional CRUD (Create, Read, Update, Delete) system to manage tasks, demonstrating my ability to integrate back-end database operations with a user-friendly web interface. Through this project, I strengthened my skills in software development, database design, and application deployment.",
    technologies: ["JavaScript", "C#", "SQL", "Microsoft Visual Studio"]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle text-foreground/80 mb-12">
            My professional journey 
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.company}
              subtitle={item.position}
              period={item.duration}
              location={item.location}
              index={index}
            >
              <p>{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-2 py-1 rounded-full bg-muted text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;