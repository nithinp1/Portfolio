import type { About } from "@/lib/types";
import { SectionHeading } from "./section-heading";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2, Lightbulb, Rocket } from "lucide-react";

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
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Journey Card */}
        <Card className="flex flex-col">
          <CardHeader className="flex-row items-center gap-4">
            <Rocket className="h-8 w-8 text-primary" />
            <CardTitle className="text-xl">My Journey</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground leading-relaxed">{background}</p>
          </CardContent>
        </Card>

        {/* Philosophy Card */}
        <Card className="flex flex-col">
          <CardHeader className="flex-row items-center gap-4">
            <Lightbulb className="h-8 w-8 text-primary" />
            <CardTitle className="text-xl">My Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground leading-relaxed">{philosophy}</p>
          </CardContent>
        </Card>

        {/* Skills Card */}
        <Card className="flex flex-col md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-xl">Technologies I'm Exploring</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-4">
              {background.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Highlights Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Project Highlights</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="space-y-4">
              {background.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
