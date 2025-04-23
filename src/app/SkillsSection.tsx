import React from "react";
import SkillsCard from "./SkillsCard";
import {
  faCode,
  faComputer,
  faDatabase,
  faDiagramProject,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  compRef: (node?: Element | null) => void;
}

const SkillsSection = ({ compRef }: Props) => {
  const programmingLanguages = [
    "Java",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "PHP",
  ];

  const tools = [
    "React",
    "Next.js",
    "React Native",
    "TailwindCSS",
    "Bootstrap",
    "MUI X",
    "Motion",
    "Figma",
    "JUnit Testing",
    "Git/GitHub",
    "Docker",
    "Google Cloud Platform",
  ];

  const databaseManagement = ["MySQL", "Oracle Database 19c", "SQL Plus"];

  const projectMGT = ["monday.com"];

  const OS = ["Mac", "Linux", "Windows 11"];

  return (
    <div
      ref={compRef}
      id="skills"
      className="flex flex-col px-36 pt-48  text-white"
    >
      <div className="flex items-center justify-center ">
        <h2 className="font-black text-5xl pb-12">S K I L L S</h2>
      </div>

      <div className="grid grid-cols-3">
        <div className="flex flex-col">
          <SkillsCard
            title="PROGRAMMING LANGUAGES"
            content={programmingLanguages}
            iconTitle={faCode}
          />
          <SkillsCard
            title="OPERATING SYSTEMS"
            content={OS}
            iconTitle={faComputer}
          />
        </div>

        <div className="flex flex-col">
          <SkillsCard
            title="DATABASE MANAGEMENT"
            content={databaseManagement}
            iconTitle={faDatabase}
          />
          <SkillsCard
            title="PROJECT MANAGEMENT PLATFORM"
            content={projectMGT}
            iconTitle={faDiagramProject}
          />
        </div>

        <div className="flex flex-col">
          <SkillsCard
            title="TOOLS"
            content={tools}
            iconTitle={faScrewdriverWrench}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
