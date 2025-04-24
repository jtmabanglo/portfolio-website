import { motion } from "motion/react";
import React from "react";

interface Props {
  name: String;
  activeSect: String;
}

const underline = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { delay: 1, type: "spring", duration: 1 },
};

const NavBarItem = ({ name, activeSect }: Props) => {
  return (
    <motion.div
      className="w-min h-min mx-4"
      initial="initial"
      animate="initial"
      whileHover="animate"
    >
      <a
        href={`#${name}`}
        className={`  tracking-widest hover:text-green-400 ${
          activeSect === name ? " text-green-400" : ""
        }`}
      >
        {name.toUpperCase()}
      </a>
      {activeSect === name ? (
        <svg height="7" width="100%">
          <motion.line
            x1="0"
            y1="3"
            x2="100%"
            y2="3"
            className="stroke-green-400"
            style={{ strokeWidth: "5" }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{ type: "spring", duration: 1 }}
          />
        </svg>
      ) : (
        <svg height="7" width="100%">
          <motion.line
            x1="0"
            y1="3"
            x2="100%"
            y2="3"
            className="stroke-green-400"
            style={{ strokeWidth: "5" }}
            variants={underline}
          />
        </svg>
      )}
    </motion.div>
  );
};

export default NavBarItem;
