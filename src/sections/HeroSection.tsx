import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-primary/20 to-background"></div>
      <div className="section-container flex flex-col md:flex-row items-center">
        <motion.div 
          className="w-full md:w-1/2 md:pr-8 mb-10 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-primary block">Preetam Prabhu</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Mern Full-stack developer specializing in creating web applications and Mobile apps
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/preetam.pdf';
                link.download = 'preetam.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </Button>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative rounded-lg overflow-hidden border-4 border-primary/20 shadow-xl">
            <img 
              src="/preetam.jpg" 
              alt="Developer Portrait" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>

      <Link 
        to="about" 
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration={500}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <ArrowDownCircle className="h-10 w-10 text-primary" />
        </motion.div>
      </Link>
    </section>
  );
};

export default HeroSection;