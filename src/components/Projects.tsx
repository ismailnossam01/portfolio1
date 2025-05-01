import React from 'react';
import { Brain, Gamepad2, Globe, BookOpen, Stethoscope, ExternalLink, Github, MonitorPlay, Trophy } from 'lucide-react';

const allProjects = [
  // AI Projects
  {
    category: "AI Projects",
    title: "Generative AI Models for Real-Time Text and Voice Responses",
    description: "Enhanced user interaction using LLMs, LangChain, Hugging Face for real-time voice/text responses.",
    techStack: ["LLMs", "LangChain", "Hugging Face"],
    icon: Brain,
    github: "https://github.com/ismailnossam01/GenAI-Models",
    demo: "https://genai-demo.com"
  },
  {
    category: "AI Projects",
    title: "Library Virtual Assistant",
    description: "Voice-activated assistant for real-time book queries with speech recognition.",
    techStack: ["Python", "Speech Recognition", "TTS", "Pandas"],
    icon: BookOpen,
    demo: "https://library-assistant-demo.com"
  },
  {
    category: "AI Projects",
    title: "Medicine Prescription Assistant",
    description: "App for medicine details and alternatives using CSV-based quick lookup.",
    techStack: ["Python", "CSV File Handling"],
    icon: Stethoscope,
    demo: "https://medicine-app-demo.com"
  },

  // Web Development
  {
    category: "Web Development",
    title: "Department Website",
    description: "Responsive AI/ML department website.",
    techStack: ["HTML", "CSS", "JavaScript", "ReactJS"],
    icon: Globe,
    demo: "https://dept-website.com"
  },
  {
    category: "Web Development",
    title: "Portfolio Website",
    description: "My personal portfolio showcasing all projects and skills.",
    techStack: ["ReactJS", "Tailwind"],
    icon: Globe,
    demo: "https://ismailnossam01.vercel.app"
  },
  {
    category: "Web Development",
    title: "Todo List",
    description: "Minimal, functional todo list with persistent storage.",
    techStack: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
    demo: "https://todo-app-demo.com"
  },
  {
    category: "Web Development",
    title: "Food Munch",
    description: "Frontend project mimicking Swiggy/Zomato.",
    techStack: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
    demo: "https://foodmunch-demo.com"
  },

  // Hackathon Projects
  {
    category: "Hackathon Projects",
    title: "Unified Student Portal",
    description: "Chatbot + VR + AI verification to solve academic/job data issues.",
    techStack: ["MERN", "Vite", "FrameVR", "VoiceFlow"],
    icon: Brain,
    github: "https://github.com/ismailnossam01/unified-portal",
    demo: "https://unifiedportal-demo.com",
    isWinner: true
  },
  {
    category: "Hackathon Projects",
    title: "Event Listing Platform",
    description: "Clean, responsive UI for event registration.",
    techStack: ["ReactJS", "Vite"],
    icon: Globe,
    github: "https://github.com/ismailnossam01/event-listing",
    demo: "https://eventplatform-demo.com"
  },
  {
    category: "Hackathon Projects",
    title: "CODEQUEST 24-Hour Hackathon",
    description: "Participated in campus-wide hackathon building a full-stack project under 24 hours.",
    techStack: ["React", "MongoDB", "Node.js"],
    icon: Gamepad2
  },

  // Others
  {
    category: "Others",
    title: "PUBG VR Room",
    description: "Created a PUBG-themed virtual environment using Frame VR.",
    techStack: ["Frame VR", "3D Modeling"],
    icon: Gamepad2,
    demo: "https://vr-pubg-frame.com"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <project.icon className="text-blue-500 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              {project.title}
              {project.isWinner && (
                <span className="bg-yellow-300 text-xs text-black px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Trophy size={12} /> Winner
                </span>
              )}
            </h3>
            <p className="text-gray-600 mt-1">{project.description}</p>
            {project.techStack && (
              <p className="text-sm text-gray-500 mt-2"><strong>Tech Used:</strong> {project.techStack.join(", ")}</p>
            )}
          </div>
        </div>
        <div className="flex space-x-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub Repo" className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300">
              <Github size={18} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" title="View Demo" className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300">
              <MonitorPlay size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const categories = ["AI Projects", "Web Development", "Hackathon Projects", "Others"];

  return (
    <div className="space-y-10">
      {categories.map((category, idx) => (
        <div key={idx}>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allProjects.filter(p => p.category === category).map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
