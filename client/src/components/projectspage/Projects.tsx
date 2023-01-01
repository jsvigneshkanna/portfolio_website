import { getAllProjects, getFilterProjects } from "../../sanity/api";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import TechFilter from "../common/TechFilter";

type Props = {};

const Projects = (props: Props) => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const fetchProjects = async () => {
      let cmsProjects: Array<JSON>;
      if (filter === "all") {
        console.log("one");

        cmsProjects = await getAllProjects();
      } else {
        console.log("two");
        cmsProjects = await getFilterProjects(filter);
      }
      setProjects(cmsProjects);
    };
    fetchProjects();
  }, [filter]);
  return (
    <div className="px-8 md:px-10 lg:px-60 2xl:px-72 mt-8">
      {/* <TechFilter setFilterValue={setFilter} /> */}
      <div className="flex flex-row flex-wrap bg-slate-200 dark:bg-slate-700 px-2 py-2 rounded-3xl gap-4 justify-start items-center">
        <button
          className=" min-w-max px-2 bg-slate-700 dark:bg-slate-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className=" min-w-max px-2 bg-green-700 dark:bg-green-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
          onClick={() => setFilter("reactjs")}
        >
          ReactJS
        </button>
        <button
          className=" min-w-max px-2 bg-orange-700 dark:bg-blue-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
          onClick={() => setFilter("nextjs")}
        >
          NextJS
        </button>
        <button
          className=" min-w-max px-2 bg-pink-700 dark:bg-pink-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
          onClick={() => setFilter("js")}
        >
          Javascript
        </button>
        <button
          className=" min-w-max px-2 bg-red-700 dark:bg-red-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
          onClick={() => setFilter("css")}
        >
          CSS
        </button>
        <button
          className=" min-w-max px-2 bg-yellow-700 dark:bg-yellow-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
          onClick={() => setFilter("html")}
        >
          HTML
        </button>
        <button
          className=" min-w-max px-2 bg-cyan-700 dark:bg-cyan-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
          onClick={() => setFilter("tailwindcss")}
        >
          TailwindCSS
        </button>
        <button
          className=" min-w-max px-2 bg-rose-700 dark:bg-rose-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
          onClick={() => setFilter("api")}
        >
          API
        </button>
        <button
          className=" min-w-max px-2 bg-sky-700 dark:bg-sky-200 text-white dark:text-black rounded-3xl border-[1px] border-blue-500"
          onClick={() => setFilter("astro")}
        >
          AstroDEV
        </button>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center mt-12">
        {projects.map((project) => {
          return <ProjectCard projectDetails={project} key={project._id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
