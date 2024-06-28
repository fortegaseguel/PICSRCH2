"use client";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import WhoWeAreSection from "./IdentitySections/WhoWeAreSection";
import OneIdentity from "./IdentitySections/OneIdentity";
import TwoResearch from "./IdentitySections/TwoResearch";
import ThreeStrategy from "./IdentitySections/ThreeStrategy";
import FourObjetive from "./IdentitySections/FourObjetive";
import BrandsSection from "./IdentitySections/BrandsSection";


import React, { useState, useEffect } from "react";
function Identity() {
  useEffect(() => {});

  const scrollRef = React.createRef();

  const [firstPageDone, setFirstPageDone] = useState(undefined);
  const [secondPageDone, setSecondPageDone] = useState(undefined);
  const [thirdPageDone, setThirdPageDone] = useState(undefined);
  const [fourthPageDone, setFourthPageDone] = useState(undefined);

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //     const locoScroll = new LocomotiveScroll({
  //       el: scrollRef.current,
  //       smooth: true,
  //       smoothMobile: true,
  //       lerp: 0.07,
  //     });

  //     // for a horizontal version, see https://codepen.io/GreenSock/pen/rNmQPpa?editors=0010
  //   })();
  // }, []);

  function handleFirstPageDone(data) {
    setFirstPageDone(data);
  }

  function handleSecondPageDone(data) {
    setSecondPageDone(data);
  }

  function handleThirdPageDone(data) {
    setThirdPageDone(data);
  }

  function handleFourthPageDone(data) {
    setFourthPageDone(data);
  }

  return (
    <>
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <Header />
        <Menu />
      </div>
      <div ref={scrollRef}>
        <WhoWeAreSection />

        <OneIdentity sendDataToParent={handleFirstPageDone} />
        {firstPageDone ? (
          <TwoResearch sendDataToParent={handleSecondPageDone} />
        ) : (
          ""
        )}
        {secondPageDone ? (
          <ThreeStrategy sendDataToParent={handleThirdPageDone} />
        ) : (
          ""
        )}
        {thirdPageDone ? (
          <FourObjetive sendDataToParent={handleFourthPageDone} />
        ) : (
          ""
        )}
        <br />
        <br />
        {fourthPageDone ? <BrandsSection /> : ""}
      </div>

      {/* <ScrollIndicator />   */}
    </>
  );
}

export default Identity;
