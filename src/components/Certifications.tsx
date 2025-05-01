import React, { useState } from 'react';
import { Award, Eye, ExternalLink } from 'lucide-react';

const certifications = {
  nxtwave: [
    { name: "Python", preview: "/certs/python.pdf", verify: "https://drive.google.com/..." },
    { name: "Static and Responsive Web Development", preview: "/certs/static-responsive.pdf", verify: "https://drive.google.com/..." },
    { name: "Developer Foundations", preview: "/certs/dev-foundations.pdf", verify: "https://drive.google.com/..." },
    { name: "JavaScript", preview: "/certs/javascript.pdf", verify: "https://drive.google.com/..." },
    { name: "ReactJS", preview: "/certs/reactjs.pdf", verify: "https://drive.google.com/..." },
    { name: "NodeJS", preview: "/certs/nodejs.pdf", verify: "https://drive.google.com/..." },
    { name: "SQL", preview: "/certs/sql.pdf", verify: "https://drive.google.com/..." }
  ],
  nptel: [
    { name: "IOT", preview: "/certs/iot.pdf", verify: "https://drive.google.com/..." },
    { name: "Soft Skills", preview: "/certs/soft-skills.pdf", verify: "https://drive.google.com/..." }
  ],
  coursera: [
    { name: "Google AI Essentials", preview: "/certs/google-ai.pdf", verify: "https://coursera.org/..." }
  ],
  microsoft: [
    { name: "Azure AI Fundamentals", preview: "/certs/azure-ai.pdf", verify: "https://learn.microsoft.com/..." }
  ]
};

const Certifications = () => {
  const [modalCert, setModalCert] = useState(null);

  const openModal = (cert) => setModalCert(cert);
  const closeModal = () => setModalCert(null);

  const renderCerts = (title, certs) => (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
      <h3 className="text-xl font-semibold text-blue-400 mb-4">{title} Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {certs.map((cert, index) => (
          <div key={index} className="flex items-center justify-between space-x-2 bg-white p-3 rounded-md shadow-sm">
            <div className="flex items-center space-x-2">
              <Award className="text-blue-500" size={18} />
              <span className="text-gray-700 text-sm">{cert.name}</span>
            </div>
            <div className="flex space-x-2">
              <Eye
                size={18}
                className="text-gray-600 cursor-pointer hover:text-blue-500"
                onClick={() => openModal(cert)}
              />
              <a href={cert.verify} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} className="text-gray-600 hover:text-blue-500" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {renderCerts("Nxtwave", certifications.nxtwave)}
      {renderCerts("NPTEL", certifications.nptel)}
      {renderCerts("Coursera", certifications.coursera)}
      {renderCerts("Microsoft", certifications.microsoft)}

      {/* Modal for preview */}
      {modalCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-4 w-11/12 md:w-3/4 lg:w-1/2 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
            >
              ×
            </button>
            <iframe
              src={modalCert.preview}
              className="w-full h-[500px] rounded"
              title={modalCert.name}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
