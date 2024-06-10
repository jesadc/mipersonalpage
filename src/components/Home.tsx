import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoIJD from '../assets/LogoIJD.jpg';
import mac2 from '../assets/mac2.jpg';
import durango7 from '../assets/durango7.jpg';
import durango3 from '../assets/durango3.jpg';
import durango2 from '../assets/durango2.jpg';
import durango5 from '../assets/durango5.jpg';
import durango6 from '../assets/durango6.jpg';
import guadalajara1 from '../assets/guadalajara1.jpg';
import guadalajara2 from '../assets/guadalajara2.jpg';

const images = [
  durango3,
  logoIJD,
  durango7,
  mac2,
  durango2,
  durango5,
  durango6,
  guadalajara1,
  guadalajara2
];

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-900">
      <AnimatePresence>
        {images.map((image, index) => (
          index === currentImage && (
            <motion.div
              key={image}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 2 }}
            />
          )
        ))}
      </AnimatePresence>
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="p-8 rounded-lg text-white text-justify max-w-2xl mx-auto relative z-10 bg-opacity-55 bg-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
 <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          ¡Hola, Bienvenidos!
        </h1>        <p className="mt-4 text-2xl sm:text-3xl font-light leading-relaxed">Mi nombre es <span className="font-semibold">Jesús Durán Cámara</span>, un apasionado <span className="font-semibold">ingeniero en sistemas computacionales</span>. Me dedico a transformar ideas en realidades tecnológicas innovadoras.</p>
        <p className="mt-4 text-xl sm:text-2xl leading-relaxed">Explora mi sitio para conocer más sobre mis servicios y proyectos.</p>
      </motion.div>
    </section>
  );
};

export default Home;
