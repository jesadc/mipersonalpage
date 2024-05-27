import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'src/assets/images/Dominar400.jpg',
  'src/assets/images/fondopaginaweb.jpg',
  'src/assets/images/trofeoreginal.jpeg',
];

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia de imagen cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <AnimatePresence>
        {images.map((image, index) => (
          index === currentImage && (
            <motion.div
              key={image}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          )
        ))}
      </AnimatePresence>
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="p-8 rounded-lg text-white text-center max-w-lg mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-5xl font-bold">Bienvenido</h1>
        <p className="mt-4 text-xl">Soy Jesús Durán, ingeniero en sistemas computacionales</p>
      </motion.div>
    </section>
  );
};

export default Home;
