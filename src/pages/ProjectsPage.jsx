import { useState } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/animations/AnimatedSection";
import { m } from "framer-motion";
import { staggerContainer, staggerItem, cardHover } from "../utils/motion";

// ===== CLIENT WORK =====
const clientProjects = [
  {
    id: 1,
    name: "Dixon Trading",
    tag: "Finance · Academy",
    url: "https://dixontrading.com/",
    description:
      "A dynamic website for Dixon Trading Academy, a platform dedicated to teaching stock market and trading strategies. Built to convey credibility, attract students, and highlight the academy's structured learning programmes.",
    accent: "#00c9a7",
  },
  {
    id: 2,
    name: "Grand Mandola Resorts",
    tag: "Hospitality · Luxury",
    url: "https://grandmandolaresorts.com/",
    description:
      "An elegant web presence for Lucknow's premium luxury resort and wedding destination. The site captures the grandeur of the venue with immersive visuals and a refined layout that appeals to high-end event planners and guests.",
    accent: "#d4af37",
  },
  {
    id: 3,
    name: "Globe Haulers",
    tag: "E-commerce · Luxury",
    url: "https://globehaulers.in/",
    description:
      "A premium luxury brand e-commerce platform focusing exclusively on high-end trolley bags. Features a sleek dark-mode glassmorphism aesthetic, high-fidelity asset imagery, and a seamless shopping experience.",
    accent: "#eab308",
  },
  {
    id: 4,
    name: "TaxWala",
    tag: "Fintech · Platform",
    url: "https://taxwala.info/",
    description:
      "A comprehensive fintech platform providing seamless financial and taxation services. Built with a focus on performance, secure deep-linking, and a high-fidelity user experience for professional tax management.",
    accent: "#10b981",
  },
  {
    id: 5,
    name: "Adzorio",
    tag: "Marketing · Agency",
    url: "https://adzorio.com/",
    description:
      "A professional website for a Lucknow-based digital marketing agency. Designed to highlight core services like SEO, Website Design, and Social Media Marketing, focusing on lead generation and establishing industry authority.",
    accent: "#3b82f6",
  },
  {
    id: 6,
    name: "Smile & Glow Aesthetic",
    tag: "Healthcare · Beauty",
    url: "https://smileandglowaesthetic.com/",
    description:
      "A clean, trust-building website for a dual-specialty aesthetic and dental clinic in Gomti Nagar, Lucknow. Features service breakdowns, doctor profiles, gallery, and an online appointment booking system — all designed to convert visitors into patients.",
    accent: "#f472b6",
  },
  {
    id: 7,
    name: "Sampada Infra Developers",
    tag: "Real Estate",
    url: "https://sampadainfradevlopers.com/",
    description:
      "A comprehensive real estate website for a Lucknow-based property developer with 10+ years of experience. Showcases residential plot and row house projects, amenities, pricing, and a direct enquiry system — built to drive leads and establish trust.",
    accent: "#6c8ebf",
  },
  {
    id: 8,
    name: "Code Orbit Technologies",
    tag: "Tech · Agency",
    url: "https://arikaa-assignment.vercel.app/",
    description:
      "A sleek technology company website for a software and digital solutions agency. Positioned to attract B2B clients through a modern, professional presentation of services, portfolio, and technical capabilities.",
    accent: "#a78bfa",
  },
  {
    id: 9,
    name: "Self Help Foundation",
    tag: "NGO · Social",
    url: "https://selfhelpfoundation.in/",
    description:
      "A purpose-driven website for a non-profit organisation focused on community upliftment and social welfare. Designed to communicate the foundation's mission, programmes, and donation channels with clarity and emotional resonance.",
    accent: "#34d399",
  },
  {
    id: 10,
    name: "Arpita Builders",
    tag: "Construction",
    url: "https://arpitabuilders.com/",
    description:
      "A professional construction company website for Hardoi's trusted builders. Covers end-to-end services — residential, commercial, colony development, and project management — with a strong emphasis on quality, transparency, and client trust.",
    accent: "#fb923c",
  },
  {
    id: 11,
    name: "Trishika Foods",
    tag: "E-commerce · Food",
    url: "https://trishikafoods.in/",
    description:
      "A vibrant and user-friendly website for Trishika Foods. Designed to showcase their premium food products with an engaging layout, smooth navigation, and a strong emphasis on product authenticity and customer experience.",
    accent: "#ef4444",
  },
  {
    id: 12,
    name: "Stock Daddy Lucknow",
    tag: "EdTech · Finance",
    url: "https://stockdaddy.vercel.app/",
    description:
      "A professional stock market training institute website for Lucknow's leading share market education brand. Designed to attract beginner investors with clear course offerings, expert mentorship highlights, and strong calls-to-action.",
    accent: "#ff8c00",
  },

];
// ===== PERSONAL / COLLEGE PROJECTS =====
const personalProjects = [
  {
    title: "NeoElectra – E-commerce Platform",
    description:
      "A full-stack e-commerce platform developed during college to understand product listings, cart flow, filters, and admin-side logic.",
    tech: "React, Express, MongoDB",
    live: "https://neo-electra.vercel.app/",
    category: "Full Stack",
  },
  {
    title: "EduLib – Book Management System",
    description:
      "A MERN-based digital library system with role-based access, CRUD operations, and responsive UI.",
    tech: "React, Node.js, Express, MongoDB",
    live: "https://bookmanagement-beta-six.vercel.app/",
    category: "Full Stack",
  },
  {
    title: "Weather App",
    description:
      "A real-time weather application using live API data to display current weather conditions.",
    tech: "React, JavaScript, API",
    live: "https://nitinm68.github.io/weather/",
    category: "React",
  },
  {
    title: "Spotify Clone",
    description:
      "A visually appealing Spotify clone created using HTML and CSS with a responsive layout.",
    tech: "HTML, CSS",
    live: "https://nitinm68.github.io/spotify/",
    category: "UI Clone",
  },
  {
    title: "Temperature Converter",
    description:
      "A responsive web app to convert temperatures between Celsius, Fahrenheit, and Kelvin.",
    tech: "HTML, CSS, JavaScript",
    live: "https://nitinm68.github.io/Temperature-converter/",
    category: "Tool",
  },
  {
    title: "EMI Calculator",
    description:
      "An accurate EMI calculator to help users plan loans and monthly payments.",
    tech: "HTML, CSS, JavaScript",
    live: "https://nitinm68.github.io/EMI-CALCULATOR/",
    category: "Tool",
  },
  {
    title: "Age Calculator",
    description:
      "A simple tool to calculate exact age in years, months, and days.",
    tech: "HTML, CSS, JavaScript",
    live: "https://nitinm68.github.io/AGE-calculator/",
    category: "Tool",
  },
  {
    title: "Job Application Form",
    description:
      "A clean and responsive job application form built to practice form layouts.",
    tech: "HTML, CSS",
    live: "https://nitinm68.github.io/project-2-jobapplication/",
    category: "UI",
  },
  {
    title: "Event Registration Form",
    description: "A functional event registration form with input validation.",
    tech: "HTML, CSS, JavaScript",
    live: "https://nitinm68.github.io/Event-Registration-Form/",
    category: "UI",
  },
  {
    title: "Landing Page",
    description:
      "A modern landing page created to practice responsive design principles.",
    tech: "HTML, CSS",
    live: "https://nitinm68.github.io/Photography_page/",
    category: "UI",
  },
];

