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
      className={`grid items-center h-full gap-10 my-20 lg:grid-cols-2 place-content-center      ${
        index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      <div className="relative flex w-[500px] h-[500px] lg:w-full lg:h-full bg-red-500 rounded-md">
        <Image
          src={AboutImage}
          alt={project.title}
          className="object-cover w-full h-full rounded-md"
          layout="fill"
        />
      </div>
      <div className="space-y-3">
        <h1 className="text-xl font-bold text-center capitalize lg:text-start ">
          {project.title}
        </h1>
        <p className="text-center lg:text-justify">{project.discription}</p>
        <div className="flex items-center justify-center gap-5 mb-5 font-bold capitalize lg:justify-start">
          <Link
            className="flex items-center hover:text-blue-600"
            href={project.githubLink}
            target="_blank"
            rel="noopener"
          >
            <FaGithub className="mr-3 icons" />
            code
          </Link>
          <Link
            className="flex items-center hover:text-blue-600"
            href={project.liveApp}
            target="_blank"
            rel="noopener"
          >
            <FiExternalLink className="mr-3 icons" />
            live app
          </Link>
        </div>
      </div>
    </div>
  ));
  return (
    <section id="projects" className=" bg-light-gray pb-5">
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
