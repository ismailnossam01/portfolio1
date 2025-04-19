import React from 'react';
import { Brain, Gamepad2, Globe, BookOpen, Stethoscope, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "Generative AI",
    description: "Developed models using LLMs, LangChain, Hugging Face for real-time text and voice responses.",
    icon: Brain,
    links: ["#", "#"]
  },
  {
    title: "Virtual Reality",
    description: "Created a PUBG-themed virtual environment using Frame VR, showcasing 3D design and VR skills.",
    icon: Gamepad2,
    links: ["#"]
  },
  {
    title: "Web Development",
    description: "Designed multiple responsive websites, including an AI/ML department webpage.",
    icon: Globe,
    links: ["#", "#", "#", "#"]
  },
  {
    title: "Library Virtual Assistant",
    description: "Built a virtual assistant for book availability queries using voice recognition.",
    icon: BookOpen,
    links: ["#"]
  },
  {
    title: "Medicine Prescription App",
    description: "Developed an NLP-based app to generate medicine descriptions and suggest alternatives.",
    icon: Stethoscope,
    links: ["#"]
  }
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectsData.map((project, index) => (
        <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <project.icon className="text-blue-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-1">{project.description}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-600"
              >
                <ExternalLink size={16} className="mr-1" />
                <span className="text-sm">Demo {i + 1}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;