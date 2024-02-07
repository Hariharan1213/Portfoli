import React from 'react';
import './testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'

const Testimonial = () => {
    const clients = [
        {
          img: profilePic1,
          review:
            "First of all, your consumers expect to be able to navigate your website with ease. Your design needs to be simple and clear to follow, with an obvious and logical link structure. A confusing website will quickly be overlooked.",
        },
        {
          img: profilePic2,
          review:
            "In addition, your website needs to be responsive. This is because users expect to see the same content on both mobile devices and desktop. As a result, sites that don’t offer a mobile version, or a quality mobile friendly website will be left behind by more competitive websites.",
        },
        {
          img: profilePic3,
          review:
            "Furthermore, your website is expected to load instantly once the link has been followed. In this day and age, people do not want to wait for anything, especially a website to load.",
        },
        {
          img: profilePic4,
          review:
            "Finally, once your website is open, and has loaded, your consumers expect to see top quality content. Spelling mistakes, inaccurate information, and even just the wrong tone of writing can cause your website visitors to leave.",
        },
      ];
    return (
    <div className="t-wrapper" id='Testimonial'>
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial
