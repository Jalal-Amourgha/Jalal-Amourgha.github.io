import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Footer = () => {
  const year =new Date();
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".footer", {
      duration: 1000,
      distance: "50px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });

    return () => {
      sr.clean(".footer");
    };
  }, []);
  return (
    <p className="text-center text-lg text-gray-1 mb-[100px] mt-[100px] md:mb-10 footer">
      &#169; {year.getFullYear()} - Jalal Amourgha<br />
      All rights reserved.
    </p>
  );
};

export default Footer;
