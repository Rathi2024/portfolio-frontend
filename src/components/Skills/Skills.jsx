import "./Skills.css";

const backendSkills = [
  {
    name: "Java",
    icon: "☕",
  },
  {
    name: "Spring Boot",
    icon: "🍃",
  },
  {
    name: "Spring Security",
    icon: "🔐",
  },
  {
    name: "REST APIs",
    icon: "🌐",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
    <div className="skills-container">
        <div className="skill-category">

        <h3>Backend Development</h3>

    <div className="skills-grid">

  {backendSkills.map((skill)=> (

    <div 
    key={skill.name}
    className="skill-card">

      <span className="skill-icon">{skill.icon}</span>

      <p className="skill-name">{skill.name}</p>

    </div>

    ))}
            </div>

    </div>

</div>

    </section>
  );
}

export default Skills;