import React, { useState } from "react";
import {
  Eye,
  CheckCircle,
  Award,
  BrainCircuit,
  CloudSun,
  GraduationCap,
  X
} from "lucide-react";

const certifications = [
  {
    provider: "Nxtwave",
    icon: BrainCircuit,
    certs: [
      { name: "Python", preview: "https://drive-link.com/python-preview", verify: "https://verify-link.com/python" },
      { name: "Static and Responsive web development", preview: "https://drive-link.com/static-web", verify: "https://verify-link.com/static-web" },
      { name: "Developer Foundations", preview: "https://drive-link.com/foundations", verify: "https://verify-link.com/foundations" },
      { name: "JavaScript", preview: "https://drive-link.com/js", verify: "https://verify-link.com/js" },
      { name: "ReactJS", preview: "https://drive-link.com/react", verify: "https://verify-link.com/react" },
      { name: "NodeJS", preview: "https://drive-link.com/node", verify: "https://verify-link.com/node" },
      { name: "SQL", preview: "https://drive-link.com/sql", verify: "https://verify-link.com/sql" }
    ]
  },
  {
    provider: "NPTEL",
    icon: GraduationCap,
    certs: [
      { name: "IOT", preview: "https://drive-link.com/iot", verify: "https://verify-link.com/iot" },
      { name: "Soft Skills", preview: "https://drive-link.com/soft-skills", verify: "https://verify-link.com/soft-skills" }
    ]
  },
  {
    provider: "Coursera",
    icon: CloudSun,
    certs: [
      { name: "Google AI Essentials", preview: "https://drive-link.com/google-ai", verify: "https://verify-link.com/google-ai" }
    ]
  },
  {
    provider: "Microsoft",
    icon: Award,
    certs: [
      { name: "Azure AI Fundamentals", preview: "https://drive-link.com/azure-ai", verify: "https://verify-link.com/azure-ai" }
    ]
  }
];

const Certifications = () => {
  const [previewUrl, setPreviewUrl] = useState(null);

  return (
    <div className="space-y-10">
      {previewUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-xl shadow-lg w-[90%] h-[90%]">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
              onClick={() => setPreviewUrl(null)}
            >
              <X size={20} />
            </button>
            <iframe
              src={previewUrl}
              title="Certificate Preview"
              className="w-full h-full rounded-md border"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {certifications.map((block, idx) => (
        <div
          key={idx}
          className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out transform"
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
                className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-gray-800 font-medium mb-3 flex items-center gap-2">
                  <Award className="text-blue-400 w-4 h-4 group-hover:text-blue-600 transition" /> {cert.name}
                </h4>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPreviewUrl(cert.preview)}
                      className="flex items-center gap-1 bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200"
                    >
                      <Eye size={14} /> Preview
                    </button>
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200"
                    >
                      <CheckCircle size={14} /> Verify
                    </a>
                  </div>
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
