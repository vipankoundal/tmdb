import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { URL, API_KEY } from "./api/api";
import Credit from "./Credit";
import Recommendations from "./Recommendations";
import Videos from "./Videos";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const MoreDetails = () => {
  const [movie, setMovie] = useState([]);
  const [credit, setCredit] = useState([]);
  const [video, setVideos] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [selectRecommend, setSelectRecommend] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //console.log(selectRecommend);
  const { id } = useParams();
  const navigate = useNavigate();
  const closedHandler = () => {
    navigate("/dashboard");
  };
  const getDetail = () => {
    return axios.get(`${URL}/movie/${id}?api_key=${API_KEY}`);
  };

  const getCredit = () => {
    return axios.get(`${URL}/movie/${id}/credits?api_key=${API_KEY}`);
  };

  const getVideo = () => {
    return axios.get(`${URL}/movie/${id}/videos?api_key=${API_KEY}`);
  };
  const getRecommend = () => {
    return axios.get(`${URL}/movie/${id}/recommendations?api_key=${API_KEY}`);
  };
  useEffect(() => {
    getDetail()
      .then((response) => {
        setMovie(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));

    getCredit()
      .then((response) => {
        setCredit(response.data.cast);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
    getVideo()
      .then((response) => {
        setVideos(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
    getRecommend()
      .then((response) => {
        setRecommendations(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(video[0]);
  return (
    <>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="left">
            {(
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
            ) || <Skeleton />}
          </div>
          <div className="right">
            <div className="movie_header">
              <h1>{movie.title || <Skeleton />}</h1>
              <h4>{movie.release_date || <Skeleton />}</h4>
              <span className="minutes">{movie.runtime} min</span>
              <p className="type">
                {isLoading ? (
                  <Skeleton />
                ) : (
                  movie.genres &&
                  movie.genres.map((genres) => {
                    return <span key={genres.id}> {genres.name}</span>;
                  })
                )}
              </p>
            </div>
            <div className="movie_desc">
              <p className="text">{movie.overview}</p>
            </div>
            <div className="movie_social">
              <ul>
                {isLoading ? (
                  <Skeleton />
                ) : (
                  movie.production_companies &&
                  movie.production_companies.map((g) => {
                    return (
                      <li key={g.id}>
                        <h3>{g.name}</h3>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
            {isLoading ? <Skeleton /> : <Videos video={video} />}
            <div className="credit">
              {isLoading ? <Skeleton /> : <Credit data={credit} />}
            </div>
            <div className="recommendations-list">
              {isLoading ? (
                <Skeleton />
              ) : (
                <Recommendations
                  Recommends={recommendations}
                  setSelectRecommend={setSelectRecommend}
                  selectRecommend={selectRecommend}
                />
              )}
            </div>
          </div>
        </div>
        <div
          className="blur_back bright_back"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
          }}
        ></div>
        <button className="closed" onClick={() => closedHandler()}>
          X
        </button>
      </div>
    </>
  );
};

export default MoreDetails;
