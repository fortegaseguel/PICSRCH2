import React from 'react';
import Header from '../../components/Header';
import HomeSection from './HomeSections/HomeSection';
import ScrollIndicator from '../../components/ScrollIndicator';

function Home() {
  return (
    <>
      <HomeSection />
      <ScrollIndicator />
    </>
  );
}

export default Home;
