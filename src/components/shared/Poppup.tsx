import { useEffect, useState } from "react";

const Poppup = ({ situation, name }: { situation: boolean; name: string }) => {
  const [hidePoppup, setHidePoppup] = useState(true);
  useEffect(() => {
    if (situation) {
      setHidePoppup(false);
    }
  }, [situation]);

  return (
    <div
      className={`fixed top-28 left-[calc(50%-148px)] animate__animated ${
        situation ? "animate__fadeInLeft" : "animate__fadeOutRight"
      } ${
        hidePoppup ? "hidden" : ""
      } bg-bg-color text-white border-1 p-5 rounded-3xl text-xl border-white z-[100]`}
    >
      Thank you for your message, {name}!
    </div>
  );
};

export default Poppup;
