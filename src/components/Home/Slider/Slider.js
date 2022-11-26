import React from 'react';
import { Autoplay,Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import  './Slider.css';
import "swiper/swiper.min.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import img
import slider1 from '../../../assets/img/slider1.jpg';
import slider2 from '../../../assets/img/slider2.jpg';
import slider3 from '../../../assets/img/slider3.jpg';
import slider4 from '../../../assets/img/slider4.jpg';
import slider5 from '../../../assets/img/slider5.jpg';
import slider6 from '../../../assets/img/slider6.jpg';

const Slider = () => {
 
   return (
      <>
      
      <Swiper
         style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
         }}
         pagination={{
            clickable: true,
          
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper"
    >
      <SwiperSlide> <img src={slider1} alt="slider" /> Slide 1</SwiperSlide>
      <SwiperSlide> <img src={slider2} alt="slider" /> Slide 2</SwiperSlide>
      <SwiperSlide> <img src={slider3} alt="slider" /> Slide 3</SwiperSlide>
      <SwiperSlide> <img src={slider4} alt="slider" /> Slide 4</SwiperSlide>
      <SwiperSlide> <img src={slider5} alt="slider" /> Slide 5</SwiperSlide>
      <SwiperSlide> <img src={slider6} alt="slider" /> Slide 6</SwiperSlide>
      ...
    </Swiper>
     
      </>

   );
};

export default Slider;