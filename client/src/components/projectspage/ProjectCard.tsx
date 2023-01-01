import { urlFor } from "../../sanity/api";
import TechIcons from "../common/TechIcons";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa/index.js";
import GithubBtn from "../buttons/GithubBtn";
import DemoLink from "../buttons/DemoLink";

type Props = {
  projectDetails: any;
};

const ProjectCard = (props: Props) => {
  const projectDetails = props.projectDetails;
  const getTechUsed = (techUsed: string) => {
    return techUsed.split(",");
  };
  const techUseds = getTechUsed(projectDetails.techUsed);
  return (
    <div className=" w-[280px] md:w-[400px] bg-zinc-100 hover:bg-zinc-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg overflow-hidden flex-grow hover:scale-105">
      <img src={urlFor(projectDetails.thumbnailImage.asset._ref).url()} alt="project image" />
      <div className="w-[90%] flex flex-col justify-center items-center mx-auto py-3 md:py-5 gap-4">
        <h3 className=" font-extrabold text-lg md:text-xl text-center text-blue-600 dark:text-orange-600">
          {projectDetails.title}
        </h3>
        <p className=" text-center font-semibold">{projectDetails.projectDesc}</p>
        {/* Tech icons */}
        <div className="flex flex-row flex-wrap gap-8 text-2xl justify-center items-center">
          {techUseds.map((techUsed, index) => {
            return <TechIcons tech={techUsed} key={index} />;
          })}
        </div>
        {/* Github and demo link */}
        <div className="flex flex-row justify-between items-center gap-12 text-lg">
          {projectDetails.githubUrl ? (
            <a href={projectDetails.githubUrl} rel="noreferrer" target="_blank">
              <GithubBtn />
            </a>
          ) : (
            ""
          )}

          {projectDetails.projectUrl ? (
            <a href={projectDetails.projectUrl} rel="noreferrer" target="_blank">
              <DemoLink />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
