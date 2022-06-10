import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className={menuOpen ? "nav-open" : ""}>
        <div className="topnav" id="myTopnav">
          <a href="#home" className="active">
            Home
          </a>
          <div className="nav-toggle">
            <button onClick={onMenuClick} className="hamburger"></button>
          </div>

                <a href="#news">News</a>
                
                <div className="dropdown">
                <button className="dropbtn">Services</button>
                <div className="dropdown-content">
                    <a
                    href="https://k2partnering.com/careers-k2/"
                    target="_blank"
                    >
                    WebDesign</a
                    >
                    <a
                    href="https://www.griddigitalmarketing.com/"
                    target="_blank"
                    >
                    Online Marketing</a
                    >
                    
                </div>
                </div>
                <a href="#careers">Careers</a>
                <a href="contact_form.html">Contact</a>
                <a href="about.html">About</a>
            </div>
          </div>
          <a href="about.html">About</a>
        </div>
      </header>
    </div>
  );
};
export default Header;
