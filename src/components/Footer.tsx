import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2024 Powered by ISC. Jesus Durán Cámara.</p>
          <p>Todos los derechos reservados.</p>

        </div>
        <div className="flex space-x-4 text-2xl">
          <a href="https://www.facebook.com/jesus.durancamara" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/jes%C3%BAs-alberto-dur%C3%A1n-c%C3%A1mara-86573122a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/jesadc" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FaGithub />
          </a>
          
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;
