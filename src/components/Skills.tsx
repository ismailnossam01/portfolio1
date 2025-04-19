import React from 'react';
import { Code, Database, Wrench, MessageSquare } from 'lucide-react';

const skillsData = {
  programming: {
    title: "Programming",
    icon: Code,
    skills: ["Python", "C", "C++", "Data Structures and Algorithms"]
  },
  libraries: {
    title: "Libraries/Frameworks",
    icon: Database,
    skills: ["Numpy", "Pandas", "Matplotlib", "Seaborn"]
  },
  webDev: {
    title: "Web Development",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "SQL", "MongoDB", ".NET Technologies"]
  },
  tools: {
    title: "Tools/Platforms",
    icon: Wrench, // Changed from Tool to Wrench
    skills: ["Jupyter Notebook", "GitHub", "Power BI", "FrameVR", "Hugging Face", "Voiceflow", "Visual Studio Code"]
  },
  softSkills: {
    title: "Soft Skills",
    icon: MessageSquare,
    skills: ["Teamwork", "Adaptability", "Leadership", "Time Management", "Patience", "Communication"]
  }
};

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(skillsData).map(([key, category]) => (
        <div key={key} className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <category.icon className="text-blue-500 w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;