import React from "react";
import "./About.css";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about-hero" id="about">
      <div className="about-hero-overlay"></div>
      <div className="about-grid-lines"></div>
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-social-bar">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
      </div>

      <div className="about-container">
        <div className="about-top-tag">
          <span className="about-tag-line"></span>
          <p>EPM WEALTH — EST. 2016</p>
        </div>

        <div className="about-content">
          <h1 className="about-title">
            <span className="about-title-light">Connect</span>
            <span className="about-title-gold">With Our Core</span>
          </h1>

          <h2 className="about-subtitle">
            INSIGHT <span>·</span> INTEGRITY <span>·</span> EXCELLENCE
          </h2>

          <p className="about-description">
            A wealth management company powered by passion and driven by teamwork
            — built on the belief that every Indian deserves financial literacy
            and a purposeful path to prosperity.
          </p>

          <div className="about-buttons">
            <a href="#our-story" className="about-btn about-btn-primary">
              OUR STORY <span>→</span>
            </a>

            <a href="#contact" className="about-btn about-btn-secondary">
              START A CONVERSATION <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;