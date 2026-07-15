import { useState } from "react";
import Footer from "../components/Footer";
import { FaInstagram, FaSpinner } from "react-icons/fa";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    businessType: "",
    mobileNumber: "",
    email: "",
    businessAddress: "",
    existingWebsite: "",
    requiredServices: [],
    budget: "",
    deadline: "",
    projectRequirements: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const servicesList = [
    "Business Website", "Portfolio Website", "Landing Page",
    "E-commerce Website", "Website Redesign", "Website Maintenance",
    "SEO", "API Integration", "Custom Web Application", "Other"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "mobileNumber") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length > 10) return;
      setForm({ ...form, mobileNumber: numericValue });
      setError("");
      return;
    }

    if (type === "checkbox" && name === "requiredServices") {
      setForm((prev) => {
        if (checked) {
          return { ...prev, requiredServices: [...prev.requiredServices, value] };
        } else {
          return {
            ...prev,
            requiredServices: prev.requiredServices.filter((s) => s !== value),
          };
        }
      });
      return;
    }

    setForm({ ...form, [name]: value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.mobileNumber.length !== 10) {
      setError("Mobile number must be exactly 10 digits");
      return;
    }
    
    if (form.requiredServices.length === 0) {
      setError("Please select at least one required service");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/enquiries", form);

      if (response.data.success) {
        // Generate WhatsApp Message
        const messageTemplate = `━━━━━━━━━━━━━━━━━━━━
🌐 NEW WEBSITE ENQUIRY

👤 Name:
${form.fullName}

🏢 Business:
${form.businessName}

📌 Business Type:
${form.businessType}

📱 Contact:
${form.mobileNumber}

📧 Email:
${form.email}

📍 Address:
${form.businessAddress || 'N/A'}

🌐 Existing Website:
${form.existingWebsite || 'N/A'}

🛠 Services:
${form.requiredServices.join(', ')}

💰 Budget:
${form.budget || 'N/A'}

📅 Deadline:
${form.deadline || 'N/A'}

📝 Requirements:

${form.projectRequirements}

━━━━━━━━━━━━━━━━━━━━
Please contact me regarding my website project.`;

        const encodedMessage = encodeURIComponent(messageTemplate);
        const whatsappUrl = `https://wa.me/917390994948?text=${encodedMessage}`;
        
        alert("Your enquiry has been submitted successfully.");
        window.open(whatsappUrl, "_blank");

        // Reset form
        setForm({
          fullName: "",
          businessName: "",
          businessType: "",
          mobileNumber: "",
          email: "",
          businessAddress: "",
          existingWebsite: "",
          requiredServices: [],
          budget: "",
          deadline: "",
          projectRequirements: "",
        });
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-section">
        <style>{`
        /* MAIN SECTION */
        .contact-section {
          background: var(--bg-main);
          padding: 160px 7% 120px;
          color: var(--text-main);
        }

        .contact-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1.8fr;
          gap: 60px;
          align-items: flex-start;
        }

        /* LEFT */
        .contact-info {
          padding-top: 20px;
          position: sticky;
          top: 100px;
        }

        .contact-info h1 {
          font-size: 52px;
          margin-bottom: 12px;
        }

        .contact-info h1 span {
          color: var(--primary);
        }

        .contact-info p {
          color: var(--text-muted);
          margin-bottom: 35px;
          line-height: 1.8;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
          color: var(--text-muted);
          font-size: 15px;
        }

        .info-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(139,92,246,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          font-weight: 700;
        }

        /* FORM */
        .contact-form {
          background: var(--bg-card);
          padding: 40px;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .form-group {
          position: relative;
        }

        .form-group.full {
          grid-column: span 2;
        }

        .form-group label.field-label {
            display: block;
            margin-bottom: 10px;
            font-size: 14px;
            color: var(--text-muted);
            font-weight: 500;
        }

        .form-group input:not([type="radio"]):not([type="checkbox"]),
        .form-group select,
        .form-group textarea {
          width: 100%;
          background: var(--bg-input);
          border: 1px solid rgba(139,92,246,0.25);
          padding: 16px;
          border-radius: 14px;
          color: var(--text-main);
          font-size: 14px;
          outline: none;
          height: 56px;
          transition: border-color 0.3s;
        }

        .form-group textarea {
          height: auto;
          min-height: 140px;
          resize: none;
        }

        .form-group input:not([type="radio"]):not([type="checkbox"]):focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--primary);
        }

        .error {
          color: #ff6b6b;
          font-size: 13px;
          margin-top: 8px;
        }

        /* RADIO & CHECKBOX CUSTOM UI */
        .radio-group, .checkbox-group {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        .radio-label, .checkbox-label {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            font-size: 13.5px;
            color: var(--text-main);
            background: var(--bg-input);
            padding: 12px 18px;
            border-radius: 12px;
            border: 1px solid rgba(139,92,246,0.15);
            transition: 0.3s;
            user-select: none;
        }

        .radio-label:hover, .checkbox-label:hover {
            border-color: rgba(139,92,246,0.5);
        }

        .radio-label input, .checkbox-label input {
            accent-color: var(--primary);
            width: 16px;
            height: 16px;
            margin: 0;
            cursor: pointer;
        }

        .submit-btn {
          margin-top: 22px;
          width: 100%;
          padding: 18px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            var(--primary),
            #a78bfa
          );
          border: none;
          font-weight: 700;
          cursor: pointer;
          color: #000;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          transition: transform 0.3s, box-shadow 0.3s, opacity 0.3s;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(139,92,246,0.45);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .spin-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

       @media (max-width: 900px) {
          .contact-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .contact-info {
            position: relative;
            top: 0;
          }
          .contact-info h1 {
            font-size: 38px;
            text-align: center;
          }
          .contact-info p {
            margin-left: auto;
            margin-right: auto;
          }
          .info-item {
            justify-content: center;
          }
          .contact-form {
            margin-top: 30px;
            padding: 35px 25px;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.full {
            grid-column: span 1;
          }
          .form-group label.field-label {
            text-align: left;
          }
       }
      `}</style>

        <div className="contact-container">
          {/* LEFT */}
          <div className="contact-info">
            <h1>
              GET IN <span>TOUCH</span>
            </h1>
            <p>
              Feel free to reach out for new projects, creative ideas or
              collaboration opportunities.
            </p>
            <div className="info-item">
              <div className="info-icon">📍</div>
              Prayagraj, Uttar Pradesh, India
            </div>
            <div className="info-item">
              <div className="info-icon">✉</div>
              nitindeveloper.official@gmail.com
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              +91 7390999498
            </div>
            <div className="info-item">
              <div
                className="info-icon"
                style={{ color: "#E1306C", fontSize: "20px" }}
              >
                <FaInstagram />
              </div>
              <a
                href="https://www.instagram.com/website_development_official?igsh=MXBqdXpmOHNub3N4bg=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#dcdcdc",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                website_development_official
              </a>
            </div>
          </div>

          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              
              <div className="form-group">
                <label className="field-label">Full Name *</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="field-label">Business Name *</label>
                <input
                  type="text"
                  placeholder="Your Business Name"
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="field-label">Mobile Number *</label>
                <input
                  type="text"
                  placeholder="Your Mobile Number"
                  name="mobileNumber"
                  value={form.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="field-label">Email Address *</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full">
                <label className="field-label">Business Address</label>
                <input
                  type="text"
                  placeholder="Your Business Address"
                  name="businessAddress"
                  value={form.businessAddress}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="field-label">Business Type *</label>
                <select
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Business Type</option>
                  <option value="Salon">Salon</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Gym">Gym</option>
                  <option value="Clinic">Clinic</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Coaching Institute">Coaching Institute</option>
                  <option value="Travel Agency">Travel Agency</option>
                  <option value="Retail Shop">Retail Shop</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Startup">Startup</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="field-label">Existing Website?</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="existingWebsite" 
                      value="Yes" 
                      checked={form.existingWebsite === "Yes"} 
                      onChange={handleChange} 
                    /> Yes
                  </label>
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="existingWebsite" 
                      value="No" 
                      checked={form.existingWebsite === "No"} 
                      onChange={handleChange} 
                    /> No
                  </label>
                </div>
              </div>

              <div className="form-group full">
                <label className="field-label">Required Services *</label>
                <div className="checkbox-group">
                  {servicesList.map((service) => (
                    <label key={service} className="checkbox-label">
                      <input 
                        type="checkbox" 
                        name="requiredServices" 
                        value={service} 
                        checked={form.requiredServices.includes(service)}
                        onChange={handleChange} 
                      /> {service}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="field-label">Project Budget</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Select Budget</option>
                  <option value="Under ₹10,000">Under ₹10,000</option>
                  <option value="₹10k–₹25k">₹10k–₹25k</option>
                  <option value="₹25k–₹50k">₹25k–₹50k</option>
                  <option value="₹50k+">₹50k+</option>
                </select>
              </div>

              <div className="form-group">
                <label className="field-label">Deadline</label>
                <select
                  name="deadline"
                  value={form.deadline}
                  onChange={handleChange}
                >
                  <option value="">Select Deadline</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Within 1 Week">Within 1 Week</option>
                  <option value="Within 1 Month">Within 1 Month</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div className="form-group full">
                <label className="field-label">Project Requirements *</label>
                <textarea
                  placeholder="Tell us about your business and your website requirements..."
                  name="projectRequirements"
                  value={form.projectRequirements}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {error && <div className="error">{error}</div>}

            <button className="submit-btn" disabled={loading}>
              {loading ? <><FaSpinner className="spin-icon" /> Submitting...</> : "Send Enquiry"}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
