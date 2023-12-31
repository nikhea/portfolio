import React from "react";
import AboutImage from "../../../public/images/aboutme.webp";
import Image from "next/image";
import { qulificationTitle } from "../Hero/HeroText";

const About = () => {
  const Altname = `imonikhea ugbodaga`;
  return (
    <section id="about" className="container ">
      <div className="grid gap-10 my-20 lg:grid-cols-2 place-content-center">
        <div className="w-full h-full rounded-md bg-slate-400">
          <div className="relative w-full h-full">
            <Image
              className="object-cover w-full h-full rounded-md"
              layout="fill"
              alt={Altname}
              src={AboutImage}
            />
          </div>
        </div>
        <div>
          <div className="mb-5 space-y-5">
            <h1 className="text-xl font-bold text-center text-blue-600 uppercase lg:text-start">
              About me
            </h1>
            <p className="text-2xl font-bold text-center capitalize lg:text-start text-black-gray">
              A passionate {qulificationTitle} based in Lagos, Nigeria 📍
            </p>
          </div>
          <div className="space-y-5 text-center text-gray-500 lg:text-justify">
            <p>
              {/* seasoned */}
              As a {qulificationTitle}, I command a formidable range of skills
              encompassing HTML, CSS, JavaScript, React, Tailwind, SCSS, and
              Next.js for frontend development. On the backend, my expertise
              lies in Node.js, Express, MongoDB, and RESTful APIs. I exhibit
              exceptional proficiency in designing and maintaining responsive
              websites that prioritize a seamless user experience.
            </p>
            {/* <p>
              My forte lies in crafting dynamic and captivating interfaces
              through the authorship of clean and optimized code, employing
              state-of-the-art development tools and methodologies. I take
              immense pride in my ability to collaborate seamlessly within
              cross-functional teams, facilitating the creation of exceptional
              web applications.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
