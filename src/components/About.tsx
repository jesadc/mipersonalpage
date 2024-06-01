import React from 'react';
import { FaMedal, FaUniversity, FaTools, FaCloud, FaDesktop, FaLanguage, FaLightbulb, FaDatabase, FaAward } from 'react-icons/fa';
import profileImage from '../assets/perfil.jpg'; // Asegúrate de que la ruta sea correcta

const About: React.FC = () => {
  return (
    <section id="about" className="p-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-center">Sobre mí</h2>
        <div className="flex flex-col items-center">
  <div className="w-48 h-48 rounded-full border-4 p-1 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg mb-6">
    <img src={profileImage} alt="Jesús Durán" className="w-full h-full rounded-full object-cover" />
  </div>
  <p className="text-lg mb-6 text-gray-700 leading-relaxed text-justify hidden md:block">
    A lo largo de mi carrera profesional, he destacado en concursos de tecnología ganando medallas de oro y plata. En octubre de 2022, obtuve el 1er lugar en la categoría automotriz con el proyecto MOSOMOT en un evento nacional celebrado en Durango. Me apasiona el desarrollo de aplicaciones y siempre estoy aprendiendo nuevas técnicas y herramientas para el desarrollo de software.
  </p>
  <p className="text-lg mb-6 text-gray-700 leading-relaxed text-justify md:hidden">
    He destacado en concursos de tecnología, ganando medallas de oro y plata. En octubre de 2022, obtuve el 1er lugar en la categoría automotriz con el proyecto MOSOMOT. Me apasiona el desarrollo de aplicaciones y siempre estoy aprendiendo nuevas técnicas y herramientas.
  </p>
</div>
        <h3 className="text-3xl font-bold mb-4 flex items-center">
          <FaUniversity className="mr-2 text-blue-500" /> Educación
        </h3>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed text-justify hidden md:block">
          <strong>Licenciatura en Ingeniería de Software</strong><br/>
          Instituto Tecnológico Superior Del Sur Del Estado De Yucatán, Oxkutzcab, Yuc.<br/>
          Agosto 2018 - Julio 2023
        </p>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed text-justify md:hidden">
          <strong>Ingeniería de Software</strong><br/>
          Tec. Sur Yucatán, Oxkutzcab<br/>
          2018 - 2023
        </p>
        <h3 className="text-3xl font-bold mb-4 flex items-center">
          <FaTools className="mr-2 text-green-500" /> Habilidades
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg mb-6">
          <div className="flex items-center bg-white p-4 rounded shadow-md">
            <FaLightbulb className="mr-2 text-yellow-500 text-xl md:text-2xl" /> 
            <span className="font-medium text-xs md:text-sm">Pruebas de software</span>
          </div>
          <div className="flex items-center bg-white p-4 rounded shadow-md">
            <FaCloud className="mr-2 text-blue-500 text-xl md:text-2xl" /> 
            <span className="font-medium text-xs md:text-sm">Cloud</span>
          </div>
          <div className="flex items-center bg-white p-4 rounded shadow-md">
            <FaDesktop className="mr-2 text-gray-500 text-xl md:text-2xl" /> 
            <span className="font-medium text-xs md:text-sm">Ensamblaje</span>
          </div>
          <div className="flex items-center bg-white p-4 rounded shadow-md">
            <FaLanguage className="mr-2 text-red-500 text-xl md:text-2xl" /> 
            <span className="font-medium text-xs md:text-sm">Inglés</span>
          </div>
          <div className="flex items-center bg-white p-4 rounded shadow-md">
            <FaLightbulb className="mr-2 text-yellow-500 text-xl md:text-2xl" /> 
            <span className="font-medium text-xs md:text-sm">Solución de problemas</span>
          </div>
          <div className="flex items-center bg-white p-4 rounded shadow-md">
            <FaTools className="mr-2 text-green-500 text-xl md:text-2xl" /> 
            <span className="font-medium text-xs md:text-sm">Desarrollo de software</span>
          </div>
          <div className="flex items-center bg-white p-4 rounded shadow-md">
            <FaDesktop className="mr-2 text-gray-500 text-xl md:text-2xl" /> 
            <span className="font-medium text-xs md:text-sm">Gestión de puntos de venta</span>
          </div>
          <div className="flex items-center bg-white p-4 rounded shadow-md">
            <FaDesktop className="mr-2 text-gray-500 text-xl md:text-2xl" /> 
            <span className="font-medium text-xs md:text-sm">Hardware de computadora</span>
          </div>
          <div className="flex items-center bg-white p-4 rounded shadow-md">
            <FaDatabase className="mr-2 text-purple-500 text-xl md:text-2xl" /> 
            <span className="font-medium text-xs md:text-sm">Administración de base de datos</span>
          </div>
        </div>
        <h3 className="text-3xl font-bold mb-4 flex items-center">
          <FaMedal className="mr-2 text-yellow-500" /> Reconocimientos
        </h3>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed text-justify hidden md:block">
          <strong>Primer lugar en la categoría automotriz</strong> - Evento Nacional INNOVATECNM 2022, octubre 2022<br/>
          <strong>Medalla de plata</strong> - Infomatrix Latinoamérica 2022, abril 2022
        </p>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed text-justify md:hidden">
          <strong>1er lugar automotriz</strong> - INNOVATECNM 2022<br/>
          <strong>Medalla de plata</strong> - Infomatrix Latinoamérica 2022
        </p>
        <h3 className="text-3xl font-bold mb-4 flex items-center">
          <FaAward className="mr-2 text-blue-500" /> Enlaces
        </h3>
        <ul className="list-disc list-inside text-lg text-blue-500">
          <li><a href="https://www.facebook.com/jesus.durancamara" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
          <li><a href="https://www.youtube.com/channel/UCLh5uMp9ElVUh0mACuyCF1A" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a></li>
          <li><a href="https://www.yucatan.com.mx/yucatan/2022/10/23/el-itssy-presente-en-justa-356016.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Artículo de prensa</a></li>
          <li><a href="https://www.tecnm.mx/?vista=noticia&id=2931" target="_blank" rel="noopener noreferrer" className="hover:underline">Noticia en TecNM</a></li>
        </ul>
      </div>
    </section>
  );
};

export default About;
