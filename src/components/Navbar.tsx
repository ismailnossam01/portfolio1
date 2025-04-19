import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Check if scrolled more than 20px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = id === "about" ? document.body : document.getElementById(id);
    if (element) {
      const offset = id === "about" ? 0 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const menuItems = ['about', 'education', 'experience', 'skills', 'projects', 'achievements', 'certifications', 'contact'];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 backdrop-blur-md shadow-lg`}
    >
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Navbar Logo with a white circular background */}
          <span
            className="bg-white text-blue-600 font-bold text-2xl mr-4 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center"
            onClick={scrollToTop} // Add onClick to scroll to top
          >
            IN
          </span>

          {/* Desktop Menu (Hidden on smaller devices) */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white font-semibold text-lg hover:text-blue-200 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (Only visible when menu is open) */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-500/90 backdrop-blur-md shadow-lg absolute left-0 right-0 p-4 transition-all">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white font-semibold text-lg capitalize text-left px-4 py-2 hover:bg-blue-400 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
