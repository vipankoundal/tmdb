import React from "react";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
const Videos = ({ video }) => {
  return (
    <div className="videos">
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={"auto"}
        autoplay={false}
        slides-per-view={3}
        grid-rows={2}
        pagination={{ clickable: true }}
      >
        {video?.slice(0, 3).map((v) => {
          return (
            <SwiperSlide>
              <YouTube videoId={v.key} title={v.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Videos;
