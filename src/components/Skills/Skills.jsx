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
const frontendSkills = [
    {
        name: "React",
        icon: "⚛️",
    },
    {
        name: "Tailwind CSS",
        icon: "🌊",
    },
    {
        name: "JavaScript",
        icon: "🟡",
    },
    {
        name: "HTML & CSS",
        icon: "📄",
    }
];
const databaseSkills = [
    {
        name: "MySQL",
        icon: "🗄️",
    }
];
const toolsUsed = [
    {
        name: "Git",
        icon: "🔧",
    },
    {
        name: "Docker",
        icon: "🐳",
    },
    {
        name: "Postman",
        icon: "📬",
    },
    {
        name: "VS Code",
        icon: "🖥️",
    },
    {
        name: "IntelliJ IDEA",
        icon: "💡",
    },
    {
        name: "MySQL Workbench",
        icon: "🛠️",
    }
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
            
      <div className="skill-category">

        <h3>Frontend Development</h3>

    <div className="skills-grid">

  {frontendSkills.map((skill)=> (

    <div 
    key={skill.name}
    className="skill-card">

      <span className="skill-icon">{skill.icon}</span>

      <p className="skill-name">{skill.name}</p>

    </div>

  ))}

    </div>

</div>

    <div className="skill-category">
        <h3>Database Skills</h3>
    <div className="skills-grid">

  {databaseSkills.map((skill)=> (

    <div 
    key={skill.name}
    className="skill-card">

      <span className="skill-icon">{skill.icon}</span>

      <p className="skill-name">{skill.name}</p>

    </div>

  ))}

    </div>

</div>

    <div className="skill-category">
        <h3>Tools & Technologies</h3>
    <div className="skills-grid">

  {toolsUsed.map((skill)=> (

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
    
  )
  };
  

export default Skills;