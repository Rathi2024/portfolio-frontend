import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-logo">
        Prajjwal<span>.</span>
      </div>

      <nav className="navbar-links">

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>

      </nav>

      <a
        href="/resume.pdf"
        className="resume-btn"
        target="_blank"
        rel="noreferrer"
      >
        Resume ↗
      </a>

    </header>
  );
}

export default Navbar;