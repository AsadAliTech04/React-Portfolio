import React from 'react'
import './Portfolio.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css';
// import Sidebar from "../../img/sidebar.png"
// import Ecommerce from "../../img/ecommerce.png"
// import HOC from "../../img/hoc.png"
// import MusicApp from "../../img/musicapp.png"
import CarWeb from "../../img/CarWeb.png"
import { themeContext } from '../../Context';
import { useContext } from "react";
import j1 from "../../img/J. 1.png"
import j2 from "../../img/J. 2.png"
import broque1 from "../../img/Broque 1.png"
import broque2 from "../../img/Broque 2.png"
import task from "../../img/task tracker.png"
import register from "../../img/react register form.png"

function Portfolio() {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
     <>
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={CarWeb} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={j1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={j2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={broque1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={broque2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={task} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={register} alt="" />
        </SwiperSlide>
      </Swiper>
      
    </div>
     </>
  )
}

export default Portfolio