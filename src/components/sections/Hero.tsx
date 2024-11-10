import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { myImage } from "../../assets/";
import { useEffect, useState } from "react";
import Scroll from "../shared/Scroll";
import resume from "../../assets/resume.pdf";
import ScrollReveal from "scrollreveal";

const socials = [
  {
    id: 1,
    icon: <FaXTwitter />,
    href: "https://x.com/Amr_Jalal22",
  },
  {
    id: 2,
    icon: <FaGithub />,
    href: "https://github.com/Jalal-Amourgha",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/jalal-amourgha/",
  },
];

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
        className="container mx-auto h-screen grid grid-cols-1 md:grid-cols-2 md:gap-10 relative overflow-hidden  md:py-0"
        id="home"
      >
        <div className="flex flex-col justify-center items-center order-2 md:order-1 hero-info">
          <div className="max-w-[400px] text-center">
            <h1 className="text-[30px] md:text-[38px] font-light leading-[120%] mb-5 rubik">
              Jalal Amourgha
            </h1>
            <h2 className="font-semibold text-lg md:text-xl">
              Junior Software Developer
            </h2>
            <div className="flex items-center justify-center gap-10 mt-10">
              {socials.map((social) => (
                <a
                  className=" text-white text-3xl hover:text-primary"
                  href={social.href}
                  key={social.id}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-white text-xl mt-5 mb-10">
              I'm deeply passionate about <br /> web development and developing{" "}
              <br />
              modern Next js web Apps.
            </p>
            <a
              href={resume}
              target="_blank"
              className={`bg-white text-bg-color text-2xl font-bold py-3 px-6 w-fit mx-auto rounded-3xl animate__animated ${
                hovered ? "animate__pulse" : ""
              } hover:bg-primary hover:text-white duration-300`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Resume
            </a>
          </div>
        </div>
        <div className="h-full w-full flex items-center justify-between  order-1 md:order-2 hero-img">
          <div className="rounded-full overflow-hidden m-auto">
            <img
              src={myImage}
              className="w-[300px] md:w-[400px]"
              alt="jalal amourgha"
            />
          </div>
        </div>
      </main>
      <Scroll />
    </>
  );
};

export default Hero;
