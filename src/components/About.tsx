import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaUniversity, FaTools, FaCloud, FaDesktop, FaLanguage, FaLightbulb, FaDatabase, FaAward, FaFacebook, FaYoutube, FaNewspaper, FaLink } from 'react-icons/fa';
import profileImage from '../assets/perfil.jpg'; // Asegúrate de que la ruta sea correcta

const About: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.section 
      id="about" 
      className="p-6 sm:p-8 bg-gradient-to-r from-gray-100 to-gray-50"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-4xl sm:text-5xl font-extrabold mb-10 sm:mb-12 text-center text-gray-800"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Sobre mí
        </motion.h2>
        <div className="flex flex-col items-center mb-8">
          <motion.div 
            className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border-4 sm:border-8 p-1 bg-gradient-to-r from-green-400 to-blue-500 shadow-xl mb-6 sm:mb-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={profileImage} alt="Jesús Durán" className="w-full h-full rounded-full object-cover" />
          </motion.div>
          <motion.p 
            className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            A lo largo de mi carrera profesional, he destacado en concursos de tecnología ganando medallas de oro y plata. En octubre de 2022, obtuve el 1er lugar en la categoría automotriz con el proyecto MOSOMOT en un evento nacional celebrado en Durango. 
            <br /> Me apasiona el desarrollo de aplicaciones y siempre estoy aprendiendo nuevas técnicas y herramientas para el desarrollo de software.
          </motion.p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center text-gray-800">
              <FaUniversity className="mr-2 sm:mr-3 text-blue-500" /> Educación
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <strong>Ingeniería En Sistemas Computacionales</strong><br/>
              Instituto Tecnológico Superior Del Sur Del Estado De Yucatán, Oxkutzcab, Yuc.<br/>
              Agosto 2018 - Julio 2023 <br /><br />
              <strong>Especialidad</strong>
              <br/>
              Ingenieria De Software<br/> 
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center text-gray-800">
              <FaTools className="mr-2 sm:mr-3 text-green-500" /> Habilidades
            </h3>
            <div className="grid grid-cols-2 gap-4 text-base sm:text-lg">
              {[
                { icon: <FaLightbulb className="mr-2 text-yellow-500 text-lg sm:text-xl md:text-2xl" />, label: 'Pruebas de software' },
                { icon: <FaCloud className="mr-2 text-blue-500 text-lg sm:text-xl md:text-2xl" />, label: 'Cloud' },
                { icon: <FaDesktop className="mr-2 text-gray-500 text-lg sm:text-xl md:text-2xl" />, label: 'Ensamblaje' },
                { icon: <FaLanguage className="mr-2 text-red-500 text-lg sm:text-xl md:text-2xl" />, label: 'Inglés' },
                { icon: <FaLightbulb className="mr-2 text-yellow-500 text-lg sm:text-xl md:text-2xl" />, label: 'Solución de problemas' },
                { icon: <FaTools className="mr-2 text-green-500 text-lg sm:text-xl md:text-2xl" />, label: 'Desarrollo de software' },
                { icon: <FaDesktop className="mr-2 text-gray-500 text-lg sm:text-xl md:text-2xl" />, label: 'Gestión de puntos de venta' },
                { icon: <FaDesktop className="mr-2 text-gray-500 text-lg sm:text-xl md:text-2xl" />, label: 'Hardware de computadora' },
                { icon: <FaDatabase className="mr-2 text-purple-500 text-lg sm:text-xl md:text-2xl" />, label: 'Administración de base de datos' }
              ].map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skill.icon} 
                  <span className="font-medium text-xs sm:text-sm md:text-base">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center text-gray-800">
              <FaMedal className="mr-2 sm:mr-3 text-yellow-500" /> Reconocimientos
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <strong>Primer lugar en la categoría automotriz</strong> - Evento Nacional INNOVATECNM 2022, octubre 2022<br/>
              <strong>Medalla de plata</strong> - Infomatrix Latinoamérica 2022, abril 2022
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center text-gray-800">
              <FaAward className="mr-2 sm:mr-3 text-blue-500" /> Enlaces
            </h3>
            <ul className="list-disc w-min text-base sm:text-lg text-blue-500 space-y-2">
              {[
                {
                  label: 'Facebook',
                  url: 'https://www.facebook.com/jesus.durancamara',
                  icon: <FaFacebook className="w-6 h-6 mr-2" />
                },
                {
                  label: 'YouTube',
                  url: 'https://www.youtube.com/channel/UCLh5uMp9ElVUh0mACuyCF1A',
                  icon: <FaYoutube className="w-6 h-6 mr-2" />
                },
                {
                  label: 'Prensa',
                  url: 'https://www.yucatan.com.mx/yucatan/2022/10/23/el-itssy-presente-en-justa-356016.html',
                  icon: <FaNewspaper className="w-6 h-6 mr-2" />
                },
                {
                  label: 'TecNM',
                  url: 'https://www.tecnm.mx/?vista=noticia&id=2931',
                  icon: <FaLink className="w-6 h-6 mr-2" />
                }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                    {link.icon}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
