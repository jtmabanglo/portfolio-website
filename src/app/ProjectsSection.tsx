import React from "react";
import ProjectCard from "./ProjectCard";
import StockWizeOverview from "./assets/StockWize/StockWizeOverview.jpeg";
import RaspberriPiOverview from "./assets/RaspberryPi/RaspPiOverview.jpeg";
import PTOMSOverview from "./assets/PTOMS/PTOMSOverview.jpeg";
import TrackAdemicOverview from "./assets/TrackAdemic/TrackAdemicOverview.jpeg";

interface Props {
  compRef: (node?: Element | null) => void;
}

const StockWizeTech = ["React", "Next.js", "TypeScript", "MUI X", "Bootstrap"];

const TrackAdemicTech = ["Java", "Android Studio"];

const RaspPiTech = ["Python", "HTML", "CSS", "PHP", "MySQL", "NGINX", "GCP"];

const PTOMSTech = ["React"];

const ProjectsSection = ({ compRef }: Props) => {
  return (
    <div ref={compRef} id="projects" className="flex flex-col px-28 pt-48 ">
      <div className="flex justify-center p-10">
        <h2 className="font-black text-5xl">P R O J E C T S</h2>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <ProjectCard
          name="StockWize"
          course="Senior Capstone Course"
          developList={StockWizeTech}
          desc="Web application developed with a team of 6 for visualizing 
          stock market data and providing short-term stock market forecasts 
          based on ARIMA and LSTM modeling."
          imgSrc={StockWizeOverview}
          imgAlt="StockWize Overview Picture"
          imgH={3432}
          imgW={1984}
        />
        <ProjectCard
          name="TrackAdemic"
          course="Mobile Development Course"
          developList={TrackAdemicTech}
          desc="Mobile application developed with a team of 3 for tracking
          activities pertinent to university student life."
          imgSrc={TrackAdemicOverview}
          imgAlt="TrackAdemic Overview Picture"
          imgH={916}
          imgW={1946}
        />
        <ProjectCard
          name="Raspberry Pi Security Camera"
          course="Integrated Computing Systems"
          developList={RaspPiTech}
          desc="Raspberry Pi Security Camera with face detection developed with 
          team of 4. Photos captured by camera linked to a database that is 
          accessible and managed through web application."
          imgSrc={RaspberriPiOverview}
          imgAlt="Raspberri Pi Overview Picture"
          imgH={2830}
          imgW={1490}
        />
        <ProjectCard
          name="PTOMS"
          course="Software Engineering and Practice Course"
          developList={PTOMSTech}
          desc="Paid time off management application developed in team of 6 for 
          tracking and approving paid time off requests."
          imgSrc={PTOMSOverview}
          imgAlt="PTOMS Overview Picture"
          imgH={2260}
          imgW={1560}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
