import { get, EdgeConfigValue } from '@vercel/edge-config';
import type { About, Project } from './types';
import exp from 'constants';


function isValidProject(item: unknown): item is Project {
  if (item === null || typeof item !== 'object') {
    return false;
  }
  return (
    'id' in item && typeof (item as any).id === 'string' &&
    'name' in item && typeof (item as any).name === 'string' &&
    'description' in item && typeof (item as any).description === 'string' &&
    'url' in item && typeof (item as any).url === 'string' &&
    'stars' in item && typeof (item as any).stars === 'number' &&
    'language' in item && typeof (item as any).language === 'string' &&
    'imageUrl' in item && typeof (item as any).imageUrl === 'string' &&
    'imageHint' in item && typeof (item as any).imageHint === 'string'
    
  );
}


const AboutData: About = {
  background: [
    "Captivated by AI's potential to transform industries and enhance human capabilities.",
    'Driven to build and deploy intelligent applications, with a focus on NLP and computer vision.',
    'Committed to applying academic knowledge to create innovative, real-world solutions.',
  ],
  skills: ['Python', 'TensorFlow', 'PyTorch', 'Unsloth', 'SQL', 'Hugging Face Transformers', 'OpenCV', 'Google Colab'],
  philosophy: [
    'Human-Centered AI: I prioritize creating AI systems that are designed to assist and empower people.',
    'Ethical & Responsible: I am deeply committed to building solutions that are transparent, fair, and beneficial for society.',
    'Creative & Innovative: I approach development with an experimental mindset, focused on finding innovative solutions to real-world problems.',
  ],
  highlights: [
    'Engineered an NLP model to analyze and classify student feedback for university courses, providing actionable insights into course improvements.',
    'Designed and implemented a deep learning-based recommendation engine to provide personalized movie suggestions from the MovieLens dataset.',
    'Developed a chatbot using a transformer-based language model to answer frequently asked questions for a fictional university help desk, improving response efficiency.',
  ],
};

export function getAboutData(): About {
  return AboutData;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const projectsData = await get('github_projects');

    if (!projectsData || !Array.isArray(projectsData)) {
      return [];
    }

    // Use the type guard to filter the array, ensuring all items match the Project shape.
    const validProjects = projectsData.filter(isValidProject) as unknown as Project[];
    
    return validProjects;
  } catch (error) {
    console.error('Failed to fetch or validate projects from Edge Config:', error);
    return [];
  }
}

export async function getResumeUrl(): Promise<string> {
  //Fetch the resume URL from Edge Config:
  const resumeData = await get('application/Resume.pdf');
  if (resumeData && typeof resumeData === 'object' && 'url' in resumeData) {
    return (resumeData as { url: string }).url;
  }
  // Fallback to static URL if not found
  return 'https://arsvtva4mgtrklk6.public.blob.vercel-storage.com/Resume.pdf';
}

