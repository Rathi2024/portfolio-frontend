import "./Projects.css";
import shopsphereImage from "../../assets/images/shopsphere-featured.png";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "ShopSphere — Full Stack Ecommerce Platform",

    description:
      "A modern full-stack ecommerce platform built using Java Spring Boot, Spring Security, JWT Authentication, React and MySQL. Users can browse products, manage carts, wishlist items, place orders and securely authenticate.",

    image: shopsphereImage,

    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "MySQL",
      "JWT",
    ],

    features: [
      "JWT Authentication",
      "Shopping Cart",
      "Wishlist",
      "Order Management",
      "Responsive UI",
      "REST APIs",
    ],

    github: "https://github.com/Rathi2024",

    live: "https://myshopsphere.vercel.app/",

    featured: true,
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-heading">

        <p>MY PROJECTS</p>

        <h2>
          Applications I've Built with
          <span> Java & React.</span>
        </h2>

        <p className="projects-description">
          A collection of full-stack applications that demonstrate my ability
          to build secure, scalable and production-ready software using modern
          technologies.
        </p>

      </div>

      <div className="projects-container">

        {projects.map((project) => (

          <div
            key={project.title}
            className="project-card"
          >

            {/* LEFT SIDE */}

            <div className="project-image">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
             >
              <img
                src={project.image}
                alt={project.title}
              />
              </a>

            </div>

            {/* RIGHT SIDE */}

            <div className="project-content">

              {project.featured && (
                <span className="featured-badge">
                  ⭐ Featured Project
                </span>
              )}

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="tech-badge"
                  >
                    {tech}
                  </span>

                ))}

              </div>

             <div className="project-bottom">
              <div className="project-features">

                {project.features.map((feature) => (

                  <p key={feature}>
                    ✔ {feature}
                  </p>

                ))}

              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn github-btn"
                >
                    <FaGithub />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn live-btn"
                >
                    <FiExternalLink />
                  <span>Live Demo</span>
                </a>

              </div>

            </div>

          </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;