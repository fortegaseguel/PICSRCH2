import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMenuContext } from '../../../MenuContext';
import Header from '../../../components/Header';
import HomeLogo from '../../../components/HomeLogo';

function HomeSection() {
  const { toggleMenu } = useMenuContext();
  const text = "ICSRCH";
  const [visibleCount, setVisibleCount] = useState(0);
  const scrollSensitivity = 3;
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollCounter, setScrollCounter] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [menuScrollCount, setMenuScrollCount] = useState(0);
  const menuScrollSensitivity = 5;

  useEffect(() => {
    const handleWheel = (e) => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }

      if (!animationComplete) {
        setScrollCounter(prevCounter => {
          const nextCounter = e.deltaY > 0 ? prevCounter + 1 : prevCounter - 1;

          if (Math.abs(nextCounter) >= scrollSensitivity) {
            setVisibleCount(prevCount => {
              const newCount = nextCounter > 0 ? prevCount + 1 : prevCount - 1;
              return Math.min(Math.max(newCount, 0), text.length);
            });
            return 0;
          } else {
            return nextCounter;
          }
        });
      } else {
        setMenuScrollCount(prevCount => {
          const newCount = e.deltaY > 0 ? prevCount + 1 : prevCount - 1;
          if (Math.abs(newCount) >= menuScrollSensitivity && visibleCount === text.length) {
            toggleMenu(); 
            return 0; 
          }
          return newCount;
        });
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [text.length, scrollSensitivity, menuScrollSensitivity, visibleCount, animationComplete]);

  useEffect(() => {
    if (visibleCount === text.length && !animationComplete) {
      setAnimationComplete(true);
    }
  }, [visibleCount, text.length, animationComplete]);

  return (
    <>
      <div className="absolute">
        <Header />
      </div>
      <section id="home" className="flex relative justify-center items-center min-h-screen text-center p-4 overflow-hidden">
        <h1 className="relative font-chillax text-7xl md:text-logo mx-auto cursor-pointer">
          <div className="flex justify-center">
            <span className={hasScrolled ? 'text-black' : 'text-white'}>P</span>
            {/* {text.split("").map((letter, index) => (
              <motion.div
                key={index}
                className="relative inline-block z-10"
                initial={{ opacity: 0, x: 1000 }}
                animate={{
                  opacity: index < visibleCount ? 1 : 0,
                  x: index < visibleCount ? 0 : 1000,
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  x: { duration: 0.5, bounce: 0.5 }, 
                }}
              onClick={ toggleMenu }>
                {letter}
              </motion.div>
            ))} */}
            <div className={hasScrolled ? 'hidden' : 'block'} >
              <div className="absolute justify-center items-center inset-0 font-chillax text-7xl text-[#DFDEEA] md:text-logo -left-7 -top-32 cursor-pointer">
                <HomeLogo onLogoAnimationComplete={() => setAnimationComplete(true)} />
              </div>
            </div>
          </div>
        </h1>
      </section>
    </>
  );
}

export default HomeSection;
