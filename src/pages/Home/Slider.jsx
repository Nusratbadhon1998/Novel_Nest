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
    <div className="flex flex-col-reverse lg:flex-row gap-6">
        <div className="flex-1">
            <h1>Hello world</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deserunt necessitatibus tenetur, praesentium aliquam qui consequatur consequuntur quam iusto a excepturi. Perferendis modi sapiente animi aspernatur placeat dolorem dolores id quasi? Quam, eius beatae!</p>
        </div>
    
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper w-1/3"
        >
          <SwiperSlide ><img className="aspect-[3/2]" src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className="aspect-[3/2]"  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
          <SwiperSlide><img className="aspect-[3/2]" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
          {/* <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide> */}
        </Swiper>
      </div>

  );
}

export default Slider;
