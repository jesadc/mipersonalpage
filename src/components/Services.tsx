import React from 'react';
import { FaDesktop, FaTools, FaServer, FaClinicMedical, FaUserTie, FaCogs, FaClipboardList, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      id="services" 
      className="p-8 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Servicios</h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center" variants={itemVariants}>
            <FaDesktop className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Punto de Venta</h3>
            <p className="text-gray-600 text-xs md:text-sm">Venta e instalación de sistemas de punto de venta</p>
          </motion.div>
          <motion.div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center" variants={itemVariants}>
            <FaTools className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Soporte Técnico</h3>
            <p className="text-gray-600 text-xs md:text-sm">Soporte técnico integral</p>
          </motion.div>
          <motion.div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center" variants={itemVariants}>
            <FaDesktop className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Reparación</h3>
            <p className="text-gray-600 text-xs md:text-sm">Venta y reparación de equipos de cómputo</p>
          </motion.div>
          <motion.div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center" variants={itemVariants}>
            <FaServer className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Servidores</h3>
            <p className="text-gray-600 text-xs md:text-sm">Venta e instalación de servidores locales para empresas</p>
          </motion.div>
          <motion.div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center" variants={itemVariants}>
            <FaClinicMedical className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Atención Personalizada</h3>
            <p className="text-gray-600 text-xs md:text-sm">Atención personalizada para empresas, clínicas y otros sectores</p>
          </motion.div>
          <motion.div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center" variants={itemVariants}>
            <FaUserTie className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Capacitaciones</h3>
            <p className="text-gray-600 text-xs md:text-sm">Gestión y capacitaciones para el personal</p>
          </motion.div>
          <motion.div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center" variants={itemVariants}>
            <FaCogs className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Automatización</h3>
            <p className="text-gray-600 text-xs md:text-sm">Automatización de procesos empresariales</p>
          </motion.div>
          <motion.div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center" variants={itemVariants}>
            <FaClipboardList className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Cotizaciones</h3>
            <p className="text-gray-600 text-xs md:text-sm">Servicios de cotización personalizados</p>
          </motion.div>
          <motion.div className="bg-white p-4 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center" variants={itemVariants}>
            <FaGlobe className="text-green-500 mb-2 md:mb-4 text-3xl md:text-4xl" />
            <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">Páginas Web</h3>
            <p className="text-gray-600 text-xs md:text-sm">Creación de páginas web profesionales</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
