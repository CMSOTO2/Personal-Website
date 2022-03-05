import React from "react";
import bitmoji from "../assets/bitmoji.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineDownCircle } from "react-icons/ai";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="w-screen py-10 px-5 flex flex-col items-center">
      <h1 className="text-4xl text-sky-500 text-center font-medium md:text-5xl">
        Hi! My name is Carlos Soto
      </h1>
      <h2 className="text-lg text-center mt-5 text-gray-500 dark:text-gray-300">
        A Front-End Web Developer.
      </h2>
      <img className="" src={bitmoji} alt="bitmoji of Carlos" />
      <div className="flex space-x-5 text-4xl text-gray-500 dark:text-gray-300">
        <a
          href="https://www.linkedin.com/in/carlos-soto-391203230/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="cursor-pointer hover:animate-pulse" />
        </a>

        <a
          href="https://github.com/CMSOTO2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="cursor-pointer hover:animate-pulse" />
        </a>
      </div>

      <Link
        smooth={true}
        offset={-150}
        duration={1000}
        spy={true}
        to="ContactForm"
        className="cursor-pointer"
      >
        <AiOutlineDownCircle className="w-12 h-12 shadow-xl flex items-center justify-center mt-10 text-sky-500 animate-bounce rounded-full" />
      </Link>
    </div>
  );
};

export default Hero;
