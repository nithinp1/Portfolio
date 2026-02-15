import type { About, Project } from './types';


function isValidProject(item: unknown): item is Project {
  if (item === null || typeof item !== 'object') {
    return false;
  }
  return (
    'id' in item && typeof (item as any).id === 'string' &&
    'title' in item && typeof (item as any).title === 'string' &&
    'description' in item && typeof (item as any).description === 'string' &&
    'imageUrl' in item && typeof (item as any).imageUrl === 'string' &&
    'imageHint' in item && typeof (item as any).imageHint === 'string' &&
    'category' in item && typeof (item as any).category === 'string' &&
    'links' in item && typeof (item as any).links === 'object'
  );
}


const AboutData: About = {
  background: [
    'Developed HomeFit, a Flutter-based fitness application with Firebase authentication, local notifications, and workout tracking',
    'Built Finz, a financial portfolio management web application with stock trading simulation, AI assistant, and achievement system',
    'Created HabitStreakify, a full-stack habit tracking application using modern web technologies',
    'Designed a Pollution Awareness Website to promote environmental conservation and protection',
  ],
  skills: [
    'TypeScript',
    'JavaScript', 
    'Dart',
    'Python',
    'C',
    'HTML',
    'CSS',
    'React',
    'Flutter',
    'Tailwind CSS',
    'Vite',
    'Express.js',
    'Node.js',
    'Firebase',
    'Supabase',
    'PostgreSQL',
    'Git',
    'GitHub',
    'Firebase Firestore',
    'Lucide React',
  ],
  philosophy: [
    'Focus on building production-ready, fully-featured applications across multiple platforms (web and mobile)',
    'Emphasize clean code architecture and modern development practices',
    'Passionate about creating user-centric applications that solve real-world problems',
    'Continuous learning and exploration of new technologies and frameworks',
  ],
  highlights: [
    'Implemented real-time stock trading features with portfolio management and cash flow tracking in Finz',
    'Integrated Firebase authentication and local push notifications for fitness reminders in HomeFit',
    'Built responsive, mobile-first designs with modern UI/UX principles',
    'Developed full-stack applications with server-side rendering and hot module replacement',
  ],
};

export function getAboutData(): About {
  return AboutData;
}

export async function getProjects(): Promise<Project[]> {
  // Hardcoded projects data
  const projects: Project[] = [
    {
      id: 'homefit',
      title: 'HomeFit',
      description: 'A Flutter fitness application with Firebase authentication, workout tracking, and local notifications for reminders',
      imageUrl: 'https://raw.githubusercontent.com/nithinp1/HomeFit/main/assets/icon/icon.png',
      imageHint: 'HomeFit - Flutter fitness application icon',
      category: 'Mobile',
      links: {
        github: 'https://github.com/nithinp1/HomeFit',
      },
    },
    {
      id: 'finz',
      title: 'Finz',
      description: 'Financial portfolio management web app with stock trading simulation, AI assistant, and achievement system',
      imageUrl: 'https://raw.githubusercontent.com/nithinp1/Finz/main/public/logo.png',
      imageHint: 'Finz - Financial portfolio management application logo',
      category: 'Web',
      links: {
        github: 'https://github.com/nithinp1/Finz',
      },
    },
    {
      id: 'habitstreakify',
      title: 'HabitStreakify',
      description: 'Full-stack habit tracking application with modern web development stack and HMR support',
      imageUrl: 'https://raw.githubusercontent.com/nithinp1/HabitStreakify/main/public/logo.svg',
      imageHint: 'HabitStreakify - Habit tracking application logo',
      category: 'Web',
      links: {
        github: 'https://github.com/nithinp1/HabitStreakify',
      },
    },
    {
      id: 'pollution',
      title: 'Pollution Awareness',
      description: 'Environmental awareness website promoting conservation and pollution prevention with responsive design',
      imageUrl: 'https://raw.githubusercontent.com/nithinp1/pollution/main/images/logo.png',
      imageHint: 'Pollution Awareness - Environmental website logo',
      category: 'Web',
      links: {
        github: 'https://github.com/nithinp1/pollution',
      },
    },
  ];

  return projects;
}

export async function getResumeUrl(): Promise<string> {
  // Return static URL directly
  return 'https://arsvtva4mgtrklk6.public.blob.vercel-storage.com/Resume.pdf';
}

