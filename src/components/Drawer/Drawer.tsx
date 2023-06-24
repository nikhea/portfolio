import React from "react";
import DrawerComponents from "react-modern-drawer";
import { MdClose } from "react-icons/md";

import "react-modern-drawer/dist/index.css";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { navList } from "@/data/navlist";
import Link from "next/link";
const Drawer = ({ toggleDrawer, isOpen }: any) => {
  useSmoothScroll();
  const displayNavList = navList.map((list, index) => (
    <li onClick={toggleDrawer} key={index}>
      <Link
        className="font-extrabold nav-link hover:text-blue-600"
        href={list.link}
      >
        {list.name}
      </Link>
    </li>
  ));
  return (
    <>
      <DrawerComponents
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla"
        size={`100%`}
      >
        <div
          onClick={toggleDrawer}
          className="absolute flex justify-end text-xl cursor-pointer right-3 top-5 w-fit hover:text-blue-600 lg:hidden"
        >
          <MdClose className="w-8 h-8 text-2xl" />
        </div>
        <div className="grid h-full text-lg text-center capitalize place-content-center lg:hidden">
          <ul className="space-y-20 ">{displayNavList}</ul>
        </div>
      </DrawerComponents>
    </>
  );
};

export default Drawer;
// className="flex flex-col items-center justify-between h-full py-48 space-x-5 text-lg text-center capitalize lg:hidden"
