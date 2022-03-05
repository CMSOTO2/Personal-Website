import React from "react";
import Project from "./Project";
import { FaReact, FaHtml5, FaSass, FaCss3 } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJquery,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";
import hulu from "../assets/hulupage.PNG";
import portfolio from "../assets/portfolio-site.png";
import drDione from "../assets/Dr.Dione.png";
import DemocracyMatters from "../assets/democracyMatters.PNG";

const Projects = () => {
  return (
    <section id="Projects" className=" mt-10 max-w-screen-2xl mx-auto lg:mb-52">
      <h1 className="text-6xl text-sky-500 mb-10 text-center">Projects</h1>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2  2xl:grid-cols-4 mx-10 gap-5">
        <Project
          key={1}
          img={hulu}
          title={"Hulu Clone"}
          techStack={[<FaReact />, <SiNextdotjs />, <SiTailwindcss />]}
          description={
            "Fully responsive recreation of Hulu using Next.js,tailwindcss, tmdb(the movie database) api!"
          }
          liveDemo={"https://hulu-clone-c3biumt1a-cmsoto2.vercel.app/"}
          repo={"https://github.com/CMSOTO2/hulu-clone"}
        />
        <Project
          key={2}
          img={DemocracyMatters}
          title={"Democracy Matters"}
          techStack={[
            [<FaHtml5 />, <FaSass />, <SiJavascript />, <SiJquery />],
          ]}
          description={
            "Front End Freelance Client Site made using HTML, SASS, JavaScript. jQuery to utilize the 'slick slider' carousel library"
          }
          liveDemo={"https://www.democracymatters.org/"}
          repo={"https://github.com/CMSOTO2/Democracy-Matters"}
        />
        <Project
          key={3}
          img={drDione}
          liveDemo={"https://drdione.com/"}
          repo={"https://github.com/CMSOTO2/Dr-Dione"}
          title={"Dr Dione"}
          techStack={[<FaHtml5 />, <FaSass />, <SiJavascript />, <SiJquery />]}
          description={
            "Free Lance Client made using HTML, SCSS, JQuery and Javascript!"
          }
        />
        <Project
          key={4}
          img={portfolio}
          title={"Portfolio Site"}
          techStack={[<FaReact />, <SiTailwindcss />]}
          description={
            "My personal site, made using React.js and tailwindcss. Features including Animate on scroll, light/dark mode, and smooth scrolling"
          }
        />
      </div>
    </section>
  );
};

export default Projects;
