import React from "react";
import Social from "../Social/Social";
import Link from "next/link";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center pb-8 space-y-5 text-center lg:pb-0 text-black-gray lg:text-start lg:items-start">
      <h1 className="text-4xl font-bold ">Full-Stack Developer </h1>
      <p className="text-lg ">
        Hi, I'm Imonikhea Ugbodaga. A passionate Full-Stack Developer based in
        Lagos, Nigeria. 📍
      </p>
      <Social />
      <Link
        href={resumeLink}
        target="_blank"
        rel="noopener"
        className="px-5 py-3 font-bold text-center text-white capitalize rounded-full lg:px-3 w-fit lg:w-full bg-black-gray"
      >
        view resume
      </Link>
    </div>
  );
};

export default HeroText;

const resumeLink = `https://docs.google.com/document/d/e/2PACX-1vS73DYM3R2PPQZeQb7P-FmrikJnAjCRy_sg56LwtdxdIagy2ve_bEn6BYi5THGNIQZd19ULB7kuonDL/pub`;
