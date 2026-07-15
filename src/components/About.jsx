// export default function About() {
//   return (
//     <>
//       <style>{`
//         .about-section {
//           min-height: 100vh;
//           background: #000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 100px 60px;
//           color: #fff;
//         }

//         .about-wrapper {
//           max-width: 1100px;
//           width: 100%;
//           display: grid;
//           grid-template-columns: 1fr 1.2fr;
//           gap: 60px;
//           background: rgba(255, 255, 255, 0.04);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 22px;
//           padding: 60px;
//           backdrop-filter: blur(16px);
//         }

//         /* LEFT – VISUAL CARDS */
//         .about-cards {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 20px;
//         }

//         .about-card {
//           height: 160px;
//           border-radius: 18px;
//           background: linear-gradient(
//             135deg,
//             rgba(139,92,246,0.25),
//             rgba(34,211,238,0.25)
//           );
//           border: 1px solid rgba(255,255,255,0.08);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: 600;
//           letter-spacing: 0.5px;
//           text-align: center;
//         }

//         /* RIGHT CONTENT */
//         .about-content h2 {
//           font-size: 42px;
//           margin-bottom: 12px;
//         }

//         .about-content h2 span {
//           background: linear-gradient(90deg, #8b5cf6, #22d3ee);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .about-content h4 {
//           font-weight: 400;
//           opacity: 0.85;
//           margin-bottom: 24px;
//         }

//         .about-content p {
//           font-size: 15px;
//           line-height: 1.8;
//           opacity: 0.85;
//           margin-bottom: 18px;
//         }

//         .about-tags {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//           margin-top: 30px;
//         }

//         .about-tag {
//           padding: 10px 16px;
//           border-radius: 20px;
//           font-size: 13px;
//           background: rgba(255,255,255,0.06);
//           border: 1px solid rgba(255,255,255,0.08);
//         }

//         /* RESPONSIVE */
//         @media (max-width: 900px) {
//           .about-wrapper {
//             grid-template-columns: 1fr;
//             padding: 40px;
//           }

//           .about-section {
//             padding: 80px 20px;
//           }

//           .about-content h2 {
//             font-size: 34px;
//           }
//         }
//       `}</style>

//       <section className="about-section">
//         <div className="about-wrapper">
//           {/* LEFT SIDE */}
//           <div className="about-cards">
//             <div className="about-card">
//               Frontend
//               <br />
//               Expertise
//             </div>
//             <div className="about-card">
//               Backend
//               <br />
//               Logic
//             </div>
//             <div className="about-card">
//               Clean
//               <br />
//               UI/UX
//             </div>
//             <div className="about-card">
//               Scalable
//               <br />
//               Systems
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="about-content">
//             <h2>
//               About <span>Me</span>
//             </h2>

//             <h4>Full-Stack Web Developer</h4>

//             <p>
//               I am a passionate Full-Stack Web Developer who loves building
//               modern, high-performance and visually refined web applications. I
//               focus on writing clean, maintainable code while keeping user
//               experience at the center of every project.
//             </p>

//             <p>
//               With hands-on experience in React, Node.js, Express, and MongoDB,
//               I enjoy turning real-world problems into scalable digital
//               solutions. I continuously learn new technologies and design
//               patterns to stay aligned with industry standards.
//             </p>

