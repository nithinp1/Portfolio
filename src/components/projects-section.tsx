"use client";

import { useState, useMemo } from 'react';
import type { Project } from '@/lib/types';
import { ProjectCard } from './project-card';
import { SectionHeading } from './section-heading';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface ProjectsSectionProps {
  projects: Project[];
  id: string;
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  imageUrl?: string;
  imageHint?: string;
}

export function ProjectsSection({ projects, id }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = useMemo(() => {
    if (!projects) return ['All'];
    return ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <section id={id} className="container mx-auto px-4 py-16 scroll-mt-16 bg-card rounded-xl">
      <SectionHeading 
        title="My Projects"
        description="A selection of my work. Feel free to explore."
      />

      <div className="mt-8 flex justify-center flex-wrap gap-2">
        {categories.map(category => (
          <Button 
            key={category} 
            variant="ghost"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "capitalize",
              activeCategory === category && "bg-accent text-accent-foreground"
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            No projects found. Pin some repositories on your GitHub profile to see them here!
          </p>
        )}
      </div>
    </section>
  );
}
