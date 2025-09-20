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
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">

  {/* Journey Card */}
  <Card className="flex flex-col h-full justify-between md:rounded-l-xl lg:rounded-l-xl md:mr-0 lg:mr-0">
          <CardHeader className="flex-row items-center gap-4">
            <Rocket className="h-8 w-8 text-primary" />
            <CardTitle className="text-xl">My Journey</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
              <ul className="space-y-4">
                {highlights.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>

  {/* Philosophy Card */}
  <Card className="flex flex-col h-full justify-between md:rounded-r-xl lg:rounded-r-xl md:ml-0 lg:ml-0">
          <CardHeader className="flex-row items-center gap-4">
            <Lightbulb className="h-8 w-8 text-primary" />
            <CardTitle className="text-xl">My Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
              <ul className="space-y-4">
                {highlights.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>

        {/* Highlights Card */}
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-xl">Project Highlights</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="space-y-4">
                {highlights.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>

        {/* Skills Card */}
        <Card className="flex flex-col col-span-1 md:col-span-3 lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-xl">Technologies I'm Exploring</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <Badge key={idx} className="text-sm px-3 py-1">{skill}</Badge>
                ))}
              </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
