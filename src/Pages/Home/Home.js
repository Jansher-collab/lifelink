import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero" aria-label="Emergency Medical Transport">
        <div className="hero-left">
          <h1>
            Fast, Reliable <span className="highlight">Emergency Medical Transport</span>
          </h1>
          <p className="lead">
            LifeLink connects patients to life-saving ambulance and medical transport services — 24/7.
            With certified paramedics, real-time tracking, and seamless hospital coordination, we ensure help
            arrives <strong>when every second counts.</strong>
          </p>
          <div className="hero-actions">
            <Link to="/ambulances" className="btn primary" aria-label="Book an ambulance now">
               Book Ambulance
            </Link>
            <Link to="/contact" className="btn outline" aria-label="Contact LifeLink Support">
              📞 Contact Support
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/assets/ambulance-team.jpg"
            alt="LifeLink emergency medical team beside ambulance"
            className="hero-image"
            loading="lazy"
          />
        </div>
      </section>

      {/* TRUST & SEO CONTENT */}
      <section className="trust">
        <div className="trust-content">
          <h2>Trusted Nationwide</h2>
          <p>
            LifeLink operates across major cities, providing certified emergency response and
            medical transport solutions for individuals, hospitals, and corporations.
            <strong> ISO-Certified </strong> safety standards and <strong> HIPAA-compliant </strong> data handling ensure
            complete reliability and patient privacy.
          </p>
          <div className="trust-stats">
            <div><strong>250+</strong> ambulances</div>
            <div><strong>50+</strong> partner hospitals</div>
            <div><strong>15K+</strong> successful emergencies handled</div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="features" aria-label="LifeLink Capabilities">
        <h2>Core Capabilities</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>24/7 Dispatch</h3>
            <p>Instant ambulance allocation using nearest-vehicle tracking algorithms.</p>
          </div>
          <div className="feature">
            <h3>Advanced Life Support</h3>
            <p>Critical care units equipped with oxygen, defibrillators, and ECG monitoring.</p>
          </div>
          <div className="feature">
            <h3>Hospital Coordination</h3>
            <p>Pre-arrival alerts ensure hospitals are prepared for patient handover.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" aria-label="How LifeLink Works">
        <h2>How LifeLink Works</h2>
        <div className="how-steps">
          <div className="step">
            <div className="num">1</div>
            <div>
              <h4>Book an Ambulance</h4>
              <p>Request through our web portal or hotline. The system locates the nearest available vehicle.</p>
            </div>
          </div>
          <div className="step">
            <div className="num">2</div>
            <div>
              <h4>Live Tracking</h4>
              <p>Monitor your ambulance in real-time until it reaches your location.</p>
            </div>
          </div>
          <div className="step">
            <div className="num">3</div>
            <div>
              <h4>Hospital Handoff</h4>
              <p>Our medics coordinate with ER teams to ensure smooth and fast patient admission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION (MATCH HERO) */}
      <section className="cta hero-style" aria-label="Request Immediate Help">
        <div className="cta-left">
          <h2>
            Need Immediate <span className="highlight">Help?</span>
          </h2>
          <p className="lead">
            For emergencies, call your local emergency number first.
            To request LifeLink transport now, click below — our dispatch center is available <strong>24/7</strong>.
          </p>
          <div className="cta-actions">
            <Link to="/ambulances" className="btn primary">
               Request Ambulance
            </Link>
            <Link to="/contact" className="btn outline">
              📞 Get Support
            </Link>
          </div>
        </div>

        <div className="cta-right">
          <img
            src="/assets/emergency-ambulance-support.webp"
            alt="LifeLink emergency ambulance support"
            className="cta-image"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
