import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IdentitySection = ({ sendDataToParent }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const pageNumberRef = useRef(null);
  const textRef = useRef(null);
  const leftSectionRef = useRef(null);
  const scrollToTextRef = useRef(null);

  // sectionRef

  const phrase =
    "Nos destacamos en logística para asegurar tu tranquilidad, siendo nuestro sello distintivo. Nuestra experiencia en compra, almacenamiento y entrega eficiente nos convierte en el socio ideal para tus necesidades de abastecimiento y distribución.";

  const phraseEnglish =
    "We excel in logistics to ensure your peace of mind, being our hallmark. Our expertise in purchasing, warehousing and efficient delivery makes us the ideal partner for your sourcing and distribution needs.";
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
      width: "60%",
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
          x: screenWidth / 8, // aca cambia la direccion
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
          isInView ? "bg-[#EFD3E9]" : "bg-white"
        } `}
      >
        <div className="w-full flex h-full">
          {/* left side  */}
          <div className="w-2/4 sticky h-screen	top-0" ref={leftSectionRef}>
            <div className={`w-full relative h-full justify-end flex`}>
              <div
                className="absolute "
                style={{
                  top: "7%",
                  right: "25%",
                }}
                ref={pageNumberRef}
              >
                <h1
                  className={` scale-0 font-futura text-[14rem] text-black ${
                    isInView ? "bluehamhamBounce" : ""
                  }
                   `}
                   style={{
                    opacity: ".2"
                   }}
                >
                  #03
                </h1>
              </div>
              <div className="absolute top-[30%] right-[0]" ref={imageRef}>
                <img
                  style={{
                    "--bluehamhamBounce-delay": "400ms",
                  }}
                  src="/img/strategy.svg"
                  alt="Space Identity"
                  className={`h-[30vw] scale-0	 ${
                    isInView ? "bluehamhamBounce" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* right side  */}
          <div
            ref={textRef}
            className="text-black text-2xl w-2/4  main-text mt-[200vh] flex flex-col justify-center"
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
              STRATEGY
            </motion.h1>
            <p className="font-montserrat text-sm md:text-lg mb-4 md:w-[60%]">
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
              className="border border-black mb-4 md:w-[60%]"
            />

            <p className="font-mshtakan text-sm md:text-lg mb-4 md:w-[60%]">
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
              className="w-full md:w-[70%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IdentitySection;