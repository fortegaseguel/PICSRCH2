import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faGripLines } from '@fortawesome/free-solid-svg-icons';
import { useMenuContext } from '../MenuContext.jsx';
import Menu from './Menu.jsx';

const Header = () => {
  const { pathname } = useLocation();
  const { toggleMenu } = useMenuContext();


  const headerVisibilityClasses = pathname === '/' ? 'opacity-0 pointer-events-none' : '';

  return (
    <>
      <div className={headerVisibilityClasses}>
        <header className="font-din flex items-center p-12">
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <img src="/img/logos/logo-PICSRCH-HORIZONTAl-removebg.png" alt="Logo" className='z-10' style={{ height: "25px" }} />
          </a>
          <div className="group text-xl z-10" style={{ marginLeft: "auto", display: "flex", alignItems: "center" }} >
            <span id="close" className="cursor-pointer mx-3 mt-2 text-xl tracking-custom" onClick={toggleMenu}>MENU</span>
            <div className="relative mr-8 text-xl" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faGripLines} className="cursor-pointer z-10 absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0 -mt-3" />
              <FontAwesomeIcon icon={faTimes} className="cursor-pointer z-10 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 -mt-3 " />
            </div>
          </div>
        </header>
      </div>
      <Menu />
    </>
  );
};

export default Header;

