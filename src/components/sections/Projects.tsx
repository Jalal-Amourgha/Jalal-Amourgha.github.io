import { projects } from "../../constants";
import { TbArrowUpRight } from "react-icons/tb";

const Projects = () => {
  return (
    <section className="container mx-auto py-[130px]" id="projects">
      <h1 className="text-center text-white text-4xl font-bold mb-20">
        projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
        {projects.map((project) => (
          <div
            className="bg-bg-color p-2 sm:p-4 border-1 border-gray-1 rounded-3xl hover:border-primary project__box"
            key={project.id}
          >
            <div className="rounded-3xl overflow-hidden">
              <a href={project.git_link} target="_blank">
                <img
                  src={project.img}
                  className="max-w-full object-cover hover:scale-105 duration-300 cursor-pointer"
                  alt={project.name}
                />
              </a>
            </div>

            <a
              href={project.git_link}
              className="text-3xl font-bold capitalize text-white hover:text-primary line-clamp-1 mt-5 mb-3 w-fit duration-200 project__title"
              target="_blank"
            >
              {project.name}
            </a>

            <p className="text-justify">{project.description}</p>
            <div className="flex justify-between items-center list-none mt-10">
              <ul className="flex flex-row items-center">
                {project.technologies.map((techno, index) => (
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
              <div className="flex flex-row gap-3 text-white text-2xl">
                <a
                  className="flex items-center gap-1 hover:text-primary duration-150"
                  href={project.web_link}
                  target="_blank"
                >
                  <span className="text-base roboto font-light">
                    Check Live Site
                  </span>
                  <TbArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
