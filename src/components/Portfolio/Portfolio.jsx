import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Project3 from "../../img/project3.png";
import Project1 from "../../img/project1.png";
import Project2 from "../../img/project2.jpeg";
import Project4 from "../../img/project4.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Project3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project1} alt="" style={{ height: 400, width: 200 }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project2} alt="" style={{ width: 200, height: 400 }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
