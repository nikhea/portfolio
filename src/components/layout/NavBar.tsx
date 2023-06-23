"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const NavBar = () => {
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
    <nav className=" sticky top-0 left-0 right-0 bg-white z-50 shadow-md  py-5">
      <div className="containerLG  text-black-gray font-bold items-center flex justify-between">
        <h1 className=" text-xl">Fortune.dev</h1>
        <ul className=" text-lg space-x-5 capitalize  items-center flex justify-between">
          {displayNavList}
        </ul>
      </div>
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
