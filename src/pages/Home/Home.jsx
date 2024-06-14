import ScrollingText from "./HomeSections/ScrollingText";
import ScrollIndicator from "../../components/ScrollIndicator";
import HomeSection from "./HomeSections/HomeSection";
import { useState } from "react";

export default function Home() {
  const [scroll, setScroll] = useState(false);
  setTimeout(() => {
    setScroll(true);
  },4000);
  return (
    <>
    {/* <HomeSection /> */}
      <ScrollingText />
      {scroll ? <ScrollIndicator /> : ""}
    </>
  );
}
