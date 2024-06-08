import React, { useState } from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500   text-white p-4 shadow-lg fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer"
        >
          IJD SYSTEMAS
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex space-x-4 transition-all duration-700 ease-in-out transform ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } md:opacity-100 md:max-h-full md:transform-none md:flex-row flex-col md:static absolute bg-gradient-to-r from-green-400 to-blue-500 md:bg-none w-full md:w-auto left-0 top-16 md:top-auto p-4 md:p-0 overflow-hidden`}
        >
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="block py-2 md:py-0 hover:text-yellow-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block py-2 md:py-0 hover:text-yellow-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="block py-2 md:py-0 hover:text-yellow-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="block py-2 md:py-0 hover:text-yellow-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Portafolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block py-2 md:py-0 hover:text-yellow-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
