import React from "react";
import {
  Eye,
  CheckCircle,
  Award,
  BrainCircuit,
  CloudSun,
  GraduationCap
} from "lucide-react";

const certifications = [
  {
    provider: "Nxtwave",
    icon: BrainCircuit,
    certs: [
      {
        name: "Python",
        preview: "https://drive-link.com/python-preview",
        verify: "https://verify-link.com/python"
      },
      {
        name: "Static and Responsive web development",
        preview: "https://drive-link.com/static-web",
        verify: "https://verify-link.com/static-web"
      },
      {
        name: "Developer Foundations",
        preview: "https://drive-link.com/foundations",
        verify: "https://verify-link.com/foundations"
      },
      {
        name: "JavaScript",
        preview: "https://drive-link.com/js",
        verify: "https://verify-link.com/js"
      },
      {
        name: "ReactJS",
        preview: "https://drive-link.com/react",
        verify: "https://verify-link.com/react"
      },
      {
        name: "NodeJS",
        preview: "https://drive-link.com/node",
        verify: "https://verify-link.com/node"
      },
      {
        name: "SQL",
        preview: "https://drive-link.com/sql",
        verify: "https://verify-link.com/sql"
      }
    ]
  },
  {
    provider: "NPTEL",
    icon: GraduationCap,
    certs: [
      {
        name: "IOT",
        preview: "https://drive-link.com/iot",
        verify: "https://verify-link.com/iot"
      },
      {
        name: "Soft Skills",
        preview: "https://drive-link.com/soft-skills",
        verify: "https://verify-link.com/soft-skills"
      }
    ]
  },
  {
    provider: "Coursera",
    icon: CloudSun,
    certs: [
      {
        name: "Google AI Essentials",
        preview: "https://drive-link.com/google-ai",
        verify: "https://verify-link.com/google-ai"
      }
    ]
  },
  {
    provider: "Microsoft",
    icon: Award,
    certs: [
      {
        name: "Azure AI Fundamentals",
        preview: "https://drive-link.com/azure-ai",
        verify: "https://verify-link.com/azure-ai"
      }
    ]
  }
];

const Certifications = () => {
  return (
    <div className="space-y-10 bg-blue-50 p-6 rounded-xl">
      {certifications.map((block, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <block.icon className="text-blue-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-blue-600">
              {block.provider} Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {block.certs.map((cert, index) => (
              <div
                key={index}
                className="bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-gray-800 font-medium mb-3 flex items-center gap-2">
                  <Award className="text-blue-400 w-4 h-4" /> {cert.name}
                </h4>
                <div className="flex gap-2">
                  <a
                    href={cert.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-500 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-600 transition"
                  >
                    <Eye size={14} /> Preview
                  </a>
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-500 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-600 transition"
                  >
                    <CheckCircle size={14} /> Verify
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
