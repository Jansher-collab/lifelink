import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  // ✅ Helper to correctly load images both locally & on GitHub Pages
  const getImage = (path) => `${process.env.PUBLIC_URL}${path}`;

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* ---------- BRAND SECTION ---------- */}
        <div className="footer-brand">
          <div className="site-title">LifeLink</div>
          <img
            src={getImage("/assets/logo.png")}
            alt="LifeLink Logo"
            className="footer-logo"
          />
          <p>
            LifeLink — Connecting lives with care, compassion, and emergency
            response excellence when it matters most.
          </p>
        </div>

        {/* ---------- QUICK LINKS ---------- */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ambulances">Ambulance</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/hospitals">Hospitals</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* ---------- FOLLOW US ---------- */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- COPYRIGHT ---------- */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} LifeLink. All rights reserved.
      </div>
    </footer>
  );
}
