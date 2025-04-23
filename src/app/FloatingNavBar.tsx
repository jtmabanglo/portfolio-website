import React from "react";
import NavBarItem from "./NavBarItem";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  activeSect: String;
}

const FloatingNavBar = ({ activeSect }: Props) => {
  return (
    <motion.div
      key="floatingNavBar"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3, type: "spring" }}
      className="flex fixed z-50 justify-center items-center w-screen p-6"
    >
      <div className="flex justify-between items-center p-4 bg-neutral-800 text-white rounded-3xl shadow-xl ">
        <a href="#">
          <div className=" items-center">
            <div className="flex pl-4 pr-3 pb-3 rounded-2xl ">
              <p className="font-black text-4xl tracking-widest">jm</p>
            </div>
          </div>
        </a>

        <nav className="flex">
          <NavBarItem name="about" activeSect={activeSect} />
          <NavBarItem name="education" activeSect={activeSect} />
          <NavBarItem name="skills" activeSect={activeSect} />
          <NavBarItem name="projects" activeSect={activeSect} />
          <NavBarItem name="experience" activeSect={activeSect} />
          <NavBarItem name="contact" activeSect={activeSect} />
          <NavBarItem name="resume" activeSect={activeSect} />
        </nav>
      </div>
    </motion.div>
  );
};

export default FloatingNavBar;
