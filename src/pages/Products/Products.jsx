import React from 'react';
import ProductsSection from './ProductsSection/ProductsSection';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import ScrollIndicator from '../../components/ScrollIndicator';

function Products() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Header />
        <Menu />
      </div>
      <ProductsSection />
      <ScrollIndicator isAtSpecialSection={true} />
    </>
  );
}

export default Products;