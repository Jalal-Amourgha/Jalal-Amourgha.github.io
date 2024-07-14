import "animate.css";
import { Nav, Hero, About, Skills, Projects, Contact } from "./components";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <p className="text-center text-lg text-gray-1 mb-[100px] mt-[100px] md:mb-10">
        &#169; 2022-2024 - Jalal Amourgha. <br />
        All rights reserved.
      </p>
    </>
  );
}

export default App;
