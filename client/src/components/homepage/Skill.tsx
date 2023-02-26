import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaMarkdown,
  FaPython,
  FaAws,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa/index.js";
import {
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiExpo,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiPostman,
  SiCraftcms,
} from "react-icons/si/index.js";
import { RiReactjsLine } from "react-icons/ri/index.js";

type Props = {
  name: string;
  value: string;
};

const skill = {
  css: <FaCss3Alt size={32} />,
  html5: <FaHtml5 size={32} />,
  java: <FaJava size={32} />,
  javascript: <SiJavascript size={32} />,
  markdown: <FaMarkdown size={32} />,
  python: <FaPython size={32} />,
  typescript: <SiTypescript size={32} />,
  aws: <FaAws size={32} />,
  django: <SiDjango size={32} />,
  bootstrap: <FaBootstrap size={32} />,
  expo: <SiExpo size={32} />,
  nodejs: <FaNodeJs size={32} />,
  reactjs: <RiReactjsLine size={32} />,
  tailwindcss: <SiTailwindcss size={32} />,
  mysql: <SiMysql size={32} />,
  postgres: <SiPostgresql size={32} />,
  mongodb: <SiMongodb size={32} />,
  figma: <SiFigma size={32} />,
  postman: <SiPostman size={32} />,
  cms: <SiCraftcms size={32} />,
};
const Skill = (props: Props) => {
  return (
    <div className=" group relative cursor-pointer flex">
      <div className="rounded-full border border-slate-320 bg-slate-800 dark:bg-indigo-100 object-cover filter group-hover:grayscale transition duration-500 ease-in-out p-6 md:p-7 lg:p-10 text-slate-200 dark:text-slate-900">
        {skill[props.name.toLowerCase()]}
      </div>
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-320 ease-in-out dark:group-hover:bg-indigo-100 group-hover:bg-blue-900 w-full h-full rounded-full">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-sm md:text-base lg:text-lg font-medium text-slate-200 dark:text-red-600 opacity-100">
            {props.name}
          </p>
          <p className="text-base md:text-lg lg:text-2xl font-bold text-yellow-400 dark:text-black opacity-100">
            {props.value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
