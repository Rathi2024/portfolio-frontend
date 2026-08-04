import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Aurora from "../../components/Aurora/Aurora";
import MouseGlow from "../../components/mouseGlow/mouseGlow";
    
function Home() {
  return (
    <>
      <Navbar />
      <MouseGlow />
      <Hero />
      <Aurora />
    </>
  );
}

export default Home;