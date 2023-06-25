"use client";
import React from "react";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiReact,
  SiReactquery,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";

const TechStack = () => {
  const displayIcons = icons.map((icon, index) => (
    <div
      key={index}
      data-tip="This is a tooltip"
      className="flex items-center justify-center w-10 h-10 p-2 mx-2 text-3xl bg-white rounded-full shadow-xl cursor-pointer"
    >
      {icon.icon} <Tooltip />
    </div>
  ));
  return (
    <div className="container flex items-center">
      <h1 className="font-bold ">
        TechStack <span className="mx-5 font-bold">|</span>
      </h1>
      <div className="flex items-center"> {displayIcons}</div>
    </div>
  );
};

export default TechStack;

const icons = [
  {
    name: "html",
    icon: <FaHtml5 className="text-red-500" />,
  },
  {
    name: "css",
    icon: <FaCss3 className="text-blue-500" />,
  },
  {
    name: "javascript",
    icon: <SiJavascript className="text-[#D4AF37] " />,
  },
  {
    name: "sass",
    icon: <SiSass className="text-[#cc6699]  " />,
  },
  {
    name: "tailwind",
    icon: <SiTailwindcss className="text-[#7484e5] " />,
  },
  {
    name: "react",
    icon: <SiReact className="text-blue-500 " />,
  },
  {
    name: "react query",
    icon: <SiReactquery className="text-red-500 " />,
  },
  {
    name: "nextjs",
    icon: <SiNextdotjs className="text-black-gray " />,
  },
  {
    name: "nodejs",
    icon: <SiNodedotjs className="text-green-500 " />,
  },
  {
    name: "expressjs",
    icon: <SiExpress className="text-black-gray " />,
  },
  {
    name: "mongodb",
    icon: <SiMongodb className="text-green-500 " />,
  },
];
