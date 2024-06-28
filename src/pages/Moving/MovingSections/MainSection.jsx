import React from 'react';
import SubscriptionForm from '../../../components/SubscriptionForm';

function MainSection() {
  return (
    <section className="block justify-center items-center overflow-hidden min-h-screen">
      <div className="flex justify-center items-center">
        {/* <img src="/img/movingfw.svg" alt="Moving Forward" className="w-[55%] mt-24"/> */}
        <img src="/img/movingfw_ok.svg" alt="Moving Forward" className="w-[55%] mt-24"/>
      </div>
        <p className="font-author-bold text-4xl text- text-center p-12 mt-6 md:hidden" style={{ color: '#F39583' }}>
          Siempre estamos avanzando para complementar tus experiencias.
        </p>
      <div className="w-full mt-12">
        <SubscriptionForm buttonColor="#F87E68" textColor="#F87E68" />
      </div>
    </section>
  );
}

export default MainSection;


