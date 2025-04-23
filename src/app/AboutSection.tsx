import React, { Reference, RefObject } from "react";
import jaredPic from "./assets/jaredPic.jpeg";
import Image from "next/image";
import { motion } from "motion/react";

interface Props {
  compRef: (node?: Element | null) => void;
}

const AboutSection = ({ compRef }: Props) => {
  return (
    <div
      ref={compRef}
      id="about"
      className="flex flex-col items-center px-36 py-36 text-white "
    >
      {/* <motion.div
        initial={{ y: 50, opacity: 0, scale: 1 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="z-40 flex pb-12 "
      >
        <Image
          className="rounded-full border-2 shadow-2xl shadow-blue-500"
          src={jaredPic}
          height={300}
          width={300}
          alt="Picture of Jared Mabanglo"
        />
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        id="about"
        className="flex rounded-3xl items-center text-center"
      >
        <div className="">
          <h1 className="font-bold text-4xl pb-10 ">Welcome to my website!</h1>
          <p className="text-2xl font-dmcode px-32">
            Thank you for visiting. My name is Jared Mabanglo, and I am a recent
            B.S. Computer Science graduate from Oakland University. I have
            experience in full-stack software development, but I am very
            passionate about frontend design and getting visuals just right.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
