import React from 'react';

function ClientsSection() {
  return (
    <div className="flex justify-center items-center w-full bg-[#FCF7FB] p-6 shadow-lg">
      <div className="flex justify-center items-center space-x-10">
        <img src="/img/logos/StarcoDemarco.png" className="w-16 md:w-32 md:h-14" alt="Starco Logo" />
        <img src="/img/logos/Mono.png" className="w-16 md:w-32" alt="Mono Logo" />
        <img src="/img/logos/Dimension.png" className="w-16 md:w-32" alt="Dimension Logo" />
        <img src="/img/logos/CreativeMonkeys.png" className="w-24 md:w-48 md:h-16" alt="Creative Monkeys Logo" />
        <img src="/img/logos/Preserva.png" className="w-16 md:w-32" alt="Preserva Logo" />
      </div>
    </div>
  );
}

export default ClientsSection;
