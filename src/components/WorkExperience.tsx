import React from 'react';
import { Brain, BookOpen, Stethoscope, Globe, Gamepad2, Github, MonitorPlay } from 'lucide-react';

const categorizedProjects = {
  "AI Projects": [
    {
      title: "Generative AI - Text & Voice Bot",
      description: "Built real-time AI chatbot using LangChain & Hugging Face for seamless text and voice interaction.",
      icon: Brain,
      techStack: ["LLMs", "LangChain", "Hugging Face"],
      github: "https://github.com/ismailnossam01/GenerativeAIChatbot",
      demo: "https://drive.google.com/file/d/1gVc-voice-demo-link"
    },
    {
      title: "Library Virtual Assistant",
      description: "Voice-activated assistant for checking book availability using speech recognition and TTS.",
      icon: BookOpen,
      techStack: ["Python", "SpeechRecognition", "TTS", "Pandas"],
      github: "https://github.com/ismailnossam01/LibraryAssistant",
      demo: "https://drive.google.com/file/d/1lib-va-demo"
    },
    {
      title: "Medicine Prescription App",
      description: "NLP-based app that describes medicines and suggests alternatives using CSV file processing.",
      icon: Stethoscope,
      techStack: ["Python", "CSV File Handling"],
      github: "https://github.com/ismailnossam01/MedicinePrescriptionAssistant",
      demo: "https://drive.google.com/file/d/1med-app-demo"
    }
  ],
  "Web Development": [
    {
      title: "Responsive Department Website",
      description: "Designed AI/ML department website optimized for cross-device compatibility.",
      icon: Globe,
      techStack: ["HTML", "CSS", "JS", "ReactJS"],
      github: "https://github.com/ismailnossam01/Dept-Website",
      demo: "https://ismailnossam01.github.io/dept-website"
    },
    {
      title: "My Portfolio",
      description: "Personal portfolio site showcasing my work, skills, and resume.",
      icon: Globe,
      techStack: ["ReactJS", "TailwindCSS"],
      github: "https://github.com/ismailnossam01/portfolio",
      demo: "https://ismailnossam01.vercel.app"
    },
    {
      title: "Todo List App",
      description: "Minimalistic productivity app to manage daily tasks.",
      icon: Globe,
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ismailnossam01/todo-list",
      demo: "https://ismailnossam01.github.io/todo-list"
    },
    {
      title: "Food Munch",
      description: "Responsive food ordering UI as part of web practice.",
      icon: Globe,
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ismailnossam01/food-munch",
      demo: "https://ismailnossam01.github.io/food-munch"
    }
  ],
  "Hackathon Projects": [
    {
      title: "Unified Student Portal",
      description: "Built in 24-hr hackathon: VR space, chatbot, and AI-based job verification system.",
      icon: Gamepad2,
      techStack: ["MERN", "FrameVR", "Vite", "VoiceFlow"],
      github: "https://github.com/ismailnossam01/UnifiedStudentPortal",
      demo: "https://drive.google.com/file/d/1unified-demo"
    },
    {
      title: "Event Listing Platform",
      description: "React app to browse and register for events with modern UI/UX.",
      icon: Gamepad2,
      techStack: ["ReactJS", "Vite"],
      github: "https://github.com/ismailnossam01/EventPlatform",
      demo: "https://event-platform.vercel.app"
    }
  ]
};

const Projects = () => {
  return (
    <div className="space-y-10">
      {Object.entries(categorizedProjects).map(([category, projects], catIdx) => (
        <div key={catIdx}>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <proj.icon className="text-blue-500 w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{proj.title}</h3>
                  </div>
                  <div className="flex space-x-2">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub Repo"
                        className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Demo"
                        className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
                      >
                        <MonitorPlay size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 mt-2">{proj.description}</p>
                {proj.techStack && (
                  <p className="text-sm text-gray-500 mt-2">
                    <strong>Tech Used:</strong> {proj.techStack.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
