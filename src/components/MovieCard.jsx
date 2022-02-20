import * as React from "react";
import CardStyled from "./styled/CardStyled";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const { movie } = props;
  const { id, poster_path, title } = movie;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <CardStyled onClick={handleClick}>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
    </CardStyled>
  );
};

export default MovieCard;
