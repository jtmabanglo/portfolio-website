import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  title: String;
  content: String[];
  iconTitle: IconProp;
}

const SkillsCard = ({ title, content, iconTitle }: Props) => {
  return (
    <div className="relative mt-24 mx-5 group">
      <div className="absolute inset-0.5 bg-gradient-to-br from-green-400 to-blue-500 blur-lg rounded-2xl opacity-60 invisible group-hover:visible group-hover:opacity-100 transition duration-200 animate-tilt"></div>
      <div className="relative  bg-neutral-800 text-white border border-neutral-800 hover:border-neutral-500 rounded-3xl p-10 max-h-min">
        <div className="absolute flex align-center justify-center -inset-y-14 bg-blue-500 size-28 rounded-2xl ">
          <FontAwesomeIcon icon={iconTitle} className="text-4xl pt-10" />
        </div>
        <div>
          <h1 className="font-bold text-3xl pb-5 pt-12">{title}</h1>
          <div className="flex flex-wrap">
            {content.map((item, index) => (
              <div
                key={index}
                className="text-xl border border-neutral-600 bg-neutral-700 text-neutral-300 m-2 py-3 px-6 font-dmcode rounded-2xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;

{
  /* <div>
        <h1 className="font-bold text-3xl pb-5">{title}</h1>
        <p className="font-fira text-gray-500 pb-3">&lt;ul&gt;</p>
        <ul className=" ml-4 pl-6 font-fira border-l-2 border-gray-500">
          {content.map((item, index) => (
            <li key={index} className="text-xl">
              {item}
            </li>
          ))}
        </ul>
        <p className="font-fira text-gray-500 pt-3">&lt;/ul&gt;</p>
      </div> */
}
