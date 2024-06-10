import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Project } from '../data/projectsData';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  project: Project;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, project }) => {
  useEffect(() => {
    const body = document.querySelector('body');
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (show) {
      body?.classList.add('overflow-hidden');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      body?.classList.remove('overflow-hidden');
    }

    return () => {
      body?.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.97, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageHoverVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
      boxShadow: '0px 0px 20px rgba(66, 153, 225, 0.6)', // Efecto de destello
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={backdropVariants}
    >
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-90"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={backdropVariants}
      />
      <motion.div
        className="relative bg-slate-200 text-black rounded-2xl shadow-2xl w-full max-w-4xl mx-4 sm:mx-6 p-6 z-10 overflow-auto border-4 border-transparent"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        style={{ maxHeight: '90vh', borderImageSlice: 1 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-300 z-20">
          <FaTimes size={24} />
        </button>
        <div className="relative z-10">
          <motion.h2
            className="text-4xl font-extrabold mb-6 text-center text-gray-800"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            {project.title}
          </motion.h2>
          <div className="flex flex-col justify-center items-center md:flex-row gap-6 mb-6">
            <motion.div
              className="md:w-1/2 bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-2xl"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto rounded-2xl shadow-lg bg-slate-50"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2 overflow-auto"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              {project.detailedDescription.map((paragraph, index) => (
                <motion.p key={index} className="mb-4 text-lg text-gray-700 leading-relaxed" variants={textVariants}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
          <motion.h3
            className="text-3xl font-semibold mb-4 text-center text-gray-800"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Banco de imágenes
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            {project.additionalImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden"
                whileHover="hover"
                variants={imageHoverVariants}
              >
                <img
                  src={image}
                  alt={`${project.title} ${index}`}
                  className="w-full h-40 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
