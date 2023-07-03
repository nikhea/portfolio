import { projectsData } from "@/data/projects";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import AboutImage from "../../../public/images/aboutme.webp";

const Projects = () => {
  const displayProjects = projectsData.map((project, index) => (
    <div
      key={index}
      className={`grid items-center h-full text-black-gray gap-10 my-20 lg:grid-cols-2 place-content-center      ${
        index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      <div className="relative flex  h-[500px] md:w-full md:h-full  rounded-md">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full rounded-md"
          layout="fill"
        />
      </div>
      <div className="space-y-3">
        <h1 className="text-xl font-bold text-center capitalize  ">
          {project.title}
        </h1>
        <p className="text-center  text-[#767676]">{project.discription}</p>
        <div className="flex items-center justify-center  gap-5 mb-5 font-bold capitalize">
          <Link
            className="flex items-center hover:text-blue-600"
            href={project.githubLink}
            target="_blank"
            rel="noopener"
          >
            <FaGithub className="mr-3 icons__noAnimation" />
            code
          </Link>
          <Link
            className="flex items-center hover:text-blue-600"
            href={project.liveApp}
            target="_blank"
            rel="noopener"
          >
            <FiExternalLink className="mr-3 icons__noAnimation" />
            live app
          </Link>
        </div>
      </div>
    </div>
  ));
  return (
    <section id="projects" className="pb-5 bg-light-gray">
      <div className="container mb-4">
        <h1 className="text-xl font-bold text-center text-blue-600 uppercase lg:text-start">
          projects
        </h1>
        <div className="">{displayProjects}</div>
      </div>
    </section>
  );
};

export default Projects;
