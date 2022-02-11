import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

const Router = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Router;
