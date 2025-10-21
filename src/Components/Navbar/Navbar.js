import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/ambulances", label: "Ambulances" },
    { to: "/emergency", label: "Emergency Tips" },
    { to: "/feedback", label: "Feedback" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <div className="brand">
          <img src="/assets/logo.png" alt="LifeLink logo" className="logo" />
          <span className="brand-text">LifeLink</span>
        </div>

        <button
          className={`hamburger ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setOpen(false)}
                end={l.to === "/"}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
