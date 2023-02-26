import workExperiences from "../../data/workExperience";
import WorkExperienceSection from "./WorkExperienceSection";

type Props = {};

const WorkExperiences = (props: Props) => {
  return (
    <div className="mt-24 px-6 md:px-10 lg:px-60 2xl:px-72">
      <p className="text-lg md:text-xl lg:text-2xl font-bold underline underline-offset-8 decoration-cyan-500 dark:decoration-blue-500 text-center lg:text-left">
        My Journey into software engineering
      </p>
      <div className="w-full mt-6 flex flex-col justify-center items-start relative gap-8 py-5 md:py-16">
        {/* middle line */}
        <div className="w-1 md:w-[6px] bg-gradient-to-b from-cyan-500 to-orange-500 dark:from-blue-500 dark:to-rose-500 h-full rounded-full absolute top-0 left-3 md:left-[50%]"></div>

        {workExperiences.map((workExperience) => {
          if (workExperience.id % 2 != 0) {
            return (
              <div className="w-full flex flex-row ml-10 md:ml-0 justify-start md:justify-start items-center">
                <WorkExperienceSection
                  id={workExperience.id}
                  companyName={workExperience.companyName}
                  designation={workExperience.designation}
                  place={workExperience.place}
                  duration={workExperience.duration}
                  skills={workExperience.skills}
                  description={workExperience.description}
                />
              </div>
            );
          } else {
            return (
              <div className="w-full flex flex-row ml-10 md:ml-0 justify-start md:justify-end items-center">
                <WorkExperienceSection
                  id={workExperience.id}
                  companyName={workExperience.companyName}
                  designation={workExperience.designation}
                  place={workExperience.place}
                  duration={workExperience.duration}
                  skills={workExperience.skills}
                  description={workExperience.description}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default WorkExperiences;
