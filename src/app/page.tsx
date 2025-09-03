import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { getAboutData, getProjects, getResumeUrl } from '@/lib/data';

export const revalidate = 60; // Revalidate data at most every 60 seconds

export default async function Home() {
  const aboutData = await getAboutData();
  const projects = await getProjects();
  const resumeUrl = await getResumeUrl();

  return (
    <div className="flex flex-col min-h-screen">
      <Header resumeUrl={resumeUrl} />
      <main className="flex-1">
        <HeroSection />
        <AboutSection data={aboutData} id="about" />
        <ProjectsSection projects={projects} id="projects" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}