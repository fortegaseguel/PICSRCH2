import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTumblr, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
    <div className="flex justify-center space-x-12">
      <a href="#" className="text-3xl hover:text-gray-700">
        <FontAwesomeIcon icon={faTumblr} />
      </a>
      <a href="#" className="text-3xl hover:text-gray-700">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" className="text-3xl hover:text-gray-700">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  );
}

export default SocialIcons;
