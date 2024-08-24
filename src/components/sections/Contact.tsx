import { useEffect, useState } from "react";
import Poppup from "../shared/Poppup";
import ScrollReveal from "scrollreveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    fetch("https://formsubmit.co/2bb4b50d4b3676e79e3d46764fbce9e8", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          alert("There was a problem with your submission. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("There was a problem with your submission. Please try again.");
      });
  };

  useEffect(() => {
    let countdownInterval: any;

    if (submitted) {
      countdownInterval = setInterval(() => {
        setSubmitted(false);
      }, 3000);
    }
    return () => {
      clearInterval(countdownInterval);
    };
  }, [submitted]);

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".contact", {
      duration: 1600,
      distance: "50px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });

    return () => {
      sr.clean(".contact");
    };
  }, []);

  return (
    <>
      <section
        className="max-w-[800px] w-full mx-auto py-[130px] contact"
        id="contact"
      >
        <h1 className="text-center text-white text-4xl font-bold mb-20">
          contact
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            cols={7}
            rows={7}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-white text-bg-color text-2xl font-bold py-3 px-6 w-fit mx-auto mt-10 rounded-3xl hover:bg-primary hover:text-white  duration-300"
            onClick={() => setSubmitted(!submitted)}
          >
            Submit
          </button>
        </form>
      </section>
      <Poppup situation={submitted} name={formData.name} />
    </>
  );
};

export default Contact;
