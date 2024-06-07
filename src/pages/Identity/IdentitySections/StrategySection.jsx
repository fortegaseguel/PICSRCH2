import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const IdentitySection = () => {
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
          x: -500,
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
    <div className="relative w-full min-h-screen overflow-hidden bg-[#EFD3E9]">
      <div ref={sectionRef} className="h-[250vh] w-full flex flex-col items-center justify-center">
        <motion.h1
          className="font-futura text-[14rem] md:tracking-play fixed top-24 left-[10%]"
          style={{ color: '#659FFF' }}
          animate={numberControls}
        >
          #03
        </motion.h1>
        <motion.img
          src="/img/strategy.svg"
          alt="Space Identity"
          className="fixed w-[40%] top-24"
          animate={controls}
        />
        <motion.div
          className="absolute top-[40%] left-1/2 transform -translate-x-1/2 text-black text-2xl flex flex-col items-start main-text"
          initial={{ opacity: 0, y: 300 }}
          animate={textControls}
        >
          <h1 className="font-din text-6xl md:text-7xl tracking-custom mb-4 text-black">STRATEGY</h1>
          <p className="font-montserrat text-sm md:text-lg mb-4 md:w-[60%]">
          Nos destacamos en logística para asegurar tu tranquilidad, siendo nuestro sello distintivo. Nuestra experiencia en compra, almacenamiento y entrega eficiente nos convierte en el socio ideal para tus necesidades de abastecimiento y distribución.
          </p>
          <hr className="border border-white mb-4 md:w-[60%]" />
          <p className="font-mshtakan text-sm md:text-lg mb-4 md:w-[60%]">
          We excel in logistics to ensure your peace of mind, being our hallmark. Our expertise in purchasing, warehousing and efficient delivery makes us the ideal partner for your sourcing and distribution needs.
          </p>
          <motion.img
            src="/img/chinese-words-black.svg"
            alt="Identity"
            className='w-full md:w-[70%]'
            initial={{ opacity: 0, y: 300 }}
            animate={textControls}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default IdentitySection;
