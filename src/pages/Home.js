import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SearchInput from "../components/SearchInput";
import VerticalList from "../components/VerticalList";
import Grid from "@mui/material/Grid";
import data from "../data.json";

const Home = () => {
  const { movies, genres } = data;
  const [keyParam, setKeyParam] = useState("");
  const { pathname, search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    setKeyParam(value);
    navigate(`${pathname}?q=${value}`);
  };

  const movieslist = useMemo(
    () => movies.filter((movie) => movie.title.includes(query.get("q") || "")),
    [query, movies]
  );

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ width: "100%" }}
    >
      <Grid item xs={2} sx={{ width: "100%" }}>
        <SearchInput value={keyParam} handleChange={handleChange} />
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ width: "100%", border: "1px solid white", borderRadius: "4px" }}
      >
        <VerticalList moviesList={movieslist} />
      </Grid>
    </Grid>
  );
};

export default Home;
