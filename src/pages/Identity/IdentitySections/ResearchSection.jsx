import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ResearchSection = () => {
  const controls = useAnimation();
  const textControls = useAnimation();
  const numberControls = useAnimation();
  const sectionRef = useRef(null);

  // Variable para ajustar la sensibilidad del scroll
  const scrollSensitivity = 0.2;

  const handleScroll = () => {
    const section = sectionRef.current;
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const threshold = sectionHeight * scrollSensitivity;

      // Elemento del texto principal
      const textElement = section.querySelector('.main-text');
      const textElementTop = textElement.getBoundingClientRect().top;

      if (textElementTop < 0) {
        // Ocultar elementos cuando el texto sobrepasa el borde superior del viewport
        controls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        });
        textControls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        });
        numberControls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        });
      } else if (sectionTop < -threshold) {
        controls.start({
          scale: 0.7,
          x: 500,
          opacity: 1,
          transition: { duration: 0.5 },
        });
        textControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        });
        numberControls.start({
          opacity: 1,
          transition: { duration: 0.5 },
        });
      } else {
        controls.start({
          scale: 1,
          x: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        });
        textControls.start({
          opacity: 0,
          y: 300,
          transition: { duration: 0.5 },
        });
        numberControls.start({
          opacity: 1,
          transition: { duration: 0.5 },
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#FFFFFF]">
      <div ref={sectionRef} className="h-[250vh] w-full flex flex-col items-center justify-center">
        <motion.h1
          className="font-futura text-[14rem] md:tracking-play fixed top-24 right-[10%]"
          style={{ color: '#659FFF' }}
          animate={numberControls}
        >
          #02
        </motion.h1>
        <motion.img
          src="/img/research.svg"
          alt="Research"
          className="fixed w-[40%] top-24"
          animate={controls}
        />
        <motion.div
          className="absolute top-[40%] transform translate-x-1/2 text-black text-2xl flex flex-col items-start main-text w-1/2"
          initial={{ opacity: 0, y: 300 }}
          animate={textControls}
        >
          <h1 className="font-din text-6xl md:text-7xl tracking-custom mb-4 text-['darkblue']">RESEARCH</h1>
          <p className="font-montserrat text-sm md:text-lg mb-4 md:w-[60%]">
            Somos una empresa especialista en la gestión del abastecimiento y distribución industrial. Planificamos y gestionamos tu cadena de suministro con productos de calidad a los precios más competitivos del mercado.
          </p>
          <hr className="border border-black mb-4 md:w-[60%]" />
          <p className="font-mshtakan text-sm md:text-lg mb-4 md:w-[60%]">
            We are a company specialized in supply management and industrial distribution. We plan and manage your supply chain with quality products at the most competitive prices in the market.
          </p>
          <motion.img
            src="/img/chinese-words-black.svg"
            alt="Research"
            className='w-full md:w-[70%]'
            initial={{ opacity: 0, y: 300 }}
            animate={textControls}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchSection;
