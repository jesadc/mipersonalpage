import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projects, { Project } from '../data/projectsData';
import Modal from './Modal';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      id="portfolio" 
      className="py-16 bg-gray-50"
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
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              variants={itemVariants}
              onClick={() => handleOpenModal(project)}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img src={project.imageUrl} alt={`Imagen del proyecto ${project.title}`} className="w-full h-32 sm:h-48 object-cover" />
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
      {selectedProject && (
        <Modal show={selectedProject !== null} onClose={handleCloseModal} project={selectedProject} />
      )}
    </motion.section>
  );
};

export default Portfolio;