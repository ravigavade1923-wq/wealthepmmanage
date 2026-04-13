import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className={`nav-left ${menuOpen ? "active" : ""}`}>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="#wealth" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link to="#management" onClick={() => setMenuOpen(false)}>Financial Literacy</Link>
          <Link to="#vault" onClick={() => setMenuOpen(false)}>Entrepreneurial Initiative</Link>
        </div>

        <div className="nav-logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src="https://epmwealth.com/wp-content/uploads/2023/06/logo-emp.png"
              alt="EPM Logo"
            />
          </Link>
        </div>

        <div className={`nav-right ${menuOpen ? "active" : ""}`}>
          <a href="#calendar" onClick={() => setMenuOpen(false)}>
            Log-in
          </a>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;