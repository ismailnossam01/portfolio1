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
      {
        name: "Python",
        preview:
          "https://ik.imagekit.io/smhlaofs7/programming%20foundations%20with%20python_page-0001.jpg?updatedAt=1746165065611",
        verify:
          "https://drive.google.com/file/d/1HsjHHPsH3fTLBGo7r1NF9AIhgHfKXLZD/view"
      },
      {
        name: "Static web development",
        preview:
          "https://ik.imagekit.io/smhlaofs7/build%20your%20own%20static%20website_page-0001.jpg?updatedAt=1746165063497",
        verify:
          "https://drive.google.com/file/d/1UDfZDnmgc-wdLC09NKIgeTQHKX9fcaIQ/view"
      },
      {
        name: "Responsive web development",
        preview:
          "https://ik.imagekit.io/smhlaofs7/build%20your%20own%20responsive%20website_page-0001.jpg?updatedAt=1746165063520",
        verify:
          "https://drive.google.com/file/d/11Np1AdYhF6vQ42aeYsSIv8AxQFvFFF59/view"
      },
      {
        name: "Developer Foundations",
        preview:
          "https://ik.imagekit.io/smhlaofs7/Developer%20Foundations_page-0001.jpg?updatedAt=1746165063514",
        verify:
          "https://drive.google.com/file/d/1OMmQ_OXMYdqcS_UpEYCwPGpxv8YjZB5O/view"
      },
      {
        name: "JavaScript",
        preview:
          "https://ik.imagekit.io/smhlaofs7/javascript%20essentials_page-0001.jpg?updatedAt=1746165063518",
        verify:
          "https://drive.google.com/file/d/12yquO-GtliqP03TZczEDkK4FqRVWUo7T/view"
      },
      {
        name: "ReactJS",
        preview:
          "https://ik.imagekit.io/smhlaofs7/REACT%20JS_page-0001.jpg?updatedAt=1746165063494",
        verify:
          "https://drive.google.com/file/d/1jd70pMN88bNJm3mviwtkZTMT23p3Uj9E/view"
      },
      {
        name: "NodeJS",
        preview:
          "https://ik.imagekit.io/smhlaofs7/Node%20JS_page-0001.jpg?updatedAt=1746165110108",
        verify:
          "https://drive.google.com/file/d/1YmSSbCepw_W2IjDLbMtUZGPDsn1Hb-YG/view"
      },
      {
        name: "SQL",
        preview:
          "https://ik.imagekit.io/smhlaofs7/introduction%20to%20database_page-0001.jpg?updatedAt=1746165063491",
        verify:
          "https://drive.google.com/file/d/1mbkZx5hQ_jaGRVu8EnMBpFn5mZ0P4xQw/view"
      }
    ]
  },
  {
    provider: "NPTEL",
    icon: GraduationCap,
    certs: [
      {
        name: "IOT",
        preview:
          "https://ik.imagekit.io/smhlaofs7/Introduction%20To%20Internet%20Of%20Things%20NPTEL_page-0001.jpg?updatedAt=1746165064281",
        verify:
          "https://drive.google.com/file/d/1baiUX5Rusb2JbAg16_8q6j3qBLb8djAn/view"
      },
      {
        name: "Soft Skills",
        preview:
          "https://ik.imagekit.io/smhlaofs7/Soft%20Skills%20NPTEL_page-0001.jpg?updatedAt=1746165064277",
        verify:
          "https://drive.google.com/file/d/1L6QSrtqLoU6qB8NOCl4z1CwCl67aQfVt/view"
      }
    ]
  },
  {
    provider: "Coursera",
    icon: CloudSun,
    certs: [
      {
        name: "Google AI Essentials",
        preview:
          "https://ik.imagekit.io/smhlaofs7/Coursera%20UKJQT8Q2L33A%20(3)_page-0001.jpg?updatedAt=1746165063068",
        verify:
          "https://drive.google.com/file/d/16EBlPrhB1pJwELfmqj-m53B7KLqfOtNx/view"
      }
    ]
  },
  {
    provider: "Microsoft",
    icon: Award,
    certs: [
      {
        name: "Azure AI Fundamentals",
        preview:
          "https://ik.imagekit.io/smhlaofs7/Credentials%20-%20ismailnossam-01%20_%20Microsoft%20Learn%20(1)_page-0002.jpg?updatedAt=1746165062325",
        verify:
          "https://drive.google.com/file/d/16BbUPn-O9bJH11U-YrWi-Pu0Dmgq65nq/view"
      }
    ]
  }
];

const Certifications = () => {
  const [previewUrl, setPreviewUrl] = useState(null);

  return (
    <div className="space-y-10">
      {previewUrl && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl shadow-lg max-w-6xl w-auto max-h-[90vh] overflow-hidden flex items-center justify-center">
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
              onClick={() => setPreviewUrl(null)}
            >
              <X size={20} />
            </button>
            <img
              src={previewUrl}
              alt="Certificate Preview"
              className="w-auto h-auto max-h-[90vh] max-w-[90vw] object-contain rounded"
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
                <div className="flex justify-between items-center">
                  <h4 className="text-gray-800 font-medium mb-3 flex items-center gap-2">
                    <Award className="text-blue-400 w-4 h-4" />
                    {cert.name}
                  </h4>
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
