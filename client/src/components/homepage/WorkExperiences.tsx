import workExperiences from "../../data/workExperience";
import WorkExperienceSection from "./WorkExperienceSection";
import { motion as fm } from "framer-motion";

type Props = {};

const WorkExperiences = (props: Props) => {
  return (
    <div className="mt-32 px-6 md:px-10 lg:px-60 2xl:px-72">
      <p className="text-lg md:text-xl lg:text-2xl font-bold underline underline-offset-8 decoration-cyan-500 dark:decoration-blue-500 text-center decoration-3">
        My Journey into software engineering
      </p>
      <div className=" mt-6 flex flex-col overflow-hidden justify-center items-start relative gap-8 py-5 md:py-20">
        {/* middle line */}
        <div className="w-1  md:w-[6px]  bg-gradient-to-b from-orange-500 to-emerald-600 dark:from-rose-500 dark:to-blue-500 h-full rounded-full absolute top-0 left-4 md:left-[50%]"></div>

        {workExperiences.map((workExperience) => {
          if (workExperience.id % 2 != 0) {
            return (
              <fm.div
                key={workExperience.id}
                className="md:w-full flex flex-row ml-10 md:ml-0 justify-start md:justify-start items-center"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <WorkExperienceSection
                  id={workExperience.id}
                  companyName={workExperience.companyName}
                  designation={workExperience.designation}
                  place={workExperience.place}
                  duration={workExperience.duration}
                  skills={workExperience.skills}
                  description={workExperience.description}
                />
              </fm.div>
            );
          } else {
            return (
              <fm.div
                key={workExperience.id}
                className="md:w-full flex flex-row ml-10 md:ml-0 justify-start md:justify-end items-center"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <WorkExperienceSection
                  id={workExperience.id}
                  companyName={workExperience.companyName}
                  designation={workExperience.designation}
                  place={workExperience.place}
                  duration={workExperience.duration}
                  skills={workExperience.skills}
                  description={workExperience.description}
                />
              </fm.div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default WorkExperiences;
