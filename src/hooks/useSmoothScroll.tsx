import { useEffect } from "react";

const useSmoothScroll = () => {
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

    const addSmoothScrollListener = (link: any) => {
      link.addEventListener("click", smoothScroll);
    };

    const removeSmoothScrollListener = (link: any) => {
      link.removeEventListener("click", smoothScroll);
    };

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(addSmoothScrollListener);

    return () => {
      navLinks.forEach(removeSmoothScrollListener);
    };
  }, []);
};

export default useSmoothScroll;
