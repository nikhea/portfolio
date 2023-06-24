import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex items-center gap-3 ">
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
  );
};

export default Social;

export const personalLinks = {
  Linkedin: `https://www.linkedin.com/in/imonikheaugbodaga/`,
  GitHub: `https://github.com/nikhea`,
  Twitter: `https://twitter.com/nikheasentry`,
};
