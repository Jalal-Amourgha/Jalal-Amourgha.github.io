import { GiCheckMark } from "react-icons/gi";
import { skills } from "../../constants";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
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
      className="max-w-[900px] w-full mx-auto py-[150px] skills"
      id="skills"
    >
      <h1 className="text-center text-white text-4xl font-bold mb-20">
        skills
      </h1>
      <div className="flex flex-col gap-10 ">
        {skills.map((skill, index) => (
          <div key={skill.label}>
            <div className="flex flex-row flex-wrap justify-center  gap-5 ">
              {skill.technologies.map((techno) => (
                <div className="flex items-center gap-2" key={techno}>
                  <GiCheckMark color="#fff" size="21" />{" "}
                  <p className="text-xl md:text-2xl">{techno}</p>
                </div>
              ))}
            </div>
            {index < 2 ? (
              <hr className="max-w-[300px] w-full h-[1px] bg-white mx-auto mt-10" />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
