import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

import PlaySection from './PlaySections/PlaySection';


function Play() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Header />
        <Menu />
      </div>
      <PlaySection />
    </>
  );
}

export default Play;