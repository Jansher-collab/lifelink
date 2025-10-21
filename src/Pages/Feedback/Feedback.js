import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";

export default function Feedback() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const namePattern = /^[A-Z][a-zA-Z\s]*$/;
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((s) => ({ ...s, [id]: value }));
    validateField(id, value);
  };

  const validateField = (field, value) => {
    const newErrors = { ...errors };
    const newSuccess = { ...success };
    const trimmed = value.trim();

    if (field === "name") {
      if (!trimmed) {
        newErrors.name = "Name is required.";
        newSuccess.name = "";
      } else if (!namePattern.test(trimmed)) {
        newErrors.name = "Name must start with a capital letter.";
        newSuccess.name = "";
      } else {
        newErrors.name = "";
        newSuccess.name = "Looks good!";
      }
    }

    if (field === "email") {
      if (!trimmed) {
        newErrors.email = "Email is required.";
        newSuccess.email = "";
      } else if (!emailPattern.test(trimmed)) {
        newErrors.email = "Invalid email address.";
        newSuccess.email = "";
      } else {
        newErrors.email = "";
        newSuccess.email = "Valid email!";
      }
    }

    if (field === "message") {
      if (!trimmed) {
        newErrors.message = "Message cannot be empty.";
        newSuccess.message = "";
      } else if (trimmed.length < 10) {
        newErrors.message = "Message should be at least 10 characters (including spaces).";
        newSuccess.message = "";
      } else {
        newErrors.message = "";
        newSuccess.message = "Message looks great!";
      }
    }

    setErrors(newErrors);
    setSuccess(newSuccess);
  };

  const validateAll = () => {
    const vErrors = {};
    const vSuccess = {};

    if (!formData.name.trim()) vErrors.name = "Name is required.";
    else if (!namePattern.test(formData.name.trim()))
      vErrors.name = "Name must start with a capital letter.";
    else vSuccess.name = "Looks good!";

    if (!formData.email.trim()) vErrors.email = "Email is required.";
    else if (!emailPattern.test(formData.email.trim()))
      vErrors.email = "Invalid email address.";
    else vSuccess.email = "Valid email!";

    if (!formData.message.trim()) vErrors.message = "Message cannot be empty.";
    else if (formData.message.trim().length < 10)
      vErrors.message = "Message should be at least 10 characters (including spaces).";
    else vSuccess.message = "Message looks great!";

    setErrors(vErrors);
    setSuccess(vSuccess);

    return Object.keys(vErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      setSubmitted(true);
      setTimeout(() => navigate("/"), 3000);
    }
  };

  useEffect(() => {
    if (submitted) {
      const el = document.querySelector(".submission-message");
      if (window.innerWidth <= 1000 && el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [submitted]);

  return (
    <main className="feedback-page">
      {/* HERO SECTION */}
      <section className="feedback-hero">
        <h1>
          Share Your <span className="highlight">Feedback</span>
        </h1>
        <p>
          Your thoughts help us improve LifeLink — every response helps us make emergency care faster
          and smarter.
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="feedback-main">
        {/* FORM CONTAINER */}
        <div className="feedback-form-section">
          <div className="feedback-form-wrapper">
            <form className="feedback-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : success.name ? "valid" : ""}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
                {!errors.name && success.name && <p className="success-text">{success.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : success.email ? "valid" : ""}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
                {!errors.email && success.email && <p className="success-text">{success.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Share your feedback..."
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "error" : success.message ? "valid" : ""}
                />
                {errors.message && <p className="error-text">{errors.message}</p>}
                {!errors.message && success.message && (
                  <p className="success-text">{success.message}</p>
                )}
              </div>

              <div className="btn-container">
                <button type="submit" className="btn primary">
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ✅ SUCCESS MESSAGE (Now inside .feedback-main between form & info) */}
        {submitted && (
          <div className="submission-message">
            <h3>✅ Successfully submitted!</h3>
            <p>Redirecting to Home page...</p>
          </div>
        )}

        {/* INFO BLOCK */}
        <aside className="feedback-info">
          <h2>Why Your Feedback Matters</h2>
          <p>
            At <strong>LifeLink</strong>, we value every voice that helps us improve. Your
            suggestions shape how we respond, communicate, and deliver care efficiently.
          </p>
          <ul>
            <li>Enhance emergency response systems</li>
            <li>Improve ambulance dispatch accuracy</li>
            <li>Support faster patient communication</li>
            <li>Boost operational efficiency</li>
            <li>Promote community trust and collaboration</li>
          </ul>
          <p>
            Every message you share is reviewed by our dedicated team to turn ideas into real-life
            improvements.
          </p>
          <p className="closing-text">
            Your words save lives — thank you for helping us grow stronger. 💙
          </p>
        </aside>
      </section>

      {/* CTA SECTION */}
      <section className="feedback-cta">
        <h2>Together, We Build Better Care 💙</h2>
        <p>
          Each suggestion helps LifeLink grow stronger — thank you for sharing your voice and
          shaping the future of care.
        </p>
      </section>
    </main>
  );
}
