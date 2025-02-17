import Image from "next/image";
import { Urbanist } from "next/font/google";
import jaredPic from "./assets/jaredPic.jpeg";
import { motion } from "motion/react";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-[Urbanist]">
      <header className="w-screen flex fixed justify-between items-center bg-gray-50 bg-opacity-75 backdrop-blur-md p-14">
        <h1 className="font-light text-2xl">
          J A R E D &nbsp; M A B A N G L O
        </h1>
        <nav className="flex flex-row">
          <h1 className="px-5 tracking-widest">ABOUT</h1>
          <h1 className="px-5 tracking-widest">EDUCATION</h1>
          <h1 className="px-5 tracking-widest">SKILLS</h1>
          <h1 className="px-5 tracking-widest">PROJECTS</h1>
          <h1 className="px-5 tracking-widest">EXPERIENCE</h1>
          <h1 className="px-5 tracking-widest">CONTACT</h1>
        </nav>
      </header>
      <section
        id="hero"
        className="flex flex-col justify-end h-screen p-20 bg-gray-50"
      >
        <p className="text-9xl font-bold">Hello! 👋</p>
        <p className="text-9xl">I'm Jared.</p>
        <p className="text-3xl py-10">
          I'm a recent B.S. Computer Science graduate based in the Detroit
          Metropolitan Area.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10 animate-pulse"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </section>

      <section id="about" className="flex bg-white p-32">
        <div>
          <h2 className="font-bold text-5xl pb-5">
            Welcome to my Portfolio Website!
          </h2>
          <p className="text-3xl">
            Thank you for visiting. I have experience developing full-stack
            applications, but my passion is front-end development.
          </p>
        </div>

        <Image
          className="rounded-full ml-72"
          src={jaredPic}
          height={400}
          width={400}
          alt="Picture of Jared Mabanglo"
        />
      </section>

      <section id="education" className="flex flex-row bg-gray-100 p-32">
        <h2 className="font-bold text-5xl">E D U C A T I O N</h2>
        <div className="ml-32 bg-white rounded-xl p-10 ">
          <p className="font-bold text-3xl">
            Bachelor of Science in Computer Science
          </p>
          <p className="font-semibold">Oakland University - Rochester, MI</p>
          <p>January 2022 - December 2024</p>
          <p>Summa Cum Laude</p>
          <p>GPA: 3.95</p>
          <p>President's List GPA 3.9-4.0: 2022, 2023, 2024</p>
          <p>Platinum Presidential Scholar Award: 2022, 2023, 2024</p>
        </div>
      </section>
      <section id="skills" className="bg-gray-200">
        <h2 className="font-bold">Skills Section</h2>
        <p>
          Programming Languages: Java, Python, C, SQL, HTML, CSS, JavaScript,
          TypeScript, PHP
        </p>
        <p>
          Tools: React, Android Studio, IntelliJ, Figma, JUnit Testing,
          Git/GitHub, Docker, GCP
        </p>
        <p>Database Management: Oracle Database 19c, SQL Plus, MySQL</p>
        <p>Project Management Platform: monday.com</p>
      </section>
      <section id="projects" className="bg-gray-300">
        <p className="font-bold">Projects Section</p>
        <p>StockWize - Senior Capstone Project</p>
        <p>TrackAdemic - Mobile Development Course</p>
        <p>Raspberry Pi Security Camera - Integrated Computing Systems</p>
        <p>PTOMS - Software Engineering and Practice</p>
      </section>
      <section id="experience" className="bg-gray-400">
        <p className="font-bold">Experience Section</p>
        <p>IT Support, Data Entry Clerk</p>
        <p>DynaFlex Home Health Care - Sterling Heights, MI</p>
        <p>June 2019-January 2024</p>
      </section>
      <section id="contact" className="bg-gray-500">
        <p className="font-bold">Contact Section</p>
        <p>Email</p>
        <p>Github</p>
        <p>LinkedIn</p>
      </section>
    </div>
  );
}
