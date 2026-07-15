import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section style={section}>
      <h2>Projects</h2>
      <p>Edulib • NeoElectro • Portfolio Website</p>

      <Link to="/projects" style={btn}>
        View All Projects →
      </Link>
    </section>
  );
}

const section = {
  padding: "80px",
  background: "var(--bg-main)",
  color: "var(--text-main)",
};

const btn = { color: "#ff8c00", textDecoration: "none" };
