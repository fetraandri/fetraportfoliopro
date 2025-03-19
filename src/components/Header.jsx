import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-800 text-white p-4 shadow-md fixed top-0 w-full z-10"
    >
      <ul className="flex space-x-6 justify-center">
        <li><a href="#home" className={`hover:text-blue-300 ${activeSection === 'home' ? 'text-blue-300 underline' : ''}`}>Accueil</a></li>
        <li><a href="#about" className={`hover:text-blue-300 ${activeSection === 'about' ? 'text-blue-300 underline' : ''}`}>À propos</a></li>
        <li><a href="#projects" className={`hover:text-blue-300 ${activeSection === 'projects' ? 'text-blue-300 underline' : ''}`}>Projets</a></li>
        <li><a href="#contact" className={`hover:text-blue-300 ${activeSection === 'contact' ? 'text-blue-300 underline' : ''}`}>Contact</a></li>
      </ul>
    </motion.nav>
  );
}

export default Header;