import React from "react";

type Props = {
  id: number;
  companyName: string;
  designation: string;
  place: string;
  duration: string;
  skills: Array<string>;
  description: string;
};

const WorkExperienceSection = (props: Props) => {
  return (
    <div className="w-[90%] md:w-[46%]">
      <div className="flex flex-row justify-start items-center gap-3 w-full ">
        <p className="w-6 md:w-8 h-6 md:h-8 bg-indigo-200 shadow-md shadow-slate-900/30 dark:bg-orange-500 dark:shadow-fuchsia-900/60 rounded-full flex justify-center items-center font-medium">
          {props.id}
        </p>
        <p className=" w-[calc(100%-28px)] md:w-[calc(100%-36px)] text-slate-900 dark:text-slate-50 font-semibold tracking-normal lg:tracking-wide text-base lg:text-lg ">
          {props.companyName} · {props.designation}
        </p>
      </div>
      <p className="text-fuchsia-800 dark:text-cyan-500  tracking-wider font-normal md:font-medium mt-2">
        {props.duration}
      </p>
      <p className="text-sm md:text-[15px] 2xl:text-base font-normal text-slate-800 dark:text-slate-300 mt-2">
        {props.description}
      </p>
      <div className="flex flex-row flex-wrap justify-start items-center gap-2 mt-3">
        <p className="text-sm md:text-base">Skills: </p>
        {props.skills.map((skill) => {
          return (
            <p className="px-2 py-1 rounded-md bg-indigo-200 shadow-md shadow-slate-900/30 dark:bg-slate-800 dark:shadow-slate-900 text-xs md:text-sm font-medium capitalize">
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperienceSection;
