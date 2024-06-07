import React from 'react';
import SocialIcons from './SocialIcons';

function Footer({ showText = true, showIcons = true, showTextOnMobile = false }) {
  return (
    <footer className="font-din tracking-custom bg-[#F87E68] p-10 text-black flex items-center justify-center h-20">
      {showIcons && (
        <SocialIcons />
      )}
      {showText && (
        <div className={`font-author tracking-normal absolute right-8 text-lg ${showTextOnMobile ? 'block' : 'hidden md:block'}`}>
          <h1>SKY WAS THE LIMIT UNTIL WE WALKED ON THE MOON</h1>
        </div>
      )}
    </footer>
  );
}

export default Footer;
