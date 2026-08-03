import "./Hero.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/images/prajjwal.jpg";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT */}

      <div className="hero-content">

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          BUILDING MODERN DIGITAL EXPERIENCES
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, duration: .7 }}
        >
           BUILDING
          <br />
         <span>MODERN DIGITAL</span>
          <br />
         EXPERIENCES
        </motion.h1>

        <motion.div
            className="typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
    >
        <TypeAnimation
             sequence={[
            "Java Full Stack Developer",
            2000,
            "Spring Boot Developer",
            2000,
            "React Developer",
            2000,
            "Backend Engineer",
            2000,
      ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
        />
        </motion.div>

        <motion.h3
            className="hero-name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            >
              I'm Prajjwal Rathi
        </motion.h3>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
        >
          I build secure, scalable and modern web applications using Java,
          Spring Boot, React and MySQL. Passionate about writing clean code,
          designing intuitive user interfaces and developing production-ready
          software that solves real-world problems.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <button className="primary-btn">
            View Projects
          </button>

          <button className="secondary-btn">
            Download Resume
          </button>
        </motion.div>

      </div>

      {/* RIGHT */}

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
      >

        <div className="image-card">

          <img
            src={profile}
            alt="Prajjwal Rathi"
          />

          <div className="floating-card top">
            🚀 Open To Work
          </div>

          <div className="floating-card left">
            ☕ Coffee Driven
          </div>

          <div className="floating-card right">
            ⚡ Spring Boot
          </div>

          <div className="floating-card bottom">
            💻 React
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;