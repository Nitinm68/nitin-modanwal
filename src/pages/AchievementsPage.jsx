import Footer from "../components/Footer";

const achievements = [
  // 🟣 Core Courses & Bootcamps
  {
    title: "Introduction to MongoDB (For Students)",
    org: "MongoDB Inc.",
    date: "08 August 2025",
    category: "Course",
  },
  {
    title: "Connecting to a MongoDB Database",
    org: "MongoDB Inc.",
    date: "08 August 2025",
    category: "Course",
  },
  {
    title: "ChatGPT Bootcamp",
    org: "LetsUpgrade",
    date: "26–28 February 2025",
    category: "Bootcamp",
  },
  {
    title: "JavaScript Bootcamp",
    org: "LetsUpgrade",
    date: "10–14 September 2024",
    category: "Bootcamp",
  },
  {
    title: "HTML & CSS Bootcamp",
    org: "LetsUpgrade",
    date: "9–14 September 2024",
    category: "Bootcamp",
  },
  {
    title: "Alpha – DSA with Java",
    org: "Apna College",
    date: "2024",
    category: "Course",
  },

  // 🟣 Internship & Skill Programs
  {
    title: "Software Engineering Job Simulation",
    org: "Telstra (via Forage)",
    date: "18 December 2024",
    category: "Skill Program",
  },
  {
    title: "Star Performer – Web Development Internship",
    org: "Oasis Infobyte (AICTE)",
    date: "December 2024",
    category: "Internship",
  },
  {
    title: "MERN Stack Summer Training",
    org: "GRAStech",
    date: "31 July 2025",
    category: "Training",
  },

  // 🟣 Competitions & Hackathons
  {
    title: "CodeCraft Olympiad 2.0 (C Programming)",
    org: "BBD University – School of Engineering",
    date: "22 April 2024",
    category: "Competition",
  },
  {
    title: "Flipkart GRID 6.0 – Software Development Track",
    org: "Flipkart (via Unstop)",
    date: "2024",
    category: "Competition",
  },
  {
    title: "CertifyO – Submission Round",
    org: "CertifyO (via Unstop)",
    date: "2024",
    category: "Competition",
  },

  // 🟣 Leadership & Volunteering
  {
    title: "Technical Team Coordinator – Utkarsh 25",
    org: "BBD Educational Group, Lucknow",
    date: "23–25 February 2025",
    category: "Leadership",
  },
  {
    title: "Assistant Tech Head – Spring Fest",
    org: "IIT Kharagpur (Spring Fest 2025)",
    date: "2025",
    category: "Leadership",
  },
  {
    title: "Volunteer – Highway to Alcher",
    org: "IIT Guwahati (Alcheringa 2025)",
    date: "29 September 2024",
    category: "Volunteer",
  },

  // 🟣 Seminars & Exhibitions
  {
    title: "Seminar on Driving Digital Intelligence",
    org: "School of Engineering, BBD University",
    date: "23 November 2024",
    category: "Seminar",
  },
  {
    title: "TechXplore – Project Exhibition",
    org: "School of Engineering, BBD University",
    date: "22 August 2024",
    category: "Exhibition",
  },
  {
    title: "Software Exhibition – SOCA",
    org: "School of Computer Applications, BBD University",
    date: "6 December 2024",
    category: "Exhibition",
  },
];

export default function AchievementsPage() {
  return (
    <>
      <section className="timeline-section">
        <style>{`
  .timeline-section {
    background: var(--bg-main);
    padding: 160px 8% 120px;
    color: var(--text-main);
    position: relative;
    overflow: hidden;
  }

  /* Animated Edge Glow Background */
  .timeline-section::before {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%);
    top: -200px;
    left: -200px;
    animation: floatGlow 8s ease-in-out infinite alternate;
  }

  .timeline-section::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%);
    bottom: -150px;
    right: -150px;
    animation: floatGlow 10s ease-in-out infinite alternate-reverse;
  }

  @keyframes floatGlow {
    from { transform: translateY(0px); }
    to { transform: translateY(40px); }
  }

  .timeline-header {
    text-align: center;
    margin-bottom: 100px;
  }

  .timeline-header h1 {
    font-size: 44px;
    font-weight: 600;
  }

  .timeline-header span {
    color: #8b5cf6;
  }

  .timeline-container {
    position: relative;
    max-width: 1100px;
    margin: auto;
  }

  /* Animated Timeline Line */
  .timeline-container::after {
    content: "";
    position: absolute;
    width: 3px;
    background: linear-gradient(
      to bottom,
      transparent,
      #8b5cf6,
      transparent
    );
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: lineGlow 3s linear infinite;
  }

  @keyframes lineGlow {
    0% { filter: brightness(1); }
    50% { filter: brightness(1.6); }
    100% { filter: brightness(1); }
  }

  .timeline-item {
    position: relative;
    width: 50%;
    padding: 25px 40px;
    box-sizing: border-box;
  }

  .timeline-item.left {
    left: 0;
    text-align: right;
  }

  .timeline-item.right {
    left: 50%;
    text-align: left;
  }

  .timeline-content {
    background: var(--bg-card);
    padding: 24px;
    border-radius: 16px;
    border: 1px solid var(--border-light);
    position: relative;
    overflow: hidden;
    transition: 0.4s ease;
  }

  /* Shine Hover Effect */
  .timeline-content::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(139,92,246,0.2),
      transparent
    );
    transform: skewX(-25deg);
  }

  .timeline-content:hover::before {
    left: 120%;
    transition: 0.8s ease;
  }

  .timeline-content:hover {
    border-color: #8b5cf6;
    transform: translateY(-6px);
    box-shadow: 0 0 25px rgba(139,92,246,0.3);
  }

  .timeline-content h3 {
    font-size: 16px;
    margin-bottom: 6px;
  }

  .timeline-content p {
    font-size: 14px;
    color: var(--text-muted);
    margin-bottom: 6px;
  }

  .timeline-category {
    font-size: 12px;
    color: #8b5cf6;
    margin-bottom: 6px;
    font-weight: 600;
  }

  .timeline-date {
    font-size: 12px;
    color: var(--text-accent);
  }

  /* Pulse Animation for Dots */
  .timeline-item::before {
    content: "";
    position: absolute;
    top: 35px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #8b5cf6;
    z-index: 1;
    box-shadow: 0 0 0 rgba(139,92,246,0.6);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(139,92,246,0.6);
    }
    70% {
      box-shadow: 0 0 0 12px rgba(139,92,246,0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(139,92,246,0);
    }
  }

  .timeline-item.left::before {
    right: -7px;
  }

  .timeline-item.right::before {
    left: -7px;
  }

  @media (max-width: 768px) {
    .timeline-container::after {
      left: 20px;
    }

    .timeline-item {
      width: 100%;
      padding-left: 60px;
      padding-right: 20px;
      margin-bottom: 40px;
    }

    .timeline-item.left,
    .timeline-item.right {
      left: 0;
      text-align: left;
    }

    .timeline-item::before {
      left: 14px;
    }
  }
`}</style>

        <div className="timeline-header">
          <h1>
            My <span>Professional Journey</span>
          </h1>
        </div>

        <div className="timeline-container">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="timeline-category">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.org}</p>
                <div className="timeline-date">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
