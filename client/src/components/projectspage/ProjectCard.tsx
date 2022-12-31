import { urlFor } from "../../sanity/api";
import PortableText from "react-portable-text";

type Props = {
  projectDetails: any;
};

const ProjectCard = (props: Props) => {
  const projectDetails = props.projectDetails;
  return (
    <div className=" w-[320px] lg:w-[400px] bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg overflow-hidden">
      <img src={urlFor(projectDetails.thumbnailImage.asset._ref).url()} alt="project image" className=" " />
      <h3 className="mt-5 font-bold text-lg text-center">{projectDetails.title}</h3>
      <PortableText content={projectDetails.body} />
    </div>
  );
};

export default ProjectCard;
