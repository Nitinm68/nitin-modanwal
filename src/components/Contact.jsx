// import {
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaLinkedin,
//   FaGithub,
//   FaWhatsapp,
// } from "react-icons/fa";

// import contactImg from "../assets/images/contact.png";

// export default function Contact() {
//   return (
//     <section style={section}>
//       <div style={container}>
//         {/* LEFT */}
//         <div style={left}>
//           <h2 style={heading}>Don’t Be Shy!</h2>
//           <p style={desc}>
//             Feel free to get in touch with me. I’m always open to discussing new
//             projects, creative ideas, or opportunities to be part of your
//             vision.
//           </p>

//           <div style={info}>
//             <FaMapMarkerAlt style={icon} />
//             <div>
//               <h4 style={label}>ADDRESS</h4>
//               <p style={text}>Prayagraj, Uttar Pradesh, India</p>
//             </div>
//           </div>

//           <div style={info}>
//             <FaEnvelope style={icon} />
//             <div>
//               <h4 style={label}>MAIL ME</h4>
//               <a href="mailto:nitinmodanwal519@gmail.com" style={link}>
//                 nitinmodanwal519@gmail.com
//               </a>
//             </div>
//           </div>

//           <div style={info}>
//             <FaPhoneAlt style={icon} />
//             <div>
//               <h4 style={label}>CALL / WHATSAPP</h4>
//               <p style={text}>+91 7390999498</p>
//             </div>
//           </div>

//           {/* SOCIAL */}
//           <div style={socialWrap}>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noreferrer"
//               style={social}
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noreferrer"
//               style={social}
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://wa.me/917390999498"
//               target="_blank"
//               rel="noreferrer"
//               style={social}
//             >
//               <FaWhatsapp />
//             </a>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div style={right}>
//           <img src={contactImg} alt="Contact Illustration" style={image} />
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= STYLES ================= */

// const section = {
//   background: "#0f0f0f",
//   color: "#fff",
//   padding: "100px 40px",
// };

// const container = {
//   maxWidth: "1100px",
//   margin: "0 auto",
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: "60px",
//   alignItems: "stretch", // ✅ equal height
// };

// const left = {
//   maxWidth: "520px",
// };

// const right = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "100%",
// };

// const image = {
//   height: "100%", // ✅ matches left content height
//   maxHeight: "820px", // safety limit
//   width: "auto",
//   objectFit: "contain",
//   marginBottom: "50px",
// };

// const heading = {
//   fontSize: "38px",
//   marginBottom: "15px",
//   fontWeight: "600",
// };

// const desc = {
//   color: "#b5b5b5",
//   lineHeight: "1.7",
//   marginBottom: "40px",
// };

// const info = {
//   display: "flex",
//   gap: "18px",
//   marginBottom: "28px",
// };

// const icon = {
//   fontSize: "22px",
//   color: "#ff8c00",
//   marginTop: "4px",
// };

// const label = {
//   fontSize: "14px",
//   letterSpacing: "1px",
//   color: "#ff8c00",
//   marginBottom: "4px",
// };

// const text = {
//   color: "#e0e0e0",
// };

// const link = {
//   color: "#e0e0e0",
//   textDecoration: "none",
// };

// const socialWrap = {
//   display: "flex",
//   gap: "16px",
//   marginTop: "35px",
// };

// const social = {
//   width: "42px",
//   height: "42px",
//   borderRadius: "50%",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   background: "#1a1a1a",
//   color: "#ff8c00",
//   textDecoration: "none",
//   transition: "0.3s",
// };

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

import contactImg from "../assets/images/contact.png";

export default function Contact() {
  return (
    <section style={section}>
      {/* ===== MOBILE ONLY CSS (DESKTOP UNTOUCHED) ===== */}
      <style>
        {`
  @media (max-width: 768px) {

    .contact-container {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }

    .contact-left {
      max-width: 100% !important;
      text-align: center;
    }

    /* 🔥 FIX FOR ADDRESS / MAIL / CALL */
    .contact-info {
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      gap: 8px !important;
    }

    .contact-info h4 {
      margin-bottom: 4px;
    }

    .contact-social {
      justify-content: center;
    }

    .contact-right {
      order: 2;
    }

    .contact-image {
      max-height: 360px !important;
      margin: 0 auto !important;
    }
  }
`}
      </style>

      <div style={container} className="contact-container">
        {/* LEFT */}
        <div style={left} className="contact-left">
          <h2 style={heading}>Don’t Be Shy!</h2>
          <p style={desc}>
            Feel free to get in touch with me. I’m always open to discussing new
            projects, creative ideas, or opportunities to be part of your
            vision.
          </p>

          <div style={info} className="contact-info">
            <FaMapMarkerAlt style={icon} />
            <div>
              <h4 style={label}>ADDRESS</h4>
              <p style={text}>Prayagraj, Uttar Pradesh, India</p>
            </div>
          </div>

          <div style={info} className="contact-info">
            <FaEnvelope style={icon} />
            <div>
              <h4 style={label}>MAIL ME</h4>
              <a href="mailto:nitinmodanwal519@gmail.com" style={link}>
                nitinmodanwal519@gmail.com
              </a>
            </div>
          </div>

          <div style={info} className="contact-info">
            <FaPhoneAlt style={icon} />
            <div>
              <h4 style={label}>CALL / WHATSAPP</h4>
              <p style={text}>+91 7390999498</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div style={socialWrap} className="contact-social">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={social}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              style={social}
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/917390999498"
              target="_blank"
              rel="noreferrer"
              style={social}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div style={right} className="contact-right">
          <img
            src={contactImg}
            alt="Contact Illustration"
            style={image}
            className="contact-image"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const section = {
  background: "var(--bg-main)",
  color: "var(--text-main)",
  padding: "60px 40px",
  // PaddingTop: "100px",
  // PaddingLeft: "40px",
  // PaddingRight: "40px",
};

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "60px",
  alignItems: "stretch",
};

const left = {
  maxWidth: "520px",
};

const right = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

const image = {
  height: "100%",
  maxHeight: "820px",
  width: "auto",
  objectFit: "contain",
  marginBottom: "50px",
};

const heading = {
  fontSize: "38px",
  marginBottom: "15px",
  fontWeight: "600",
};

const desc = {
  color: "var(--text-muted)",
  lineHeight: "1.7",
  marginBottom: "40px",
};

const info = {
  display: "flex",
  gap: "18px",
  marginBottom: "28px",
};

const icon = {
  fontSize: "22px",
  color: "#8b5cf6",
  marginTop: "4px",
};

const label = {
  fontSize: "14px",
  letterSpacing: "1px",
  color: "#8b5cf6",
  marginBottom: "4px",
};

const text = {
  color: "var(--text-main)",
};

const link = {
  color: "var(--text-main)",
  textDecoration: "none",
};

const socialWrap = {
  display: "flex",
  gap: "16px",
  marginTop: "35px",
};

const social = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--bg-input)",
  color: "#8b5cf6",
  textDecoration: "none",
  transition: "0.3s",
};
