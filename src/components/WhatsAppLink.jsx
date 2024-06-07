import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function WhatsAppLink() {
  return (
    <a href="https://api.whatsapp.com/send?phone=56977777777"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Chat en WhatsApp"
       className="fixed bottom-[120px] md:bottom-6 right-4 w-30 h-30 bg-transparent rounded-full flex items-center justify-center text-black-500 text-8xl transform transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 z-10">
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
}

export default WhatsAppLink;