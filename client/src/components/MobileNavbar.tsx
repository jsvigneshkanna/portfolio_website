import { useState } from "react";
import MobileNavLinks from "./MobileNavLinks";

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
  return (
    <div>
      {navLinks.map((navLink) => (
        <MobileNavLinks navHeader={navLink["name"]} navHref={navLink["href"]} />
      ))}
    </div>
  );
};

export default MobileNavbar;
