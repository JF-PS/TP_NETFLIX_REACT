import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">À propos</Link>
        </nav>
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about">{/* <About /> */}</Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
