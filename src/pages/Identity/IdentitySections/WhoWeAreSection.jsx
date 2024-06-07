import React from 'react';
import { motion } from 'framer-motion';

function WhoWeAreSection() {
  return (
      <section className="font-din tracking-extra flex flex-col items-center justify-center h-[120vh]">
        <div className="w-[50%] relative" style={{ top: '-200px' }}>
        <motion.img
          initial={{ 
            scaleX: 1,
            scaleY: 1,
            opacity: 0.7, 
            y: 250 
          }} 
          animate={{ 
            opacity: 1, 
            y: 0, 
            duration: 30,
          }} 
          transition={{ 
            type: 'spring',
            stiffness: 400,
            duration: 10,
          }}
          src="/img/Whoarewe.svg" alt="Who are we"/>
          <h1 className="text-5xl text-center">WHO ARE WE?</h1>
        </div>
      </section>
  );
}

export default WhoWeAreSection;
