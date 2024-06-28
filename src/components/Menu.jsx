import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faGripLines } from "@fortawesome/free-solid-svg-icons";
import { useMenuContext } from "../MenuContext.jsx";
import { faTumblr, faInstagram, faYoutube, } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Menu = () => {
  const { menuOpen, toggleMenu } = useMenuContext();

  const astronautVariants = {
    hidden: { 
      x: '100vw', 
      y: '100vh',
      opacity: 0,
      scaleX: 1,
      scaleY: 1,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 2, 
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className={menuOpen ? "menuVisible" : "menuHidden"}>
      <div className={`font-din tracking-custom fixed inset-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <header className="flex items-center p-12">
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <img src="/img/logos/logo-PICSRCH-HORIZONTAl-removebg.png" alt="Logo" style={{ height: "25px" }} />
          </a>
          <div className="group text-xl" style={{ marginLeft: "auto", display: "flex", alignItems: "center" }} >
            <span id="close" className="cursor-pointer mx-3 mt-0 text-xl tracking-custom" onClick={toggleMenu}>CLOSE</span>
            <div className="relative mr-8 text-xl" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faTimes} className="cursor-pointer z-10 absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0 -mt-3 " />
              <FontAwesomeIcon icon={faGripLines} className="cursor-pointer z-10 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 -mt-3" />
            </div>
          </div>
        </header>
        <ul className="text-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-10 md:space-y-20">
          <li className="text-5xl">
            <a href="/identity" className="hover:text-gray-400">
              IDENTITY
            </a>
          </li>
          <li className="text-5xl">
            <a href="/play" className="hover:text-gray-400">
              PLAY PICSRCH
            </a>
          </li>
          <li className="text-5xl">
            <a href="/moving" className="hover:text-gray-400">
              MOVING FORWARD
            </a>
          </li>
          <li className="text-5xl">
            <a href="/products" className="hover:text-gray-400">
              PRODUCTS
            </a>
          </li>
          <li className="text-5xl">
            <a href="/contact" className="hover:text-gray-400">
              CONTACT
            </a>
          </li>
        </ul>

        <div className="fixed inset-0 overflow-hidden -z-10">
        <motion.img
          src="/img/menu-ast.svg"
          alt="Astronaut"
          initial="hidden"
          animate={menuOpen ? "visible" : "hidden"}
          variants={astronautVariants} 
          className="absolute bottom-[-25%] right-[-30%] w-[80%] h-[50%] object-contain md:bottom-[-48%] md:right-[-42%] md:w-[120%] md:h-[120%]"
        />
        </div>

        <div className="absolute pl-12 bottom-0 left-0 mb-10 flex space-x-14">
          <a href="https://www.tumblr.com" className="text-3xl hover:text-gray-600" >
            <FontAwesomeIcon icon={faTumblr} />
          </a>
          <a href="https://www.instagram.com" className="text-3xl hover:text-gray-600" >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com" className="text-3xl hover:text-gray-600" >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
