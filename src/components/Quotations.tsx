import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { services } from '../data';
import SelectService from './SelectServices';
import SelectRole from './SelectRole';
import InputField from './InputField';
import GeneratePDF from './GeneratePDF';

const Quotations: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [customRole, setCustomRole] = useState<string>('');
  const [details, setDetails] = useState<{ [key: string]: string }>({});

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
    setSelectedRole('');
    setCustomRole('');
    setDetails({});
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
    if (e.target.value !== 'Otro') {
      setCustomRole('');
    }
  };

  const handleCustomRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomRole(e.target.value);
  };

  const handleDetailChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDetails(prev => ({ ...prev, [key]: e.target.value }));
  };

  const getRoles = () => {
    const service = services.find(s => s.name === selectedService);
    return service ? service.roles : [];
  };

  const getFields = () => {
    const service = services.find(s => s.name === selectedService);
    return service ? service.fields : [];
  };

  const getPlaceholders = (field: string) => {
    switch (field) {
      case 'Nombre del cliente':
        return 'Ej. Juan Pérez';
      case 'Nombre del negocio':
      case 'Nombre del negocio o persona':
      case 'Nombre de la empresa':
      case 'Nombre de la empresa/institución':
        return 'Ej. Vida Sana';
      case 'Objetivo de la página web':
        return '¿Por qué necesita la pagina web?';
      case 'Funcionalidades específicas':
        return 'LandingPage/Acciones/Menú/otro';
      case 'Número de terminales necesarias':
      case 'Número de dispositivos para el soporte':
      case 'Número de servidores necesarios':
      case 'Número de empleados a capacitar':
      case 'Número de páginas o secciones':
        return 'Ej. 3';
      case 'Requerimientos específicos':
        return 'Mencione alguna caracteristicas especial para su servidor / No.';
      case 'Requerimientos adicionales':
        return 'Descripcion/NO.';
      case 'Meses que requiere soporte':
        return 'Ej. 3 meses';
      case 'Requerimientos específicos del sistema':
        return 'Mencione requerimientos especiales / No.';
      case 'Especificaciones del servidor':
        return 'Marca en especial, capacidad de almacenamiento / No.';
      case 'Tipo de atención requerida':
        return 'Hardware/Software/Capacitación';
      case 'Descripcion de la actividad requerida':
        return 'Describe que necesitas.';
      case 'Temas de capacitación':
      case 'Duración de la capacitación':
        return 'Dias/Semanas/Meses';
      case 'Procesos a automatizar':
      case 'Descripcion de las capacitaciones que necesita':
        return 'Describe el tipo de capacitacion';
      case 'Objetivos de la automatización':
        return 'Describa el objetivo de la capacitacion';
      case 'Descripción del servicio requerido':
      case 'Requerimientos de diseño':
        return 'Proporcione detalles específicos';
      case 'Marca del equipo':
        return 'Ej. Dell';
      case 'Modelo del equipo':
        return 'Ej. Inspiron 15';
      case 'Problema específico':
        return 'Describa el problema específico';
      case 'Presupuesto estimado':
        return 'Ej. 10000';
      default:
        return '';
    }
  };

  const isWhatsAppRequired = (): boolean => {
    const service = services.find(s => s.name === selectedService);
    return !!(service && service.needsWhatsApp);
  };

  const getServicePrice = () => {
    const service = services.find(s => s.name === selectedService);
    return service && service.price ? service.price : 0;
  };

  const getServiceUnit = () => {
    const service = services.find(s => s.name === selectedService);
    return service && service.unit ? service.unit : '';
  };

  const sendWhatsAppMessage = () => {
    let message = `Hola, estoy interesado en el servicio de ${selectedService} para ${selectedRole === 'Otro' ? customRole : selectedRole}.`;
    getFields().forEach(field => {
      message += `\n${field}: ${details[field] || ''}`;
    });
    if (!isWhatsAppRequired()) {
      message += `\nTotal: $${getServicePrice()}`;
    }
    window.open(`https://wa.me/529996431444?text=${encodeURIComponent(message)}`, '_blank');
  };

  const isFormComplete = () => {
    if (!selectedService || !selectedRole || (selectedRole === 'Otro' && !customRole)) {
      return false;
    }
    const fields = getFields();
    for (const field of fields) {
      if (!details[field]) {
        return false;
      }
    }
    return true;
  };

  return (
    <motion.section 
      id="contact" 
      className="py-8 bg-gradient-to-r from-green-400 to-blue-500 opacity-75 text-gray-900"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-extrabold text-center mb-8" 
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          Cotizaciones
        </motion.h2>
        <motion.div 
          className="bg-white p-4 rounded-lg shadow-lg space-y-4 text-gray-800"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <SelectService services={services} selectedService={selectedService} onServiceChange={handleServiceChange} />
          {selectedService && (
            <SelectRole 
              roles={getRoles()} 
              selectedRole={selectedRole} 
              customRole={customRole} 
              onRoleChange={handleRoleChange} 
              onCustomRoleChange={handleCustomRoleChange} 
            />
          )}
          {getFields().map(field => (
            <InputField 
              key={field} 
              label={field} 
              value={details[field] || ''} 
              onChange={handleDetailChange(field)} 
              placeholder={getPlaceholders(field)}
            />
          ))}
          <GeneratePDF 
            selectedService={selectedService}
            selectedRole={selectedRole}
            customRole={customRole}
            details={details}
            servicePrice={getServicePrice()}
            serviceUnit={getServiceUnit()}
            needsWhatsApp={isWhatsAppRequired()}
            isFormComplete={isFormComplete()}
          />
          <motion.button 
            type="button" 
            onClick={sendWhatsAppMessage}
            className={`w-full py-2 rounded-lg flex items-center justify-center transition duration-300 bg-green-500 text-white hover:bg-green-600 mt-4 ${!isFormComplete() && 'opacity-50 cursor-not-allowed'}`}
            whileHover={isFormComplete() ? { scale: 1.05 } : {}}
            whileTap={isFormComplete() ? { scale: 0.95 } : {}}
            disabled={!isFormComplete()}
          >
            <FaWhatsapp className="mr-1" size={16} /> Enviar Cotización por WhatsApp
          </motion.button>
        </motion.div>
        <strong className=' items-center justify-center flex  w-full my-8'>Contactame</strong>
        <div className="mt-8 flex items-center justify-center space-x-6 text-center">
          <motion.div 
            className="mb-4"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <a href="mailto:jesadc571@gmail.com?subject=Consulta" className="flex items-center">
              <FaEnvelope className="inline-block mr-2" /> <span>jesadc571@gmail.com</span>
            </a>
          </motion.div>
          <motion.div 
            className="mb-4"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <a href="tel:+529971452693" className="flex items-center">
              <FaPhone className="inline-block mr-2" /> <span>+52 9996431444</span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Quotations;
