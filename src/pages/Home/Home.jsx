"use client";
import ScrollingText from "./HomeSections/ScrollingText";
// import ScrollIndicator from "../../components/ScrollIndicator";

export default function Home() {
  return (
    <>
      <div data-scroll-container>
        <ScrollingText />
      </div>
      {/* <ScrollIndicator /> */}
    </>
  );
}
