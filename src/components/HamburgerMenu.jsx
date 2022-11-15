import { MdClose } from "react-icons/md/index";
import { GiHamburgerMenu } from "react-icons/gi/index";
import { useState, useEffect } from "react";
import NavLink from "./NavLink.astro";
import vk_logo from "../assets/vk-round-logo.png";
import DarkModeToggle from "../components/darkModeToggle";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const displayMenu = () => {
    if (isMenuOpen) {
      return "z-90 flex small-screen-header flex-col justify-center items-center gap-8 my-8";
    } else {
      return "hidden";
    }
  };

  return (
    <div className="flex flex-col justify-center items-stretch w-full">
      <div className="flex justify-between">
        <DarkModeToggle />
        <div className="rounded-full shadow-md shadow-slate-700 dark:shadow-indigo-500/40">
          <img src={vk_logo} alt="logo" class="w-10 md:w-14" />
        </div>
        <button type="button" onClick={showMenu} className="p-2 hover:scale-110 active:scale-90 transition-transform">
          {isMenuOpen ? <MdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <div className={displayMenu()}>
        <a className="font-bold text-base hover:text-zinc-600 hover:dark:text-blue-400 transition-transform" href="/">
          Home
        </a>
        <a
          className="font-bold text-base hover:text-zinc-600 hover:dark:text-blue-400 transition-transform"
          href="/blogs"
        >
          Blog
        </a>
        <a
          className="font-bold text-base hover:text-zinc-600 hover:dark:text-blue-400 transition-transform"
          href="contact"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
