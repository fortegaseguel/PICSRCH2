import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const HomeLogo = ( onLogoAnimationComplete ) => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: 1,
        x: 0,
        strokeWidth: 0,
        stroke: "white",
        transition: { delay: 3, duration: 1, ease: "linear" }
      });
      onLogoAnimationComplete();
    };

    sequence();
  }, [controls, onLogoAnimationComplete]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width="885pt" height="500" viewBox="0 0 885 183"
         preserveAspectRatio="xMidYMid meet">

        <defs>
            <linearGradient id="paintGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <motion.stop
                stopColor="white"
                offset="0%"
                initial={{ offset: '100%' }}
                animate={{ offset: '0%' }}
                transition={{ delay: 1, duration: 2, ease: "linear" }}
            />
            <stop stopColor="black" />
            </linearGradient>
        </defs>

      <g transform="translate(0.000000,183.000000) scale(0.100000,-0.100000)"
         fill="url(#paintGrad)" stroke="black" strokeWidth="1">

        <motion.path 
          d="M380 911 l0 -651 140 0 140 0 0 170 0 170 113 1 c61 0 119 2 127 3 8
          2 45 6 83 10 211 21 384 153 432 329 24 89 17 249 -14 329 -43 111 -152 204
          -298 255 -78 28 -78 28 -400 31 l-323 3 0 -650z m635 365 c85 -37 125 -98 125
          -191 0 -70 -17 -112 -63 -152 -56 -49 -119 -63 -279 -63 l-138 0 0 216 0 216
          158 -4 c121 -3 166 -8 197 -22z"
          id="P"
          stroke="black"
          strokeWidth="50"
          initial={{ scale: 2.5, x: "180vw", opacity: 1 }}
          animate={controls}
        />
      </g>
    </svg>
  );
};

export default HomeLogo;
