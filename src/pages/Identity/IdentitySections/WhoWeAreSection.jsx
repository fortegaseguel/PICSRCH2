import React from "react";
import { motion } from "framer-motion";

function WhoWeAreSection() {
  return (
    <section className="font-din tracking-extra flex flex-col items-center justify-center h-[120vh]">
      <div
        className="w-[35%] relative top-[-100px] "
        style={{}}
      >
        <motion.img
          className="bluehamhamBounce"
          // initial={{
          //   scaleX: 1,
          //   scaleY: 1,
          //   opacity: 0.7,
          //   y: 250
          // }}
          // animate={{
          //   opacity: 1,
          //   y: 0,
          //   duration: 30,
          // }}
          // transition={{
          //   type: 'spring',
          //   stiffness: 400,
          //   duration: 10,
          // }}
          src="/img/whoarewe_ok.svg"
          alt="Who are we"
        />

        <div className="overflow-hidden mt-10	">
          <h1 className="text-5xl text-center text-slide slide-up w-full">WHO ARE WE?</h1>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
