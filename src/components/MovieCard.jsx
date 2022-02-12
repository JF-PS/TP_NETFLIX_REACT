import * as React from "react";
import CardStyled from "./styled/CardStyled";
import CardMedia from "@mui/material/CardMedia";

const MovieCard = (props) => {
  const { movie } = props;
  const { poster_path, title } = movie;

  return (
    <CardStyled>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
    </CardStyled>
  );
};

export default MovieCard;
