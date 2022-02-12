import MovieCard from "./MovieCard";
import BoxSyled from "./styled/BoxSyled";
import Grid from "@mui/material/Grid";
import { isEmpty } from "lodash";

const VerticalList = (props) => {
  const { moviesList } = props;
  return (
    <BoxSyled
      sx={{ boxSizing: "content-box", overflowY: "scroll", height: "80vh" }}
    >
      <Grid container spacing={{ md: 3 }} columns={{ sm: 8, md: 12 }}>
        {!isEmpty(moviesList) &&
          moviesList.map((movie, id) => (
            <Grid item xs="auto" sm={2} key={id}>
              <MovieCard movie={movie} key={id} />
            </Grid>
          ))}
      </Grid>
    </BoxSyled>
  );
};

export default VerticalList;
