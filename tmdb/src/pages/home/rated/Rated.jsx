import React, { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";

const Rated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, isLoading } = useFetch(`/${endpoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <h2>Top rated</h2>
        <SwitchTab data={["Movies", "TV Show"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel
        data={data?.results}
        isLoading={isLoading}
        endpoint={endpoint}
      />
    </div>
  );
};

export default Rated;
