import axios from "axios";

export const URL = "https://api.themoviedb.org/3";
export const API_KEY = "bf1820aabfdd9e6ae59f35511e4c5e27";

const endpoints = {
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

export const fetchdata = (param) => {
  return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`);
};
