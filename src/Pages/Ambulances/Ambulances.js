import "./Ambulances.css";

export default function Ambulances() {
  // ✅ Helper to ensure correct image path in all environments
  const getImage = (path) => `${process.env.PUBLIC_URL}${path}`;

  return (
    <main className="ambulances-page">
      {/* ---------- PAGE INTRO ---------- */}
      <section className="ambulance-intro">
        <div className="intro-content">
          <h1>
            Our <span className="highlight">Ambulance Fleet</span>
          </h1>
          <p>
            LifeLink operates a modern fleet of ambulances tailored for various
            medical emergencies. Each vehicle is equipped with certified
            life-support systems and operated by trained paramedics to ensure
            rapid, safe, and professional medical transport.
          </p>
        </div>
      </section>

      {/* ---------- AMBULANCE TYPES ---------- */}
      <section className="ambulance-fleet">
        <h2>Types of Ambulances</h2>
        <p className="section-subtitle">
          Our diverse ambulance fleet ensures the right level of care for every
          emergency — from routine patient transfers to critical trauma response.
        </p>

        <div className="fleet-grid">
          {/* 1: Basic Life Support */}
          <div className="fleet-card">
            <img
              src={getImage("/assets/basic-life-support.jfif")}
              alt="Basic Life Support Ambulance"
              className="fleet-image"
            />
            <div className="fleet-info">
              <h3>Basic Life Support (BLS) Ambulance</h3>
              <p>
                Designed for non-critical patients requiring basic monitoring
                and first-aid during transport. Equipped with oxygen support,
                stretchers, and trained EMT personnel.
              </p>
            </div>
          </div>

          {/* 2: Advanced Life Support */}
          <div className="fleet-card">
            <img
              src={getImage("/assets/advanced-life-support.webp")}
              alt="Advanced Life Support Ambulance"
              className="fleet-image"
            />
            <div className="fleet-info">
              <h3>Advanced Life Support (ALS) Ambulance</h3>
              <p>
                A mobile ICU on wheels with ventilators, defibrillators, ECG
                machines, IV setups, and paramedics trained in advanced cardiac
                and trauma care.
              </p>
            </div>
          </div>

          {/* 3: Patient Transport */}
          <div className="fleet-card">
            <img
              src={getImage("/assets/patient-transport.jpg")}
              alt="Patient Transport Ambulance"
              className="fleet-image"
            />
            <div className="fleet-info">
              <h3>Patient Transport Ambulance</h3>
              <p>
                Used for inter-hospital or home-to-hospital transfers where the
                patient requires supervision but not critical medical support.
              </p>
            </div>
          </div>

          {/* 4: Mortuary Ambulance */}
          <div className="fleet-card">
            <img
              src={getImage("/assets/mortuary-ambulance.jpg")}
              alt="Mortuary Ambulance"
              className="fleet-image"
            />
            <div className="fleet-info">
              <h3>Mortuary Ambulance</h3>
              <p>
                Specialized vehicles with cold storage units, designed for the
                safe and dignified transfer of deceased individuals.
              </p>
            </div>
          </div>

          {/* 5: Neonatal Ambulance */}
          <div className="fleet-card">
            <img
              src={getImage("/assets/neonatal-ambulance.jpeg")}
              alt="Neonatal Ambulance"
              className="fleet-image"
            />
            <div className="fleet-info">
              <h3>Neonatal Ambulance</h3>
              <p>
                Equipped with incubators, neonatal ventilators, and dedicated
                pediatric care equipment to transport infants requiring special
                attention.
              </p>
            </div>
          </div>

          {/* 6: 4x4 Rural Ambulance */}
          <div className="fleet-card">
            <img
              src={getImage("/assets/rural-ambulance.webp")}
              alt="Rural Ambulance"
              className="fleet-image"
            />
            <div className="fleet-info">
              <h3>4x4 Rural / Off-Road Ambulance</h3>
              <p>
                Built for challenging terrains and rural regions, these
                ambulances ensure quick access to emergency care even in
                off-road conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FLEET QUALITY ---------- */}
      <section className="ambulance-quality">
        <div className="quality-container">
          <h2>Safety. Precision. Reliability.</h2>
          <p>
            Every LifeLink ambulance undergoes rigorous maintenance checks and
            follows ISO-certified safety protocols. From city centers to remote
            locations, we guarantee dependable emergency support — 24/7.
          </p>
        </div>
      </section>
    </main>
  );
}




