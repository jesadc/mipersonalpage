import React from 'react';
import { FaDesktop, FaTools, FaServer, FaClinicMedical, FaUserTie, FaCogs, FaClipboardList, FaGlobe } from 'react-icons/fa';

const Services: React.FC = () => {
  return (
    <section id="services" className="p-8 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Servicios</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <FaDesktop className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Punto de Venta</h3>
            <p className="text-gray-600 text-xs md:text-sm">Venta e instalación de sistemas de punto de venta</p>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <FaTools className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Soporte Técnico</h3>
            <p className="text-gray-600 text-xs md:text-sm">Soporte técnico integral</p>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <FaDesktop className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Reparación</h3>
            <p className="text-gray-600 text-xs md:text-sm">Venta y reparación de equipos de cómputo</p>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <FaServer className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Servidores</h3>
            <p className="text-gray-600 text-xs md:text-sm">Venta e instalación de servidores locales para empresas</p>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <FaClinicMedical className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Atención Personalizada</h3>
            <p className="text-gray-600 text-xs md:text-sm">Atención personalizada para empresas, clínicas y otros sectores</p>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <FaUserTie className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Capacitaciones</h3>
            <p className="text-gray-600 text-xs md:text-sm">Gestión y capacitaciones para el personal</p>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <FaCogs className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Automatización</h3>
            <p className="text-gray-600 text-xs md:text-sm">Automatización de procesos empresariales</p>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <FaClipboardList className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Cotizaciones</h3>
            <p className="text-gray-600 text-xs md:text-sm">Servicios de cotización personalizados</p>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <FaGlobe className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Páginas Web</h3>
            <p className="text-gray-600 text-xs md:text-sm">Creación de páginas web profesionales</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
