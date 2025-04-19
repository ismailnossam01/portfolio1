import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    title: ".NET Developer Intern",
    company: "Telangana State Technology Services (TSTS)",
    period: "OCT-DEC 2024",
    description: "Developed an Attendance Reporting Application using ASP.NET Core MVC and SQL Server to manage task allocation and attendance tracking for AT Engineers.",
    link: "#"
  },
  {
    title: "Generative AI Virtual Internship",
    company: "AICET Eduskills",
    period: "JULY-SEPT 2024",
    description: "Explored generative AI models for creative applications.",
    link: "#"
  },
  {
    title: "AIML Virtual Internship",
    company: "AICET Eduskills",
    period: "SEPT-NOV 2023",
    description: "Focused on machine learning models and AI applications.",
    link: "#"
  }
];

const WorkExperience = () => {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
            {exp.link && (
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          <p className="text-gray-700 font-medium">{exp.company}</p>
          <p className="text-gray-600 text-sm mb-2">{exp.period}</p>
          <p className="text-gray-600">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;