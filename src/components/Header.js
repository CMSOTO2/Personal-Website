import React from "react";
import Nav from "./Nav";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className="p-10 text-black flex justify-between items-center mx-auto shadow-lg top-0 sticky bg-white dark:bg-[#181818] z-10 space-x-5">
      <h1
        onClick={scrollToTop}
        className="text-4xl cursor-pointer text-gray-500 dark:text-gray-300"
      >
        CS
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
