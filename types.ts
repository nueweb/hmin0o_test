
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

export interface Strength {
  title: string;
  value: number;
  suffix: string;
  description: string;
  icon: React.ReactNode;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}
