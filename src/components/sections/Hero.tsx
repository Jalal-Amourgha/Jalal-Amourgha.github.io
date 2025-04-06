import { useEffect, useState } from "react";
import Scroll from "../shared/Scroll";
import resume from "../../assets/resume.pdf";
import ScrollReveal from "scrollreveal";
import Socials from "../shared/Socials";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".hero-info", {
      duration: 1000,
      distance: "50px",
      easing: "ease-in-out",
      origin: "left",
      reset: true,
    });
    sr.reveal(".hero-img", {
      duration: 1000,
      distance: "50px",
      easing: "ease-in-out",
      origin: "right",
      reset: true,
    });

    return () => {
      sr.clean(".hero-info");
      sr.clean(".hero-img");
    };
  }, []);
  return (
    <>
      <main
        className="container mx-auto h-screen flex justify-center items-center relative overflow-hidden  md:py-0"
        id="home"
      >
        <div className="flex justify-center items-center hero-info">
          <div className="text-center">
            <h1 className="text-[30px] md:text-[42px] font-light leading-[120%] rubik mb-2">
              Jalal Amourgha
            </h1>

            <p className="max-w-[600px] mx-auto px-1 mb-5">
              I'm a junior software developer from 🇲🇦{" "}
              <br className="hidden sm:block" />
              I'm deeply passionate about <br className="hidden sm:block" /> web
              development and developing <br className="hidden sm:block" />
              modern Next.js web Apps.
            </p>

            {/* <p className="text-white text-xl mt-5 mb-10">
              I'm deeply passionate about <br /> web development and developing{" "}
              <br />
              modern Next js web Apps.
            </p> */}
            <a
              href={resume}
              target="_blank"
              className={`bg-white text-bg-color text-lg md:text-xl font-bold py-2 px-4 w-fit mx-auto rounded-3xl animate__animated ${
                hovered ? "animate__pulse" : ""
              } hover:bg-primary hover:text-white duration-300`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </main>
      <Scroll />
      <Socials />
    </>
  );
};

export default Hero;
