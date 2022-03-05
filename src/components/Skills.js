import React from "react";
import { FaReact, FaHtml5, FaSass, FaCss3, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiJavascript } from "react-icons/si";

const Skills = () => {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-0">
      <h1 className="text-sky-500 text-6xl">Skills</h1>
      <div className="flex space-x-5 mt-10 text-5xl text-gray-500 dark:text-gray-300 lg:text-7xl">
        <FaHtml5 className="hover:text-orange-600 hover:scale-125 transition-all ease-in" />
        <FaCss3 className="hover:text-blue-600 hover:scale-125 transition-all ease-in" />
        <SiJavascript className="hover:text-yellow-400 hover:scale-125 transition-all ease-in" />
        <FaSass className="hover:text-pink-600 hover:scale-125 transition-all ease-in" />
      </div>
      <div className="flex space-x-5 mt-10 text-5xl text-gray-500 dark:text-gray-300 lg:text-7xl">
        <SiJquery className="hover:text-blue-900 hover:scale-125 transition-all ease-in" />
        <FaReact className="hover:text-sky-500 hover:scale-125 transition-all ease-in" />
        <SiTailwindcss className="hover:text-sky-500 hover:scale-125 transition-all ease-in" />
        <FaGitAlt className="hover:text-orange-600 hover:scale-125 transition-all ease-in" />
      </div>
    </div>
  );
};

export default Skills;
