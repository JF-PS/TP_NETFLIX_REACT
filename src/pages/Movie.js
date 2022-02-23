import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../slices/movie-slice";
import { createSelector } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stars from "../components/Stars";
import SimilarMovies from "../components/SimilarMovies";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const selector = createSelector(
  [(state) => state.movie.movies.byId],
  (movies) => ({ movies })
);

const Movie = () => {
  const { movies } = useSelector(selector);
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { id } = useParams();
  const movie = !isEmpty(movies[id]) ? movies[id] : {};
  const {
    poster_path = "",
    overview = "",
    vote_average = "",
    title = "",
    genre_ids = "",
    release_date = "",
    genres = [],
  } = movie;

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#252526", color: "white" }}>
      {poster_path !== "" && (
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="green iguana"
        />
      )}

      <CardContent>
        <Stack spacing={4}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">Réalisé par John Doe</Typography>
          <Typography variant="subtitle2" component="div">
            Date de sortie : {release_date}
          </Typography>
          <Typography variant="subtitle2" component="div">
            130 minutes
          </Typography>
          <Typography>Cliquer pour voir le synopsis :</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ color: "white" }}
          >
            <ExpandMoreIcon sx={{ color: "white" }} />
          </ExpandMore>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{overview}</Typography>
            </CardContent>
          </Collapse>
          <Stars note={vote_average} />
          <Typography>Contenu similaire :</Typography>
          <SimilarMovies genres={genres} />
        </Stack>
      </CardContent>

      <br />
      <br />
      <br />
      <br />
    </Card>
  );
};

export default Movie;
