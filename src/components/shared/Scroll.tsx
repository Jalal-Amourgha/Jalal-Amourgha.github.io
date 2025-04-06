import { useEffect, useState } from "react";

const Scroll = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`hidden  ${
        scrollHeight > 200 ? "hidden" : "md:flex"
      } absolute left-0 -bottom-20  md:bottom-7 w-full justify-center animate__animated animate__fadeInUp`}
    >
      <div>
        <div className="scroll"></div>
        <p className="scroll-text mt-3">Scroll</p>
      </div>
    </div>
  );
};

export default Scroll;
