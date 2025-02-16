import { useEffect } from "react";
import { projects } from "../../constants";
import ScrollReveal from "scrollreveal";
import ProjectCard from "../cards/ProjectCard";

const Projects = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".projects", {
      duration: 1000,
      distance: "50px",
      easing: "ease-in-out",
      origin: "left",
      reset: true,
    });
    sr.reveal(".project1", {
      duration: 1000,
      distance: "50px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });
    sr.reveal(".project2", {
      duration: 1400,
      distance: "50px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });
    sr.reveal(".project3", {
      duration: 1400,
      distance: "50px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });
    sr.reveal(".project4", {
      duration: 1400,
      distance: "50px",
      easing: "ease-in-out",
      origin: "right",
      reset: true,
    });
    sr.reveal(".project5", {
      duration: 1400,
      distance: "50px",
      easing: "ease-in-out",
      origin: "right",
      reset: true,
    });
    sr.reveal(".project6", {
      duration: 1400,
      distance: "50px",
      easing: "ease-in-out",
      origin: "right",
      reset: true,
    });

    return () => {
      sr.clean(".project1");
      sr.clean(".project2");
      sr.clean(".project3");
      sr.clean(".project4");
      sr.clean(".project5");
      sr.clean(".project6");
    };
  }, []);
  return (
    <section
      className="container mx-auto py-[130px] overflow-x-hidden"
      id="projects"
    >
      <h1 className="text-center text-white text-4xl font-bold mb-20">
        projects
      </h1>
      <div className="flex flex-wrap justify-center gap-5 projects">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
