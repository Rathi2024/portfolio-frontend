import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Aurora from "../../components/Aurora/Aurora";
import MouseGlow from "../../components/mouseGlow/mouseGlow";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
    
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <MouseGlow />
      <Aurora />
    </>
  );
}

export default Home;