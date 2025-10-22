import React from "react";
import "./EmergencyTips.css";

export default function EmergencyTips() {
  // ✅ Helper for consistent image path resolution
  const getImage = (path) => `${process.env.PUBLIC_URL}${path}`;

  const tips = [
    {
      img: getImage("/assets/cpr-training.jpg"),
      title: "Cardiac Arrest (CPR)",
      desc: "If a person isn’t breathing, start chest compressions at 100–120 per minute until help arrives.",
    },
    {
      img: getImage("/assets/bleeding.webp"),
      title: "Heavy Bleeding",
      desc: "Apply firm pressure with a clean cloth. Don’t remove soaked layers — add new ones on top.",
    },
    {
      img: getImage("/assets/fracture.jpg"),
      title: "Broken Bones",
      desc: "Keep the injured area still. Don’t straighten it — support it gently and seek medical help.",
    },
    {
      img: getImage("/assets/choking.webp"),
      title: "Choking",
      desc: "If the person can’t breathe, perform quick upward abdominal thrusts until the blockage clears.",
    },
    {
      img: getImage("/assets/burns.jpg"),
      title: "Burns",
      desc: "Cool under running water for 10–15 minutes. Never apply ice or butter. Cover lightly with a clean cloth.",
    },
    {
      img: getImage("/assets/stroke.jpg"),
      title: "Recognizing a Stroke",
      desc: "Use FAST — Face drooping, Arm weakness, Speech issues, Time to call emergency services.",
    },
    {
      img: getImage("/assets/seizure.jpg"),
      title: "Seizures",
      desc: "Don’t restrain or put anything in their mouth. Clear the area and roll them to the side afterward.",
    },
    {
      img: getImage("/assets/road-accident.jpg"),
      title: "Road Accidents",
      desc: "Turn off ignition, ensure safety, call emergency services, and avoid moving victims unless necessary.",
    },
    {
      img: getImage("/assets/poisoning.jpg"),
      title: "Poisoning",
      desc: "Don’t induce vomiting. Keep the person still and note what was ingested for responders.",
    },
  ];

  return (
    <main className="emergency-page">
      {/* ---------- HERO / INTRO ---------- */}
      <section className="emergency-intro">
        <h1>
          Be <span className="highlight">Prepared</span> — Save Lives When It
          Matters Most
        </h1>
        <p>
          Emergencies can happen anytime — knowing what to do in the first few
          minutes can make all the difference. Learn essential safety and first
          aid tips to stay ready and confident when it matters most.
        </p>
      </section>

      {/* ---------- TIPS GRID ---------- */}
      <section className="emergency-tips">
        <h2>Essential Emergency Tips</h2>
        <p className="section-subtitle">
          Quick, practical, and lifesaving steps for common emergencies.
        </p>

        <div className="tips-grid">
          {tips.map((tip, index) => (
            <div className="tip-card" key={index}>
              <img src={tip.img} alt={tip.title} className="tip-image" />
              <div className="tip-info">
                <h3>{tip.title}</h3>
                <p>{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PREPAREDNESS SECTION ---------- */}
      <section className="preparedness-cta">
        <div className="preparedness-content">
          <div className="cta-icon">
            <img
              src={getImage("/assets/preparedness-icon.jfif")}
              alt="Preparedness Icon"
            />
          </div>
          <div className="cta-text">
            <h2>Preparedness Saves Lives</h2>
            <p>
              The best way to handle an emergency is to be{" "}
              <span className="highlight">ready before it happens</span>. Learn
              first aid basics, stay calm under pressure, and remember — your
              quick action can make a difference.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
