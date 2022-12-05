import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          Attendance Web App where employee can mark attendance at real time & track location.
          <br />
          main purpose for developing this app is everyone know who are present on that day.
          <br />

        </spane>
        <a href={Resume} download>
          <br />
          <br />
          <button className="button i-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        {/* <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        > */}
        <Card
          emoji={HeartEmoji}
          heading={"Design"}
          detail={"Figma, Photoshop"}
        />
        {/* </motion.div> */}
        {/* second card */}
        {/* <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        > */}
        <div
          className="blur s-blur3"
          style={{ background: "var(--purple)" }}
        ></div>
        <Card
          emoji={Glasses}
          heading={"Developer"}
          detail={"Html, Css, JavaScript, React, Java, Flutter"}
        />
        {/* </motion.div> */}


        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
