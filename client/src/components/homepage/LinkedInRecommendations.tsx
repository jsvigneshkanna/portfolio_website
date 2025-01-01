import LinkedInRecommnedation from "../../assets/linkedin_recommendations.png";
import { motion as fm } from "framer-motion";

type Props = {};

const LinkedInRecommendations = (props: Props) => {
  return (
    <div className="mt-24 px-6 md:px-10 lg:px-60 2xl:px-72">
      <p className="text-lg md:text-xl lg:text-2xl font-bold underline underline-offset-8 decoration-fuchsia-500 dark:decoration-yellow-500 text-center">
        My LinkedIn Recommendations
      </p>
      <fm.div
        className="mt-10 lg:mt-14 w-full"
        initial={{
          y: 80,
          x: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1 }}
      >
        <a
          href="https://www.linkedin.com/in/jsvigneshkanna/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          <img
            src={LinkedInRecommnedation.src}
            alt="linkedin recommendation"
            className="w-[100%] md:w-[75%] rounded-lg object-cover shadow-md shadow-slate-900/40 hover:shadow-lg hover:shadow-slate-900/60 dark:shadow-blue-600/50"
          />
        </a>
      </fm.div>
    </div>
  );
};

export default LinkedInRecommendations;
