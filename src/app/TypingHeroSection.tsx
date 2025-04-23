import { TypeAnimation } from "react-type-animation";
import GraphemeSplitter from "grapheme-splitter";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import ParticleBackground from "./ParticleBackground";

const splitter = new GraphemeSplitter();

interface Props {
  changeTypingStatus: () => void;
}

const TypingHeroSection = ({ changeTypingStatus }: Props) => {
  return (
    <motion.div>
      <div
        id="hero"
        className="bg-neutral-900 text-white flex flex-col items-center h-dvh py-96 px-28"
      >
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="z-40"
        >
          <TypeAnimation
            splitter={(str) => splitter.splitGraphemes(str)}
            sequence={["jared mabanglo", 4000, changeTypingStatus]}
            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
            className="text-9xl font-black font-funnel"
            cursor={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="z-40"
        >
          <p className="text-2xl py-10 font-fira font-light">
            Recent B.S. Computer Science Graduate | Detroit Metropolitan Area
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex justify-center z-40"
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-5xl pt-32" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute inset-0 z-0"
      >
        <ParticleBackground />
      </motion.div>
    </motion.div>
  );
};

export default TypingHeroSection;
