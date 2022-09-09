import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__cnt">
      <Link to="/" className="header__logo">
        EMMANUEL ADEYEMI
      </Link>
      <p className="header__logo-text">WEB DEVELOPER - PROGRESSIVE WEB APP</p>
      <div className="link__container">
        <Link to="/skills" className="link__container-items">
          SKILLS
        </Link>
        <Link to="/experience" className="link__container-items">
         EXPERIENCE
        </Link>
        <Link to="/resume" className="link__container-items">
          RESUME
        </Link>
        <Link to="/work-in-progress" className="link__container-items">
          WORKS
        </Link>
      </div>
    </div>
  );
}

export default Header;
