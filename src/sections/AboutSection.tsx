import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle text-foreground/80 mb-12">
            Passionate about building innovative solutions that solve real-world problems
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                
              </p>
              <p>
              I am Preetam Prabhu, a 4th-year B.E student at NMAM Institute of technology. I excel in Full Stack Development, possessing a robust foundation in mathematics and adept problem-solving skills, I continually enhance my capabilities through internships and projects. My passion lies in Full Stack Development, where I actively pursue challenges, set ambitious learning goals, and remain attuned to emerging technologies.
              </p>
              <p>
              I specialize in JavaScript, working with modern frameworks like React, Node.js, and Express.
              </p>
              <p>
                When I'm not coding, you can find me learning and researching new technologies, or exploring the outdoors.
              </p>
            </div>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://github.com/preetamprabhu08" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/preetam-prabhu-a617b7367/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-full hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:preetamprabhu08@gmail.com" 
                className="p-2 bg-muted rounded-full hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img 
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Developer working" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="bg-background border border-muted rounded-lg p-6 shadow-lg mt-6">
              <h4 className="text-xl font-semibold mb-3">Quick Facts</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 mt-1 mr-2 bg-primary rounded-full"></span>
                  <span>Based in Udupi, Karnataka, India</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 mt-1 mr-2 bg-primary rounded-full"></span>
                  <span>Full-Stack Web Developer</span>
                </li>
                               
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;