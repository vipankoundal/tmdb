import React from "react";

const Star = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (e, i) => {
    let starNumber = i + 0.5;

    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <span color="f-star">&#9733;</span>
        ) : rating > starNumber ? (
          <span color="h-star">&#10030;</span>
        ) : (
          <span className="k-star">&#9734;</span>
        )}
      </span>
    );
  });
  return <>{ratingStar}</>;
};

export default Star;
