import React from 'react';
import { Users, Mic, Star } from 'lucide-react';

const activities = [
  {
    title: "Student Coordinator",
    description: "Organized events as a Student Coordinator in the Institution Innovation Council (IIC).",
    icon: Users
  },
  {
    title: "Entrepreneurship Engagement",
    description: "Engaged in entrepreneurship sessions and podcasts.",
    icon: Mic
  },
  {
    title: "Club Activities",
    description: "Active member of departmental clubs, contributing to various initiatives and activities.",
    icon: Star
  }
];

const ExtraCurricular = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {activities.map((activity, index) => (
        <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <activity.icon className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
              <p className="text-gray-600 mt-2">{activity.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtraCurricular;