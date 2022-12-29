import { useState } from "react";
import MobileNavLinks from "./MobileNavLinks";
import DarkModeToggle from "./darkModeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

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
  return isMenuOpen ? (
    <div
      className="flex flex-col justify-center items-center gap-20 py-20 pt-40 mx-auto absolute top-0 left-0 w-full
    dark:bg-gradient-to-br dark:from-purple-900 bg-gradient-to-bl from-blue-300 to-orange-400 dark:to-cyan-800 z-10"
    >
      <div className="absolute top-10 left-6">
        <DarkModeToggle />
      </div>
      <div className="absolute top-12 right-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {MenuIcon}
      </div>
      {navLinks.map((navLink, index) => (
        <MobileNavLinks navHeader={navLink["name"]} navHref={navLink["href"]} key={index} />
      ))}
    </div>
  ) : (
    <div>
      <div className="absolute top-10 right-6">
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>{MenuIcon}</div>
      </div>
      <div className="absolute top-8 left-6">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default MobileNavbar;
