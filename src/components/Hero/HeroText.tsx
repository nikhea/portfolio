import React from "react";
import Social from "../Social/Social";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center pb-8 space-y-5 text-center lg:pb-0 text-black-gray lg:text-start lg:items-start">
      <h1 className="text-4xl font-bold ">Full-Stack Developer </h1>
      <p className="text-lg ">
        Hi, I'm Imonikhea Ugbodaga. A passionate Full-Stack Developer based in
        Lagos, Nigeria. 📍
      </p>
      <Social />
    </div>
  );
};

export default HeroText;
