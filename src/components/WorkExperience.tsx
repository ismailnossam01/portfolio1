import React from 'react';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  techStack?: string[];
  github?: string;
  demo?: string;
}

const experiences: Experience[] = [
  {
    title: ".NET Developer Intern",
    company: "Telangana State Technology Services (TSTS)",
    period: "OCT-DEC 2024",
    description: "Developed an Attendance Reporting App in ASP.NET Core MVC with SQL Server for task allocation and attendance tracking. Collaborated with a team of three to integrate Generative AI tools for code automation, enhancing development speed and efficiency.",
    techStack: ["ASP.NET Core MVC", "C#", "SQL Server", "Generative AI Tools"],
    github: "https://github.com/ismailnossam01/attendance-app", // replace with actual repo
    demo: "https://attendance-demo.netlify.app" // optional, replace with actual link
  }
];

const WorkExperience = () => {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
            <div className="flex space-x-3">
              {exp.github && (
                <a href={exp.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                  <Github size={20} />
                </a>
              )}
              {exp.demo && (
                <a href={exp.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  <MonitorPlay size={20} />
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-700 font-medium">{exp.company}</p>
          <p className="text-gray-600 text-sm mb-2">{exp.period}</p>
          <p className="text-gray-600 mb-2">{exp.description}</p>
          {exp.techStack && (
            <p className="text-sm text-gray-500"><strong>Tech Used:</strong> {exp.techStack.join(", ")}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
