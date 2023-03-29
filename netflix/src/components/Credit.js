import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
const Credit = ({ data }) => {
  return (
    <>
      {data.length > 0 ? <h3 className="mb-3">Top Billed Cast</h3> : null}
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={5}
        pagination={{ clickable: true }}
      >
        {data?.map((cr) => {
          return (
            <SwiperSlide>
              <img
                src={`https://image.tmdb.org/t/p/original${cr.profile_path}`}
                alt={cr.name}
                className="img-fluid"
              />
              <p>{cr.name}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Credit;
