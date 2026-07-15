// // import Footer from "../components/Footer";

// // export default function EducationPage() {
// //   return (
// //     <>
// //       <section style={section}>
// //         <h1 style={heading}>Education</h1>
// //         <p style={subheading}>
// //           Academic background & learning milestones during my B.Tech journey.
// //         </p>

// //         {/* ===== MAIN EDUCATION BLOCK ===== */}
// //         <div style={mainBlock}>
// //           <div style={left}>
// //             <h2 style={degree}>B.Tech – Computer Science</h2>
// //             <p style={college}>BBD University, Lucknow</p>
// //             <p style={duration}>2022 – 2026</p>

// //             <div style={sgpaBox}>
// //               <span style={sgpaLabel}>Average SGPA</span>
// //               <span style={sgpaValue}>9.0</span>
// //             </div>

// //             <p style={desc}>
// //               Throughout my B.Tech, I focused on building strong fundamentals in
// //               programming, data structures, databases, and full-stack
// //               development, while working on multiple academic and personal
// //               projects.
// //             </p>
// //           </div>

// //           {/* RIGHT STATS */}
// //           <div style={right}>
// //             <div style={stat}>
// //               <span style={statValue}>4+</span>
// //               <span style={statLabel}>Years</span>
// //             </div>
// //             <div style={stat}>
// //               <span style={statValue}>10+</span>
// //               <span style={statLabel}>Projects</span>
// //             </div>
// //             <div style={stat}>
// //               <span style={statValue}>3+</span>
// //               <span style={statLabel}>Core Skills</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ===== LEARNING STRIP ===== */}
// //         <div style={learningStrip}>
// //           <h2 style={stripTitle}>Continuous Learning</h2>

// //           <div style={learningGrid}>
// //             <div style={learningCard}>
// //               <h3 style={cardTitle}>Full Stack Development</h3>
// //               <p style={cardSub}>Apna College Platform (by Shradha Ma’am)</p>
// //             </div>

// //             <div style={learningCard}>
// //               <h3 style={cardTitle}>Java Programming</h3>
// //               <p style={cardSub}>Core Java, OOPs & Practical Coding</p>
// //             </div>

// //             <div style={learningCard}>
// //               <h3 style={cardTitle}>DSA with Java</h3>
// //               <p style={cardSub}>
// //                 Data Structures, Algorithms & Problem Solving
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ===== SCHOOL INFO ===== */}
// //         <div style={schoolBlock}>
// //           <h2 style={schoolTitle}>School Education</h2>
// //           <p style={schoolText}>
// //             Completed Class X & XII from <b>Springer Public School</b>, where I
// //             built a strong academic base with focus on mathematics, logic, and
// //             discipline.
// //           </p>
// //         </div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }

// // /* ================= STYLES ================= */

// // const section = {
// //   minHeight: "100vh",
// //   paddingTop: "100px",
// //   paddingBottom: "100px",
// //   paddingLeft: "40px",
// //   paddingRight: "40px",
// //   background: "#000",
// //   color: "#fff",
// // };

// // const heading = {
// //   fontSize: "46px",
// //   textAlign: "center",
// //   marginBottom: "10px",
// // };

// // const subheading = {
// //   textAlign: "center",
// //   color: "#aaa",
// //   marginBottom: "80px",
// //   maxWidth: "760px",
// //   marginLeft: "auto",
// //   marginRight: "auto",
// // };

// // /* MAIN BLOCK */

// // const mainBlock = {
// //   maxWidth: "1100px",
// //   margin: "0 auto 100px",
// //   display: "grid",
// //   gridTemplateColumns: "2fr 1fr",
// //   gap: "40px",
// //   background: "rgba(255,255,255,0.05)",
// //   border: "1px solid rgba(139,92,246,0.35)",
// //   borderRadius: "22px",
// //   padding: "40px",
// // };

// // const left = {};

// // const degree = {
// //   fontSize: "28px",
// //   marginBottom: "8px",
// // };

// // const college = {
// //   fontSize: "16px",
// //   color: "#ddd",
// // };

// // const duration = {
// //   fontSize: "14px",
// //   color: "#aaa",
// //   marginBottom: "20px",
// // };

// // const sgpaBox = {
// //   display: "flex",
// //   alignItems: "center",
// //   gap: "14px",
// //   marginBottom: "20px",
// // };

// // const sgpaLabel = {
// //   fontSize: "14px",
// //   color: "#aaa",
// // };

