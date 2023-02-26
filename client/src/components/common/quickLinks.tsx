import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from "react-icons/ai/index.js";
import { SiDiscord, SiTwitch } from "react-icons/si/index.js";

type Props = {};

const QuickLinks = (props: Props) => {
  return (
    <div className="px-6 md:px-10 lg:px-60 2xl:px-72 mt-12 flex flex-col justify-center items-center lg:items-start gap-3">
      <p className="text-lg md:text-xl lg:text-2xl font-bold underline underline-offset-8 decoration-orange-500 dark:decoration-rose-500">
        Quick Links
      </p>
      <div className="flex flex-row flex-wrap gap-12 lg:gap-6 mt-4 justify-center items-center lg:justify-start">
        <a
          className="flex flex-row gap-2 shadow-md shadow-slate-800/30 dark:shadow-indigo-500/20 justify-center font-normal md:font-medium items-center px-3 p-2 rounded-lg bg-indigo-200 dark:bg-slate-800 hover:outline outline-2 outline-fuchsia-800 cursor-pointer dark:outline-violet-500"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/jsvigneshkanna"
        >
          <AiFillGithub size={24} /> Github
        </a>
        <a
          className="flex flex-row gap-2 justify-center shadow-md shadow-slate-800/30 dark:shadow-indigo-500/20 font-normal md:font-medium items-center px-3 p-2 rounded-lg bg-indigo-200 dark:bg-slate-800 hover:outline outline-2 outline-fuchsia-800 cursor-pointer dark:outline-violet-500"
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/@vkdotdev"
        >
          <AiFillYoutube size={24} /> Youtube
        </a>
        <a
          className="flex flex-row gap-2 justify-center shadow-md shadow-slate-800/30 dark:shadow-indigo-500/20 font-normal md:font-medium items-center px-3 p-2 rounded-lg bg-indigo-200 dark:bg-slate-800 hover:outline outline-2 outline-fuchsia-800 cursor-pointer dark:outline-violet-500"
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/EBhuUECQBQ"
        >
          <SiDiscord size={24} /> Discord
        </a>
        <a
          className="flex flex-row gap-2 justify-center shadow-md shadow-slate-800/30 dark:shadow-indigo-500/20 font-normal md:font-medium items-center px-3 p-2 rounded-lg bg-indigo-200 dark:bg-slate-800 hover:outline outline-2 outline-fuchsia-800 cursor-pointer dark:outline-violet-500"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jsvigneshkanna/"
        >
          <AiFillLinkedin size={24} /> LinkedIn
        </a>
        <a
          className="flex flex-row gap-2 justify-center shadow-md shadow-slate-800/30 dark:shadow-indigo-500/20 font-normal md:font-medium items-center px-3 p-2 rounded-lg bg-indigo-200 dark:bg-slate-800 hover:outline outline-2 outline-fuchsia-800 cursor-pointer dark:outline-violet-500"
          target="_blank"
          rel="noreferrer"
          href="https://www.twitch.tv/jsvigneshkanna"
        >
          <SiTwitch size={24} /> Twitch
        </a>
      </div>
    </div>
  );
};

export default QuickLinks;
