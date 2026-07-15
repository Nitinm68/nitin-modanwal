import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/images/Nitin Developer Official Logo.png";
import resume from "../assets/NitinModanwal_9569601986_resume.pdf"; // update path if needed
import LanguageSelector from "./LanguageSelector";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 14px;
          transition: 0.3s;
        }

        .footer-link:hover {
          color: #8b5cf6;
        }

        .social-icon:hover {
          transform: translateY(-4px);
          background: #8b5cf6;
          color: var(--bg-main);
        }

        .resume-btn:hover {
          background: #8b5cf6;
        
           color: var(--text-main);
        }

        .scroll-top:hover {
          transform: translateY(-6px);
        }
      `}</style>

      <style>{`
  /* ================= MOBILE FOOTER FIX ================= */

  @media (max-width: 768px) {
    footer {
      padding: 70px 20px 40px !important;
    }

    footer > div:first-child {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
      text-align: center;
    }

    footer img {
      margin: 0 auto 12px;
    }

    footer p {
      margin-left: auto;
      margin-right: auto;
    }

    /* Location & availability center */
    footer p svg {
      margin-right: 6px;
    }

    /* Quick links center */
    footer div:nth-child(2) {
      align-items: center;
    }

    /* Tech + socials */
    footer div:nth-child(3) {
      align-items: center;
    }

    /* Social icons center */
    footer div:nth-child(3) > div {
      justify-content: center;
    }

    /* Resume button full width */
    .resume-btn {
      width: 100%;
      text-align: center;
      padding: 14px 0 !important;
    }

    /* Scroll top fix */
    .scroll-top {
      right: 20px !important;
      bottom: 20px !important;
    }
  }
`}</style>

      <footer style={footer}>
        <div style={container}>
          {/* BRAND */}
          <div>
            <img src={logo} alt="Logo" style={logoStyle} />
            <p style={tagline}>
              Building clean, scalable & performance-driven web experiences.
            </p>

            <p style={location}>
              <FaMapMarkerAlt /> Prayagraj, India
            </p>
            <p style={availability}>🟢 Available for opportunities</p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 style={title}>Quick Links</h4>
            <div style={links}>
              <a href="/" className="footer-link">
                Home
              </a>
              <a href="/about" className="footer-link">
                About
              </a>
              <a href="/education" className="footer-link">
                Education
              </a>
              <a href="/achievements" className="footer-link">
                Achievements
              </a>
              <div style={{ marginTop: '10px' }}>
                <LanguageSelector />
              </div>
            </div>
          </div>

          {/* TECH + SOCIAL */}
          <div>
            <h4 style={title}>Tech Stack</h4>
            <p style={tech}>React • Node • MongoDB • Express</p>

            <div style={socials}>
              <a
                href="https://www.instagram.com/website_development_official?igsh=MXBqdXpmOHNub3N4bg=="
                target="_blank"
                rel="noreferrer"
                style={socialIcon}
                className="social-icon"
              >
                <FaInstagram />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                style={socialIcon}
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="www.linkedin.com/in/nitin-modanwal"
                target="_blank"
                rel="noreferrer"
                style={socialIcon}
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:nitindeveloper.official@gmail.com"
                style={socialIcon}
                className="social-icon"
              >
                <FaEnvelope />
              </a>
            </div>

            <a href={resume} download style={resumeBtn} className="resume-btn">
              Download Resume
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div style={bottom}>
          © 2026 All rights reserved. Designed & developed by me.
        </div>

        {/* SCROLL TOP */}
        <button
          style={scrollTop}
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp />
        </button>
      </footer>
    </>
  );
}

/* ================= STYLES ================= */

const footer = {
  background: "var(--bg-main)",
  color: "var(--text-main)",
  padding: "90px 30px 40px",
  position: "relative",
};

const container = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1.4fr 1fr 1fr",
  gap: "50px",
};

const logoStyle = {
  width: "140px",
  marginBottom: "14px",
};

const tagline = {
  color: "var(--text-muted)",
  fontSize: "14px",
  lineHeight: "1.7",
  marginBottom: "16px",
};

const location = {
  fontSize: "14px",
  color: "var(--text-muted)",
  marginBottom: "6px",
};

const availability = {
  fontSize: "14px",
  color: "#8b5cf6",
};

const title = {
  fontSize: "16px",
  marginBottom: "14px",
};

const links = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const tech = {
  fontSize: "14px",
  color: "var(--text-muted)",
  marginBottom: "18px",
};

const socials = {
  display: "flex",
  gap: "14px",
  marginBottom: "20px",
};

const socialIcon = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(139,92,246,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  color: "var(--text-main)",
  transition: "0.3s",
};

const resumeBtn = {
  display: "inline-block",
  padding: "12px 20px",
  borderRadius: "14px",
  border: "1px solid #8b5cf6",
  color: "var(--text-main)",
  textDecoration: "none",
  fontSize: "14px",
  transition: "0.3s",
};

const bottom = {
  marginTop: "60px",
  paddingTop: "20px",
  borderTop: "1px solid var(--border-light)",
  textAlign: "center",
  fontSize: "13px",
  color: "var(--text-accent)",
};

const scrollTop = {
  position: "absolute",
  right: "30px",
  bottom: "30px",
  width: "46px",
  height: "46px",
  borderRadius: "50%",
  border: "none",
  background: "#8b5cf6",
  color: "var(--text-main)",
  cursor: "pointer",
  transition: "0.3s",
};
