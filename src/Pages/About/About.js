import "./About.css";

export default function About() {
  // ✅ Helper for consistent image paths
  const getImage = (path) => `${process.env.PUBLIC_URL}${path}`;

  return (
    <main className="about-page">
      {/* ---------- HERO SECTION ---------- */}
      <section className="about-hero">
        <h1>
          About <span className="highlight">LifeLink</span>
        </h1>
        <p>
          We’re dedicated to transforming emergency healthcare through innovation, reliability,
          and compassion — connecting patients, ambulances, and hospitals in real time.
        </p>
      </section>

      {/* ---------- WHO WE ARE SECTION ---------- */}
      <section className="about-intro">
        <div className="about-image">
          <img
            src={getImage("/assets/about.jpg")}
            alt="LifeLink Team Working Together"
          />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            LifeLink is a forward-thinking healthcare technology platform designed to improve
            emergency response and patient coordination. Our mission is to bridge the gap between
            those in need and those who can help — quickly, efficiently, and compassionately.
          </p>
          <p>
            From real-time ambulance tracking to seamless hospital communication, LifeLink enables
            hospitals, responders, and patients to collaborate with confidence during critical
            moments.
          </p>
        </div>
      </section>

      {/* ---------- MISSION & VISION ---------- */}
      <section className="about-mission">
        <div className="mission-card">
          <img src={getImage("/assets/mission.jpg")} alt="Mission" />
          <h3>Our Mission</h3>
          <p>
            To save lives by improving the speed, accuracy, and reliability of emergency medical
            response through advanced technology and human connection.
          </p>
        </div>
        <div className="mission-card">
          <img src={getImage("/assets/vision.jpg")} alt="Vision" />
          <h3>Our Vision</h3>
          <p>
            A world where every emergency gets the fastest, most coordinated care possible —
            powered by innovation and empathy.
          </p>
        </div>
      </section>

      {/* ---------- COMMITMENT SECTION ---------- */}
      <section className="about-commitment">
        <div className="commitment-text">
          <h2>Our Commitment to You</h2>
          <p>
            LifeLink stands for safety, transparency, and care. We continuously work to enhance
            the healthcare ecosystem by integrating modern technology with human compassion.
          </p>
          <p>
            Every LifeLink feature is built with patients and responders in mind — ensuring that
            communication, tracking, and support never fail when it matters most.
          </p>
          <p>
            Together, we are building a connected future for emergency care that saves lives and
            inspires trust every day.
          </p>
        </div>
        <div className="commitment-image">
          <img
            src={getImage("/assets/commitment.jpg")}
            alt="Medical Commitment"
          />
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="about-cta">
        <h2>Together, We’re Building a Healthier Future 💙</h2>
        <p>
          Join us on our journey to strengthen emergency care systems and bring hope, speed, and
          precision to healthcare across communities.
        </p>
      </section>
    </main>
  );
}
