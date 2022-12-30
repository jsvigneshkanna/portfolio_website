import { getAllProjects } from "../../sanity/api";
import { useState, useEffect } from "react";

type Props = {};

const Projects = (props: Props) => {
  const [projects, setProjects] = useState([]);
  console.log("test3");
  useEffect(() => {
    console.log("test2");
    const fetchProjects = async () => {
      const cmsProjects = await getAllProjects();
      console.log("fafa", cmsProjects);

      setProjects(cmsProjects);
    };
    console.log("test1");

    fetchProjects();
  }, [projects]);

  return <div className="px-4 md:px-10 lg:px-60 2xl:px-72 mt-8">{projects}</div>;
};

export default Projects;
