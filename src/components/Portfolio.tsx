import React from 'react';
import mosomotImage from '../assets/images/mosomot2.jpg';
import PtoVentaImage from '../assets/images/punto de venta.jpg';
import DesarolloImage from '../assets/images/desarrollo2.jpg';
import automatizacionImage from '../assets/images/automatizacion2.jpg';
import infrestructuraImage from '../assets/images/servidores2.jpg';
import ConsultoriaImage from '../assets/images/consultoria3.jpg';

const projects = [
  {
    title: 'MOSOMOT',
    description: 'Proyecto galardonado con el primer lugar en la categoría automotriz en INNOVATECNM 2022. Desarrollé un sistema innovador para vehículos automotrices, destacando por su eficiencia y tecnología de punta.',
    imageUrl: mosomotImage, // Reemplazar con una URL real de imagen
  },
  {
    title: 'Sistema de Punto de Venta',
    description: 'Diseñé e implementé sistemas de punto de venta personalizados para múltiples negocios, mejorando significativamente la eficiencia operativa y la experiencia del cliente.',
    imageUrl: PtoVentaImage, // Reemplazar con una URL real de imagen
  },
  {
    title: 'Desarrollo de Aplicaciones',
    description: 'He creado varias aplicaciones móviles y web utilizando tecnologías modernas como React, TypeScript y Tailwind CSS, enfocándome en la usabilidad y el diseño responsivo.',
    imageUrl: DesarolloImage, // Reemplazar con una URL real de imagen
  },
  {
    title: 'Automatización de Procesos Empresariales',
    description: 'Implementé soluciones de automatización para procesos empresariales, reduciendo costos operativos y mejorando la eficiencia en diversas organizaciones.',
    imageUrl: automatizacionImage, // Reemplazar con una URL real de imagen
  },
  {
    title: 'Infraestructura de Servidores',
    description: 'Configuré y mantuve infraestructuras de servidores locales y en la nube para varias empresas, garantizando alta disponibilidad y seguridad.',
    imageUrl: infrestructuraImage, // Reemplazar con una URL real de imagen
  },
  {
    title: 'Consultoría Tecnológica',
    description: 'Ofrecí servicios de consultoría tecnológica a empresas y startups, ayudándolas a definir y alcanzar sus objetivos tecnológicos con soluciones innovadoras.',
    imageUrl: ConsultoriaImage, // Reemplazar con una URL real de imagen
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="p-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Portafolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-lg text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
