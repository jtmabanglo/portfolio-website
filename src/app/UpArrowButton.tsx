import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const UpArrowButton = () => {
  return (
    <motion.a
      className=" right-10 bottom-10 fixed bg-neutral-800 rounded-full p-5 size-16 flex justify-center items-center hover:bg-blue-500 transition duration-200"
      href="#"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-2xl" />
    </motion.a>
  );
};

export default UpArrowButton;
