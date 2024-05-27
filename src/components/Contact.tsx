import React, { useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendWhatsAppMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const name = formData.get('name');
      const service = formData.get('service');
      const message = formData.get('message');
      const text = `Hola, soy ${name}. Estoy interesado en el servicio de ${service}. Información: ${message}`;
      
      window.open(`https://wa.me/529971452693?text=${text}`, '_blank');
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contáctame</h2>
        <motion.form 
          ref={form} 
          onSubmit={sendWhatsAppMessage} 
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Nombre:</label>
            <input type="text" id="name" name="name" required className="w-full p-3 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div>
            <label htmlFor="service" className="block text-lg font-semibold text-gray-700">Servicio de interés:</label>
            <select id="service" name="service" required className="w-full p-3 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Selecciona un servicio</option>
              <option value="Venta e instalación de sistemas de punto de venta">Venta e instalación de sistemas de punto de venta</option>
              <option value="Soporte técnico integral">Soporte técnico integral</option>
              <option value="Venta y reparación de equipos de cómputo">Venta y reparación de equipos de cómputo</option>
              <option value="Venta e instalación de servidores locales para empresas">Venta e instalación de servidores locales para empresas</option>
              <option value="Atención personalizada para empresas, clínicas y otros sectores">Atención personalizada para empresas, clínicas y otros sectores</option>
              <option value="Gestión y capacitaciones para el personal">Gestión y capacitaciones para el personal</option>
              <option value="Automatización de procesos empresariales">Automatización de procesos empresariales</option>
              <option value="Servicios de cotización personalizados">Servicios de cotización personalizados</option>
              <option value="Creación de páginas web profesionales">Creación de páginas web profesionales</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Información adicional:</label>
            <textarea id="message" name="message" required className="w-full p-3 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 flex items-center justify-center transition duration-300">
            <FaWhatsapp className="mr-2" size={20} /> Enviar por WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
