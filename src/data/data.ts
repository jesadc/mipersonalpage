export const services = [
  {
      name: 'Venta e instalación de sistemas de punto de venta',
      roles: ['Restaurante', 'Tienda', 'Farmacia', 'Otro'],
      fields: ['Nombre del cliente', 'Nombre del negocio', 'Número de terminales necesarias', 'Requerimientos específicos del sistema'],
      price: 1200,
      unit: 'terminal'
  },
  {
      name: 'Soporte técnico integral',
      roles: ['Empresa', 'Escuela', 'Clínica', 'Otro'],
      fields: ['Nombre del cliente', 'Nombre de la empresa/institución', 'Número de dispositivos para el soporte', 'Meses que requiere soporte'],
      price: 3000,
      unit: 'mes'
  },
  {
      name: 'Venta y reparación de equipos de cómputo',
      roles: ['Hogar', 'Oficina', 'Empresa', 'Otro'],
      fields: ['Nombre del cliente', 'Marca del equipo', 'Modelo del equipo', 'Problema específico', 'Requerimientos adicionales'],
      needsWhatsApp: true,
      unit: 'equipo'
  },
  {
      name: 'Venta e instalación de servidores locales para empresas',
      roles: ['Pequeña Empresa', 'Mediana Empresa', 'Corporación', 'Otro'],
      fields: ['Nombre del cliente', 'Nombre de la empresa', 'Número de servidores necesarios', 'Especificaciones del servidor', 'Requerimientos específicos'],
      price: 10000,
      unit: 'servidor'
  },
  {
      name: 'Atención personalizada para empresas, clínicas y otros sectores',
      roles: ['Empresa', 'Clínica', 'Institución', 'Otro'],
      fields: ['Nombre del cliente', 'Tipo de atención requerida', 'Descripcion de la actividad requerida'],
      price: 4000,
      unit: 'servicio'
  },
  {
      name: 'Gestión y capacitaciones para el personal',
      roles: ['Empresa', 'Institución', 'Escuela', 'Otro'],
      fields: ['Nombre del cliente', 'Nombre de la empresa/institución', 'Número de empleados a capacitar', 'Temas de capacitación', 'Duración de la capacitación', 'Descripcion de las capacitaciones que necesita'],
      price: 1500,
      unit: 'persona'
  },
  {
      name: 'Creación de páginas web profesionales',
      roles: ['Negocio', 'Profesional Independiente', 'Institución', 'Otro'],
      fields: ['Nombre del cliente', 'Nombre del negocio o persona', 'Objetivo de la página web', 'Número de páginas o secciones', 'Funcionalidades específicas', 'Requerimientos de diseño'],
      price: 5000,
      unit: 'página'
  },
];
