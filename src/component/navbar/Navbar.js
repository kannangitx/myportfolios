import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null); // Reference to nav-links

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.classList.contains("m_cl") &&
        !event.target.classList.contains("l1") &&
        !event.target.classList.contains("l2") &&
        !event.target.classList.contains("l3")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="navbar">
      <div className="navbar1">
        {/* Logo */}
        <div className="logo">KK</div>

        {/* Nav Links */}
        <ul
          ref={navRef}
          className={menuOpen ? "nav-links active" : "nav-links"}
        >
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>SKILLS</li>
          <li>CONTACTS</li>
        </ul>

        {/* Desktop Button */}
        <div className="button">
          <button className="kamal">Download CV</button>
        </div>

        {/* Hamburger */}
        <button
          className={menuOpen ? "m_cl open" : "m_cl"}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <div className="l1"></div>
          <div className="l2"></div>
          <div className="l3"></div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
