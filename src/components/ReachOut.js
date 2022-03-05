import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";

const ReachOut = () => {
  return (
    <div className="flex space-x-5 text-3xl text-sky-500">
      <a
        href="https://github.com/CMSOTO2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub className="cursor-pointer hover:animate-pulse" />
      </a>
      <a
        href="https://www.linkedin.com/in/carlos-soto-391203230/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin className="cursor-pointer hover:animate-pulse" />
      </a>
    </div>
  );
};

export default ReachOut;
