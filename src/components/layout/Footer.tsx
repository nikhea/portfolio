import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-black-gray flex items-center h-[30vh] text-white">
      <div className="container flex flex-col items-center justify-between gap-5 text-gray-200 lg:flex-row">
        <h1 className="text-lg font-bold ">
          Copyright © 2023. All rights are reserved
        </h1>
        <div className="flex items-center gap-5 ">
          <Link href={personalLinks.GitHub} target="_blank" rel="noopener">
            <FaGithub className=" icons" />
          </Link>
          <Link href={personalLinks.Linkedin} target="_blank" rel="noopener">
            <FaLinkedin className=" icons" />
          </Link>
          <Link href={personalLinks.Twitter} target="_blank" rel="noopener">
            <FaTwitterSquare className=" icons" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const personalLinks = {
  Linkedin: `https://www.linkedin.com/in/imonikheaugbodaga/`,
  GitHub: `https://github.com/nikhea`,
  Twitter: `https://twitter.com/nikheasentry`,
};
