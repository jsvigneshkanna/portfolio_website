import { useState } from "react";
import MobileNavLinks from "./MobileNavLinks";
import DarkModeToggle from "./darkModeToggle";
import { GiHamburgerMenu } from "react-icons/gi/index.js";
import { RiCloseFill } from "react-icons/ri/index.js";
import { motion as fm } from "framer-motion";

type Props = {};

const MobileNavbar = (props: Props) => {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blogs",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact Me",
      href: "/contact",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MenuIcon = isMenuOpen ? <RiCloseFill size={24} /> : <GiHamburgerMenu size={24} />;
  const openAnimationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const closeAnimationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return isMenuOpen ? (
    <fm.div
      variants={openAnimationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-start items-center py-44 gap-16 mx-auto absolute top-0 left-0 w-full h-[100vh] dark:bg-gradient-to-br dark:from-fuchsia-900 bg-gradient-to-bl from-rose-300 to-blue-200 dark:to-blue-800 z-10"
    >
      <div className="absolute top-12 left-6">
        <DarkModeToggle />
      </div>
      <div className="absolute top-12 right-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {MenuIcon}
      </div>
      {navLinks.map((navLink, index) => (
        <MobileNavLinks navHeader={navLink["name"]} navHref={navLink["href"]} key={index} />
      ))}
    </fm.div>
  ) : (
    <div>
      <div className="absolute top-12 right-6">
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>{MenuIcon}</div>
      </div>
      <div className="absolute top-12 left-6">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default MobileNavbar;
