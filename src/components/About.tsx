import React from 'react';
import { FaMedal, FaUniversity, FaTools, FaCloud, FaDesktop, FaLanguage, FaLightbulb, FaDatabase, FaAward } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="p-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-center">Sobre mí</h2>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          A lo largo de mi carrera profesional, he destacado en concursos de tecnología ganando medallas de oro y plata. En octubre de 2022, obtuve el 1er lugar en la categoría automotriz con el proyecto MOSOMOT en un evento nacional celebrado en Durango. Me apasiona el desarrollo de aplicaciones y siempre estoy aprendiendo nuevas técnicas y herramientas para el desarrollo de software.
        </p>
        <h3 className="text-3xl font-bold mb-4 flex items-center">
          <FaUniversity className="mr-2 text-blue-500" /> Educación
        </h3>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          <strong>Licenciatura en Ingeniería de Software</strong><br/>
          Instituto Tecnológico Superior Del Sur Del Estado De Yucatán, Oxkutzcab, Yuc.<br/>
          Agosto 2019 - Julio 2023
        </p>
        <h3 className="text-3xl font-bold mb-4 flex items-center">
          <FaTools className="mr-2 text-green-500" /> Habilidades
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg mb-6">
          <li className="flex items-center">
            <FaLightbulb className="mr-2 text-yellow-500" /> Pruebas de software
          </li>
          <li className="flex items-center">
            <FaCloud className="mr-2 text-blue-500" /> Cloud
          </li>
          <li className="flex items-center">
            <FaDesktop className="mr-2 text-gray-500" /> Ensamblaje
          </li>
          <li className="flex items-center">
            <FaLanguage className="mr-2 text-red-500" /> Inglés
          </li>
          <li className="flex items-center">
            <FaLightbulb className="mr-2 text-yellow-500" /> Solución de problemas de software
          </li>
          <li className="flex items-center">
            <FaTools className="mr-2 text-green-500" /> Desarrollo de software
          </li>
          <li className="flex items-center">
            <FaDesktop className="mr-2 text-gray-500" /> Gestión de puntos de venta
          </li>
          <li className="flex items-center">
            <FaDesktop className="mr-2 text-gray-500" /> Hardware de computadora
          </li>
          <li className="flex items-center">
            <FaDatabase className="mr-2 text-purple-500" /> Administración de base de datos
          </li>
        </ul>
        <h3 className="text-3xl font-bold mb-4 flex items-center">
          <FaMedal className="mr-2 text-yellow-500" /> Reconocimientos
        </h3>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          <strong>Primer lugar en la categoría automotriz</strong> - Evento Nacional INNOVATECNM 2022, octubre 2022<br/>
          <strong>Medalla de plata</strong> - Infomatrix Latinoamérica 2022, abril 2022
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