// // const sgpaValue = {
// //   fontSize: "32px",
// //   fontWeight: "600",
// //   color: "#8b5cf6",
// // };

// // const desc = {
// //   fontSize: "14px",
// //   lineHeight: "1.8",
// //   color: "#ccc",
// // };

// // /* RIGHT STATS */

// // const right = {
// //   display: "flex",
// //   flexDirection: "column",
// //   gap: "20px",
// //   justifyContent: "center",
// // };

// // const stat = {
// //   textAlign: "center",
// //   border: "1px solid rgba(139,92,246,0.35)",
// //   borderRadius: "18px",
// //   padding: "20px",
// // };

// // const statValue = {
// //   fontSize: "26px",
// //   color: "#8b5cf6",
// //   fontWeight: "600",
// // };

// // const statLabel = {
// //   fontSize: "13px",
// //   color: "#aaa",
// // };

// // /* LEARNING STRIP */

// // const learningStrip = {
// //   maxWidth: "1100px",
// //   margin: "0 auto 100px",
// // };

// // const stripTitle = {
// //   fontSize: "34px",
// //   marginBottom: "40px",
// //   textAlign: "center",
// // };

// // const learningGrid = {
// //   display: "grid",
// //   gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
// //   gap: "30px",
// // };

// // const learningCard = {
// //   background: "rgba(255,255,255,0.05)",
// //   border: "1px solid rgba(139,92,246,0.3)",
// //   borderRadius: "18px",
// //   padding: "26px",
// // };

// // const cardTitle = {
// //   fontSize: "18px",
// //   marginBottom: "6px",
// //   color: "#8b5cf6",
// // };

// // const cardSub = {
// //   fontSize: "14px",
// //   color: "#ccc",
// // };

// // /* SCHOOL */

// // const schoolBlock = {
// //   maxWidth: "900px",
// //   margin: "0 auto",
// //   textAlign: "center",
// //   background: "rgba(255,255,255,0.04)",
// //   border: "1px solid rgba(139,92,246,0.25)",
// //   borderRadius: "20px",
// //   padding: "40px",
// // };

// // const schoolTitle = {
// //   fontSize: "30px",
// //   marginBottom: "16px",
// // };

// // const schoolText = {
// //   fontSize: "14px",
// //   color: "#ccc",
// //   lineHeight: "1.8",
// // };

// import Footer from "../components/Footer";

// export default function EducationPage() {
//   return (
//     <>
//       <section style={section}>
//         <h1 style={heading}>Education</h1>
//         <p style={subheading}>
//           Academic background & learning milestones during my B.Tech journey.
//         </p>

//         {/* ===== MAIN EDUCATION BLOCK ===== */}
//         <div style={mainBlock}>
//           <div style={left}>
//             <h2 style={degree}>B.Tech – Computer Science & Engineering</h2>
//             <p style={college}>BBD University, Lucknow</p>
//             <p style={duration}>2022 – 2026</p>

//             <div style={sgpaBox}>
//               <span style={sgpaLabel}>Average SGPA</span>
//               <span style={sgpaValue}>9.0</span>
//             </div>

//             <p style={desc}>
//               Throughout my B.Tech journey, I focused on building strong
//               fundamentals in programming, data structures, databases, and
//               full-stack development while working on multiple academic and
//               personal projects.
//             </p>
//           </div>

//           {/* RIGHT STATS */}
//           <div style={right}>
//             <div style={stat}>
//               <span style={statValue}>4+</span>
//               <span style={statLabel}>Years</span>
//             </div>
//             <div style={stat}>
//               <span style={statValue}>10+</span>
//               <span style={statLabel}>Projects</span>
//             </div>
//             <div style={stat}>
//               <span style={statValue}>Java</span>
//               <span style={statLabel}>Core Focus</span>
//             </div>
//           </div>
//         </div>

//         {/* ===== CONTINUOUS LEARNING ===== */}
//         <div style={learningStrip}>
//           <h2 style={stripTitle}>Continuous Learning</h2>

//           <div style={learningGrid}>
//             <div style={learningCard}>
//               <h3 style={cardTitle}>Full Stack Development</h3>
//               <p style={cardSub}>Apna College Platform (by Shradha Ma’am)</p>
//             </div>

//             <div style={learningCard}>
//               <h3 style={cardTitle}>Java Programming</h3>
//               <p style={cardSub}>Core Java, OOP Concepts & Practical Coding</p>
//             </div>

