import React from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { img_300 } from "../config/config";
const Card = (props) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      {props.isLoading ? (
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <Skeleton width={200} duration={2} />
        </div>
      ) : (
        <Link to={`/movie/detail/${props.id}`} key={props.id}>
          {
            <img
              src={`${img_300}${props.poster_path}`}
              alt={props.title}
              className="w-100"
            />
          }
        </Link>
      )}
    </SkeletonTheme>
  );
};

export default Card;
