"use client";
import React, { useEffect } from "react";
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
      data-tip={icon.name}
      // title={icon.name}
      className="flex items-center justify-center w-10 h-10 p-2 m-2 text-3xl bg-white rounded-full shadow-xl cursor-pointer"
    >
      {icon.icon}
    </div>
  ));

  useEffect(() => {
    // Tooltip.rebuild()
  }, []);
  return (
    <section className="container flex flex-col items-center justify-center">
      <h1 className="mb-3 text-xl font-bold text-center text-blue-600 uppercase lg:text-start">
        TechStack
      </h1>
      <div className="grid grid-cols-4 lg:grid-cols-6"> {displayIcons}</div>
      <Tooltip />
    </section>
  );
};
// TechStack <span className="mx-5 font-bold">|</span>

// className="flex items-center justify-center w-10 h-10 p-2 mx-2 text-3xl bg-white rounded-full shadow-xl cursor-pointer"
{
  /* <div className="container flex items-center"> */
}

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
