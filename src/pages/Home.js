import { useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import { debounce } from "lodash";
import { getPopularMovies, searchMovies } from "../slices/movie-slice";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../components/SearchInput";
import VerticalList from "../components/VerticalList";
import Grid from "@mui/material/Grid";

import InputStyled from "../components/styled/InputStyled";

const selector = createSelector(
  [(state) => state.movie.movies.byId],
  (movies) => ({ movies })
);

const Home = () => {
  const { movies } = useSelector(selector);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyParam = useMemo(() => searchParams.get("q") || "", [searchParams]);
  const [date, setDate] = useState("");
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  const debouceGetEntity = useMemo(
    () =>
      debounce((value) => {
        if (value === "") dispatch(getPopularMovies());
        else dispatch(searchMovies(value));
      }, 500),
    [dispatch]
  );

  const handleChange = (e) => {
    const { value } = e.target;
    debouceGetEntity(value);
    setSearchParams(value ? { q: value } : {});
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setDate(value);
  };

  const movieslist = useMemo(
    () =>
      Object.values(movies).filter((movie) => {
        if (date === "") return movie;
        return movie.release_date === date;
      }),
    [date, movies]
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
        <InputStyled
          id="date"
          label="Movie-date"
          type="date"
          value={date}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
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
