import "./Hero.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/images/prajjwal.jpg";

function Hero() {
  return (
    <section className="hero">

  <motion.div
     className="hero-content"
     initial={{ opacity: 0, y: 50 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{
     duration: 0.8,
     ease: "easeOut",
     }}
    >

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
  <TypeAnimation
    sequence={[
      "Java Full Stack Developer",
      2000,
      "Spring Boot Developer",
      2000,
      "Backend Enthusiast",
      2000,
      "Problem Solver",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    cursor={true}
  />
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

     <motion.a
     href="#projects"
     className="primary-btn"
     whileHover={{
     scale: 1.05,
    }}
     whileTap={{
     scale: 0.95,
     }}
     >
     View Projects →
    </motion.a>

      <motion.button
       className="secondary-btn"
       whileHover={{
         scale: 1.05,
       }}
       whileTap={{
         scale: 0.95,
       }}
       >
       Download Resume
       </motion.button>

    </div>

  </motion.div>

  <motion.div
  className="hero-image"
  initial={{ opacity: 0, x: 80 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -8, 0],
  }}
  transition={{
    opacity: {
      duration: 0.8,
    },
    x: {
      duration: 0.8,
    },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
>

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

        <motion.span
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
        >
          ☕ Java
        </motion.span>

        <motion.span
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
        >
          ⚡ Spring Boot
        </motion.span>

        <motion.span
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
        >
          💻 React
        </motion.span>

        <motion.span
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
        >
          🗄 MySQL
        </motion.span>

      </div>

    </div>

  </motion.div>

</section>
  )
}

export default Hero;