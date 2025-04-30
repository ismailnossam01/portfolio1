import React from 'react';
import { Trophy, ExternalLink, Github, MonitorPlay, Lightbulb } from 'lucide-react';

interface Achievement {
  title: string;
  link?: string;
  github?: string;
  demo?: string;
  category: "general" | "hackathon";
}

const achievements: Achievement[] = [
  // Hackathon Achievements
  {
    title: "1st Prize in 3-hour GDG Hackathon (40 teams, 3-member team)",
    category: "hackathon",
    github: "https://github.com/ismailnossam01/GDG-Hackathon", // replace actual
    demo: "https://gdg-demo-link.com", // replace actual
  },
  {
    title: "3rd Prize in 24-hour CSE Dept Hackathon (90 teams, 5-member team)",
    category: "hackathon",
    github: "https://github.com/ismailnossam01/CSEHackathon", // replace actual
    demo: "https://cse-hackathon-demo.com", // replace actual
  },
  {
    title: "Participant in Smart India Hackathon",
    category: "hackathon",
    demo: "https://sih-demo-link.com", // optional
  },
  {
    title: "Participated in CODEQUEST 24-Hour Hackathon on campus",
    category: "hackathon"
  },

  // General Achievements
  {
    title: "Champion in inter-departmental coding competitions (3 times)",
    category: "general",
    link: "#"
  },
  {
    title: "1st Prize in 1st & 2nd year college coding contests (100+ & 180+ participants)",
    category: "general"
  },
  {
    title: "Merit Prizes in paper and poster presentations (among 80 participants)",
    category: "general",
    link: "#"
  },
  {
    title: "Patent applied for wireless data transfer to a pendrive",
    category: "general",
    link: "#"
  }
];

const Achievements = () => {
  return (
    <div className="space-y-6">
      {/* Hackathon Achievements */}
      <div>
        <h2 className="text-lg font-semibold text-blue-600 mb-2 flex items-center gap-2">
          <Lightbulb className="text-yellow-500" size={18} /> Hackathon Achievements
        </h2>
        <div className="space-y-3">
          {achievements.filter(a => a.category === "hackathon").map((achievement, index) => (
            <div key={index} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg shadow-md hover:scale-100 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <Trophy className="text-purple-500 mt-1" size={20} />
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <p className="text-gray-800">{achievement.title}</p>
                  <div className="flex space-x-2">
                    {achievement.github && (
                      <a href={achievement.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                        <Github size={18} />
                      </a>
                    )}
                    {achievement.demo && (
                      <a href={achievement.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                        <MonitorPlay size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Achievements */}
      <div>
        <h2 className="text-lg font-semibold text-blue-600 mb-2 flex items-center gap-2">
          <Trophy className="text-blue-500" size={18} /> Other Achievements
        </h2>
        <div className="space-y-3">
          {achievements.filter(a => a.category === "general").map((achievement, index) => (
            <div key={index} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg shadow-md hover:scale-100 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <Trophy className="text-blue-500 mt-1" size={20} />
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <p className="text-gray-800">{achievement.title}</p>
                  {achievement.link && (
                    <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
