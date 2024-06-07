import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <img
      src="/img/logos/logo-PICSRCH-HORIZONTAl-removebg.png"
      alt="PICSRCH Logo"
      onClick={goToHome}
      className="fixed top-0 left-0 mt-5 ml-2 cursor-pointer w-32 z-50"
    />
  );
};

export default Logo;

