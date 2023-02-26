import vk_image from "../../assets/profile_dp.jpg";
import Typewriter from "typewriter-effect";
import { motion as fm } from "framer-motion";
import { useState } from "react";

type Props = {};

const HomeIntro = (props: Props) => {
  const [bioType, setBioType] = useState("short");
  return (
    <div
      className={`flex flex-col lg:flex-row justify-center lg:justify-between items-center min-h-[80vh] px-6 md:px-10 lg:px-60 2xl:px-72 gap-8 md:gap-16 mt-40  ${
        bioType === "short" ? "md:mt-10 lg:mt-10" : " md:mt-14 lg:mt-24 2xl:mt-14"
      }  `}
    >
      <div className=" min-w-max">
        <a href="https://github.com/jsvigneshkanna" target="_blank" rel="norefferer">
          <fm.img
            whileHover={{ scale: [1, 1.05, 1.1, 1.05, 1, 0.9, 1], rotate: [0, 15, 0, -10, 0, 15, 0] }}
            whileTap={{ scale: [1, 1.05, 1.1, 1.05, 1, 0.9, 1], rotate: [0, 15, 0, -10, 0, 15, 0] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.1, 0.3, 0.5, 0.7, 0.8, 1],
            }}
            src={vk_image}
            alt="vignesh kanna image"
            className=" rounded-[50%] w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover shadow-lg shadow-fuchsia-700/70 dark:shadow-rose-900/70 cursor-pointer"
          />
        </a>
      </div>
      <div className="flex flex-col gap-8 ">
        <h1 className="text-center lg:text-left text-3xl lg:text-4xl md:text-4xl 2xl:text-7xl font-black tracking-widest">
          J S Vignesh Kanna
        </h1>
        <h3 className="justify-center lg:justify-start items-center text-lg lg:text-xl md:text-xl 2xl:text-3xl font-bold tracking-widest text-blue-600 dark:text-yellow-500 hover:text-orange-500 dark:hover:text-green-500 flex flex-row gap-3">
          I am &lt;
          <Typewriter
            options={{
              strings: ["Software Engineer", "Freelancer", "Content Creator", "Blogger"],
              cursor: "|",
              delay: 40,
              deleteSpeed: 20,
              loop: true,
              autoStart: true,
            }}
          />
          &gt;
        </h3>

        {/* bio types */}
        <div className="flex flex-row gap-8 md:gap-4 justify-center items-center lg:justify-start font-base md:font-medium">
          <h5
            className={`px-3 py-2 bg-violet-200 rounded-lg hover:scale-105 cursor-pointer outline-fuchsia-400 dark:bg-slate-700 outline dark:outline-blue-400 ${
              bioType === "short" ? "outline outline-4 md:outline-[3px]" : "outline-0"
            }`}
            onClick={() => {
              setBioType("short");
            }}
          >
            Short bio
          </h5>
          <h5
            className={`px-3 py-2 bg-violet-200 rounded-lg hover:scale-105 cursor-pointer outline-fuchsia-400 dark:bg-slate-700 dark:outline-blue-400 ${
              bioType === "long" ? "outline outline-4 md:outline-[3px]" : "outline-0"
            }`}
            onClick={() => {
              setBioType("long");
            }}
          >
            Long bio
          </h5>
        </div>
        {bioType === "short" && (
          <p className="font-medium md:font-medium text-base md:text-lg text-slate-700 dark:text-slate-300 mt-3 lg:mt-0">
            I have been coding for last 7 years (whoof). I started with plain HTML and CSS3 for making{" "}
            <span className="underline underline-offset-4 decoration-2 decoration-orange-500 dark:decoration-green-500 hover:bg-orange-500 hover:text-white dark:hover:bg-green-500 dark:hover:text-black">
              <a href="https://vigneshkanna-quizapp.netlify.app/" target="_blank" rel="noreferrer">
                website clones
              </a>
            </span>{" "}
            and gradually moved to newer frameworks. I am working as full-time software engineer in{" "}
            <span className="underline underline-offset-4 decoration-2 decoration-orange-500 dark:decoration-green-500 hover:bg-orange-500 hover:text-white dark:hover:bg-green-500 dark:hover:text-black">
              <a href="https://www.gaincredit.com/" target="_blank" rel="noreferrer">
                Gain Credit
              </a>
            </span>{" "}
            . I also do freelance works on mobile and web app development for{" "}
            <span className="underline underline-offset-4 decoration-2 decoration-orange-500 dark:decoration-green-500 hover:bg-orange-500 hover:text-white dark:hover:bg-green-500 dark:hover:text-black">
              <a href="https://elitexcars.vercel.app/home/" target="_blank" rel="noreferrer">
                Clients
              </a>
            </span>{" "}
            . I started writing technology blogs from 2023 as a new year resolution which you can in the blog section.
          </p>
        )}
        {bioType === "long" && (
          <div className="font-medium md:font-medium text-base md:text-base text-slate-700 dark:text-slate-300 flex flex-col justify-center items-start gap-4">
            <p>
              🔥 Hello and welcome to my portfolio! I am a seasoned software engineer with 3 years of experience in the
              industry and coding for last 7 years (whoof).
            </p>
            <p>
              🤓 My journey began with creating website clones using HTML and CSS3 while studying in TCE Madurai, and
              since then, I have expanded my skillset to include various newer frameworks and technologies.
            </p>
            <p>
              🏢 Currently, I am working full-time as a software engineer-2 at Gain Credit, where I have gained
              extensive experience in developing robust and scalable software applications.
            </p>
            <p>
              ⚒️ In addition to my full-time job, I also take up freelance projects for mobile and web app development,
              where I have had the opportunity to work on diverse projects and explore my creativity. As a tech
              enthusiast, I also enjoy sharing my knowledge with others, and thus, I have started writing technology
              blogs since 2023 as a new year resolution. You can find my latest posts on the blog section of my
              portfolio.
            </p>
            <p>
              😎 My passion for coding, coupled with my experience and expertise, drives me to create innovative and
              impactful solutions for my clients. I am always looking to explore new technologies and trends in the
              industry, and I am committed to continuous learning and growth as a developer. Thank you for visiting my
              portfolio, and I look forward to connecting with you!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeIntro;
