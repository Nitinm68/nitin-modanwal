import { Link } from "react-router-dom";
import profile from "../assets/images/Nitin developer Profile.jpeg";
import resume from "../assets/NitinModanwal_9569601986_resume.pdf";
import AnimatedSection from "./animations/AnimatedSection";

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 0px 80px;
          background: var(--bg-main);
          color: var(--text-main);
          padding-top: 100px;
        }

        .hero-image {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .hero-image::before {
          content: "";
          position: absolute;
          width: 360px;
          /* height: 420px; */
          background: linear-gradient(135deg, #8b5cf6, #22d3ee);
          border-radius: 30px;
          z-index: 0;
        }

        .hero-image img {
          width: 360px;
          border-radius: 22px;
          position: relative;
          z-index: 1;
        }

        .hero-content h4 {
          color: #22d3ee;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .hero-content h1 {
          font-size: 54px;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .hero-content h1 span {
          background: linear-gradient(90deg, #8b5cf6, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-content p {
          max-width: 480px;
          opacity: 0.85;
          line-height: 1.7;
          margin-bottom: 35px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 32px;
          border-radius: 30px;
          background: transparent;
          border: 2px solid #8b5cf6;
          color: var(--text-main);
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .hero-btn span {
          background: linear-gradient(135deg, #8b5cf6, #22d3ee);
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #000;
          font-size: 18px;
        }

        .hero-btn:hover {
          background: #8b5cf6;
          color: #000;
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 600px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 120px;
padding-bottom: 30px;
padding-left: 20px;
padding-right: 20px;
          }

          .hero-image::before {
            width: 280px;
            height: 340px;
            border-radius: 24px;
          }

          .hero-image img {
            width: 280px;
            height: 340px;
            border-radius: 20px;
          }

          .hero-content h4 {
            font-size: 13px;
            letter-spacing: 1.5px;
          }

          .hero-content h1 {
            font-size: 34px;
            line-height: 1.25;
          }

          .hero-content p {
            max-width: 100%;
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 28px;
          }

          .hero-btn {
            justify-content: center;
            width: 100%;
            max-width: 260px;
            margin: 0 auto;
          }
        }
      `}</style>

      <section className="hero">
        {/* LEFT IMAGE */}
        <AnimatedSection className="hero-image" delay={0.2}>
          <img src={profile} alt="Nitin Developer" />
        </AnimatedSection>

        {/* RIGHT CONTENT */}
        <AnimatedSection className="hero-content" delay={0.4}>
          <h4>— I’M NITIN MODANWAL</h4>

          <h1>
            FULL STACK <br />
            <span>WEB DEVELOPER</span>
          </h1>

          <p>
            I build modern, scalable and high-performance web applications using
            React, Node.js, Express and MongoDB with clean UI and real-world
            logic.
          </p>

          <a href={resume} download className="hero-btn">
            DOWNLOAD CV
            <span>⬇</span>
          </a>
        </AnimatedSection>
      </section>
    </>
  );
}
