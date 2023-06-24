import Social from "../Social/Social";
const Footer = () => {
  return (
    <footer className=" bg-black-gray flex items-center h-[30vh] text-white">
      <div className="container flex flex-col items-center justify-between gap-5 text-gray-200 lg:flex-row">
        <h1 className=" text-base lg:text-lg font-bold ">
          Copyright © 2023. All rights are reserved
        </h1>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
