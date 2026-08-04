import "./Hero.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/images/prajjwal.jpg";

function Hero() {
  return (
    <section className="hero">

  <div className="hero-content">

    <p className="hero-subtitle">
      BUILDING MODERN DIGITAL EXPERIENCES
    </p>

    <h1 className="hero-title">
      BUILDING
      <br />
      <span>MODERN DIGITAL</span>
      <br />
      EXPERIENCES
    </h1>

    <div className="typing">
      Java Full Stack Developer
    </div>

    <h3 className="hero-name">
      Hi, I'm Prajjwal Rathi
    </h3>

    <p className="hero-description">
      I build secure, scalable and production-ready web applications using
      Java, Spring Boot, React and MySQL. Passionate about clean architecture,
      modern UI design and solving real-world problems.
    </p>

    <div className="hero-buttons">

      <button className="primary-btn">
        View Projects
      </button>

      <button className="secondary-btn">
        Download Resume
      </button>

    </div>

  </div>

  <div className="hero-image">

    <div className="developer-card">

      <div className="profile-image">

        <img
          src={profile}
          alt="Prajjwal Rathi"
        />

      </div>

      <h2>Prajjwal Rathi</h2>

      <p>Java Full Stack Developer</p>

      <div className="status">
        🟢 Available for Work
      </div>

      <div className="tech-stack">

        <span>☕ Java</span>

        <span>⚡ Spring Boot</span>

        <span>💻 React</span>

        <span>🗄 MySQL</span>

      </div>

    </div>

  </div>

</section>
  )
}

export default Hero;