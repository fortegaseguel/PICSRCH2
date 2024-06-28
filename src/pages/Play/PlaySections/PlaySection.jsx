import React from 'react';
import { motion } from 'framer-motion';
import SocialIcons from '../../../components/SocialIcons';

function PlaySection() {
  return (
    <>
      <section className="font-din flex flex-col justify-center items-center h-screen relative md:flex-row">
         <img 
          className="w-[90%] md:w-[40%]"
          src="/img/Play.svg" 
          alt="Play"
        />
        <div className="absolute p-10 pt-4 top-[65%] md:top-[58%] md:left-[65%]">
          <h1 className="text-5xl text-left tracking-play leading-10 md:absolute md:left-[-5%]">PLAY PICSRCH</h1>
          <p className="mt-2 text-left tracking-play leading-4 text-lg md:mt-10 md:w-[65%] md:ml-[10%] md:text-sm">
            La logística es nuestra especialidad. Esto nos permite entregar seguridad en la compra, recepción, bodegaje, estiba y una entrega final eficiente a nuestros clientes.
          </p>  
        </div>
      <div className='absolute bottom-20 flex justify-center'>
        <SocialIcons />
      </div>
      </section>
    </>
  );
}

export default PlaySection;


