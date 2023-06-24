import React from "react";
import Social from "../Social/Social";
import Link from "next/link";
import HandWave from "../../../public/images/wavin.png";
import Image from "next/image";

const HeroText = () => {
  const portfoilname = `Imonikhea Fortune Ugbodaga`;
  return (
    <div className="flex flex-col items-center pb-8 space-y-5 text-center lg:pb-0 text-black-gray lg:text-start lg:items-start">
      <div className="flex items-center w-fit">
        <h1 className="text-5xl font-bold ">{qulificationTitle}</h1>{" "}
        {/* <Image
          className="object-cover"
          alt={portfoilname}
          src={HandWave}
          height={50}
          width={50}
        /> */}
      </div>

      <p className="text-lg ">
        Hi, I'm {portfoilname}. A passionate {qulificationTitle} based in Lagos,
        Nigeria. 📍
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
export const qulificationTitle = `Full-Stack MERN Developer`;
