import type { About, Project } from "./types";

// TODO: Fetch this from a CMS or database
const mockAboutData: About = {
  background:[ 
    "Captivated by AI's potential to transform industries and enhance human capabilities.",
    "Driven to build and deploy intelligent applications, with a focus on NLP and computer vision.",
    "Committed to applying academic knowledge to create innovative, real-world solutions."
    ],
  skills: ["Python", "TensorFlow", "PyTorch", "Unsloth", "SQL", "Hugging Face Transformers","OpenCV", "Google Colab"],
  philosophy: [
    "Human-Centered AI: I prioritize creating AI systems that are designed to assist and empower people." ,
    "Ethical & Responsible: I am deeply committed to building solutions that are transparent, fair, and beneficial for society.",
    "Creative & Innovative: I approach development with an experimental mindset, focused on finding innovative solutions to real-world problems."
  ],
  highlights: [
    "Engineered an NLP model to analyze and classify student feedback for university courses, providing actionable insights into course improvements.",
    "Designed and implemented a deep learning-based recommendation engine to provide personalized movie suggestions from the MovieLens dataset.",
    "Developed a chatbot using a transformer-based language model to answer frequently asked questions for a fictional university help desk, improving response efficiency."
  ]
};

const mockProjects: Project[] = [
  {
    id: 'gpt-oss-finetuning',
    title: 'Fine-tuning GPT OSS',
    description: 'An open-source project focused on fine-tuning large-scale Generative Pre-trained Transformers for specific tasks and domains.',
    imageUrl: 'https://raw.githubusercontent.com/openai/gpt-oss/main/docs/gpt-oss-20b.svg',
    imageHint: 'AI neural network',
    category: 'AI',
    links: {
      github: 'https://github.com/openai/gpt-oss'
    }
  }
];

export async function getAboutData(): Promise<About> {
  console.log("Fetching mock about data...");
  await new Promise(resolve => setTimeout(resolve, 50)); // Simulate network delay
  return mockAboutData;
}

export async function getProjects(): Promise<Project[]> {
  console.log("Fetching static projects data...");
  await new Promise(resolve => setTimeout(resolve, 50)); // Simulate network delay
  return mockProjects;
}

export async function getResumeUrl(): Promise<string> {
  // TODO: Fetch this from a CMS or database
  return "https://docs.google.com/document/d/1OKX6NaInwmy9rqc6PHRnUeNPv89U08cfKvvIolLYDqk/edit?usp=sharing";
}
