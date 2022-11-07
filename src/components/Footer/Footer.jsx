import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kumarsksingh010@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/Sanjaykum1r" target='_blank'>
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/sanjay-k-377567138/" target='_blank'>
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
