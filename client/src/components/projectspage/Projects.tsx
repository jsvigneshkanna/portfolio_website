import { getAllProjects } from "../../sanity/api";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const cmsProjects = await getAllProjects();

      setProjects(cmsProjects);
    };

    fetchProjects();
  }, []);

  return (
    <div className="px-8 md:px-10 lg:px-60 2xl:px-72 mt-8">
      <div className="flex flex-wrap gap-10 justify-between items-center mt-12">
        {projects.map((project) => {
          return <ProjectCard projectDetails={project} key={project._id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
