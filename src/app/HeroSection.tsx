import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import GraphemeSplitter from "grapheme-splitter";
import { AnimatePresence, motion } from "motion/react";
import StaticHeroSection from "./StaticHeroSection";
import NavBar from "./NavBar";
import TypingHeroSection from "./TypingHeroSection";

const splitter = new GraphemeSplitter();

const HeroSection = () => {
  const [typingStatus, setTypingStatus] = useState(true);

  function changeTypingStatus() {
    setTypingStatus(false);
  }

  return (
    <>
      <section>
        {/* {typingStatus ? (
          <AnimatePresence>
            <TypingHeroSection changeTypingStatus={changeTypingStatus} />
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <StaticHeroSection />
          </AnimatePresence>
        )} */}
        <StaticHeroSection />
      </section>
    </>
  );
};

export default HeroSection;
