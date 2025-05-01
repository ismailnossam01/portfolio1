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
    { name: "IoT", preview: "/certs/iot.pdf", verify: "https://drive.google.com/..." },
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
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
      <h3 className="text-xl font-semibold text-blue-600 mb-4">{title} Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-blue-50 p-4 rounded-xl hover:shadow-md transition-all"
          >
            <div className="flex items-center space-x-2">
              <Award size={18} className="text-blue-500" />
              <span className="text-gray-700 text-sm font-medium">{cert.name}</span>
            </div>
            <div className="flex space-x-4 text-sm">
              <button
                onClick={() => openModal(cert)}
                className="flex items-center text-blue-500 hover:text-blue-700 space-x-1"
              >
                <Eye size={16} />
                <span>Preview</span>
              </button>
              <a
                href={cert.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:text-blue-700 space-x-1"
              >
                <ExternalLink size={16} />
                <span>Verify</span>
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

      {/* Preview Modal */}
      {modalCert && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl shadow-lg w-11/12 md:w-3/4 lg:w-2/3 p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <iframe
              src={modalCert.preview}
              className="w-full h-[500px] rounded-xl border"
              title={modalCert.name}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
