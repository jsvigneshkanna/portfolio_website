import vk_image from "../assets/vk_banner_image.jpg";
import Typewriter from "typewriter-effect";

type Props = {};

const HomeIntro = (props: Props) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center h-[80vh] px-4 md:px-10 lg:px-60 2xl:px-72 gap-20 md:gap-8 flex-shrink-0 my-20 lg:my-10">
      <div className=" min-w-max">
        <img
          src={vk_image}
          alt="vignesh kanna image"
          className=" rounded-[50%] w-60 h-60 lg:w-80 lg:h-80 object-fill"
        />
      </div>
      <div className="flex flex-col gap-8">
        <h1 className=" text-3xl lg:text-4xl md:text-4xl 2xl:text-7xl font-black tracking-widest">J S Vignesh Kanna</h1>
        <h3 className="text-lg lg:text-xl md:text-xl 2xl:text-3xl font-semibold tracking-widest text-red-400 dark:text-blue-500">
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non obcaecati suscipit, officiis dolor, eaque labore
          rerum cum consectetur maxime quae vero sit eveniet qui aut. Eaque neque soluta facilis adipisci.
        </p>
      </div>
    </div>
  );
};

export default HomeIntro;
