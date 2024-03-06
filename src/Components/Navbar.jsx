import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import ReorderIcon from "@material-ui/icons/Reorder";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [extendNavbar, setExtendNavbar] = useState(false);
  const location = useLocation();
  const email = "hasira84@gmail.com";

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    setExtendNavbar(false);
  }, [location]);

  const handleHireClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="header">
      <nav>
        <div className="toggleButton">
          <button onClick={toggleNav}>
            <ReorderIcon />
          </button>
        </div>
        <div className="nav__header">
          <div className="nav__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
              Hasir Ali
            </Link>
          </div>
          <div className="nav__menu__btn" onClick={toggleNav}>
            <span>
              <i className={navOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </span>
          </div>
        </div>

        <ul className={`nav__links ${navOpen ? "open" : ""}`}>
          <li className="link">
            <Link to="/">Home</Link>
          </li>

          <li className="link">
            <Link to="/About">About</Link>
          </li>

          <li className="link">
            <Link to="/Education">Education</Link>
          </li>

          <li className="link">
            <Link to="/projects">Projects</Link>
          </li>

          <li className="link">
            <Link to="/Contact">Contact</Link>
          </li>

          <li className="link">
            <button className="btn" onClick={handleHireClick}>
              Hire
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
