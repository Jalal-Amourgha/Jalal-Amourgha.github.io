import { useEffect } from "react";
import { paragraphs } from "../../constants";
import { FaCircle } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".about", {
      duration: 1800,
      distance: "50px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });

    return () => {
      sr.clean(".about");
    };
  }, []);
  return (
    <section className="max-w-[1000px] mx-auto py-[130px] about" id="about">
      <h1 className="text-center text-white text-4xl font-bold mb-20">
        About <span className="text-primary">me</span>
      </h1>
      <div className="flex flex-col gap-5">
        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            <p className="text-justify">{paragraph.paragraph}</p>
            {paragraph.project ? (
              <ul className="flex flex-col list-disc list-inside gap-3 mt-5 text-white">
                {paragraph.projects.map((project, index) => (
                  <li
                    className=" md:grid md:grid-cols-[170px_calc(100%-178px)] gap-2 font-light"
                    key={index}
                  >
                    <div className="hidden md:flex items-center justify-between gap-1 font-bold text-base w-full">
                      <span className="flex items-center gap-1">
                        <FaCircle size="6" color="#ffffff" />
                        {project.label}
                      </span>
                      <span>:</span>
                    </div>
                    <span className="md:hidden text-base font-bold">
                      {project.label} :
                    </span>{" "}
                    {project.paragraph}
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
