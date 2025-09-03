import type { About, Project } from "./types";

// This is mock data. In a real application, you would fetch this from a database or CMS.
const mockAboutData: About = {
  background:[ "As a Computer Science student, my curiosity about how machines learn has evolved into a drive to build intelligent applications. I am now focused on exploring frontiers like NLP and computer vision to apply my academic knowledge and create innovative, real-world solutions."
    ],
  skills: ["Python", "TensorFlow", "PyTorch", "Pandas", "SQL", "Hugging Face Transformers","OpenCV", "Google Colab"],
  philosophy: ["I am committed to the principles of responsible and human-centered AI. I believe in developing systems that are not only technologically advanced but also transparent, fair, and beneficial to society. My approach involves a creative and experimental mindset, a deep commitment to ethical considerations, and a focus on building AI that empowers and assists people."
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
  // In a real app, you might fetch this from a CMS or database
  return "https://docs.google.com/document/d/1OKX6NaInwmy9rqc6PHRnUeNPv89U08cfKvvIolLYDqk/edit?usp=sharing";
}
