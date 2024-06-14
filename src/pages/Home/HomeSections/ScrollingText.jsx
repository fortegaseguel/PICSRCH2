import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollingText.css";

import { useMenuContext } from "../../../MenuContext";
import Menu from "../../../components/Menu";

const ScrollingText = () => {
  const { toggleMenu } = useMenuContext();

  const textContainerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const backgroundSlideRef = useRef(null);
  ScrollTrigger.clearScrollMemory();
  window.history.scrollRestoration = "manual";

  const preventScroll = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    scrollContainerRef.current.addEventListener("wheel", preventScroll);
    setTimeout(() => {
      scrollContainerRef.current.removeEventListener("wheel", preventScroll);
    }, 4000);

    gsap.registerPlugin(ScrollTrigger);

    const textContainer = textContainerRef.current;
    let spans = textContainer.querySelectorAll(".text");
    // Convertir la NodeList a un array
    let spansArray = Array.from(spans);
    let firstSpan = spansArray[0];
    spansArray.shift();

    gsap.fromTo(
      firstSpan,
      { x: "25vw", padding: "50vw" },
      {
        padding: "0",
        x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          markers: false,
        },
      }
    );

    gsap.fromTo(
      [...spansArray, backgroundSlideRef.current],
      { x: "100vw" },
      {
        x: "0vw",
        marginRight: "0",
        stagger: 0.1,
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          markers: false,
        },
        onComplete: function () {
          console.log("Animation completed!");
          toggleMenu();
        },
      }
    );
  }, []);
  return (
    <>
      <div className="background-transition-opacity"></div>
      <div
        className="background-transition-slide"
        ref={backgroundSlideRef}
      ></div>
      <div className="scroll-container font-chillax" ref={scrollContainerRef}>
        <div className="text-container" ref={textContainerRef}>
          <span className="first-letter-container text">
            <span className="first-letter">P</span>
            <span className="first-letter-animation">P</span>
          </span>
          <span className="text">I</span>
          <span className="text">C</span>
          <span className="text">S</span>
          <span className="text">R</span>
          <span className="text">C</span>
          <span className="text">H</span>
        </div>
      </div>

      <Menu />
    </>
  );
};

export default ScrollingText;
