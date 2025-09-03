import type { About } from "@/lib/types";
import { SectionHeading } from "./section-heading";
import { Badge } from "./ui/badge";
import { CheckCircle2 } from "lucide-react";

interface AboutSectionProps {
  data: About;
  id: string;
}

export function AboutSection({ data, id }: AboutSectionProps) {
  const { background, skills, philosophy, highlights } = data;

  return (
    <section id={id} className="container mx-auto px-4 py-16 scroll-mt-16">
      <SectionHeading 
        title="About Me"
        description="A little bit about my background, philosophy, and technical skills."
      />
      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">My Journey in Tech</h3>
            <p className="text-muted-foreground leading-relaxed">{background}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">My Development Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">{philosophy}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Technologies I'm Exploring</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Project Highlights</h3>
          <ul className="space-y-4">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-accent-foreground mt-1 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
