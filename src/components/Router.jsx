import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Movie from "../pages/Movie";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Movie />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
