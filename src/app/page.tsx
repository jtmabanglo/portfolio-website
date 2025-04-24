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
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import UpArrowButton from "./UpArrowButton";

export default function Home() {
  let activeSection = "hero";
  const [navBar, setNavBar] = useState(false);
  const [upArrow, setUpArrow] = useState(false);

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
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.6,
  });

  if (aboutInView) {
    activeSection = "about";
    console.log(activeSection);
  } else if (educationInView) {
    activeSection = "education";
    console.log(activeSection);
  } else if (skillsInView) {
    activeSection = "skills";
    console.log(activeSection);
  } else if (projectsInView) {
    activeSection = "projects";
    console.log(activeSection);
  } else if (experienceInView) {
    activeSection = "experience";
    console.log(activeSection);
  } else if (contactInView) {
    activeSection = "contact";
    console.log(activeSection);
  }

  const changeNavBarUpArrow = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
      setUpArrow(true);
    } else if (window.scrollY < 100) {
      setNavBar(false);
      setUpArrow(false);
    }
  };

  window.addEventListener("scroll", changeNavBarUpArrow);

  return (
    <div className="font-dmsans bg-neutral-900 text-white relative">
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
      <ContactSection compRef={contactRef} />
      <FooterSection />
      <AnimatePresence>{upArrow && <UpArrowButton />}</AnimatePresence>
    </div>
  );
}
