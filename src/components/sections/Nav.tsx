import Scrollspy from "react-scrollspy";
import { navLinks } from "../../constants";

import { TbMail, TbMailFilled } from "react-icons/tb";
import { RiUser3Line, RiUser3Fill } from "react-icons/ri";

import { GoHome, GoHomeFill } from "react-icons/go";

import { FaRegFolder, FaFolder } from "react-icons/fa";

import { useEffect, useState } from "react";
const mobileNav = [
  {
    icon: <GoHome />,
    active: <GoHomeFill />,
    href: "home",
  },
  {
    icon: <RiUser3Line />,
    active: <RiUser3Fill />,
    href: "about",
  },

  {
    icon: <FaRegFolder />,
    active: <FaFolder />,
    href: "projects",
  },
  {
    icon: <TbMail />,
    active: <TbMailFilled />,
    href: "contact",
  },
];
const Nav = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navElement = document.getElementById("mobileNav");
    navElement?.childNodes[0].childNodes.forEach((element: any) => {
      if (element.classList.contains("active")) {
        setActiveSection(element.innerText.toLowerCase());
      }
    });
  }, [scrollPosition]);

  return (
    <>
      {/* D E S K T O P - N A V */}
      <header
        className={`fixed top-0 left-0 hidden md:block w-full z-50 mx-0 animate__animated animate__fadeInDown`}
      >
        <nav
          className="max-w-[500px] w-full mt-5 mx-auto p-2 md:p-4 rounded-lg bg-[#222433]"
          id="mobileNav"
        >
          <Scrollspy
            items={["home", "about", "projects", "contact"]}
            currentClassName="active"
            className="list-none flex flex-row items-center justify-between md:mx-3"
          >
            {navLinks.map((link) => (
              <li
                className="text-white font-medium text-lg md:text-xl relative pb-1 hover:text-primary duration-300 nav__link"
                key={link.label}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </Scrollspy>
        </nav>
      </header>

      {/* M O B I L E - N A V */}
      <nav
        className={`md:hidden fixed bottom-0 left-0  w-full z-50 bg-[#222433]  rounded-t-lg`}
      >
        <Scrollspy
          items={["home", "about", "projects", "contact"]}
          currentClassName="active"
          className="flex items-center justify-between p-4"
        >
          {mobileNav.map((link) => (
            <a
              className={`text-center text-2xl ${
                activeSection === link.href ? "text-primary" : "text-white"
              } hover:text-primary capitalize`}
              href={`#${link.href}`}
              key={link.href}
            >
              {activeSection === link.href ? link.active : link.icon}
            </a>
          ))}
        </Scrollspy>
      </nav>
    </>
  );
};

export default Nav;
