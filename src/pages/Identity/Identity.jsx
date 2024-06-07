import React from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import WhoWeAreSection from './IdentitySections/WhoWeAreSection';
import IdentitySection from './IdentitySections/IdentitySection';
import ResearchSection from './IdentitySections/ResearchSection';
import StrategySection from './IdentitySections/StrategySection';
import ObjectiveSection from './IdentitySections/ObjectiveSection';
import BrandsSection from './IdentitySections/BrandsSection';
import ScrollIndicator from '../../components/ScrollIndicator'; 

function Identity() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Header />
        <Menu />
      </div>
    
      {/* ToDO: Animar transicion de estas secciones */}  
      <WhoWeAreSection />
      <IdentitySection />
      <ResearchSection />
      <StrategySection />
      <ObjectiveSection />
   
      <BrandsSection />
      <ScrollIndicator /> 
    </>
  );
}

export default Identity;
