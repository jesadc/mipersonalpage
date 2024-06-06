// Modal.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../projectsData';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  project: Project;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, project }) => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (show) {
      body?.classList.add('overflow-hidden');
    } else {
      body?.classList.remove('overflow-hidden');
    }
    
    return () => {
      body?.classList.remove('overflow-hidden');
    };
  }, [show]);

  if (!show) {
    return null;
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-hidden"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      <motion.div 
        className="bg-white rounded-lg shadow-lg max-w-lg w-full h-3/4 overflow-y-auto relative p-4 mx-4" // Agregando mx-4 para márgenes horizontales
        variants={modalVariants}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <FaTimes size={24} />
        </button>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          {project.detailedDescription.map((paragraph, index) => (
            <p key={index} className="mb-2">{paragraph}</p>
          ))}
          <img src={project.imageUrl} alt={project.title} className="mb-2 w-full h-auto modal-image" />
          <div className="grid grid-cols-2 gap-2">
            {project.additionalImages.map((image, index) => (
              <img key={index} src={image} alt={`${project.title} ${index}`} className="w-full h-auto modal-image" />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
