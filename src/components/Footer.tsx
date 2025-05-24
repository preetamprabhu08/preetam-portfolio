import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Portfolio</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Showcasing my journey as a developer
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:preetamprabhu08@gmail.com" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
            {['about', 'skills', 'projects', 'contact'].map((link) => (
              <Link
                key={link}
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-sm text-foreground/70 hover:text-primary capitalize cursor-pointer transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-muted text-center text-sm text-muted-foreground flex flex-col sm:flex-row justify-center items-center gap-2">
          <div>© {currentYear} Preetam. All rights reserved.</div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center">
            Made with <Heart className="h-4 w-4 text-accent mx-1" /> in React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;