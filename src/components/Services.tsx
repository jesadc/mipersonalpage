import React from 'react';
import { FaDesktop, FaTools, FaServer, FaClinicMedical, FaUserTie, FaCogs, FaClipboardList, FaGlobe } from 'react-icons/fa';

const Services: React.FC = () => {
  return (
    <section id="services" className="p-8 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <FaDesktop className="text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Venta e instalación de sistemas de punto de venta</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <FaTools className="text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Soporte técnico integral</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <FaDesktop className="text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Venta y reparación de equipos de cómputo</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <FaServer className="text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Venta e instalación de servidores locales para empresas</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <FaClinicMedical className="text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Atención personalizada para empresas, clínicas y otros sectores</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <FaUserTie className="text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Gestión y capacitaciones para el personal</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <FaCogs className="text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Automatización de procesos empresariales</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <FaClipboardList className="text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Servicios de cotización personalizados</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <FaGlobe className="text-green-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Creación de páginas web profesionales</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
