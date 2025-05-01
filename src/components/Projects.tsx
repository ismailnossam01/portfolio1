import React from 'react';
import { Brain, Gamepad2, Globe, BookOpen, Stethoscope, ExternalLink, Github, MonitorPlay, Trophy } from 'lucide-react';

const allProjects = [
  // AI Projects
  {
    category: "AI Projects",
    title: "Real-Time Text Chatbot",
    description: "Text-based interaction using LLMs, LangChain and Hugging Face.",
    techStack: ["LLMs", "LangChain", "Hugging Face","Open AI"],
    icon: Brain,
    github: "https://github.com/ismailnossam01/Text-Speech-AI",
    demo: "https://textkohi.ccbp.tech"
  },
  {
    category: "AI Projects",
    title: "Real-Time Voice Assistant",
    description: "Voice-based interaction using LLMs and TTS with LangChain pipeline.",
    techStack: ["LLMs", "LangChain", "TTS", "Hugging Face","Play HT"],
    icon: Brain,
    github: "https://github.com/ismailnossam01/voiceresponseai",
    demo: "https://tellkohi.ccbp.tech"
  },
  {
    category: "AI Projects",
    title: "Library Virtual Assistant",
    description: "Voice-activated assistant for real-time book queries with speech recognition.",
    techStack: ["Python", "Speech Recognition", "TTS", "Pandas"],
    icon: BookOpen,
    github: "https://github.com/ismailnossam01/Library-Assistant-Mini-Nila",
    demo: "https://drive.google.com/file/d/1NAjhjZxGpcYQkIrGSBdXbThm4vn6_n9A/view?usp=sharing"
  },
  {
    category: "AI Projects",
    title: "Medicine Prescription Assistant",
    description: "App for medicine details and alternatives using CSV-based quick lookup.",
    techStack: ["Python", "CSV File Handling"],
    icon: Stethoscope,
    github: "https://github.com/ismailnossam01/MedicineAlternativesNLP",
    demo: "https://drive.google.com/file/d/1NIiscIMqZugMsEthe1EEW-S1alaai7Dj/view?usp=sharing"
  },
  {
  category: "AI Projects",
  title: "Job Post Fraud Detection",
  description: "Built for job verification in the CSE Hackathon, this FastAPI-powered web app uses an AI model to classify job posts as Real or Fake with a trust score. It scrapes job data from URLs and evaluates using NLP and a trained classifier.",
  techStack: ["Python", "FastAPI", "Scikit-Learn", "TfidfVectorizer", "RandomForest", "HTML/CSS/JS", "BeautifulSoup"],
  icon: Brain,
  github: "https://github.com/ismailnossam01/AIJobVerficationCSEHack", // Update if needed
  demo: "https://drive.google.com/file/d/1mSvX8lWeurBw-qEWmaHPTWRNAjOH8mxv/view?usp=sharing", // Optional - fill if deployed
  isWinner:true
},


  // Web Development
  {
    category: "Web Development",
    title: "Department Website",
    description: "Responsive AI/ML department website which includes college chatbot.",
    techStack: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
    github: "https://github.com/ismailnossam01/AIMLDeptWebsite",
    demo: "https://aimlbranchrgm.ccbp.tech"
  },
  {
    category: "Web Development",
    title: "Portfolio Website",
    description: "My personal portfolio showcasing all projects and skills.",
    techStack: ["ReactJS", "Type Script","Vite"],
    icon: Globe,
    github: "https://github.com/ismailnossam01/portfolio1",
    demo: "https://ismailnportfolio.netlify.app"
  },
  {
    category: "Web Development",
    title: "Todo List",
    description: "Minimal, functional todo list with persistent storage.",
    techStack: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
    github: "https://github.com/ismailnossam01/MiniTODO-LIST",
    demo: "https://ismailtodo4.ccbp.tech"
  },
  {
    category: "Web Development",
    title: "Food Munch",
    description: "Frontend project mimicking Swiggy/Zomato.",
    techStack: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
    github: "https://github.com/ismailnossam01/foodmunch",
    demo: "https://kohifoodmunch.ccbp.tech"
  },

  // Hackathon Projects
  {
    category: "Hackathon Projects",
    title: "Unified Student Portal",
    description: "Campus-wide hackathon building a Chatbot + VR + AI Job verification for the students.",
    techStack: ["MERN", "Vite", "FrameVR", "VoiceFlow"],
    icon: Brain,
    github: "https://github.com/ismailnossam01/UniConnect",
    demo: "https://drive.google.com/file/d/16Dmi2CNxL-7X4WHIBIroRoqVBFU5rrEr/view?usp=sharing",
    isWinner: true
  },
  {
    category: "Hackathon Projects",
    title: "Event Listing Platform",
    description: "In a Thrilling 3 Hour GDG Hackathon Designed a Clean, responsive UI for event registration.",
    techStack: ["ReactJS", "Vite"],
    icon: Globe,
    github: "https://github.com/ismailnossam01/EventHub",
    demo: "https://eventhubv2.netlify.app",
    isWinner: true
  },
  {
    category: "Hackathon Projects",
    title: "CODEQUEST 24-Hour Hackathon",
    description: "Participated in campus-wide hackathon building a full-stack project under 24 hours.",
    techStack: ["React", "Firebase", "Node.js", "Type Script"],
    icon: Gamepad2,
    github: "https://github.com/ismailnossam01/learntrack",
    demo: "https://learntrack.vercel.app"
  },

  // Others
  {
    category: "Others",
    title: "PUBG VR Room",
    description: "Created a PUBG-themed virtual environment using Frame VR.",
    techStack: ["Frame VR", "3D Modeling"],
    icon: Gamepad2,
    demo: "https://youtu.be/pQxfI-US4wY?si=aBFvDlmyHzenAsLO"
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
          <a
            href={project.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repo"
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href={project.demo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            title="View Demo"
            className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
          >
            <MonitorPlay size={18} />
          </a>
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
