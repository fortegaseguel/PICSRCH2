import React from "react";
import { motion } from "framer-motion";

function WhoWeAreSection() {
  return (
    <section className="font-din tracking-extra flex flex-col items-center justify-center h-[120vh]">
      <div
        className="w-[50%] relative "
        style={{ top: "-120px" }}
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
          src="/img/Whoarewe.svg"
          alt="Who are we"
        />
        <div className="overflow-hidden	">

        <h1 className="text-5xl text-center text-slide slide-up w-full	">WHO ARE WE?</h1>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
