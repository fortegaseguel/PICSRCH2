import React, { useState, createContext, useContext } from 'react';

const MenuContext = createContext(null);

export const useMenuContext = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleHeaderVisibility = (visible) => {
    setIsHeaderVisible(visible);
  }

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu, isHeaderVisible, toggleHeaderVisibility }}>
      {children}
    </MenuContext.Provider>
  );
};

export const MenuToggleButton = () => {
  const { menuOpen, toggleMenu } = useMenuContext();

  return (
    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
      <span id="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? 'CLOSE' : 'MENU'}
      </span>
    </div>
  );
};