import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { BsQuestionLg, BsMoonStars, BsSun } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import Pdf from "../assets/car-estimate.pdf";
import { SiTorproject } from "react-icons/si";

const Nav = () => {
  const [darkMode, setDarkMode] = useState();
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
      setDarkMode(true);
    } else {
      document.querySelector("html").classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const themeSwitch = () => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
      setDarkMode(false);
    } else {
      htmlClasses.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <nav className="">
      <ul className="flex space-x-4 items-center">
        <button
          id="switchTheme"
          onClick={themeSwitch}
          className={
            "cursor-pointer text-gray-500 dark:text-gray-300 text-3xl hover:scale-125 transition-all ease-in"
          }
        >
          {darkMode === false ? <BsMoonStars /> : <BsSun />}
        </button>
        <Link
          to="About"
          activeClass="active"
          smooth={true}
          offset={-150}
          duration={1000}
          spy={true}
          className={
            "cursor-pointer hover:animate-bounce hover:text-sky-500 text-gray-500 dark:text-gray-300"
          }
        >
          <p className="hidden md:inline-flex">About</p>
          <BsQuestionLg className="text-2xl md:hidden" />
        </Link>
        <Link
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={-150}
          duration={1000}
          className="cursor-pointer hover:animate-bounce hover:text-sky-500 text-gray-500 dark:text-gray-300"
        >
          <p className="hidden md:inline-flex">Projects</p>
          <BiCodeAlt className="text-2xl md:hidden active:text-sky-500" />
        </Link>
        {/* <a
          href={Pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:animate-bounce rounded-full px-2 py-1 bg-sky-500 text-white"
        >
          <p className="hidden md:inline-flex">Resume</p>
          <IoNewspaperOutline className="text-2xl md:hidden" />
        </a> */}
      </ul>
    </nav>
  );
};

export default Nav;
