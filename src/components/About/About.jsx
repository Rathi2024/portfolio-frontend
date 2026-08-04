import "./About.css";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <p>ABOUT ME</p>

        <h2>
          Building Scalable Applications
          <span> with Java & Spring Boot.</span>
        </h2>

      </motion.div>

      <div className="about-container">

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

         <p>
I'm <strong>Prajjwal Rathi</strong>, a Java Full Stack Developer who enjoys
building scalable backend systems and modern web applications with clean,
maintainable code.
         </p>

         <p>
My expertise includes <strong>Java, Spring Boot, React, MySQL</strong>,
REST APIs and modern UI development. I enjoy transforming ideas into
production-ready software with responsive design and scalable architecture.
         </p>

        <p>
         I'm currently seeking an opportunity where I can contribute to meaningful
         projects, collaborate with experienced developers and continue growing as
         a Software Engineer.
        </p>
         <div className="about-quote">
         "Clean code isn't just about syntax — it's about creating software people enjoy using."
         </div>

        </motion.div>

        <motion.div
          className="about-right"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
        >

          <motion.div 
           className="about-card"
            variants={item}>
            <h3>Education</h3>
            <p>B.Tech CSE (AI & ML)</p>
            <span>2022 – 2026</span>
          </motion.div>

          <motion.div className="about-card"
            variants={item}>
            <h2>5+</h2>
            <p>Projects Built</p>
          </motion.div>

           <motion.div className="about-card"
            variants={item}>
             <h2>2026</h2>
             <p>Graduation</p>
           </motion.div>

         <motion.div className="about-card"
            variants={item}>
             <h2>Open</h2>
            <p>To Work</p>
              </motion.div>

          <motion.div className="about-card"
            variants={item}>
            <h3>Current Goal</h3>
            <p>Java Full Stack Developer</p>
            <span>Open to Work</span>
          </motion.div>

          <motion.div className="about-card"
            variants={item}>
            <h3>Location</h3>
            <p>Noida</p>
            <span>Uttar Pradesh, India</span>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;