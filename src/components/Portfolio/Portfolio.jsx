import React from 'react';
import './portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Spotify from '../../img/spotify_clone.png'
import Template from '../../img/template.png'
import Mobile from '../../img/mobile.png'
import Myokare from '../../img/myokare.png'
import Mindgame from '../../img/mindgame.png'

const Portfolio = () => {
  return (
    <div className='portfolio' id='Portfolio'>
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider">
        <SwiperSlide>
            <img src={Spotify} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Template} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Mobile} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Myokare} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Mindgame} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
