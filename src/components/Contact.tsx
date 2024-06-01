import React, { useRef, useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    if (form.current) {
      const formData = new FormData(form.current);
      const name = formData.get('name')?.toString().trim();
      const service = formData.get('service')?.toString().trim();
      const message = formData.get('message')?.toString().trim();
      setIsFormValid(!!name && !!service && !!message);
    }
  };

  const sendWhatsAppMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid) {
      setIsSubmitting(true);

      if (form.current) {
        const formData = new FormData(form.current);
        const name = formData.get('name')?.toString().trim();
        const service = formData.get('service')?.toString().trim();
        const message = formData.get('message')?.toString().trim();
        const text = `Hola, soy ${name}. Estoy interesado en el servicio de ${service}. Información: ${message}`;

        setTimeout(() => {
          window.open(`https://wa.me/529971452693?text=${text}`, '_blank');
          setIsSubmitting(false);
        }, 2000); // Simulación de envío
      }
    }
  };

  return (
    <section id="contact" className="py-8 bg-gradient-to-r from-green-200 to-blue-200 text-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-extrabold text-center mb-8" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Contáctame
        </motion.h2>
        <motion.form 
          ref={form} 
          onSubmit={sendWhatsAppMessage} 
          className="bg-white p-4 rounded-lg shadow-lg space-y-4 text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onChange={checkFormValidity}
        >
          <div>
            <label htmlFor="name" className="block text-md font-semibold">Nombre:</label>
            <input type="text" id="name" name="name" required className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </div>
          <div>
            <label htmlFor="service" className="block text-md font-semibold">Servicio:</label>
            <select id="service" name="service" required className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="">Selecciona</option>
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
            <label htmlFor="message" className="block text-md font-semibold">Información:</label>
            <textarea id="message" name="message" required className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          </div>
          <motion.button 
            type="submit" 
            className={`w-full py-2 rounded-lg flex items-center justify-center transition duration-300 ${isFormValid ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-400 text-gray-200'}`}
            whileHover={{ scale: isFormValid ? 1.05 : 1 }}
            whileTap={{ scale: isFormValid ? 0.95 : 1 }}
            animate={isSubmitting ? { scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 0.5 }}
            disabled={!isFormValid}
          >
            <FaWhatsapp className="mr-1" size={16} /> {isSubmitting ? "Enviando..." : "Enviar WhatsApp"}
          </motion.button>
        </motion.form>
        <div className="mt-8 flex flex-col items-center text-center">
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <a href="mailto:jesus.duran@example.com?subject=Consulta" className="flex items-center">
              <FaEnvelope className="inline-block mr-2" /> <span>jesus.duran@example.com</span>
            </a>
          </motion.div>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <a href="tel:+529971452693" className="flex items-center">
              <FaPhone className="inline-block mr-2" /> <span>+52 997 145 2693</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
