export interface NavLink {
  id: string;
  title: string;
}

export interface Skill {
  name: string;
  level: number; // 1-10
  category: 'frontend' | 'backend' | 'other';
}

export interface Education {
  institution: string;
  degree?: string;
  duration: string;
  location: string;
}

export interface Experience {
  company: string;
  position?: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}