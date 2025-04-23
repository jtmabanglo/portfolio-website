import Link from "next/link";
import React from "react";
import NavBarItem from "./NavBarItem";
import { motion } from "motion/react";

interface Props {
  activeSect: String;
}

const NavBar = ({ activeSect }: Props) => {
  return (
    <div className="fixed w-screen z-50">
      <div className="flex justify-between items-center p-20  text-white">
        <a href="#">
          <div className="flex items-center">
            <div className="pl-4 pr-3 pb-3 rounded-2xl flex">
              <p className="font-black text-4xl font-dmsans ">jared</p>
              <p className="font-black text-4xl font-dmsans pl-3 text-blue-500">
                mabanglo
              </p>
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
    </div>
  );
};

export default NavBar;
