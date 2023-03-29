import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
const Recommendations = ({
  Recommends,
  setSelectRecommend,
  selectRecommend,
}) => {
  return (
    <>
      <h3 className="mb-3">Recommendations</h3>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={5}
        pagination={{ clickable: true }}
      >
        {Recommends?.map((recommend, i) => {
          return (
            <SwiperSlide>
              <div
                className="recommendations"
                onMouseEnter={() => {
                  setSelectRecommend(Recommends[i]);
                }}
                key={i}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${recommend.poster_path}`}
                  alt={recommend.title}
                />
                <p>{recommend.title}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {selectRecommend.length >= 0 ? (
        <div
          className="p-4"
          style={{ background: " rgb(72 72 72 / 30%)", color: "#fff" }}
        >
          <h3>{selectRecommend.title}</h3>
          <p>{selectRecommend.overview}</p>
        </div>
      ) : null}
    </>
  );
};

export default Recommendations;
