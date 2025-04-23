import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  course: string;
  developList: String[];
  desc: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  imgW: number;
  imgH: number;
}

const ProjectCard = ({
  name,
  course,
  developList,
  desc,
  imgSrc,
  imgAlt,
  imgW,
  imgH,
}: Props) => {
  return (
    <div className="flex justify-between w-5/6  border border-neutral-600 bg-neutral-800 rounded-2xl p-10 my-5">
      <div className="w-5/12 flex flex-col pr-10">
        <h1 className="font-bold text-3xl">{name}</h1>
        <p className="text-xl ">{course}</p>
        <div className="my-5">
          <div className="flex flex-wrap ">
            {developList.map((item, index) => (
              <div
                key={index}
                className="text-md border border-neutral-600 bg-neutral-700 text-neutral-300 mr-2 my-1 py-1 px-4 font-dmcode rounded-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <p className="font-fira text-gray-500 pb-3">&lt;p&gt;</p>
        <p className=" ml-4 pl-6 border-l-2 border-gray-500 text-lg font-fira">
          {desc}
        </p>
        <p className="font-fira text-gray-500 pt-3">&lt;/p&gt;</p>

        <FontAwesomeIcon icon={faGithub} className="text-3xl pt-20" />
      </div>
      <div className="w-7/12">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgW}
          height={imgH}
          className=" rounded-2xl border"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
