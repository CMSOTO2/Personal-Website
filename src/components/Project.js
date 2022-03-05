import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({ img, title, description, techStack, liveDemo, repo }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="w-full border-2 border-gray-500 dark:border-gray-300 mt-5 flex flex-col sm:w-[350px] h-[650px] relative"
      key={Project.id}
    >
      <img className="w-full h-72 object-cover" src={img} alt="" />
      <h2 className="text-2xl py-2 text-sky-500 text-center">{title}</h2>
      <hr />
      <div className="flex space-x-5 items-center justify-center py-2 text-3xl text-gray-500 dark:text-gray-300">
        {techStack}
      </div>
      <hr />
      <p className="py-2 px-5 dark:text-gray-300">{description}</p>
      <div
        className="space-x-5 self-center mt-5 mb-5
      absolute bottom-0"
      >
        <a
          href={liveDemo}
          target="_blank"
          rel="noreferrer"
          className="border-2 border-sky-500 rounded-full px-5 py-2 shadow-lg hover:scale-110 cursor-pointer dark:text-gray-300 inline-block"
        >
          Live Demo
        </a>
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="border-2 bg-sky-500 text-white border-none rounded-full px-5 py-2 hover:bg-sky-400 shadow-lg hover:scale-110 cursor-pointer inline-block"
        >
          Source
        </a>
      </div>
    </div>
  );
};

export default Project;