//             <div style={learningCard}>
//               <h3 style={cardTitle}>DSA with Java</h3>
//               <p style={cardSub}>
//                 Data Structures, Algorithms & Problem Solving
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ===== SCHOOL EDUCATION ===== */}
//         <div style={schoolBlock}>
//           <h2 style={schoolTitle}>School Education</h2>

//           <div style={schoolGrid}>
//             <div style={schoolCard}>
//               <span style={schoolYear}>2020</span>
//               <h3 style={schoolClass}>Class X (CBSE)</h3>
//               <p style={schoolName}>ATL Public School, Bhupiamau Pratapgarh</p>
//             </div>

//             <div style={schoolCard}>
//               <span style={schoolYear}>2022</span>
//               <h3 style={schoolClass}>Class XII (CBSE)</h3>
//               <p style={schoolName}>
//                 Springer Public School, Phaphamau Prayagraj
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// /* ================= STYLES ================= */

// const section = {
//   minHeight: "100vh",
//   paddingTop: "100px",
//   paddingBottom: "100px",
//   paddingLeft: "40px",
//   paddingRight: "40px",
//   background: "#000",
//   color: "#fff",
// };

// const heading = {
//   fontSize: "46px",
//   textAlign: "center",
//   marginBottom: "10px",
// };

// const subheading = {
//   textAlign: "center",
//   color: "#aaa",
//   marginBottom: "80px",
//   maxWidth: "760px",
//   marginLeft: "auto",
//   marginRight: "auto",
// };

// /* MAIN BLOCK */

// const mainBlock = {
//   maxWidth: "1100px",
//   margin: "0 auto 100px",
//   display: "grid",
//   gridTemplateColumns: "2fr 1fr",
//   gap: "40px",
//   background: "rgba(255,255,255,0.05)",
//   border: "1px solid rgba(139,92,246,0.35)",
//   borderRadius: "22px",
//   padding: "40px",
// };

// const left = {};

// const degree = {
//   fontSize: "28px",
//   marginBottom: "8px",
// };

// const college = {
//   fontSize: "16px",
//   color: "#ddd",
// };

// const duration = {
//   fontSize: "14px",
//   color: "#aaa",
//   marginBottom: "20px",
// };

// const sgpaBox = {
//   display: "flex",
//   alignItems: "center",
//   gap: "14px",
//   marginBottom: "20px",
// };

// const sgpaLabel = {
//   fontSize: "14px",
//   color: "#aaa",
// };

// const sgpaValue = {
//   fontSize: "32px",
//   fontWeight: "600",
//   color: "#8b5cf6",
// };

// const desc = {
//   fontSize: "14px",
//   lineHeight: "1.8",
//   color: "#ccc",
// };

// /* STATS */

// const right = {
//   display: "flex",
//   flexDirection: "column",
//   gap: "20px",
//   justifyContent: "center",
// };

// const stat = {
//   textAlign: "center",
//   border: "1px solid rgba(139,92,246,0.35)",
//   borderRadius: "18px",
//   padding: "20px",
// };

// const statValue = {
//   fontSize: "26px",
//   color: "#8b5cf6",
//   fontWeight: "600",
// };

// const statLabel = {
//   fontSize: "13px",
//   color: "#aaa",
// };

// /* LEARNING */

// const learningStrip = {
//   maxWidth: "1100px",
//   margin: "0 auto 100px",
// };

// const stripTitle = {
//   fontSize: "34px",
//   marginBottom: "40px",
//   textAlign: "center",
// };

// const learningGrid = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//   gap: "30px",
// };

// const learningCard = {
//   background: "rgba(255,255,255,0.05)",
//   border: "1px solid rgba(139,92,246,0.3)",
//   borderRadius: "18px",
//   padding: "26px",
// };

// const cardTitle = {
//   fontSize: "18px",
//   marginBottom: "6px",
//   color: "#8b5cf6",
// };

// const cardSub = {
//   fontSize: "14px",
//   color: "#ccc",
// };

// /* SCHOOL */

// const schoolBlock = {
//   maxWidth: "1000px",
//   margin: "0 auto",
//   textAlign: "center",
// };

// const schoolTitle = {
//   fontSize: "34px",
//   marginBottom: "40px",
// };

// const schoolGrid = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//   gap: "30px",
// };

// const schoolCard = {
//   background: "rgba(255,255,255,0.05)",
//   border: "1px solid rgba(139,92,246,0.3)",
//   borderRadius: "18px",
//   padding: "30px",
// };

