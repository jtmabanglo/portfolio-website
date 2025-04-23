import React from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";

interface Props {
  compRef: (node?: Element | null) => void;
}

const EducationSection = ({ compRef }: Props) => {
  return (
    <div
      ref={compRef}
      id="education"
      className="flex items-center justify-center px-36 pt-48 text-white"
    >
      <motion.div
        className="flex flex-col w-1/3 h-full"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-5xl font-black pb-12">E D U C A T I O N</p>
      </motion.div>

      <div className="relative w-2/3 group">
        <div className="absolute inset-0.5 bg-gradient-to-br from-green-400 to-blue-500 blur-lg rounded-2xl opacity-60 group-hover:opacity-100 transition duration-500 animate-tilt"></div>
        <motion.div
          className="flex flex-col relative bg-neutral-800 rounded-2xl border border-neutral-500 p-10 "
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xl bg">
            <p className="font-bold text-4xl ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Bachelor of Science in Computer Science,
              </span>
            </p>
            <p className="font-bold text-4xl text-green-500">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 pr-3">
                <i>summa cum laude</i>
              </span>
            </p>
            <p className="font-medium pt-5 text-3xl ">
              Oakland University - Rochester, MI
            </p>
            <p>January 2022 - December 2024</p>
          </div>
          <div className="pt-20 text-xl ">
            <h2 className="font-bold text-3xl pb-3 ">Honors & Awards</h2>
            <ul className="pl-6  font-fira">
              <li>
                <b>GPA: 3.95 </b>/ 4.0 -{" "}
                <i>Departmental Honors in Computer Science</i>
              </li>
              <li>
                <b>President's List:</b> 2022, 2023, 2024
              </li>
              <li>
                <b>Platinum Presidential Scholar Award: </b>2022, 2023, 2024
              </li>
            </ul>
          </div>
          <div className="pt-5 text-xl">
            <h2 className="font-bold text-3xl  pb-3">Relevant Coursework</h2>
            <ul className="pl-6 font-fira">
              <li>Object-Oriented Computing</li>
              <li>Data Structures</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Software Engineering and Practice</li>
              <li>Database Design and Implementation</li>
              <li>Information Security Practice</li>
              <li>Web and Mobile Systems</li>
              <li>Integrated Computing Systems</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EducationSection;
