import AnimatedSection from "./animations/AnimatedSection";
import { m } from "framer-motion";
import { cardHover, staggerContainer, staggerItem, buttonInteraction } from "../utils/motion";

export default function Services() {
  return (
    <section className="shop">
      <style>{`
        .shop {
          background: var(--bg-main);
          color: var(--text-main);
          padding: 140px 7%;
          font-family: Inter, system-ui, sans-serif;
        }

        /* ===== Header ===== */
        .shop-header {
          text-align: center;
          margin-bottom: 90px;
        }

        .shop-header h2 {
          font-size: 48px;
          margin-bottom: 12px;
        }

        .shop-header p {
          color: var(--text-muted);
          max-width: 700px;
          margin: auto;
          line-height: 1.6;
        }

        /* ===== Section ===== */
        .section {
          margin-bottom: 110px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 30px;
          margin-bottom: 40px;
          color: var(--primary);
        }

        .section-title svg {
          width: 26px;
          height: 26px;
          stroke: var(--primary);
        }

        /* ===== Grid ===== */
        .products {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 36px;
        }

        /* ===== Card ===== */
        .product {
          position: relative;
          padding: 30px;
          border-radius: 22px;
          background: var(--bg-card);
          overflow: hidden;
          isolation: isolate;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        /* animated border */
        .product::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: conic-gradient(
            from 0deg,
            transparent,
            var(--primary),
            transparent,
            var(--primary),
            transparent
          );
          animation: rotateBorder 6s linear infinite;
          z-index: -1;
        }

        .product::after {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          background: var(--bg-card);
          z-index: -1;
        }

        @keyframes rotateBorder {
          to { transform: rotate(360deg); }
        }

        .product:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 70px rgba(139,92,246,0.35);
        }

        /* ===== Badge ===== */
        .badge {
          position: absolute;
          top: 18px;
          right: 18px;
          background: var(--primary);
          color: var(--bg-main);
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 20px;
        }

        /* ===== Content ===== */
        .product h4 {
          font-size: 22px;
          margin-bottom: 6px;
        }

        .product small {
          color: var(--text-muted);
          display: block;
          margin-bottom: 18px;
        }

        .price {
          font-size: 32px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 18px;
        }

        .price span {
          font-size: 14px;
          color: var(--text-accent);
          font-weight: 400;
        }

        .features {
          list-style: none;
          padding: 0;
          margin-bottom: 26px;
        }

        .features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          margin-bottom: 10px;
          color: var(--text-main);
        }

        .features svg {
          width: 16px;
          height: 16px;
          stroke: var(--primary);
          flex-shrink: 0;
        }

        /* ===== CTA ===== */
        .cta {
          display: block;
          text-align: center;
          padding: 14px;
          border-radius: 14px;
          background: var(--primary);
          color: var(--bg-main);
          font-weight: 700;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .cta:hover {
          background: var(--text-main);
        }

        /* ===== Add-ons ===== */
        .addons {
          margin-top: 100px;
          padding: 45px;
          border-radius: 26px;
          background: linear-gradient(
            90deg,
            rgba(139,92,246,0.18),
            rgba(139,92,246,0.05)
          );
          text-align: center;
        }

        .addons h3 {
          color: var(--primary);
          margin-bottom: 14px;
        }

        .addons p {
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* ===== Process ===== */
        .process {
          margin-top: 110px;
          text-align: center;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 18px;
          margin-top: 26px;
        }

        .step {
          padding: 16px;
          border-radius: 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-focus);
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .shop-header h2 {
            font-size: 34px;
          }
        }
      `}</style>

      {/* Header */}
      <div className="shop-header">
        <h2>
          Services <span style={{ color: "#8b5cf6" }}>Store</span>
        </h2>
        <p>
          Professional digital services built for performance, scalability and
          long-term business growth.
        </p>
      </div>

      {/* Website Development */}
      <Section
        title="Website Development"
        icon={<RectIcon />}
        items={[
          {
            title: "Informative Website",
            desc: "Business / Company Website",
            price: "₹15,000 – ₹20,000",
            features: [
              "On-Page SEO Ready",
              "Responsive Design",
              "Fast Loading UI",
              "Contact & Lead Forms",
            ],
          },
          {
            title: "Landing Website",
            desc: "High Conversion Page",
            price: "₹10,000 – ₹12,000",
            features: [
              "CTA Focused Layout",
              "Lead Generation",
              "Mobile Optimized",
              "Speed Optimized",
            ],
          },
          {
            title: "E-Commerce Website",
            desc: "Online Store Solution",
            price: "₹30,000+",
            badge: "BEST SELLER",
            features: [
              "Payment Gateway",
              "Cart & Checkout",
              "Admin Dashboard",
              "On-Page SEO",
            ],
          },
          {
            title: "Event / Portfolio Website",
            desc: "Personal or Event Showcase",
            price: "₹8,000 – ₹12,000",
            features: [
              "Gallery Section",
              "Event Details",
              "Registration / Contact",
              "Responsive Design",
            ],
          },
        ]}
      />

      {/* Digital Marketing */}
      <Section
        title="Digital Marketing"
        icon={<PlusIcon />}
        items={[
          {
            title: "Google My Business",
            desc: "Local Business Growth",
            price: "₹7,000 / month",
            features: [
              "Profile Optimization",
              "Weekly Posts",
              "Review Management",
              "Local Visibility",
            ],
          },
          {
            title: "Meta Ads",
            desc: "Facebook & Instagram Ads",
            price: "₹10,000+",
            features: [
              "Campaign Setup",
              "Audience Targeting",
              "Lead Generation",
              "Performance Tracking",
            ],
          },
        ]}
      />

      {/* Creative Services */}
      <Section
        title="Creative Services"
        icon={<CircleIcon />}
        items={[
          {
            title: "Graphic Designing",
            desc: "Per Design",
            price: "₹250 – ₹500",
            features: [
              "Social Media Creatives",
              "Posters & Banners",
              "Thumbnails",
              "Ad Creatives",
            ],
          },
          {
            title: "Video Editing",
            desc: "Per Video",
            price: "₹500 – ₹2000",
            features: [
              "Instagram Reels",
              "Promo Videos",
              "YouTube Editing",
              "Clean Transitions",
            ],
          },
        ]}
      />

      {/* Add-ons */}
      <div className="addons">
        <h3>Add-On Services</h3>
        <p>
          WhatsApp Integration • Razorpay Setup • Performance Optimization •
          Domain & Hosting Support • Custom Features
        </p>
      </div>

      {/* Process */}
      <div className="process">
        <h3 className="section-title">Project Workflow</h3>
        <div className="steps">
          <div className="step">Requirement Analysis</div>
          <div className="step">UI & Planning</div>
          <div className="step">Development</div>
          <div className="step">Review & Testing</div>
          <div className="step">Final Delivery</div>
        </div>
      </div>
    </section>
  );
}

/* ===== Reusable Components ===== */

function Section({ title, icon, items }) {
  return (
    <AnimatedSection className="section">
      <h3 className="section-title">
        {icon}
        {title}
      </h3>

      <m.div className="products" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
        {items.map((item, i) => (
          <m.div className="product" key={i} variants={staggerItem} whileHover={cardHover.hover} initial="rest">
            {item.badge && <span className="badge">{item.badge}</span>}
            <h4>{item.title}</h4>
            <small>{item.desc}</small>
            <div className="price">{item.price}</div>
            <ul className="features">
              {item.features.map((f, idx) => (
                <li key={idx}>
                  <CheckIcon /> {f}
                </li>
              ))}
            </ul>
            <m.a href="/contact" className="cta" whileHover={buttonInteraction.hover} whileTap={buttonInteraction.tap}>
              Start a Project
            </m.a>
          </m.div>
        ))}
      </m.div>
    </AnimatedSection>
  );
}

/* ===== Icons ===== */

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const RectIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <rect x="3" y="4" width="18" height="16" rx="2" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M12 2v20M2 12h20" />
  </svg>
);

const CircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
  </svg>
);
