import React from "react";
import "./Page8.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from 'swiper/modules';

const Page8 = () => {
  return (
    <div className="page8_wrapper">
      <div className="page8_heading">
        <p>Get in touch.</p>

        <span>↳ Contact</span>
      </div>

      <div className="page8_swiper">
        <Swiper
          slidesPerView={window.screen.width > 600 ? 4 : 3}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://images.unsplash.com/photo-1708257106019-7d077d6a3ed8?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1707343848723-bd87dea7b118?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1707985665955-aea0b64bc8a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://plus.unsplash.com/premium_photo-1708226124890-75b3b8fcb0f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1570126688035-1e6adbd61053?q=80&w=2814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD" alt="" /></SwiperSlide>
        </Swiper>̦
      </div>
    </div>
  );
};

export default Page8;