// const schoolYear = {
//   fontSize: "14px",
//   color: "#8b5cf6",
// };

// const schoolClass = {
//   fontSize: "22px",
//   margin: "10px 0 6px",
// };

// const schoolName = {
//   fontSize: "14px",
//   color: "#ccc",
// };

import Footer from "../components/Footer";

export default function EducationPage() {
  return (
    <>
      <style>{`
/* ================= MOBILE OVERFLOW FIX ONLY ================= */
@media (max-width: 768px) {

  /* MAIN CARD SAFE */
  .edu-main {
    grid-template-columns: 1fr !important;
    padding-left: 22px !important;
    padding-right: 22px !important;
  }

  /* STATS ROW */
  .edu-stats {
    flex-direction: row !important;
    gap: 12px !important;
    margin-top: 26px !important;
  }

  /* EACH STAT CARD */
  .edu-stats > div {
    display: flex !important;
    flex-direction: column !important;   /* 👈 THIS IS THE KEY */
    align-items: center !important;
    justify-content: center !important;
    padding: 14px 10px !important;
  }

  /* NUMBER */
  .edu-stats > div span:first-child {
    font-size: 22px !important;
    margin-bottom: 4px;
  }

  /* LABEL */
  .edu-stats > div span:last-child {
    font-size: 12px !important;
    opacity: 0.85;
  }
}

`}</style>

      <section style={section}>
        <h1 style={heading}>Education</h1>
        <p style={subheading}>
          Academic background, offline trainings, and learning milestones during
          my B.Tech journey.
        </p>

        {/* ===== MAIN EDUCATION BLOCK ===== */}
        <div style={mainBlock} className="edu-main">
          <div style={left}>
            <h2 style={degree}>B.Tech – Computer Science & Engineering</h2>
            <p style={college}>BBD University, Lucknow</p>
            <p style={duration}>2022 – 2026</p>

            <div style={sgpaBox}>
              <span style={sgpaLabel}>Average SGPA</span>
              <span style={sgpaValue}>9.0</span>
            </div>

            <p style={desc}>
              Throughout my B.Tech journey, I focused on building strong
              fundamentals in programming, data structures, databases, and
              full-stack development while working on multiple academic and
              personal projects.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div style={right} className="edu-stats">
            <div style={stat}>
              <span style={statValue}>4+</span>
              <span style={statLabel}>Years</span>
            </div>
            <div style={stat}>
              <span style={statValue}>10+</span>
              <span style={statLabel}>Projects</span>
            </div>
            <div style={stat}>
              <span style={statValue}>3+</span>
              <span style={statLabel}>Trainings</span>
            </div>
          </div>
        </div>

        {/* ===== CONTINUOUS LEARNING ===== */}
        <div style={learningStrip}>
          <h2 style={stripTitle}>Continuous Learning</h2>

          <div style={learningGrid}>
            <div style={learningCard}>
              <h3 style={cardTitle}>Full Stack Development</h3>
              <p style={cardSub}>Apna College Platform (by Shradha Ma’am)</p>
            </div>

            <div style={learningCard}>
              <h3 style={cardTitle}>Java Programming</h3>
              <p style={cardSub}>Core Java, OOP Concepts & Practical Coding</p>
            </div>

            <div style={learningCard}>
              <h3 style={cardTitle}>DSA with Java</h3>
              <p style={cardSub}>
                Data Structures, Algorithms & Problem Solving
              </p>
            </div>
          </div>
        </div>

        {/* ===== OFFLINE TRAININGS ===== */}
        <div style={trainingBlock}>
          <h2 style={trainingTitle}>Offline Training Programs</h2>

          <div style={trainingGrid}>
            <div style={trainingCard}>
              <span style={trainingDuration}>3 Months</span>
              <h3 style={trainingName}>Soft Skills Training</h3>
              <p style={trainingOrg}>Learnovate</p>
              <p style={trainingDesc}>
                Focused on communication skills, leadership, teamwork, and
                professional behavior through practical offline sessions.
              </p>
            </div>

            <div style={trainingCard}>
              <span style={trainingDuration}>3 Months</span>
              <h3 style={trainingName}>Technical Skills – Summer Training</h3>
              <p style={trainingOrg}>GrasTech Company</p>
              <p style={trainingDesc}>
                Hands-on offline summer training covering technical concepts,
                practical implementation, and industry-oriented learning.
              </p>
            </div>
          </div>
        </div>

        {/* ===== SCHOOL EDUCATION ===== */}
        <div style={schoolBlock}>
          <h2 style={schoolTitle}>School Education</h2>

          <div style={schoolGrid}>
            <div style={schoolCard}>
              <span style={schoolYear}>2020</span>
              <h3 style={schoolClass}>Class X (CBSE)</h3>
              <p style={schoolName}>ATL Public School, Bhupiamau Pratapgarh</p>
            </div>

            <div style={schoolCard}>
              <span style={schoolYear}>2022</span>
              <h3 style={schoolClass}>Class XII (CBSE)</h3>
              <p style={schoolName}>
                Springer Public School, Phaphamau Prayagraj
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ================= STYLES ================= */

const section = {
  minHeight: "100vh",
  paddingTop: "140px",
  paddingBottom: "100px",
  paddingLeft: "40px",
  paddingRight: "40px",
  background: "var(--bg-main)",
  color: "var(--text-main)",
};

const heading = {
  fontSize: "46px",
  textAlign: "center",
  marginBottom: "10px",
};

const subheading = {
  textAlign: "center",
  color: "var(--text-muted)",
  marginBottom: "80px",
  maxWidth: "760px",
  marginLeft: "auto",
  marginRight: "auto",
};

/* MAIN BLOCK */

const mainBlock = {
  maxWidth: "1100px",
  margin: "0 auto 100px",
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "40px",
  background: "var(--bg-card)",
  border: "1px solid var(--border-focus)",
  borderRadius: "22px",
  padding: "40px",
};

const left = {};

const degree = {
  fontSize: "28px",
  marginBottom: "8px",
};

const college = {
  fontSize: "16px",
  color: "var(--text-main)",
};

const duration = {
  fontSize: "14px",
  color: "var(--text-muted)",
  marginBottom: "20px",
};

const sgpaBox = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginBottom: "20px",
};

const sgpaLabel = {
  fontSize: "14px",
  color: "var(--text-muted)",
};

const sgpaValue = {
  fontSize: "32px",
  fontWeight: "600",
  color: "#8b5cf6",
};

const desc = {
  fontSize: "14px",
  lineHeight: "1.8",
  color: "var(--text-muted)",
};

/* STATS */

const right = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "center",
};

