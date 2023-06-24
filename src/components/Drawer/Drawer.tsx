import React from "react";
import DrawerComponents from "react-modern-drawer";
import { MdClose } from "react-icons/md";

import "react-modern-drawer/dist/index.css";
const Drawer = ({ toggleDrawer, isOpen }: any) => {
  //   const [isOpen, setIsOpen] = React.useState(false);
  //   const toggleDrawer = () => {
  //     setIsOpen((prevState) => !prevState);
  //   };

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
          className="absolute flex justify-end text-xl bg-red-200 cursor-pointer right-3 top-5 w-fit hover:text-blue-600 lg:hidden"
        >
          <MdClose className="w-5 text-2xl" />
        </div>
      </DrawerComponents>
    </>
  );
};

export default Drawer;
