"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "../Drawer/Drawer";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const smoothScroll = (event: any) => {
      event.preventDefault();
      const target = event.target.getAttribute("href");
      const element = document.querySelector(target);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        const navbarHeight = document.querySelector("nav")?.offsetHeight;
        const section = document.querySelector(target);
        section.style.marginTop = `-${navbarHeight}px`;
      }
    };

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);
  const displayNavList = navList.map((list, index) => (
    <li key={index}>
      <Link className="nav-link hover:text-blue-600" href={list.link}>
        {list.name}
      </Link>
    </li>
  ));
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 py-5 bg-white shadow-md ">
      <div className="flex items-center justify-between font-bold containerLG text-black-gray">
        <h1 className="text-xl ">Fortune.dev</h1>
        <ul className="items-center justify-between hidden space-x-5 text-lg capitalize lg:flex">
          {displayNavList}
        </ul>
        <div
          onClick={toggleDrawer}
          className="flex text-lg cursor-pointer hover:text-blue-600 lg:hidden"
        >
          <GiHamburgerMenu className="" />
        </div>
      </div>
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </nav>
  );
};

const navList = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "about",
    link: "#about",
  },
  {
    name: "projects",
    link: "#projects",
  },
  {
    name: "contact",
    link: "#contact",
  },
];
export default NavBar;