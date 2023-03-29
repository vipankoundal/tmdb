import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, URL } from "./api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { original } from "../config/config";

import Videos from "./Videos";
const Banner = () => {
  const [popular, setPopular] = useState(false);
  const [video, setVideo] = useState([]);
  const [movieid, setMovieId] = useState();
  const [showVideo, setShowVideo] = useState(true);

  const getVideoId = (id) => {
    setMovieId(id);
    setShowVideo(false);
  };
  const closedBannerVideoHandler = () => {
    setShowVideo(true);
  };
  const getPopular = () => {
    return axios.get(`${URL}/movie/popular?api_key=${API_KEY}`);
  };

  useEffect(() => {
    getPopular().then((response) => {
      setPopular(response.data.results);
    });
    if (movieid) {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setVideo(data.results);
        })
        .catch((error) => console.log(error));
    }
  }, [movieid]);
  console.log(video, "video is loaded");
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {showVideo ? (
          popular &&
          popular.map((popular) => {
            const { title, overview, backdrop_path, id } = popular;
            return (
              <SwiperSlide>
                <div
                  className="banner"
                  style={{
                    backgroundImage: `url(${original}${backdrop_path})`,
                  }}
                >
                  <div className="banner__contents">
                    <h1 className="banner__title">{title}</h1>
                    <div className="banner__buttons">
                      <button
                        className="banner__button"
                        onClick={() => {
                          getVideoId(popular.id);
                        }}
                      >
                        Play
                      </button>
                      <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">
                      {overview.slice(0, 199)}...
                    </h1>
                  </div>
                  <div className="banner--fadeBottom"></div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <>
            <button
              className="closed"
              onClick={() => closedBannerVideoHandler()}
            >
              X
            </button>
            <Videos video={video} />
          </>
        )}
      </Swiper>
    </>
  );
};

export default Banner;
