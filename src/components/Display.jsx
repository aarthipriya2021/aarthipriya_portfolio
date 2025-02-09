import "../App.css";
import Home from "./Home/Home";
import About from "./About/About";
import Resume from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export default function Display() {
  return (
    <div className="lg:pl-[22%] w-auto back text-white">
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
