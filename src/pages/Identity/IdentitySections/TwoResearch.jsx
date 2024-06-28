import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initial } from "lodash";

const IdentitySection = ({ sendDataToParent }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const pageNumberRef = useRef(null);
  const textRef = useRef(null);
  const leftSectionRef = useRef(null);
  const scrollToTextRef = useRef(null);

  // sectionRef

  const phrase =
    "Investigamos, contactamos y generamos alianzas con los principales proveedores de distintas industrias a nivel mundial, creando relaciones comerciales efectivas y basadas en la confianza.";

  const phraseEnglish =
    "We research, contact and generate alliances with the main suppliers in different industries worldwide, creating effective commercial relationships based on trust.";
  const slideUp = {
    initial: {
      y: "40%",
    },
    open: (i) => ({
      y: "0%",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.01 * i },
    }),
    closed: {
      opacity: 0,
      y: "40%",
      transition: { duration: 0.5 },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const width = {
    initial: {
      width: 0,
      opacity: 0,
    },
    open: {
      width: "75%",
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const isInView = useInView(sectionRef, {
    margin: "0px 0px -100% 0px", // Sin margen adicional
    once: true,
  });

  const isTextInView = useInView(textRef, {
    margin: "0px 0px -100% 0px", // 50% de la pantalla
  });

  ScrollTrigger.clearScrollMemory();
  window.history.scrollRestoration = "manual";

  useEffect(() => {
    if (isTextInView) {
      if (sendDataToParent) {
        setTimeout(() => {
          sendDataToParent(true);
        }, 2000);
      }
      console.log("si esta ");
    } else {
      // if (sendDataToParent ) {
      //   sendDataToParent(false);
      // }
      // ;
    }
  }, [isTextInView]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Obtener las dimensiones de la ventana
    const screenWidth = window.innerWidth;

    // Configurar la animación con ScrollTrigger
    if (isInView) {
      // sectionRef.current.scrollIntoView({ behavior: "smooth" });

      gsap.fromTo(
        imageRef.current,
        {
          x: screenWidth / -4, // aca cambia la direccion
        },
        {
          x: 0,
          transform: "scale(.7)",
          duration: 1,
          ease: "power4.inOut",
          delay: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center 60%",
            end: "center 60%",
            toggleActions: "play play reverse none",
            //             onEnter onLeave onEnterBack onLeaveBack
            scrub: false,
            markers: false,
            onEnterBack: () => {
              console.log("Entered back");
              if (sendDataToParent) {
                sendDataToParent(false);
                setTimeout(() => {
                  sendDataToParent(false);
                }, 2000);
              }
            },
          },
        }
      );
    }
  }, [isInView]);

  return (
    <>
      {/* <div className="bg-[#0061FF] h-screen"></div> */}
      <div
        id="identity"
        ref={sectionRef}
        className={`h-[300vh] w-full duration-500	 transition ease-in-out	 ${
          isInView ? "bg-white" : "bg-[#0061FF]"
        }`}
      >
        <div className="w-full flex h-full ml-20">
          {/* left side  */}
          <div
            ref={textRef}
            className="text-black text-2xl w-[45%] main-text mt-[200vh] flex flex-col justify-center ml-[20%]"
          >
            {/* <h1 className="font-din text-6xl md:text-7xl tracking-custom mb-4 text-['darkblue']">
              IDENTITY
            </h1> */}
            <div ref={scrollToTextRef}></div>

            <motion.h1
              className="mask font-din text-6xl md:text-7xl tracking-custom mb-4 text-['darkblue']"
              variants={opacity}
              animate={isTextInView ? "open" : "closed"}
            >
              RESEARCH
            </motion.h1>
            <p className="font-montserrat text-sm md:text-lg mb-4 w-[80%]">
              {phrase.split(" ").map((word, index) => {
                return (
                  <span key={index}>
                    <motion.span
                      className="mask"
                      variants={slideUp}
                      custom={index}
                      animate={isTextInView ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>

            <motion.hr
              variants={width}
              animate={isTextInView ? "open" : "closed"}
              className="border border-black mb-4"
            />

            <p className="font-mshtakan text-sm md:text-lg mb-4 md:w-[80%]">
              {phraseEnglish.split(" ").map((word, index) => {
                return (
                  <span key={index}>
                    <motion.span
                      className="mask"
                      variants={slideUp}
                      custom={index}
                      animate={isTextInView ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
            <motion.img
              variants={opacity}
              animate={isTextInView ? "open" : "closed"}
              src="/img/chinese-words-black.svg"
              alt="Identity"
              className="w-full md:w-[85%]"
            />
          </div>

          {/* right side  */}
          <div className="w-2/4 sticky h-screen	top-0 mr-20 " ref={leftSectionRef}>
            <div className={`w-full relative h-full `}>
              <div
                className="absolute "
                style={{
                  top: "7%",
                  right: "25%",
                }}
                ref={pageNumberRef}
              >
                <h1
                  className={` scale-0 font-futura mr-24 text-[14rem] text-black ${
                    isInView ? "bluehamhamBounce" : ""
                  }
                   `}
                   style={{
                    opacity: ".2"
                   }}
                >
                  #02
                </h1>
              </div>
              <div className="absolute top-40 right-[15vw] w-full" ref={imageRef}>
                <img
                  style={{
                    "--bluehamhamBounce-delay": "400ms",
                  }}
                  src="/img/research.svg"
                  alt="Space Identity"
                  className={`h-[30vw] scale-0 ml-72	 ${
                    isInView ? "bluehamhamBounce" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdentitySection;
