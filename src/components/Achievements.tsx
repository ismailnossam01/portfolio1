import React from 'react';
import { Trophy, ExternalLink } from 'lucide-react';

interface Achievement {
  title: string;
  link?: string;
}

const achievements: Achievement[] = [
  { title: "Champion in inter-departmental coding competitions (3 times)", link: "#" },
  { title: "Merit Prizes in college paper and Poster presentations", link: "#" },
  { title: "Patent applied for wireless data transfer to a pendrive", link: "#" },
  { title: "Participant in Smart India Hackathon", link: "#" },
  { title: "Participated in CODEQUEST 24-Hour Hackathon on campus" }
];

const Achievements = () => {
  return (
    <div className="space-y-4">
      {achievements.map((achievement, index) => (
        <div key={index} className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
          <Trophy className="text-blue-500 flex-shrink-0 mt-1" size={20} />
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <p className="text-gray-700">{achievement.title}</p>
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
  );
};

export default Achievements;