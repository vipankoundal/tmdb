import "./App.scss";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/List";
import Banner from "./components/Banner";
import MoreDetails from "./components/MoreDetails";
import Media from "./components/Media";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeBanner />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <>
                <Banner />
                <List title="Now Playing" param="now_playing" />
                <List title="popular" param="popular" />
                <List title="Top Rated" param="top_rated" />
                <List title="Upcoming" param="upcoming" />
              </>
            }
          />
          <Route path="/movie/detail/:id" element={<MoreDetails />} />
          <Route
            path="/movies/:type"
            element={
              <>
                <Media />
              </>
            }
          />
          <Route path="*/" element={<>Error page</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
