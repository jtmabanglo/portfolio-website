"use client";
import { useEffect, useRef, useState } from "react";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import StaticHeroSection from "./StaticHeroSection";
import { useInView } from "react-intersection-observer";
import FloatingNavBar from "./FloatingNavBar";
import { AnimatePresence, motion } from "motion/react";

export default function Home() {
  let activeSection = "hero";
  const [navBar, setNavBar] = useState(false);

  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.6 });
  const { ref: educationRef, inView: educationInView } = useInView({
    threshold: 0.6,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.6,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.6,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.6,
  });

  if (aboutInView) {
    activeSection = "about";
  } else if (educationInView) {
    activeSection = "education";
  } else if (skillsInView) {
    activeSection = "skills";
  } else if (projectsInView) {
    activeSection = "projects";
  } else if (experienceInView) {
    activeSection = "experience";
  }

  const changeNavBar = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else if (window.scrollY < 100) {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeNavBar);

  return (
    <div className="font-dmsans bg-neutral-900 text-white">
      <AnimatePresence mode="wait">
        {!navBar && <NavBar activeSect={activeSection} />}
      </AnimatePresence>
      <AnimatePresence>
        {navBar && <FloatingNavBar activeSect={activeSection} />}
      </AnimatePresence>

      <HeroSection />

      <AboutSection compRef={aboutRef} />
      <EducationSection compRef={educationRef} />
      <SkillsSection compRef={skillsRef} />
      <ProjectsSection compRef={projectsRef} />
      <ExperienceSection compRef={experienceRef} />
    </div>
  );
}
