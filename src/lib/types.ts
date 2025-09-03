export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  links: {
    live?: string | null;
    github?: string;
  };
}

export interface About {
  background: string;
  skills: string[];
  philosophy: string;
  highlights: string[];
}
