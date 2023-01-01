import vk_image from "../../assets/vk_banner_image.jpg";
import Typewriter from "typewriter-effect";
import { motion as fm } from "framer-motion";

type Props = {};

const HomeIntro = (props: Props) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-[80vh] px-4 md:px-10 lg:px-60 2xl:px-72 gap-20 md:gap-8 flex-shrink-0 mt-32 md:my-20 lg:my-10">
      <div className=" min-w-max">
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
          className=" rounded-[50%] w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-fill shadow-md shadow-slate-800/80 dark:shadow-blue-900/50"
        />
      </div>
      <div className="flex flex-col gap-8">
        <h1 className=" text-3xl lg:text-4xl md:text-4xl 2xl:text-7xl font-black tracking-widest">J S Vignesh Kanna</h1>
        <h3 className="text-lg lg:text-xl md:text-xl 2xl:text-3xl font-semibold tracking-widest text-red-600 dark:text-blue-600">
          <Typewriter
            options={{
              strings: [
                "I am a Software Engineer 🧑‍💻",
                "I am a Freelancer 🎨",
                "I am a Content Creator 📸",
                "I am a Blogger ✍️",
              ],
              cursor: " | ",
              delay: 40,
              deleteSpeed: 30,
              loop: true,
              autoStart: true,
            }}
          />
        </h3>
        <p className="font-medium text-lg ">
          I have been coding for last 7 years (whoof). I started with plain HTML and CSS3 for making website clones and
          gradually moved to newer frameworks. I am working as full-time software engineer in `Gain Credit`. I also do
          freelance works on mobile and web app development. I started writing technology blogs from 2023 as a new year
          resolution which you can find below.
        </p>
      </div>
    </div>
  );
};

export default HomeIntro;
