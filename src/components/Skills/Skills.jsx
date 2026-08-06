import "./Skills.css";

import {
  SiSpringboot,
  SiMysql,
  SiSupabase,
  SiPostman,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiHibernate,
} from "react-icons/si";

import { FaJava, FaReact, FaGitAlt, FaDocker } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { PiDatabaseFill } from "react-icons/pi";
import { SiApachemaven } from "react-icons/si";
import { LuWebhook } from "react-icons/lu";

const backendSkills = [
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
  },
  {
    name: "Spring Security",
    icon: <MdSecurity />,
  },
  {
    name: "REST APIs",
    icon: <LuWebhook />,
  },
];

const frontendSkills = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS3",
    icon: <SiCss />,
  },
];

const databaseSkills = [
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "Hibernate",
    icon: <SiHibernate />,
  },
  {
    name: "Spring Data JPA",
    icon: <PiDatabaseFill />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
  },
];

const toolsUsed = [
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
  },
  {
  name: "Maven",
  icon: <SiApachemaven />,
}

];

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-heading">

        <p>MY SKILLS</p>

        <h2>
          Technologies I Use to Build
          <span> Modern Applications.</span>
        </h2>

        <h4>
          A collection of technologies, frameworks and tools I use to
          develop scalable, secure and responsive web applications.
        </h4>

      </div>

      <div className="skills-container">

        {/* Backend */}

        <div className="skill-category">

          <h3>Backend Development</h3>

          <div className="skills-grid">

            {backendSkills.map((skill) => (

              <div
                key={skill.name}
                className="skill-card"
              >

                <span className="skill-icon">
                  {skill.icon}
                </span>

                <p className="skill-name">
                  {skill.name}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Frontend */}

        <div className="skill-category">

          <h3>Frontend Development</h3>

          <div className="skills-grid">

            {frontendSkills.map((skill) => (

              <div
                key={skill.name}
                className="skill-card"
              >

                <span className="skill-icon">
                  {skill.icon}
                </span>

                <p className="skill-name">
                  {skill.name}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Database */}

        <div className="skill-category">

          <h3>Database & Cloud</h3>

          <div className="skills-grid">

            {databaseSkills.map((skill) => (

              <div
                key={skill.name}
                className="skill-card"
              >

                <span className="skill-icon">
                  {skill.icon}
                </span>

                <p className="skill-name">
                  {skill.name}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Tools */}

        <div className="skill-category">

          <h3>Tools & Technologies</h3>

          <div className="skills-grid">

            {toolsUsed.map((skill) => (

              <div
                key={skill.name}
                className="skill-card"
              >

                <span className="skill-icon">
                  {skill.icon}
                </span>

                <p className="skill-name">
                  {skill.name}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      <div className="section-divider"></div>

    </section>
  );
}

export default Skills;