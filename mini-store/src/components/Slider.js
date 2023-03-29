import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Slider = ({ data }) => {
  console.log("slider", data);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data &&
        data.map((scItem) => {
          return <SwiperSlide>{scItem.title}</SwiperSlide>;
        })}
      {/* <SwiperSlide>Slidesdfsf 1</SwiperSlide>
      <SwiperSlide>Slidedsff 2</SwiperSlide>
      <SwiperSlide>Slidesfsdf 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default Slider;
