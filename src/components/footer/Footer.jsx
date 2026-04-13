import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="luxury-footer">
        <div className="luxury-footer-top-line"></div>

        <div className="luxury-footer-container">
          <div className="luxury-footer-grid">
            {/* Brand Column */}
            <div className="luxury-footer-brand">
              <div className="luxury-footer-logo-wrap">
                <img
                  src="https://epmwealth.com/wp-content/uploads/2023/06/logo-emp.png"
                  alt="EPM Wealth"
                  className="luxury-footer-logo"
                />
              </div>

              <h2 className="luxury-footer-brand-title">
                <span>EPM</span> Wealth
              </h2>

              <p className="luxury-footer-tagline">INSIGHT WITH INTEGRITY</p>

              <p className="luxury-footer-description">
                AMFI &amp; BSE registered wealth management firm. Helping
                India's most prominent families bridge the gap between their
                reality and their purpose since 2011.
              </p>

              <div className="luxury-footer-badges">
                <span>AMFI 100255</span>
                <span>BSE 1197501</span>
                <span>SEBI REG.</span>
              </div>

              <div className="luxury-footer-socials">
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* About */}
            <div className="luxury-footer-column">
              <h3>ABOUT</h3>
              <a href="#">Overview</a>
              <a href="#">Leadership</a>
              <a href="#">Brand Story</a>
              <a href="#">ESG</a>
            </div>

            {/* Wealth Management */}
            <div className="luxury-footer-column">
              <h3>WEALTH MANAGEMENT</h3>
              <a href="#">Family Business</a>
              <a href="#">Professionals &amp; CXOs</a>
              <a href="#">Founders &amp; Entrepreneurs</a>
              <a href="#">Women Clients</a>
            </div>

            {/* Asset Management */}
            <div className="luxury-footer-column">
              <h3>ASSET MANAGEMENT</h3>
              <a href="#">Discretionary PMS</a>
              <a href="#">Fund of Funds</a>
              <a href="#">Smart Beta</a>
              <a href="#">Global Investments</a>
            </div>

            {/* Navigate */}
            <div className="luxury-footer-column">
              <h3>NAVIGATE</h3>
              <a href="#">Vault</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
              <a href="tel:+919899939333">+919899939333</a>
              <a href="mailto:info@epmwealth.com">info@epmwealth.com</a>
            </div>
          </div>
        </div>
      </footer>

      <footer className="epm-footer">
        <div className="epm-footer-top-line"></div>

        <div className="epm-footer-content">
          <div className="epm-footer-column epm-footer-reveal">
            <h3>EPM FINANCIAL &amp; INVESTMENT ADVISORS PVT LTD</h3>
            <p>SEBI Registration No: INA00001811</p>
            <p>CIN No: U74900MH2012PTC234921</p>
            <p>PMS Registration No: INP000007818</p>
          </div>

          <div className="epm-footer-column epm-footer-reveal epm-delay-1">
            <h3>EPM FUND MANAGERS PVT LTD</h3>
            <p>CIN No: U65990MH2020PTC340389</p>
            <p>FOF I — IN/AIF2/21–22/0876 (Category 2 AIF)</p>
          </div>

          <div className="epm-footer-column epm-footer-reveal epm-delay-2">
            <h3>STATUS OF COMPLAINTS</h3>
            <p>Beginning of the month: Nil</p>
            <p>Received this month: Nil</p>
            <p>Resolved during the month: Nil</p>
            <p>Pending at end of month: Nil</p>
          </div>
        </div>

        <div className="epm-footer-bottom-line"></div>

        <div className="epm-footer-bottom epm-footer-reveal epm-delay-3">
          <p>
            © 2026 EPM Wealth. All Rights Reserved. AMFI Reg. 100255 | BSE Reg.
            1197501
          </p>

          <div className="epm-footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/disclaimer">Disclaimer</a>
            <a href="/regulatory-information">Regulatory Information</a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/919899939333"
        target="_blank"
        rel="noopener noreferrer"
        className="epm-whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <span className="wa-shine"></span>
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Footer;
