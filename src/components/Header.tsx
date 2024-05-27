import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 shadow-lg fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer"
        >
          IJD Sistemas
        </Link>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-yellow-300 cursor-pointer"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-yellow-300 cursor-pointer"
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hover:text-yellow-300 cursor-pointer"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="hover:text-yellow-300 cursor-pointer"
            >
              Portafolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-yellow-300 cursor-pointer"
            >
              Contacto
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
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
      </nav>
    </header>
  );
};

export default Header;
