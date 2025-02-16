import Image from "next/image";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-[Urbanist]">
      <header className="flex flex-row justify-between bg-gray-50 ">
        <h1 className="font-sans p-10">JARED MABANGLO</h1>
        <nav className="flex flex-row p-10">
          <h1 className="px-5">About</h1>
          <h1 className="px-5">Resume</h1>
          <h1 className="px-5">Projects</h1>
          <h1 className="px-5">Contact</h1>
        </nav>
      </header>
      <section
        id="hero"
        className="flex flex-col justify-center p-10 h-screen bg-gray-50"
      >
        <p className="text-9xl font-bold">Hello</p>
        <p className="text-9xl">I'm Jared</p>
        <p>
          I'm a recent Computer Science graduate based in the Detroit
          Metropolitan Area. I have experience developing full-stack
          applications, but my passion is front-end development.
        </p>
        <p>Fonts: Urbanist</p>
      </section>
      <section id="education" className="bg-gray-100">
        <h2 className="font-bold">Education Section</h2>
        <p>Bachelor of Science in Computer Science</p>
        <p>Oakland University - Rochester, MI</p>
        <p>January 2022 - December 2024</p>
        <p>Summa Cum Laude</p>
        <p>GPA: 3.95</p>
        <p>President's List GPA 3.9-4.0: 2022, 2023, 2024</p>
        <p>Platinum Presidential Scholar Award: 2022, 2023, 2024</p>
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
