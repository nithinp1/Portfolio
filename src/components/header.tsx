import Link from "next/link";
import { Button } from "./ui/button";
import { MountainIcon } from "lucide-react";

export function Header({ resumeUrl }: { resumeUrl: string }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-end">
          <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
            <Button variant="ghost" asChild>
              <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#projects">Projects</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
