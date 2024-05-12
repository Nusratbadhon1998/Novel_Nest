import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

function Slider() {
  return (

    
        <Swiper
       
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper relative overflow-hidden h-[400px] "
        >
          <SwiperSlide ><img className="aspect-[3/2]" src="https://images.unsplash.com/photo-1577985051167-0d49eec21977?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
          <SwiperSlide><img className="aspect-[3/2]"  src="https://images.unsplash.com/photo-1437751068958-82e6fccc9360?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
          <SwiperSlide><img className="aspect-[3/2]" src="https://cdn.pixabay.com/photo/2024/02/24/20/54/books-8594725_1280.jpg" alt="" /></SwiperSlide>
          {/* <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide> */}
        </Swiper>

  );
}

export default Slider;
