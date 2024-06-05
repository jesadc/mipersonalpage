import React from 'react';
import mosomotImage from '../assets/mosomot2.jpg';
import PtoVentaImage from '../assets/punto de venta.jpg';
import DesarolloImage from '../assets/desarrollo2.jpg';
import automatizacionImage from '../assets/automatizacion2.jpg';
import infrestructuraImage from '../assets/servidores2.jpg';
import ConsultoriaImage from '../assets/consultoria3.jpg';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'MOSOMOT',
    description: 'Gané el primer lugar en INNOVATECNM 2022 con el desarrollo un sistema innovador para motocicletas.',
    shortDescription: 'Gané el primer lugar en INNOVATECNM 2022.',
    imageUrl: mosomotImage,
  },
  {
    title: 'Sistema de Punto de Venta',
    description: 'Diseño e implemento sistemas de punto de venta personalizados para múltiples negocios.',
    shortDescription: 'Diseño sistemas de punto de venta.',
    imageUrl: PtoVentaImage,
  },
  {
    title: 'Desarrollo de Aplicaciones',
    description: 'Creo varias aplicaciones móviles y web utilizando tecnologías modernas como React, TypeScript y Tailwind CSS.',
    shortDescription: 'Creo aplicaciones móviles y web.',
    imageUrl: DesarolloImage,
  },
  {
    title: 'Automatización de Procesos Empresariales',
    description: 'Implemento soluciones de automatización para procesos empresariales, mejorando la eficiencia en diversas organizaciones.',
    shortDescription: 'Automatización para empresas.',
    imageUrl: automatizacionImage,
  },
  {
    title: 'Infraestructura de Servidores',
    description: 'Configuro y mantengo infraestructuras de servidores locales y en la nube para varias empresas.',
    shortDescription: 'Mantengo infraestructuras de servidores.',
    imageUrl: infrestructuraImage,
  },
  {
    title: 'Consultoría Tecnológica',
    description: 'Ofrezco servicios de consultoría tecnológica a empresas y startups, ayudándolas a alcanzar sus objetivos tecnológicos con soluciones innovadoras.',
    shortDescription: 'Consultoría tecnológica para empresas.',
    imageUrl: ConsultoriaImage,
  },
];

const Portfolio: React.FC = () => {
  return (
    <motion.section 
      id="portfolio" 
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">Portafolio</h2>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img src={project.imageUrl} alt={project.title} className="w-full h-32 sm:h-48 object-cover" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-justify text-xs sm:text-sm md:hidden">{project.shortDescription}</p>
                <p className="text-gray-600 text-justify text-xs sm:text-sm hidden md:block">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
