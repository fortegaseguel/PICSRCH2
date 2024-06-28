import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollIndicator = ({ 
  isAtSpecialSection = false, 
  onClickAction,
  textColor = "text-white",
  bgColor = "bg-white",
  
}) => {
  const controls = useAnimation();
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const bottomThreshold =
        document.body.offsetHeight - window.innerHeight - 200;
      setIsAtBottom(window.scrollY > bottomThreshold);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    if (isAtBottom || isAtSpecialSection) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const lineAnimation = {
    hidden: {
      scaleX: 0,
      transformOrigin: isAtBottom || isAtSpecialSection ? "right" : "left",
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      className={`font-din tracking-menu fixed w-100 right-[-90px] bottom-[200px] md:right-[-30px] flex items-center rotate-90 cursor-pointer`}
      animate={controls}
      onClick={onClickAction || scrollToTop}
    >
      <div
        className={`text-xl ${textColor} bg-[length:150%_100%] animate-pulse ${
          isAtBottom || isAtSpecialSection
            ? "order-2 ml-2 rotate-[180deg]"
            : "mr-4"
        }`}
      >
        {isAtBottom || isAtSpecialSection ? "BACK TO TOP" : "SCROLL"}
      </div>
      <div className={isAtBottom || isAtSpecialSection ? "rotate-[180deg]" : ""}>
        <motion.div
          className={`w-40 h-0.5 ${bgColor} $`}
          variants={lineAnimation}
          initial="hidden"
          animate="visible"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
