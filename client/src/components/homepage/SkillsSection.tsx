import Skill from "./Skill";
import SkillDetails from "../../data/SkillDetails";

type Props = {};

const SkillsSection = (props: Props) => {
  return (
    <div className="mt-32 px-6 md:px-10 lg:px-60 2xl:px-72 ">
      <p className="text-lg md:text-xl lg:text-2xl font-bold underline underline-offset-8 decoration-slate-800 dark:decoration-violet-300 text-center decoration-3">
        My Skills
      </p>
      <p className="text-sm md:text-base lg:text-lg font-medium text-center mt-7 tracking-wider md:tracking-[6px] text-rose-600 dark:text-slate-500">
        Hover over a skill for my current profieciency
      </p>
      <div className="w-full flex justify-center items-center">
        <div className="mt-12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-8 ">
          {SkillDetails.map((skillDetail) => {
            return <Skill name={skillDetail.name} value={skillDetail.value} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