const stat = {
  textAlign: "center",
  border: "1px solid rgba(139,92,246,0.35)",
  borderRadius: "18px",
  padding: "20px",
};

const statValue = {
  fontSize: "26px",
  color: "#8b5cf6",
  fontWeight: "600",
};

const statLabel = {
  fontSize: "13px",
  color: "#aaa",
};

/* LEARNING */

const learningStrip = {
  maxWidth: "1100px",
  margin: "0 auto 100px",
};

const stripTitle = {
  fontSize: "34px",
  marginBottom: "40px",
  textAlign: "center",
};

const learningGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "30px",
};

const learningCard = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(139,92,246,0.3)",
  borderRadius: "18px",
  padding: "26px",
};

const cardTitle = {
  fontSize: "18px",
  marginBottom: "6px",
  color: "#8b5cf6",
};

const cardSub = {
  fontSize: "14px",
  color: "#ccc",
};

/* TRAININGS */

const trainingBlock = {
  maxWidth: "1100px",
  margin: "0 auto 100px",
};

const trainingTitle = {
  fontSize: "34px",
  marginBottom: "40px",
  textAlign: "center",
};

const trainingGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const trainingCard = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(139,92,246,0.35)",
  borderRadius: "20px",
  padding: "30px",
};

const trainingDuration = {
  fontSize: "13px",
  color: "#8b5cf6",
};

const trainingName = {
  fontSize: "22px",
  margin: "10px 0 6px",
};

const trainingOrg = {
  fontSize: "14px",
  color: "#aaa",
  marginBottom: "12px",
};

const trainingDesc = {
  fontSize: "14px",
  color: "#ccc",
  lineHeight: "1.7",
};

/* SCHOOL */

const schoolBlock = {
  maxWidth: "1000px",
  margin: "0 auto",
};

const schoolTitle = {
  fontSize: "34px",
  marginBottom: "40px",
  textAlign: "center",
};

const schoolGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
};

const schoolCard = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(139,92,246,0.3)",
  borderRadius: "18px",
  padding: "30px",
  textAlign: "center",
};

const schoolYear = {
  fontSize: "14px",
  color: "#8b5cf6",
};

const schoolClass = {
  fontSize: "22px",
  margin: "10px 0 6px",
};

const schoolName = {
  fontSize: "14px",
  color: "#ccc",
};
