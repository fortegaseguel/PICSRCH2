import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuProvider } from './MenuContext';
import Home from './pages/Home/Home';
import Play from './pages/Play/Play';
import Identity from './pages/Identity/Identity';
import Moving from './pages/Moving/Moving';
import Products from './pages/Products/Products';
import Contacto from './pages/Contact/Contact';

function App() {
  return (
    <MenuProvider>
      <div id='app' >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/play" element={<Play />} />
            <Route path="/identity" element={<Identity />} />
            <Route path="/moving" element={<Moving />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contacto />} />
            <Route path="*" element={<h1>Page not created yet</h1>} /> */}
          </Routes>
        </Router>
      </div>
    </MenuProvider>
  );
}

export default App;
