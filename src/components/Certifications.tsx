import React from 'react';
import { Award } from 'lucide-react';

const certifications = {
  nxtwave: [
    "Python",
    "Static and Responsive web development",
    "Developer Foundations",
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "SQL"
  ],
  nptel: [
    "IOT",
    "Soft skills"
  ]
};

const Certifications = () => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Nxtwave Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.nxtwave.map((cert, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Award className="text-blue-500" size={18} />
              <span className="text-gray-600">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">NPTEL Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.nptel.map((cert, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Award className="text-blue-500" size={18} />
              <span className="text-gray-600">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;