import React from 'react';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import MainSection from './MovingSections/MainSection';
import MovingForwardSection from './MovingSections/MovingForwardSection';
import ScrollIndicator from '../../components/ScrollIndicator';

function Moving() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Header />
        <Menu />
      </div>
      <MainSection />
      <MovingForwardSection />
      <ScrollIndicator />
      <Footer showText={false} />
    </>
  );
}

export default Moving;

