import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {
  const getImage = (path) => `${process.env.PUBLIC_URL}${path}`;

  return (
    <main className="services-page">
      {/* HEADER SECTION */}
      <section className="services-header">
        <div className="header-content">
          <h1>
            Professional <span className="highlight">Medical Transport</span> Services
          </h1>
          <p>
            From emergency responses to scheduled patient transfers, LifeLink ensures
            fast, safe, and reliable medical transport with 24/7 nationwide coverage.
          </p>
        </div>
      </section>

      {/* GRID SERVICES */}
      <section className="services-section">
        <h2>Our Core Services</h2>
        <p className="section-subtitle">
          We provide advanced medical mobility and support for hospitals, patients,
          and organizations — designed to save lives and time.
        </p>

        <div className="service-grid">
          {[
            {
              image: getImage("/assets/emergency-ambulance.jpg"),
              title: "Emergency Ambulance",
              desc: "Fast-response emergency ambulances with professional paramedics and advanced life-saving equipment.",
            },
            {
              image: getImage("/assets/hospital-transfers.jpg"),
              title: "Hospital Transfers",
              desc: "Smooth inter-hospital transfers with trained staff and complete coordination with receiving facilities.",
            },
            {
              image: getImage("/assets/dispatch-center.webp"),
              title: "24/7 Dispatch Center",
              desc: "Always ready — quick allocation of ambulances with real-time tracking and support.",
            },
            {
              image: getImage("/assets/advance-life-support.webp"),
              title: "Advanced Life Support",
              desc: "State-of-the-art equipment and skilled medics ensure intensive care on the move.",
            },
            {
              image: getImage("/assets/real-time-tracking.webp"),
              title: "Real-Time Tracking",
              desc: "Get live updates, ETA, and ambulance location directly via our digital dashboard.",
            },
            {
              image: getImage("/assets/event-corporate.jpg"),
              title: "Event & Corporate Coverage",
              desc: "Reliable medical standby services for events, industries, and large public gatherings.",
            },
          ].map((s, i) => (
            <div className="service-box fade-in" key={i}>
              <div className="service-image-wrapper">
                <img src={s.image} alt={s.title} className="service-image" loading="lazy" />
              </div>
              <div className="service-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="services-cta">
        <div className="cta-content">
          <h2>Need a Trusted Medical Transport Partner?</h2>
          <p>
            Whether for emergencies or planned transfers, our skilled teams and
            modern ambulances ensure timely, safe, and compassionate care.
          </p>
          <div className="cta-actions">
            <Link to="/ambulances" className="btn primary">
              Request Ambulance
            </Link>
            <Link to="/contact" className="btn outline">
              📞 Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
