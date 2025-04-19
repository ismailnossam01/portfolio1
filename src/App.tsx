import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Background from './components/Background';
import FloatingImage from './components/FloatingImage';
import Section from './components/Section';
import WorkExperience from './components/WorkExperience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Navbar from './components/Navbar';
import TypewriterText from './components/TypewriterText';
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExtraCurricular from './components/ExtraCurricular';

function App() {
  return (
    <div>
      
      <Navbar />
      <Background />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 pt-20">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
              Ismail Nossam
            </h1>
            <TypewriterText 
              text="AI & ML Specialist | Full Stack Developer"
              className="text-lg md:text-xl text-blue-400 mb-6 block h-8"
            />
            
            <div className="flex space-x-6 mb-8">
              <a href="https://github.com/ismailnossam01" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-400 hover:text-blue-500 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ismail-nossam/" target="_blank" rel="noopener noreferrer"
                 className="text-blue-400 hover:text-blue-500 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
  <a
    href="mailto:ismailnossam@gmail.com"
    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
  >
    Hire Me
  </a>
  <a
    href="#contact"
    className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-all duration-200 transform hover:-translate-y-1 w-full sm:w-auto"
  >
    Contact
  </a>
</div>
<a
  href="#"
  className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-all duration-200 transform hover:-translate-y-1 w-full"
>
  Resume
</a>

          </div>
          
          <FloatingImage
            src="https://i.ibb.co/rsc8Q7S/IMG-20250113-204136.jpg"
            alt="Ismail Nossam"
          />
        </div>
        
        {/* Professional Summary Section */}
        <Section title="Professional Summary" id="professional-summary">
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:scale-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out transform">
            <p className="leading-relaxed text-gray-800">
              I am Ismail Nossam, a motivated B.Tech student specializing in Artificial Intelligence, Machine Learning, Robotics, Web Development, and AR/VR technologies. With strong technical skills and hands-on experience in these domains, I am passionate about continuous personal and professional growth. A quick learner and effective team player, I aim to secure a challenging role where I can apply my expertise to innovative projects and grow within a dynamic organization.
            </p>
          </div>
        </Section>

        {/* Education Section */}
        <Section title="Education" id="education">
          <Education />
        </Section>

        {/* Experience Section */}
        <Section title="Experience" id="experience">
          <WorkExperience />
        </Section>

        {/* Skills Section */}
        <Section title="Skills" id="skills">
          <Skills />
        </Section>

        {/* Projects Section */}
        <Section title="Projects" id="projects">
          <Projects />
        </Section>

        {/* Achievements Section */}
        <Section title="Achievements" id="achievements">
          <Achievements />
        </Section>

        {/* Extracurricular Activities Section */}
        <Section title="Extracurricular Activities" id="extracurricular">
          <ExtraCurricular />
        </Section>

        {/* Certifications Section */}
        <Section title="Certifications" id="certifications">
          <Certifications />
        </Section>

        {/* Contact Section */}
        <Section title="Contact" id="contact">
          <Contact />
        </Section>
        
      </div>

      {/* Footer Section */}
      <footer className="py-8">
        <div className="container mx-auto text-center">
          <p className="text-blue-400 text-lg italic font-cursive">
            "With passion and dedication, Ismail - alias Kohinoor."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