//             <div className="about-tags">
//               <div className="about-tag">React</div>
//               <div className="about-tag">Node.js</div>
//               <div className="about-tag">Express</div>
//               <div className="about-tag">MongoDB</div>
//               <div className="about-tag">UI/UX</div>
//               <div className="about-tag">Performance</div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import AnimatedSection from "./animations/AnimatedSection";
import { m } from "framer-motion";
import { buttonInteraction, staggerContainer, staggerItem } from "../utils/motion";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        .about-section {
          min-height: 100vh;
          // background: radial-gradient(circle at top left, #3a1c12, #0c0503 70%);
          background: var(--bg-main);
          display: flex;
          align-items: center; 
          justify-content: center;
          padding: 100px 60px;
          color: var(--text-main);
        }

        .about-wrapper {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 70px;
          align-items: center;
        }

        /* LEFT SIDE */
        .about-visual {
          position: relative;
          background: var(--bg-card);
          border-radius: 26px;
          padding: 26px;
        }

        .visual-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .visual-card {
          height: 150px;
          border-radius: 18px;
          background-size: cover;
          background-position: center;
          border: 3px solid #8b5cf6;
          position: relative;
        }

        .badge {
          position: absolute;
          top: 10px;
          left: 10px;
          // background: #ff9f1c;
                    background: linear-gradient(135deg, #8b5cf6, #22d3ee);

          color: #000;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 12px;
          font-weight: 600;
        }

        .experience {
          position: absolute;
          bottom: -22px;
          left: 50%;
          transform: translateX(-50%);
          // background: #ff9f1c;
                    background: linear-gradient(135deg, #8b5cf6, #22d3ee);

          color: #000;
          padding: 14px 26px;
          border-radius: 18px;
          font-weight: 700;
          font-size: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        /* RIGHT SIDE */
        .about-content h2 {
          font-size: 48px;
          margin-bottom: 12px;
        }

        .about-content h2 span {
          // color: #ff9f1c;
          // color: linear-gradient(135deg, #8b5cf6, #22d3ee);
                    // background: linear-gradient(135deg, #8b5cf6, #22d3ee);
                    color: #8b5cf6;

        }

        .about-content h4 {
          font-weight: 500;
          opacity: 0.9;
          margin-bottom: 26px;
        }

        .about-content p {
          font-size: 15px;
          line-height: 1.9;
          opacity: 0.85;
          margin-bottom: 22px;
        }

        .about-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 30px;
        }

        .feature {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .feature-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,159,28,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          // color: #ff9f1c;
                    color: linear-gradient(135deg, #8b5cf6, #22d3ee);

          font-size: 18px;
        }

        .feature h5 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
        }

        .feature p {
          margin: 6px 0 0;
          font-size: 13px;
          opacity: 0.8;
        }

        .about-actions {
          display: flex;
          gap: 18px;
          margin-top: 40px;
        }

        .btn-primary {
          // background: #ff9f1c;
          background: linear-gradient(135deg, #8b5cf6, #22d3ee);

          color: #000;
          padding: 14px 28px;
          border-radius: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        .btn-outline {
          border: 2px solid #8b5cf6;
          // color: #ff9f1c;
          color: linear-gradient(135deg, #8b5cf6, #22d3ee);
          padding: 12px 26px;
          border-radius: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .about-wrapper {
            grid-template-columns: 1fr;
          }
          .about-section {
            padding: 80px 20px;
          }
            .about-content h2 {
    text-align: center;
  }
     .about-content h4 {
    text-align: center;
  }
  
        }

        
      `}</style>

      <section className="about-section">
        <div className="about-wrapper">
          {/* LEFT */}
          <AnimatedSection className="about-visual" delay={0.1}>
            <div className="visual-grid">
              <div
                className="visual-card"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4')",
                }}
              >
                <div className="badge">Professional</div>
              </div>

              <div
                className="visual-card"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')",
                }}
              >
                <div className="badge">Creative</div>
              </div>

              <div
                className="visual-card"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
                }}
              >
                <div className="badge">Developer</div>
              </div>

              <div
                className="visual-card"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1559028012-481c04fa702d')",
                }}
              >
                <div className="badge">Designer</div>
              </div>
            </div>

            <div className="experience">
              3+ Years <br /> Experience
            </div>
          </AnimatedSection>

          {/* RIGHT */}
          <AnimatedSection className="about-content" delay={0.3}>
            <h2>
              About <span>Me</span>
            </h2>

            <h4>Full-Stack Developer & UI/UX Designer</h4>

            <p>
              I create digital experiences that combine innovative technology
              with elegant design. With expertise in both frontend and backend
              development, I deliver solutions that are visually stunning,
              highly functional, and user-friendly.
            </p>

            <m.div className="about-features" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <m.div className="feature" variants={staggerItem}>
                <div className="feature-icon">⚛️</div>
                <div>
                  <h5>Frontend</h5>
                  <p>React, JavaScript, Tailwind, CSS</p>
                </div>
              </m.div>

              <m.div className="feature" variants={staggerItem}>
                <div className="feature-icon">🧠</div>
                <div>
                  <h5>Backend</h5>
                  <p>Node.js, Express, MongoDB, REST APIs</p>
                </div>
              </m.div>

              <m.div className="feature" variants={staggerItem}>
                <div className="feature-icon">🎨</div>
                <div>
                  <h5>Design</h5>
                  <p>UI/UX, Figma, Responsive Design</p>
                </div>
              </m.div>

              <m.div className="feature" variants={staggerItem}>
                <div className="feature-icon">🛠️</div>
                <div>
                  <h5>Tools</h5>
                  <p>Git, Docker, VS Code, Webpack</p>
                </div>
              </m.div>
            </m.div>

            <div className="about-actions">
              <m.a onClick={(e) => { e.preventDefault(); navigate('/projects'); }} className="btn-primary" style={{ cursor: 'pointer' }} whileHover={buttonInteraction.hover} whileTap={buttonInteraction.tap}>
                + View Portfolio
              </m.a>
              <m.a onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="btn-outline" style={{ cursor: 'pointer' }} whileHover={buttonInteraction.hover} whileTap={buttonInteraction.tap}>
                Contact Me
              </m.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
