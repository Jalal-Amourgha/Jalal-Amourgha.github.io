import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MotionDiv } from "../shared/MotionDiv";

const ProjectCard = ({ project, index }: { project: any; index: any }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      // onClick={() => router.push(`/anime/${anime.mal_id}`)}
    >
      <div
        className={`bg-bg-color p-2 sm:p-3 border-1 border-gray-1 rounded-3xl hover:border-primary project__box`}
      >
        <div className="rounded-3xl overflow-hidden">
          <a href={project.web_link} target="_blank">
            <img
              src={project.img}
              className="max-w-full object-cover hover:scale-105 duration-300 cursor-pointer"
              alt={project.name}
            />
          </a>
        </div>

        <a
          href={project.web_link}
          className="text-xl md:text-3xl font-bold capitalize text-white hover:text-primary line-clamp-1 mt-2 md:mt-5 mb-3 w-fit duration-200 project__title"
          target="_blank"
        >
          {project.name}
        </a>

        <p className="text-sm md:text-base  text-justify">
          {project.description}
        </p>
        <div className="flex justify-between items-center list-none mt-10">
          <ul className="flex flex-row items-center">
            {project.technologies.map((techno: any, index: number) => (
              <li
                className={`h-9 w-9 sm:h-10 sm:w-10 bg-bg-color border-1 border-gray-1 rounded-full flex justify-center items-center ${
                  index ? `relative z-[${index + 1}] -ml-1` : ""
                }`}
                key={index}
              >
                <img
                  src={techno}
                  className="w-[20px] sm:w-[25px]"
                  alt="technologie"
                />
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-2xl md:text-3xl text-white">
            <a
              href={project.git_link}
              className="hover:text-primary cursor-pointer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href={project.web_link}
              className="hover:text-primary cursor-pointer"
              target="_blank"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
