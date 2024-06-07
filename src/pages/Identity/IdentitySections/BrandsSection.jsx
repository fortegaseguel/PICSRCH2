import React from 'react';
import { motion } from 'framer-motion';
import SubscriptionForm from '/src/components/SubscriptionForm';
import Footer from '/src/components/Footer';

function BrandsSection() {
  return (
    <div className="flex flex-col justify-center h-screen bg-[#FFFFFF] w-full">
      <div className="flex-grow relative flex flex-row items-center justify-center -mb-[100px]">
        {/* Logos Grid */}
        <div className="grid grid-cols-3 gap-1 w-[70%] pt-24" style={{ gridTemplateRows: 'repeat(5, minmax(150px, auto))' }}>
          {/* Primera fila: 3 cajas */}
          <div className="flex justify-center items-center ">
            <img src="/img/logos/Dimension.png" alt="Dimension logo" className="w-32" />
          </div>
          <div className="flex justify-center items-center ">
            <img src="/img/logos/StarcoDemarco.png" alt="StarcoDeMarco logo" className="w-40" />
          </div>
          <div className="flex justify-center items-center ">
            <img src="/img/logos/Cosemar.png" alt="Cosemar logo" className="w-36 h-36" />
          </div>

          {/* Segunda fila: 2 cajas (centradas usando col-span) */}
          <div className="col-span-3 grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center ">
              <img src="/img/logos/Preserva.png" alt="Preserva logo" className="w-40" />
            </div>
            <div className="flex justify-center items-center ">
              <img src="/img/logos/Sonda.png" alt="Sonda logo" className="w-40" />
            </div>
          </div>

          {/* Tercera fila: 3 cajas */}
          <div className="flex justify-center items-center ">
            <img src="/img/logos/SemPack.png" alt="Sempack logo" className="w-40" />
          </div>
          <div className="flex justify-center items-center ">
            <img src="/img/logos/AngloAmerican.png" alt="Angloamerican logo" className="w-40" />
          </div>
          <div className="flex justify-center items-center ">
            <img src="/img/logos/SuperStock.png" alt="SuperStock logo" className="w-60" />
          </div>

          {/* Cuarta fila: 2 cajas (centradas usando col-span) */}
          <div className="col-span-3 grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center ">
              <img src="/img/logos/CreativeMonkeys.png" alt="CreativeMonkeys logo" className="w-52 h-20" />
            </div>
            <div className="flex justify-center items-center ">
              <img src="/img/logos/Mono.png" alt="Mono logo" className="w-32" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-[20%] pb-20">
        <SubscriptionForm buttonColor="#000000" textColor="#000000" />
      </div>

      <div className="flex justify-start items-center pb-20 pl-48 -mt-96">
        <div className="w-2/3 flex items-end transform scale-150">
          <div className="flex items-end">
            <img className="w-full z-10"
              src="/img/brands-astro.svg"
              alt="Astro"
            />
            <h1 className="font-futura text-[170px] text-left tracking-play leading-none" style={{ color: '#DFDEEA', marginLeft: '-8rem' }}>#05</h1>
          </div>
        </div>
      </div>



      <Footer showText={true} showIcons={true} showTextOnMobile={false} className="z-10 w-full" />
    </div>
  );
}

export default BrandsSection;
