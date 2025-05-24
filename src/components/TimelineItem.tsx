import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  period: string;
  location: string;
  index: number;
  children?: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  location,
  index,
  children
}) => {
  return (
    <motion.div 
      className="relative pl-8 sm:pl-10 pb-6 border-l border-muted last:border-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute left-0 top-0 -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white">
        {index + 1}
      </div>
      <div className="mb-1 text-lg font-semibold">{title}</div>
      {subtitle && <div className="text-primary mb-1">{subtitle}</div>}
      <div className="flex flex-wrap gap-x-3 text-sm text-muted-foreground mb-2">
        <span>{period}</span>
        <span>•</span>
        <span>{location}</span>
      </div>
      {children && <div className="mt-2 text-foreground/80">{children}</div>}
    </motion.div>
  );
};

export default TimelineItem;