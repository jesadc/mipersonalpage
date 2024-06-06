// projectsData.ts
import mosomotImage from './assets/mosomot2.jpg';
import PtoVentaImage from './assets/punto de venta.jpg';
import DesarolloImage from './assets/desarrollo2.jpg';
import automatizacionImage from './assets/automatizacion2.jpg';
import infrestructuraImage from './assets/servidores2.jpg';
import ConsultoriaImage from './assets/consultoria3.jpg';

export interface Project {
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  additionalImages: string[];
  detailedDescription: string[]; // Cambiado a array para contener párrafos
}

const projects: Project[] = [
  {
    title: 'MOSOMOT',
    description: 'Gané el primer lugar en INNOVATECNM 2022 con el desarrollo un sistema innovador para motocicletas.',
    shortDescription: 'Gané el primer lugar en INNOVATECNM 2022.',
    imageUrl: mosomotImage,
    additionalImages: [mosomotImage, mosomotImage],
    detailedDescription: [
      'MOSOMOT es un sistema avanzado diseñado para mejorar la seguridad y la eficiencia de las motocicletas. Incluye funcionalidades como rastreo GPS, alertas en tiempo real y diagnóstico remoto del vehículo.',
      'Este proyecto no solo me permitió ganar el primer lugar en INNOVATECNM 2022, sino que también abrió puertas para futuras innovaciones en el sector automotriz.'
    ]
  },
  {
    title: 'Sistema de Punto de Venta',
    description: 'Diseño e implemento sistemas de punto de venta personalizados para múltiples negocios.',
    shortDescription: 'Diseño sistemas de punto de venta.',
    imageUrl: PtoVentaImage,
    additionalImages: [PtoVentaImage, PtoVentaImage],
    detailedDescription: [
      'Mis sistemas de punto de venta están diseñados para ser intuitivos y fáciles de usar, proporcionando herramientas esenciales para la gestión de inventario, procesamiento de ventas y generación de reportes detallados.',
      'He trabajado con una variedad de negocios, desde tiendas minoristas hasta restaurantes, adaptando cada sistema a las necesidades específicas del cliente.'
    ]
  },
  {
    title: 'Desarrollo de Aplicaciones',
    description: 'Creo varias aplicaciones móviles y web utilizando tecnologías modernas como React, TypeScript y Tailwind CSS.',
    shortDescription: 'Creo aplicaciones móviles y web.',
    imageUrl: DesarolloImage,
    additionalImages: [DesarolloImage, DesarolloImage],
    detailedDescription: [
      'En el desarrollo de aplicaciones, me enfoco en crear soluciones robustas y escalables que satisfagan las demandas del mercado actual.',
      'Utilizo las últimas tecnologías como React, TypeScript y Tailwind CSS para asegurar que mis aplicaciones sean rápidas, responsivas y fáciles de mantener.',
      'He desarrollado aplicaciones para diversas industrias, incluyendo salud, educación y comercio electrónico.'
    ]
  },
  {
    title: 'Automatización de Procesos Empresariales',
    description: 'Implemento soluciones de automatización para procesos empresariales, mejorando la eficiencia en diversas organizaciones.',
    shortDescription: 'Automatización para empresas.',
    imageUrl: automatizacionImage,
    additionalImages: [automatizacionImage, automatizacionImage],
    detailedDescription: [
      'La automatización de procesos empresariales es clave para mejorar la eficiencia y reducir los costos operativos.',
      'Mis soluciones abarcan desde la automatización de tareas administrativas hasta la integración de sistemas complejos que facilitan la toma de decisiones basada en datos.',
      'He ayudado a varias empresas a optimizar sus procesos y mejorar su productividad.'
    ]
  },
  {
    title: 'Infraestructura de Servidores',
    description: 'Configuro y mantengo infraestructuras de servidores locales y en la nube para varias empresas.',
    shortDescription: 'Mantengo infraestructuras de servidores.',
    imageUrl: infrestructuraImage,
    additionalImages: [infrestructuraImage, infrestructuraImage],
    detailedDescription: [
      'La gestión de infraestructuras de servidores es fundamental para asegurar la continuidad del negocio y la seguridad de los datos.',
      'Ofrezco servicios de configuración y mantenimiento tanto para servidores locales como en la nube, garantizando un alto rendimiento y disponibilidad.',
      'Mis soluciones incluyen la implementación de medidas de seguridad avanzadas y planes de recuperación ante desastres.'
    ]
  },
  {
    title: 'Consultoría Tecnológica',
    description: 'Ofrezco servicios de consultoría tecnológica a empresas y startups, ayudándolas a alcanzar sus objetivos tecnológicos con soluciones innovadoras.',
    shortDescription: 'Consultoría tecnológica para empresas.',
    imageUrl: ConsultoriaImage,
    additionalImages: [ConsultoriaImage, ConsultoriaImage],
    detailedDescription: [
      'Como consultor tecnológico, mi objetivo es ayudar a las empresas a aprovechar al máximo las tecnologías emergentes para mejorar sus operaciones y alcanzar sus metas estratégicas.',
      'Proporciono asesoramiento en áreas como la transformación digital, la adopción de nuevas tecnologías y la optimización de recursos tecnológicos.',
      'He trabajado con startups y grandes empresas, proporcionando soluciones personalizadas que impulsan su crecimiento.'
    ]
  },
];

export default projects;
