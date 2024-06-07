import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Contact from './ContactSections/ContactSection';
import Logo from '../../components/Logo';


function Contacto() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Header />
        <Menu />
      </div>
      <Contact />
    </>
  );
}

export default Contacto;