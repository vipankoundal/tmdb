import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchdata } from "./api/api";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Card from "./Card";
const List = ({ title, param }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchdata(param).then((response) => {
        setList(response.data.results);
        setIsLoading(false);
      });
    }, 1000);
  }, []);
  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title">
          {title} <Link to={`/movies/${param}`}>View all</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </h2>
        <div className="col">
          <div className="row__posters">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              {isLoading ? (
                <>
                  <div className="item">
                    <Skeleton width={180} height={250} duration={2} />
                  </div>
                </>
              ) : (
                <Swiper
                  modules={[Navigation, Scrollbar, A11y]}
                  slidesPerView={7}
                  navigation
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {list.map((item) => {
                    return (
                      <SwiperSlide>
                        <Card {...item} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
