import React from 'react';
import { Github, MonitorPlay } from 'lucide-react';

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
    github: "https://github.com/ismailnossam01/ATEngineersAttendanceProject",
    demo: "https://drive.google.com/drive/u/1/folders/1jt4iQJscNxdYcuLKcAi2VR592iJlIaOA"
  }
];

const WorkExperience = () => {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-blue-500">{exp.title}</h3>
            <div className="flex space-x-2">
              {exp.github && (
                <a
                  href={exp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Repo"
                  className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition duration-300"
                >
                  <Github size={18} />
                </a>
              )}
              {exp.demo && (
                <a
                  href={exp.demo}
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
          <p className="text-gray-800 font-medium">{exp.company}</p>
          <p className="text-gray-600 text-sm mb-2">{exp.period}</p>
          <p className="text-gray-700 mb-3">{exp.description}</p>
          {exp.techStack && (
            <p className="text-sm text-gray-500"><strong>Tech Used:</strong> {exp.techStack.join(", ")}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
