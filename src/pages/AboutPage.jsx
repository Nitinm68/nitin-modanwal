// import Footer from "../components/Footer";
// import profileImg from "../assets/images/Nitin Developer Official Logo.png";

// export default function AboutPage() {
//   return (
//     <>
//       <style>{`
//         /* ===== ANIMATIONS ===== */
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes float {
//           0% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//           100% { transform: translateY(0); }
//         }

//         .fade-up { animation: fadeUp 1s ease forwards; }
//         .delay-1 { animation-delay: .2s; }
//         .delay-2 { animation-delay: .4s; }
//         .delay-3 { animation-delay: .6s; }

//         .chip {
//           animation: float 4s ease-in-out infinite;
//         }
//       `}</style>

//       {/* ========== SECTION 1 : EXPANDED ABOUT HERO ========== */}
//       <section style={heroSection}>
//         <div style={heroGrid}>
//           {/* LEFT CONTENT */}
//           <div className="fade-up">
//             <h1 style={heroTitle}>
//               About <span style={highlight}>Me</span>
//             </h1>

//             <p style={heroIntro} className="fade-up delay-1">
//               I’m <span style={name}>Nitin Modanwal</span> — a Full-Stack Web
//               Developer who builds clean, scalable, and performance-focused
//               digital products.
//             </p>

//             <p style={heroText} className="fade-up delay-2">
//               I don’t just write code — I design systems, solve real problems,
//               and create experiences that feel fast, intuitive, and reliable.
//             </p>

//             {/* FLOATING SKILL CHIPS */}
//             <div style={chipWrap} className="fade-up delay-3">
//               <span style={chip} className="chip">
//                 React
//               </span>
//               <span style={chip} className="chip">
//                 Node.js
//               </span>
//               <span style={chip} className="chip">
//                 MongoDB
//               </span>
//               <span style={chip} className="chip">
//                 UI / UX
//               </span>
//               <span style={chip} className="chip">
//                 Performance
//               </span>
//             </div>
//           </div>

//           {/* RIGHT UNIQUE CARD */}
//           <div style={identityCard} className="fade-up delay-2">
//             <img src={profileImg} alt="Profile" style={profileImage} />

//             <h3 style={cardName}>Full-Stack Developer</h3>
//             <p style={cardText}>
//               Focused on modern web apps, clean architecture, and scalable
//               solutions.
//             </p>

//             <div style={statRow}>
//               <div>
//                 <h4 style={statValue}>10+</h4>
//                 <p style={statLabel}>Projects</p>
//               </div>
//               <div>
//                 <h4 style={statValue}>3+</h4>
//                 <p style={statLabel}>Years Learning</p>
//               </div>
//               <div>
//                 <h4 style={statValue}>∞</h4>
//                 <p style={statLabel}>Curiosity</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========== SECTION 2 : WHAT I DO (UNCHANGED STYLE) ========== */}
//       <section style={cardSection}>
//         <h2 style={sectionTitle} className="fade-up">
//           What I <span style={highlight}>Do</span>
//         </h2>

//         <div style={cardGrid}>
//           <div style={card} className="fade-up delay-1">
//             <h3 style={cardTitle}>Frontend Development</h3>
//             <p style={cardText}>
//               I build responsive, fast, and user-friendly interfaces using
//               React.js with strong UI/UX principles.
//             </p>
//           </div>

//           <div style={card} className="fade-up delay-2">
//             <h3 style={cardTitle}>Backend & APIs</h3>
//             <p style={cardText}>
//               I design secure and scalable backend systems using Node.js,
//               Express, and MongoDB.
//             </p>
//           </div>

//           <div style={card} className="fade-up delay-3">
//             <h3 style={cardTitle}>Problem Solving</h3>
//             <p style={cardText}>
//               I enjoy breaking complex problems into simple, efficient solutions
//               that actually work in the real world.
//             </p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// /* ================= STYLES ================= */

// /* HERO */
// const heroSection = {
//   minHeight: "100vh",
//   // background: "radial-gradient(circle at top, #1a0f2e, #000 70%)",
//   background: "#000",
//   // padding: "100px 40px",
//   paddingTop: "140px",
//   paddingRight: "40px",
//   paddingBottom: "70px",
//   paddingLeft: "40px",

//   color: "#fff",
//   display: "flex",
//   alignItems: "center",
// };

// const heroGrid = {
//   maxWidth: "1200px",
//   margin: "0 auto",
//   display: "grid",
//   gridTemplateColumns: "1.2fr 1fr",
//   gap: "60px",
// };

// const heroTitle = {
//   fontSize: "58px",
//   marginBottom: "20px",
// };

// const highlight = { color: "#8b5cf6" };

// const name = {
//   color: "#8b5cf6",
//   fontWeight: "600",
// };

// const heroIntro = {
//   fontSize: "20px",
//   lineHeight: "1.8",
//   marginBottom: "18px",
// };

// const heroText = {
//   fontSize: "17px",
//   lineHeight: "1.8",
//   opacity: "0.9",
// };

// /* SKILL CHIPS */
// const chipWrap = {
//   marginTop: "28px",
//   display: "flex",
//   flexWrap: "wrap",
//   gap: "12px",
// };

// const chip = {
//   padding: "10px 16px",
//   borderRadius: "20px",
//   border: "1px solid rgba(139,92,246,0.4)",
//   background: "rgba(139,92,246,0.1)",
//   fontSize: "13px",
// };

// /* RIGHT CARD */
// const identityCard = {
//   background: "rgba(255,255,255,0.05)",
//   border: "1px solid rgba(139,92,246,0.35)",
//   borderRadius: "24px",
//   padding: "40px",
//   textAlign: "center",
//   backdropFilter: "blur(16px)",
// };

// const profileImage = {
//   width: "90px",
//   height: "90px",
//   borderRadius: "50%",
//   objectFit: "cover",
//   border: "3px solid #8b5cf6",
//   margin: "0 auto 20px",
// };

// const cardName = {
//   marginBottom: "10px",
// };

// const cardText = {
//   fontSize: "14px",
//   opacity: "0.9",
//   lineHeight: "1.7",
// };

// const statRow = {
//   marginTop: "28px",
//   display: "flex",
//   justifyContent: "space-between",
// };

// const statValue = {
//   color: "#8b5cf6",
//   fontSize: "20px",
// };

// const statLabel = {
//   fontSize: "12px",
//   opacity: "0.8",
// };

// /* SECTION 2 */
// const cardSection = {
//   background: "#0b0b0b",
//   padding: "100px 30px",
//   color: "#fff",
// };

// const sectionTitle = {
//   textAlign: "center",
//   fontSize: "38px",
//   marginBottom: "60px",
// };

// const cardGrid = {
//   maxWidth: "1100px",
//   margin: "0 auto",
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//   gap: "30px",
// };

// const card = {
//   background: "rgba(255,255,255,0.05)",
//   border: "1px solid rgba(139,92,246,0.3)",
//   borderRadius: "20px",
//   padding: "32px",
//   transition: "0.4s ease",
// };

// const cardTitle = {
//   marginBottom: "12px",
//   color: "#8b5cf6",
// };

import Footer from "../components/Footer";
import profileImg from "../assets/images/Nitin Developer Official Logo.png";

export default function AboutPage() {
  return (
    <>
      <style>{`
        /* ===== ANIMATIONS ===== */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        .fade-up { animation: fadeUp 1s ease forwards; }
        .delay-1 { animation-delay: .2s; }
        .delay-2 { animation-delay: .4s; }
        .delay-3 { animation-delay: .6s; }

        .chip {
          animation: float 4s ease-in-out infinite;
        }

        /* ===== HERO MOBILE FIX ===== */
        @media (max-width: 768px) {

          .about-hero {
            padding-top: 140px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-bottom: 60px !important;
            align-items: flex-start !important;
          }

          .about-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }

          .about-hero h1 {
            font-size: 40px !important;
            line-height: 1.2;
          }

          .about-hero p {
            font-size: 16px !important;
          }

          .identity-card {
            padding: 26px !important;
            margin-top: 10px;
          }

          .stat-row {
            justify-content: space-around !important;
          }
        }
      `}</style>

      {/* ========== SECTION 1 : ABOUT HERO ========== */}
      <section style={heroSection} className="about-hero">
        <div style={heroGrid} className="about-hero-grid">
          {/* LEFT CONTENT */}
          <div className="fade-up">
            <h1 style={heroTitle}>
              About <span style={highlight}>Me</span>
            </h1>

            <p style={heroIntro} className="fade-up delay-1">
              I’m <span style={name}>Nitin Modanwal</span> — a Full-Stack Web
              Developer who builds clean, scalable, and performance-focused
              digital products.
            </p>

            <p style={heroText} className="fade-up delay-2">
              I don’t just write code — I design systems, solve real problems,
              and create experiences that feel fast, intuitive, and reliable.
            </p>

            <div style={chipWrap} className="fade-up delay-3">
              <span style={chip} className="chip">
                React
              </span>
              <span style={chip} className="chip">
                Node.js
              </span>
              <span style={chip} className="chip">
                MongoDB
              </span>
              <span style={chip} className="chip">
                UI / UX
              </span>
              <span style={chip} className="chip">
                Performance
              </span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div style={identityCard} className="fade-up delay-2 identity-card">
            <img src={profileImg} alt="Profile" style={profileImage} />

            <h3 style={cardName}>Full-Stack Developer</h3>
            <p style={cardText}>
              Focused on modern web apps, clean architecture, and scalable
              solutions.
            </p>

            <div style={statRow} className="stat-row">
              <div>
                <h4 style={statValue}>10+</h4>
                <p style={statLabel}>Projects</p>
              </div>
              <div>
                <h4 style={statValue}>3+</h4>
                <p style={statLabel}>Years Learning</p>
              </div>
              <div>
                <h4 style={statValue}>∞</h4>
                <p style={statLabel}>Curiosity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2 : WHAT I DO ========== */}
      <section style={cardSection}>
        <h2 style={sectionTitle} className="fade-up">
          What I <span style={highlight}>Do</span>
        </h2>

        <div style={cardGrid}>
          <div style={card} className="fade-up delay-1">
            <h3 style={cardTitle}>Frontend Development</h3>
            <p style={cardText}>
              I build responsive, fast, and user-friendly interfaces using
              React.js with strong UI/UX principles.
            </p>
          </div>

          <div style={card} className="fade-up delay-2">
            <h3 style={cardTitle}>Backend & APIs</h3>
            <p style={cardText}>
              I design secure and scalable backend systems using Node.js,
              Express, and MongoDB.
            </p>
          </div>

          <div style={card} className="fade-up delay-3">
            <h3 style={cardTitle}>Problem Solving</h3>
            <p style={cardText}>
              I enjoy breaking complex problems into simple, efficient solutions
              that actually work in the real world.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ================= STYLES ================= */

const heroSection = {
  minHeight: "100vh",
  background: "var(--bg-main)",
  paddingTop: "140px",
  paddingRight: "40px",
  paddingBottom: "70px",
  paddingLeft: "40px",
  color: "var(--text-main)",
  display: "flex",
  alignItems: "center",
};

const heroGrid = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr",
  gap: "60px",
};

const heroTitle = {
  fontSize: "58px",
  marginBottom: "20px",
};

const highlight = { color: "#8b5cf6" };

const name = { color: "#8b5cf6", fontWeight: "600" };

const heroIntro = {
  fontSize: "20px",
  lineHeight: "1.8",
  marginBottom: "18px",
};

const heroText = {
  fontSize: "17px",
  lineHeight: "1.8",
  opacity: "0.9",
};

const chipWrap = {
  marginTop: "28px",
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
};

const chip = {
  padding: "10px 16px",
  borderRadius: "20px",
  border: "1px solid rgba(139,92,246,0.4)",
  background: "rgba(139,92,246,0.1)",
  fontSize: "13px",
};

const identityCard = {
  background: "var(--bg-card)",
  border: "1px solid var(--border-focus)",
  borderRadius: "24px",
  padding: "40px",
  textAlign: "center",
  backdropFilter: "blur(16px)",
};

const profileImage = {
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "3px solid #8b5cf6",
  margin: "0 auto 20px",
};

const cardName = { marginBottom: "10px" };

const cardText = {
  fontSize: "14px",
  opacity: "0.9",
  lineHeight: "1.7",
};

const statRow = {
  marginTop: "28px",
  display: "flex",
  justifyContent: "space-between",
};

const statValue = {
  color: "#8b5cf6",
  fontSize: "20px",
};

const statLabel = {
  fontSize: "12px",
  opacity: "0.8",
};

/* SECTION 2 */

const cardSection = {
  background: "var(--bg-main)",
  padding: "100px 30px",
  color: "var(--text-main)",
};

const sectionTitle = {
  textAlign: "center",
  fontSize: "38px",
  marginBottom: "60px",
};

const cardGrid = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "30px",
};

const card = {
  background: "var(--bg-card)",
  border: "1px solid var(--border-light)",
  borderRadius: "20px",
  padding: "32px",
};

const cardTitle = {
  marginBottom: "12px",
  color: "#8b5cf6",
};
