import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import logo2 from '../img/images.jpg'
import logo3 from '../img/img2jpg.jpg'
import logo4 from '../img/tips-ideas-schedule-music-lessons-article-1200x800.jpg' 
import logo5 from '../img/private-lessons.jpg'
import logo6 from '../img/img-3.jpg'
import logo7 from '../img/img-4.jpg'
import logo8 from '../img/1920x960_Quintet_1.jpg'


import './header.css'

import { EffectFade, Navigation, Pagination } from "swiper";

const Header = () => {
    return (
      <>
    <div className="w-[50%] mx-auto my-10">
       <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper h-96 mx-auto rounded"
        >
        <SwiperSlide>
          <img className="w-[700px]" src={logo4} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[700px]" src={logo5} />
          </SwiperSlide>
          <SwiperSlide>
          <img className="w-[700px]" src={logo6} />
          </SwiperSlide>
          <SwiperSlide>
          <img className="w-[900px] h-[500px]" src={logo7} />
          </SwiperSlide>
          <SwiperSlide>
          <img className="w-[700px] h-[500px]" src={logo8} />
          </SwiperSlide>
          <SwiperSlide>
          <img className="w-[700px]" src={logo2} />
          </SwiperSlide>
          <SwiperSlide>
          <img className="w-[700px]" src={logo3} />
          </SwiperSlide>
        </Swiper>
       </div>
      </>
    );
};

export default Header;