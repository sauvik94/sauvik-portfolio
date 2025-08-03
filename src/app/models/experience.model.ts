export interface Experience {
  id: number;
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  projects?: Project[];
}

export interface Project {
  name: string;
  description: string;
}