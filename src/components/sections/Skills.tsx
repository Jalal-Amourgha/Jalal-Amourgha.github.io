import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaPython,
  FaSass,
  FaGitAlt,
} from "react-icons/fa6";
import { SiElasticcloud } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiNextdotjs,
  SiMongodb,
  SiPhp,
  SiJquery,
  SiJest,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import SkillCard from "../cards/SkillCard";

const skillsIcons = [
  { icon: <SiElasticcloud />, alt: "C" },
  { icon: <RiJavascriptFill />, alt: "Javascript" },
  { icon: <BiLogoTypescript />, alt: "Typescript" },
  { icon: <SiPhp />, alt: "php" },
  { icon: <FaPython />, alt: "Python" },
  { icon: <FaHtml5 />, alt: "HTML" },
  { icon: <FaCss3Alt />, alt: "CSS" },
  { icon: <SiNextdotjs />, alt: "Next js" },
  { icon: <FaReact />, alt: "React" },
  { icon: <RiTailwindCssFill />, alt: "Tailwind CSS" },
  { icon: <FaBootstrap />, alt: "Bootstrap" },
  { icon: <FaSass />, alt: "sass" },
  { icon: <SiMongodb />, alt: "MongoDB" },
  { icon: <GrMysql />, alt: "mySQL" },
  { icon: <IoLogoFirebase />, alt: "firebase" },
  { icon: <SiJquery />, alt: "jQuery" },
  { icon: <SiJest />, alt: "Jest js" },
  { icon: <FaGitAlt />, alt: "git" },
];

const Skills = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".skills", {
      duration: 1500,
      distance: "50px",
      easing: "ease-in-out",
      origin: "right",
      reset: true,
    });

    return () => {
      sr.clean(".skills");
    };
  }, []);

  return (
    <section
      className="max-w-[800px] w-full mx-auto py-[100px] skills"
      id="skills"
    >
      <h1 className="text-center mb-20">
        <span className="text-primary">S</span>kills
      </h1>
      <div className="flex flex-wrap mx-auto justify-center gap-5 skills">
        {skillsIcons.map((item, index) => (
          <SkillCard icon={item.icon} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
