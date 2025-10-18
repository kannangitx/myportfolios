import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.classList.contains("m_cl")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="navbar">
      <div className="navbar1">
        <div className="logo">KK</div>

        <ul ref={navRef} className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="about" smooth={true} duration={500}>ABOUT</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>PROJECTS</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>SKILLS</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>CONTACT</Link></li>
        </ul>

        <div className="button">
          <button className="kamal">Download CV</button>
        </div>

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
