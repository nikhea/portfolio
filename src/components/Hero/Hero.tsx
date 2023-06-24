import React from "react";
import HeroText from "./HeroText";
import style from "./Hero.module.scss";
const Hero = () => {
  return (
    <section id="home" className=" bg-light-gray lg:h-[75vh] ">
      <div className="container flex justify-center flex-col-reverse lg:grid items-center gap-[5rem] lg:gap-[10rem]  h-full grid-cols-1 lg:grid-cols-2">
        <HeroText />
        <div className={style.heroImg}></div>
      </div>
    </section>
  );
};

export default Hero;
{
  /* <div className="container grid items-center h-full grid-cols-1 lg:grid-cols-2"> */
}
{
  /* <div className="container flex items-center gap-[10rem] relative justify-between h-full"> */
}
{
  /* <div className="container grid items-center gap-[10rem]  h-full grid-cols-1 lg:grid-cols-2"> */
}
