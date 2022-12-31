import { urlFor } from "../../sanity/api";

type Props = {
  projectDetails: any;
};

const ProjectCard = (props: Props) => {
  const projectDetails = props.projectDetails;
  return (
    <div className=" w-[280px] md:w-[400px] bg-zinc-100 hover:bg-zinc-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg overflow-hidden flex-grow hover:scale-105">
      <img src={urlFor(projectDetails.thumbnailImage.asset._ref).url()} alt="project image" />
      <div className="w-[90%] flex flex-col justify-center items-center mx-auto py-2 md:py-5 gap-4">
        <h3 className=" font-extrabold text-lg md:text-xl text-center text-blue-600 dark:text-orange-600">
          {projectDetails.title}
        </h3>
        <p className=" text-center font-semibold">{projectDetails.projectDesc}</p>
      </div>

      {/* Tech icons */}
      <div></div>
    </div>
  );
};

export default ProjectCard;
