import React from 'react';
import { Trophy, Medal, Award, FileBadge, Github, MonitorPlay, File } from 'lucide-react'; // Import icons

interface Achievement {
  title: string;
  icon: JSX.Element;
  github?: string;
  demo?: string;
  drive?: string;
}

const achievements: Achievement[] = [
  {
    title: "1st Prize in 3-hour GDG Hackathon among 40 teams (3-member team)",
    icon: <Medal className="text-blue-500" />,
    github: "https://github.com/ismailnossam01/EventHub",
    demo: "https://eventhubv2.netlify.app",
    drive: "https://drive.google.com/file/d/16FCNT179Z6RZJ9ivaGbED2N_5kloS9dd/view?usp=sharing"
  },
  {
    title: "3rd Prize in 24-hour CSE Dept Hackathon among 90 teams (5-member team)",
    icon: <Award className="text-blue-500" />,
    github: "https://github.com/ismailnossam01/UniConnect",
    demo: "https://drive.google.com/file/d/16Dmi2CNxL-7X4WHIBIroRoqVBFU5rrEr/view?usp=sharing",
    drive: "https://drive.google.com/file/d/16AmcysUDc0Z8VdcP6srTCZr13Nt2GR0k/view?usp=sharing"
  },
  {
    title: "Participated in CODEQUEST 24-Hour Hackathon on campus",
    icon: <Award className="text-blue-500" />,
    github: "https://github.com/ismailnossam01/learntrack",
    demo: "https://learntrack.vercel.app",
    drive: "https://drive.google.com/file/d/16A210J97X8m6Yt8cW8CNhsU10U9C7vQh/view?usp=sharing"
  },
  {
    title: "1st Prize in coding competitions: 1st-year (among 100+ participants) and 2nd-year (among 180+ participants).",
    icon: <Trophy className="text-blue-500" />,
    drive: "https://drive.google.com/drive/folders/1kWd89qRrUuq30MPPkQuoKOkZ8YJldstK?usp=sharing"
  },
  {
    title: "Merit Prizes in paper and poster presentations. (among 80 participants)",
    icon: <FileBadge className="text-blue-500" />,
    drive: "https://drive.google.com/drive/folders/1kWd89qRrUuq30MPPkQuoKOkZ8YJldstK?usp=sharing"
  },
  {
    title: "Patent applied for wireless data transfer to a pendrive",
    icon: <Trophy className="text-blue-500" />,
    drive: "https://drive.google.com/file/d/1NbzSjz7H5O1b3xvURIxS0pcHcXVAXCgA/view?usp=sharing"
  }
];

const Achievements = () => {
  return (
    <div className="space-y-4">
      {achievements.map((exp, index) => (
        <div
          key={index}
          className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform"
        >
          <div className="mt-1">{exp.icon}</div>
          <div className="flex-grow">
            <div className="flex justify-between items-center">
              <p className="text-gray-700">{exp.title}</p>
              <div className="flex space-x-2">
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repo"
                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
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
                {exp.drive && (
                  <a
                    href={exp.drive}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Document"
                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
                  >
                    <File size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