const categoryColors = {
  "Full Stack": { color: "#a78bfa", bg: "#a78bfa18", border: "#a78bfa33" },
  React: { color: "#38bdf8", bg: "#38bdf818", border: "#38bdf833" },
  "UI Clone": { color: "#fb923c", bg: "#fb923c18", border: "#fb923c33" },
  Tool: { color: "#34d399", bg: "#34d39918", border: "#34d39933" },
  UI: { color: "#f472b6", bg: "#f472b618", border: "#f472b633" },
};

export default function ProjectsPage() {
  const [hoveredClient, setHoveredClient] = useState(null);
  const [hoveredPersonal, setHoveredPersonal] = useState(null);
  return (
    <>
      <section style={s.page}>
        {/* ── PAGE HEADER ── */}
        <AnimatedSection style={s.pageHeader} delay={0.1}>
          <span style={s.eyebrow}>PORTFOLIO</span>
          <h1 style={s.pageTitle}>
            All <span style={{ color: "#8b5cf6" }}>Works</span>
          </h1>{" "}
          <p style={s.pageSub}>
            A complete collection — from live client websites to full-stack
            college builds and practice tools.
          </p>
        </AnimatedSection>

        {/* ══════════════════════════════════════
            SECTION 1 — CLIENT WORK
        ══════════════════════════════════════ */}
        <div style={s.section}>
          <div style={s.sectionHeader}>
            <div style={s.sectionLine} />
            <span style={s.sectionLabel}>CLIENT WORK</span>
            <div style={s.sectionLine} />
          </div>
          <p style={s.sectionSub}>
            Real websites built for real businesses — live and running.
          </p>

          <div style={s.clientGrid}>
            {clientProjects.map((p, i) => (
              <m.a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={cardHover.hover}
                initial="rest"
                style={{
                  ...s.clientCard,
                  borderColor: "rgba(255,255,255,0.07)",
                  background: "var(--bg-card)",
                }}
              >
                {/* Number + Tag row */}
                <div style={s.cardTop}>
                  <span style={{ ...s.num, color: p.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      ...s.tag,
                      color: p.accent,
                      background: p.accent + "18",
                      border: `1px solid ${p.accent}33`,
                    }}
                  >
                    {p.tag}
                  </span>
                </div>

                <h3 style={s.clientName}>{p.name}</h3>
                <p style={s.clientDesc}>{p.description}</p>

                <div
                  style={{
                    ...s.visitCta,
                    color: p.accent,
                    opacity: hoveredClient === i ? 1 : 0,
                    transform:
                      hoveredClient === i
                        ? "translateX(0)"
                        : "translateX(-8px)",
                  }}
                >
                  Visit Site →
                </div>
              </m.a>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            SECTION 2 — PERSONAL / COLLEGE
        ══════════════════════════════════════ */}
        <div style={s.section}>
          <div style={s.sectionHeader}>
            <div style={s.sectionLine} />
            <span style={s.sectionLabel}>COLLEGE &amp; PERSONAL</span>
            <div style={s.sectionLine} />
          </div>
          <p style={s.sectionSub}>
            Built during college — full-stack systems, practice tools, and UI
            experiments.
          </p>

          <div style={s.personalGrid}>
            {personalProjects.map((p, i) => {
              const cat = categoryColors[p.category] || categoryColors["UI"];
              return (
                <div
                  key={i}
                  style={{
                    ...s.personalCard,
                    borderColor:
                      hoveredPersonal === i
                        ? cat.color
                        : "rgba(139,92,246,0.2)",
                    background:
                      hoveredPersonal === i
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(255,255,255,0.03)",
                    transform:
                      hoveredPersonal === i
                        ? "translateY(-3px)"
                        : "translateY(0)",
                  }}
                  onMouseEnter={() => setHoveredPersonal(i)}
                  onMouseLeave={() => setHoveredPersonal(null)}
                >
                  {/* Category badge */}
                  <span
                    style={{
                      ...s.catBadge,
                      color: cat.color,
                      background: cat.bg,
                      border: `1px solid ${cat.border}`,
                    }}
                  >
                    {p.category}
                  </span>

                  <h3 style={s.personalTitle}>{p.title}</h3>
                  <p style={s.personalDesc}>{p.description}</p>

                  <p style={s.techLine}>
                    <span style={s.techLabel}>Tech</span> {p.tech}
                  </p>

                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      style={s.demoBtn}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo →
                    </a>
                  ) : (
                    <span style={s.noDemo}>No Live Demo</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ─────────────────────── STYLES ─────────────────────── */
const s = {
  page: {
    minHeight: "100vh",
    paddingTop: "130px",
    paddingBottom: "100px",
    paddingLeft: "40px",
    paddingRight: "40px",
    background: "var(--bg-main)",
    color: "var(--text-main)",
    fontFamily: "'Segoe UI', sans-serif",
  },

  /* Page header */
  pageHeader: {
    textAlign: "center",
    marginBottom: "80px",
  },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "4px",
    color: "var(--text-muted)",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "16px",
  },
  pageTitle: {
    fontSize: "clamp(2.4rem, 6vw, 4rem)",
    fontWeight: 800,
    margin: "0 0 16px",
    lineHeight: 1.1,
  },
  pageSub: {
    fontSize: "1rem",
    color: "var(--text-muted)",
    maxWidth: "560px",
    margin: "0 auto",
    lineHeight: 1.7,
  },

  /* Section wrapper */
  section: {
    maxWidth: "1200px",
    margin: "0 auto 100px",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "12px",
  },
  sectionLine: {
    flex: 1,
    height: "1px",
    background: "var(--border-light)",
  },
  sectionLabel: {
    fontSize: "11px",
    letterSpacing: "3px",
    color: "var(--text-muted)",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  },
  sectionSub: {
    textAlign: "center",
    color: "var(--text-muted)",
    fontSize: "0.9rem",
    marginBottom: "40px",
  },

  /* Client grid */
  clientGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  clientCard: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "28px",
    borderRadius: "14px",
    border: "1px solid transparent",
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
    transition: "all 0.25s ease",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  num: {
    fontSize: "12px",
    fontWeight: 700,
    fontFamily: "monospace",
    letterSpacing: "1px",
  },
  tag: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    padding: "3px 10px",
    borderRadius: "4px",
  },
  clientName: {
    fontSize: "1.15rem",
    fontWeight: 700,
    margin: 0,
    color: "var(--text-main)",
    lineHeight: 1.3,
  },
  clientDesc: {
    fontSize: "0.85rem",
    color: "var(--text-muted)",
    lineHeight: 1.7,
    margin: 0,
    flexGrow: 1,
  },
  visitCta: {
    fontSize: "0.82rem",
    fontWeight: 600,
    transition: "all 0.25s ease",
    marginTop: "4px",
  },

  /* Personal grid */
  personalGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  personalCard: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "24px",
    borderRadius: "14px",
    border: "1px solid rgba(139,92,246,0.2)",
    transition: "all 0.22s ease",
  },
  catBadge: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    padding: "3px 10px",
    borderRadius: "4px",
    alignSelf: "flex-start",
  },
  personalTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    margin: 0,
    color: "var(--text-main)",
    lineHeight: 1.3,
  },
  personalDesc: {
    fontSize: "0.83rem",
    lineHeight: "1.7",
    color: "var(--text-muted)",
    margin: 0,
    flexGrow: 1,
  },
  techLine: {
    fontSize: "12px",
    color: "var(--text-accent)",
    margin: 0,
  },
  techLabel: {
    color: "var(--text-muted)",
    fontWeight: 600,
    marginRight: "6px",
  },
  demoBtn: {
    display: "inline-block",
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid #8b5cf6",
    color: "#8b5cf6",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: 600,
    alignSelf: "flex-start",
    transition: "all 0.2s ease",
  },
  noDemo: {
    fontSize: "12px",
    color: "#555",
  },
};
