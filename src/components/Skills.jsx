import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiC,
  SiCanva,
  SiGoogleads,
} from "react-icons/si";
import { MdVideoLibrary, MdBusiness } from "react-icons/md";
import AnimatedSection from "./animations/AnimatedSection";
import { m } from "framer-motion";
import { staggerContainer, staggerItem, cardHover } from "../utils/motion";

export default function Skills() {
  const technical = [
    { name: "HTML", level: 95, icon: <FaHtml5 /> },
    { name: "CSS", level: 90, icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 85, icon: <FaJs /> },
    { name: "ReactJS", level: 85, icon: <FaReact /> },
    { name: "NodeJS", level: 80, icon: <FaNodeJs /> },
    { name: "ExpressJS", level: 78, icon: <SiExpress /> },
    { name: "MongoDB", level: 80, icon: <SiMongodb /> },
    { name: "MySQL", level: 75, icon: <SiMysql /> },
    { name: "Java", level: 70, icon: <FaJava /> },
    { name: "C", level: 65, icon: <SiC /> },
  ];

  const tools = [
    { name: "Canva", level: 85, icon: <SiCanva /> },
    { name: "Video Editing", level: 75, icon: <MdVideoLibrary /> },
    { name: "Meta Ads", level: 70, icon: <SiGoogleads /> },
    { name: "Google My Business", level: 75, icon: <MdBusiness /> },
  ];

  const professional = [
    { name: "Adaptability", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Leadership", level: 80 },
    { name: "Time Management", level: 88 },
    { name: "Teamwork", level: 85 },
    { name: "Creativity", level: 90 },
    { name: "Problem Solving", level: 82 },
  ];

  return (
    <section style={section}>
      {/* MOBILE MAGIC */}
      <style>
        {`
  @media (max-width: 768px) {
    .desktop {
      display: none !important;   /* ✅ FORCE HIDE COLUMN VIEW */
    }
    .mobile {
      display: block !important;
    }
  }

  @media (min-width: 769px) {
    .mobile {
      display: none !important;
    }
  }
`}
      </style>

      {/* ================= DESKTOP ================= */}
      <AnimatedSection className="desktop" style={desktopGrid} delay={0.1}>
        <SkillColumn title="Technical Skills" data={technical} />
        <SkillColumn title="Professional Skills" data={professional} />
      </AnimatedSection>

      {/* ================= MOBILE ================= */}
      <AnimatedSection className="mobile" delay={0.2}>
        <MobileSection title="Technical Skills" data={technical} />
        <MobileSection title="Tools & Marketing" data={tools} />
        <MobileSection title="Professional Skills" data={professional} />
      </AnimatedSection>
    </section>
  );
}

/* ================= COMPONENTS ================= */

const SkillColumn = ({ title, data }) => (
  <div>
    <h3 style={titleStyle}>
      {title.split(" ")[0]} <span style={green}>Skills</span>
    </h3>
    <m.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
      {data.map((s, i) => (
        <m.div key={i} style={skillBox} variants={staggerItem}>
          <div style={row}>
            {s.icon && <span style={icon}>{s.icon}</span>}
            <span style={name}>{s.name}</span>
            <span style={percent}>{s.level}%</span>
          </div>
          <div style={barBg}>
            <m.div 
              style={{ ...bar, width: 0 }} 
              whileInView={{ width: `${s.level}%` }} 
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </m.div>
      ))}
    </m.div>
  </div>
);

const MobileSection = ({ title, data }) => (
  <div style={{ marginBottom: "50px" }}>
    <h3 style={mobileTitle}>{title}</h3>
    <m.div style={mobileRow} variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
      {data.map((s, i) => (
        <m.div key={i} style={card} variants={staggerItem} whileHover={cardHover.hover} initial="rest">
          {s.icon && <div style={cardIcon}>{s.icon}</div>}
          <p style={cardName}>{s.name}</p>
          <div
            style={{
              ...circle,
              background: `conic-gradient(var(--primary) ${s.level * 3.6}deg, var(--border-light) 0deg)`,
            }}
          >
            <span style={circleText}>{s.level}%</span>
          </div>
        </m.div>
      ))}
    </m.div>
  </div>
);

/* ================= STYLES ================= */

const section = {
  // background: "#0b0b0b",
  background: "var(--bg-main)",
  padding: "60px 30px",
  color: "var(--text-main)",
};

/* DESKTOP */
const desktopGrid = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "80px",
};

const titleStyle = {
  fontSize: "28px",
  marginBottom: "40px",
};

const green = { color: "#8b5cf6" };

const skillBox = { marginBottom: "26px" };

const row = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "8px",
};

const icon = { color: "#8b5cf6" };

const name = { flex: 1, fontSize: "14px", letterSpacing: "1px" };

const percent = { fontSize: "13px", color: "var(--text-muted)" };

const barBg = {
  height: "8px",
  background: "var(--border-light)",
  borderRadius: "10px",
};

const bar = {
  height: "100%",
  background: "linear-gradient(90deg, #8b5cf6, #00ff99)",
  borderRadius: "10px",
};

/* MOBILE */
const mobileTitle = {
  fontSize: "22px",
  marginBottom: "18px",
};

const mobileRow = {
  display: "flex",
  gap: "16px",
  overflowX: "auto",
  paddingBottom: "10px",
};

const card = {
  minWidth: "150px",
  background: "var(--bg-card)",
  borderRadius: "18px",
  padding: "20px",
  textAlign: "center",
  backdropFilter: "blur(10px)",
};

const cardIcon = {
  fontSize: "26px",
  color: "#8b5cf6",
  marginBottom: "10px",
};

const cardName = {
  fontSize: "13px",
  marginBottom: "12px",
};

const circle = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
};

const circleText = {
  fontSize: "14px",
  fontWeight: "600",
};
