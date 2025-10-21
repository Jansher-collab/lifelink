import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const namePattern = /^[A-Z][a-zA-Z\s]*$/;
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  const phonePattern = /^[0-9]{11}$/; // exactly 11 digits

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((s) => ({ ...s, [id]: value }));
    validateField(id, value);
  };

  const validateField = (field, value) => {
    const newErrors = { ...errors };
    const newSuccess = { ...success };

    if (field === "name") {
      if (!value.trim()) newErrors.name = "Full name is required.";
      else if (!namePattern.test(value.trim()))
        newErrors.name = "Name must start with a capital letter.";
      else newSuccess.name = "Looks good!";
      if (newSuccess.name) delete newErrors.name;
      else delete newSuccess.name;
    }

    if (field === "email") {
      if (!value.trim()) newErrors.email = "Email address is required.";
      else if (!emailPattern.test(value.trim()))
        newErrors.email = "Invalid email format.";
      else newSuccess.email = "Valid email!";
      if (newSuccess.email) delete newErrors.email;
      else delete newSuccess.email;
    }

    if (field === "phone") {
      if (!value.trim()) newErrors.phone = "Contact number is required.";
      else if (!phonePattern.test(value.trim()))
        newErrors.phone = "Phone number must be exactly 11 digits.";
      else newSuccess.phone = "Valid phone number!";
      if (newSuccess.phone) delete newErrors.phone;
      else delete newSuccess.phone;
    }

    if (field === "message") {
      if (!value.trim()) newErrors.message = "Message cannot be empty.";
      else if (value.trim().length < 10)
        newErrors.message = "Message should be at least 10 characters.";
      else newSuccess.message = "Message looks great!";
      if (newSuccess.message) delete newErrors.message;
      else delete newSuccess.message;
    }

    setErrors(newErrors);
    setSuccess(newSuccess);
  };

  const validateAll = () => {
    const vErrors = {};
    const vSuccess = {};

    if (!formData.name.trim()) vErrors.name = "Full name is required.";
    else if (!namePattern.test(formData.name.trim()))
      vErrors.name = "Name must start with a capital letter.";
    else vSuccess.name = "Looks good!";

    if (!formData.email.trim()) vErrors.email = "Email address is required.";
    else if (!emailPattern.test(formData.email.trim()))
      vErrors.email = "Invalid email format.";
    else vSuccess.email = "Valid email!";

    if (!formData.phone.trim()) vErrors.phone = "Contact number is required.";
    else if (!phonePattern.test(formData.phone.trim()))
      vErrors.phone = "Phone number must be exactly 11 digits.";
    else vSuccess.phone = "Valid phone number!";

    if (!formData.message.trim())
      vErrors.message = "Message cannot be empty.";
    else if (formData.message.trim().length < 10)
      vErrors.message = "Message should be at least 10 characters.";
    else vSuccess.message = "Message looks great!";

    setErrors(vErrors);
    setSuccess(vSuccess);

    return Object.keys(vErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      setSubmitted(true);
      setTimeout(() => navigate("/"), 2000);
    }
  };

  return (
    <main className="contact-page">
      {/* HEADER */}
      <section className="contact-hero">
        <h1>
          Get in <span className="highlight">Touch</span> With Us
        </h1>
        <p>
          We’re here to help — whether it’s an inquiry, feedback, or emergency
          assistance. Reach out, and our team will get back to you shortly.
        </p>
      </section>

      {/* MAIN FLEX LAYOUT */}
      <section className="contact-main">
        {/* FORM SECTION */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
            <div className="msg-space">
              {errors.name && <p className="error-text">{errors.name}</p>}
              {!errors.name && success.name && (
                <p className="success-text">{success.name}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : success.email ? "valid" : ""}
            />
            <div className="msg-space">
              {errors.email && <p className="error-text">{errors.email}</p>}
              {!errors.email && success.email && (
                <p className="success-text">{success.email}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Contact Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : success.phone ? "valid" : ""}
            />
            <div className="msg-space">
              {errors.phone && <p className="error-text">{errors.phone}</p>}
              {!errors.phone && success.phone && (
                <p className="success-text">{success.phone}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message."
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : success.message ? "valid" : ""}
            />
            <div className="msg-space">
              {errors.message && <p className="error-text">{errors.message}</p>}
              {!errors.message && success.message && (
                <p className="success-text">{success.message}</p>
              )}
            </div>
          </div>

          <div className="btn-container">
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </div>
        </form>

        {/* SUCCESS MESSAGE — placed right below the form */}
        {submitted && (
          <div className="submission-message">
            <h3>✅ Message sent successfully!</h3>
            <p>Thank you for reaching out. Redirecting to Home page...</p>
          </div>
        )}

        {/* INFO SECTION */}
        <aside className="contact-info">
          <h2>Visit or Contact Us</h2>
          <p>
            Our 24/7 support center ensures immediate assistance for all
            hospital and emergency inquiries. We’re committed to serving with
            compassion and reliability.
          </p>
          <ul>
            <li>
              <strong>Address:</strong> 123 LifeLink Avenue, Karachi
            </li>
            <li>
              <strong>Phone:</strong> +92 327 2007787
            </li>
            <li>
              <strong>Email:</strong> support@lifelink.org
            </li>
          </ul>
          <div className="map-container">
            <iframe
              title="LifeLink Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28945.21912519272!2d66.99869911083981!3d24.926878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f90157042d3%3A0x93d609e8bec9a880!2sAptech%20Computer%20Education%20North%20Nazimabad%20Center!5e0!3m2!1sen!2s!4v1760985416907!5m2!1sen!2s"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </aside>
      </section>
    </main>
  );
}
