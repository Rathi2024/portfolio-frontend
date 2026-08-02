import "./Hero.css";
import { motion } from "framer-motion";
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
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, duration: .7 }}
        >
          Prajjwal
          <span> Rathi</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
        >
          Java Full Stack Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
        >
          Passionate about building scalable backend systems with Spring Boot
          and crafting modern, responsive user interfaces using React.
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