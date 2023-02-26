import workExperiences from "../../data/workExperience";
import WorkExperienceSection from "./WorkExperienceSection";

type Props = {};

const WorkExperiences = (props: Props) => {
  return (
    <div className="mt-24 px-6 md:px-10 lg:px-60 2xl:px-72">
      <p className="text-lg md:text-xl lg:text-2xl font-bold underline underline-offset-8 decoration-cyan-500 dark:decoration-blue-500">
        My Journey into software engineering
      </p>
      <div className="w-full mt-6 flex flex-col justify-center items-start relative gap-8 py-14">
        {/* middle line */}
        <div className="w-[6px] bg-gradient-to-b from-cyan-500 to-orange-500 dark:from-blue-500 dark:to-rose-500 h-full rounded-full absolute top-0 left-[50%]"></div>

        {workExperiences.map((workExperience) => {
          if (workExperience.id % 2 != 0) {
            return (
              <div className="w-full flex flex-row justify-start items-center">
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
              <div className="w-full flex flex-row justify-end items-center">
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
        {/*         
        <div className="w-full flex flex-row justify-start items-center">
          <div className="w-[46%]">
            <div className="flex flex-row justify-start items-center gap-3 w-full">
              <p className="w-8 h-8 bg-orange-500 rounded-full flex justify-center items-center font-medium">1</p>
              <p className="text-slate-900 dark:text-slate-50 font-semibold tracking-wide">
                ALFA TKG integrated solutions India · Internship
              </p>
            </div>
            <p className="text-slate-700 dark:text-blue-200 text-normal tracking-wider font-medium mt-2">
              Jun 2019 - Jul 2019 (2 months)
            </p>
            <p className="text-sm font-normal text-slate-800 dark:text-slate-300 mt-2">
              I worked in Image processing core team, where we developed a internal tool to detect the engineering
              drawings from civil/ mechanical sheets using C# language and OCR technology
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row justify-end items-center">
          <div className="w-[46%]">
            <div className="flex flex-row justify-start items-center gap-3 w-full">
              <p className="w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center font-medium">2</p>
              <p className="text-slate-900 dark:text-slate-50 font-semibold tracking-wide">
                Indian Institute of Science (IISc) · Winter Intern
              </p>
            </div>
            <p className="text-slate-700 dark:text-blue-200 text-normal tracking-wider font-medium mt-2">
              December 2019 - February 2010 (2 months)
            </p>
            <p className="text-sm font-normal text-slate-800 dark:text-slate-300 mt-2">
              Researched and developed a new Aspect independent face recognition model using machine learning framework
              under Honorary N. Balakrishnan professor in SERC lab.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row justify-start items-center">
          <div className="w-[46%]">
            <div className="flex flex-row justify-start items-center gap-3 w-full">
              <p className="w-8 h-8 bg-teal-500 rounded-full flex justify-center items-center font-medium">1</p>
              <p className="text-slate-900 dark:text-slate-50 font-semibold tracking-wide">
                Gain Credit · Data Engineering Intern
              </p>
            </div>
            <p className="text-slate-700 dark:text-blue-200 text-normal tracking-wider font-medium mt-2">
              January 2021 - May 2021 (5 months)
            </p>
            <p className="text-sm font-normal text-slate-800 dark:text-slate-300 mt-2">
              Worked in Core data engineering team comprising of 12 members as an entry level intern. Finished the
              Apache Airflow project single handedly in span of 3 months comprising
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row justify-end items-center">
          <div className="w-[46%]">
            <div className="flex flex-row justify-start items-center gap-3 w-full">
              <p className="w-8 h-8 bg-rose-500 rounded-full flex justify-center items-center font-medium">4</p>
              <p className="text-slate-900 dark:text-slate-50 font-semibold tracking-wide">
                Gain Credit · Data Engineering Intern
              </p>
            </div>
            <p className="text-slate-700 dark:text-blue-200 text-normal tracking-wider font-medium mt-2">
              January 2021 - May 2021 (5 months)
            </p>
            <p className="text-sm font-normal text-slate-800 dark:text-slate-300 mt-2">
              Worked in Core data engineering team comprising of 12 members as an entry level intern. Finished the
              Apache Airflow project single handedly in span of 3 months comprising
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row justify-start items-center">
          <div className="w-[46%]">
            <div className="flex flex-row justify-start items-center gap-3 w-full">
              <p className="w-8 h-8 bg-slate-700 rounded-full flex justify-center items-center font-medium">5</p>
              <p className="text-slate-900 dark:text-slate-50 font-semibold tracking-wide">
                Gain Credit · Data Engineering Intern
              </p>
            </div>
            <p className="text-slate-700 dark:text-blue-200 text-normal tracking-wider font-medium mt-2">
              January 2021 - May 2021 (5 months)
            </p>
            <p className="text-sm font-normal text-slate-800 dark:text-slate-300 mt-2">
              Worked in Core data engineering team comprising of 12 members as an entry level intern. Finished the
              Apache Airflow project single handedly in span of 3 months comprising
            </p>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default WorkExperiences;
