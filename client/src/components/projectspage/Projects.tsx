import { getAllProjects, getFilterProjects } from "../../sanity/api";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
// import TechFilter from "../common/TechFilter";
import { FidgetSpinner } from "react-loader-spinner";

type Props = {};

const Projects = (props: Props) => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState<string>("all");
  const [projectLoaded, setProjectLoaded] = useState<boolean>(false);
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
      setProjectLoaded(true);
    };
    fetchProjects();
  }, [filter]);
  return (
    <div className="px-8 md:px-10 lg:px-60 2xl:px-72 mt-8">
      {/* <TechFilter setFilterValue={setFilter} /> */}

      {/* Tech filters */}
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

      <p className="mt-4 font-bold text-lg">
        <span className="underline underline-offset-8 decoration-red-500 uppercase decoration-[4px]">{filter}</span>{" "}
        projects shown 🔥
      </p>

      {/* Project showcase  */}
      {projectLoaded ? (
        <div className="flex flex-wrap gap-10 justify-between items-center mt-12">
          {projects.length != 0 ? (
            projects.map((project) => {
              return <ProjectCard projectDetails={project} key={project._id} />;
            })
          ) : (
            <p className="flex justify-center items-center mx-auto bg-blue-400 dark:bg-blue-700 text-black dark:text-white p-5 rounded-3xl shadow-md shadow-blue-400 dark:shadow-blue-900 mt-6 font-semibold text-lg text-center">
              😥 No projects done in this technology, Will sure make one in this for you 🫵
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col mx-auto justify-center items-center mt-20">
          <FidgetSpinner
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={["#bf00ff", "#ff0000", "#2eb82e"]}
            backgroundColor="#2e2eb8"
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
