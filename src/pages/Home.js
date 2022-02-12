import SearchInput from "../components/SearchInput";
import VerticalList from "../components/VerticalList";
import Grid from "@mui/material/Grid";
import data from "../data.json";
import { useEffect } from "react";

const Home = () => {
  const { movies, genres } = data;

  useEffect(() => {
    console.log(movies);
  }, [movies]);

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
        <SearchInput />
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ width: "100%", border: "1px solid white", borderRadius: "4px" }}
      >
        <VerticalList moviesList={movies} />
      </Grid>
    </Grid>
  );
};

export default Home;
