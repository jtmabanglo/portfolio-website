import React, { useEffect, useMemo, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import GraphemeSplitter from "grapheme-splitter";
import { motion } from "motion/react";
import Link from "next/link";
import { backInOut } from "motion";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ParticleBackground from "./ParticleBackground";
import jaredPic from "./assets/jaredPic.jpeg";
import Image from "next/image";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const underline = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { delay: 1, type: "spring", duration: 1 },
};

const StaticHeroSection = () => {
  return (
    <div className="relative">
      <div
        id="hero"
        className="relative flex flex-col items-center justify-center h-dvh px-28 text-white"
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 1 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="z-40 flex pb-12 pt-40 "
        >
          <Image
            className="rounded-full border-2 shadow-2xl shadow-blue-500"
            src={jaredPic}
            height={300}
            width={300}
            alt="Picture of Jared Mabanglo"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className="z-40"
        >
          <h1 className="text-9xl font-bold font-dmsans">Hello, I'm Jared.</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="z-40"
        >
          <p className="text-2xl py-10 font-dmcode ">
            Recent B.S. Computer Science Graduate | Detroit Metropolitan Area
          </p>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center z-40 pt-16"
          href="#about"
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-5xl" />
        </motion.a>
      </div>
      <div className="absolute flex flex-col items-center z-40 bottom-0 right-16 h-80">
        <motion.a
          initial={{ y: 50, opacity: 0, scale: 1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, duration: 0.4, type: "spring" }}
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-4xl mb-5 " />
        </motion.a>
        <motion.a
          initial={{ y: 50, opacity: 0, scale: 1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.4, type: "spring" }}
          href="https://www.linkedin.com/in/jared-mabanglo/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-4xl mb-5 " />
        </motion.a>

        <motion.a
          initial={{ y: 50, opacity: 0, scale: 1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.4, type: "spring" }}
          href="https://github.com/jtmabanglo"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className="text-4xl mb-5 " />
        </motion.a>
        <svg height="100%" width="7">
          <motion.line
            x1="0"
            y1="100%"
            x2="0"
            y2="0"
            className="stroke-white"
            style={{ strokeWidth: "10" }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{ type: "spring", duration: 0.8, delay: 1.5 }}
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute inset-0 z-0"
      >
        <ParticleBackground />
      </motion.div>
    </div>
  );
};

export default StaticHeroSection;
