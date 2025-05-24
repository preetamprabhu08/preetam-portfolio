import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../components/TimelineItem';
import { Education } from '../types';

const educationData: Education[] = [
  {
    institution: "NMAM Institute of Technology",
    degree: "B.E in Robotics & AI",
    duration: "2021-2025",
    location: "Nitte, Karkala, Udupi, Karnataka"
  },
  {
    institution: "Karkala Jnanasudha PU college",
    degree: "Pre University College",
    duration: "2019-2021",
    location: "Ganit nagar, Karkala, Udupi, Karnataka"
  },
  {
    institution: "Madhava Kripa High School",
    degree: "SSLC",
    duration: "2018-2019",
    location: "Manipal, Udupi, Karnataka"
  }
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle text-foreground/80 mb-12">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.institution}
              subtitle={item.degree}
              period={item.duration}
              location={item.location}
              index={index}
            />
          ))}
        </div>

        {/* <motion.div 
          className="mt-12 max-w-3xl mx-auto p-6 bg-background rounded-lg border border-muted shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4">Additional Certifications</h3>
          <ul className="space-y-3">
            <li className="flex">
              <span className="mr-2 text-primary">•</span>
              <div>
                <strong>AWS Certified Solutions Architect</strong>
                <p className="text-sm text-foreground/70">Issued by Amazon Web Services (2022)</p>
              </div>
            </li>
            <li className="flex">
              <span className="mr-2 text-primary">•</span>
              <div>
                <strong>Professional Scrum Master I (PSM I)</strong>
                <p className="text-sm text-foreground/70">Issued by Scrum.org (2021)</p>
              </div>
            </li>
            <li className="flex">
              <span className="mr-2 text-primary">•</span>
              <div>
                <strong>Google Cloud Professional Cloud Developer</strong>
                <p className="text-sm text-foreground/70">Issued by Google (2023)</p>
              </div>
            </li>
          </ul>
        </motion.div> */}
      </div>
    </section>
  );
};

export default EducationSection;