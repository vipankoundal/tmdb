import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, URL } from "./api/api";
import Card from "./Card";

const Media = () => {
  const { type } = useParams();
  const [cateList, setCateList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(1);
  const getList = () => {
    return axios.get(`${URL}/movie/${type}?api_key=${API_KEY}&page=${limit}`);
  };

  useEffect(() => {
    setTimeout(() => {
      getList().then((response) => {
        setCateList(response.data.results);
        setIsLoading(false);
      });
    }, 1000);
  }, [type, limit]);

  const laodMoreList = () => {
    setLimit(limit + 1);
  };

  return (
    <>
      <div className="row g-4">
        {cateList.map((c) => {
          return (
            <>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <Card {...c} {...isLoading} />
              </div>
            </>
          );
        })}
      </div>
      <div className="row mt-4 mb-4 justify-content-center">
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <button className="btn btn-danger" onClick={laodMoreList}>
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Media;
