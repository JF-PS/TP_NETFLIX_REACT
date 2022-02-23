import { useNavigate } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteMovie,
  deleteFavoriteMovie,
} from "../slices/favorite-slice";

import * as React from "react";
import CardStyled from "./styled/CardStyled";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";

const selector = createSelector(
  [(state) => state.favorite.favorites.byId],
  (favorites) => ({ favorites })
);

const MovieCard = (props) => {
  const { favorites } = useSelector(selector);
  const { movie } = props;
  const dispatch = useDispatch();
  const { id, poster_path, title } = movie;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${id}`);
  };

  const handleFavoriteClick = () => {
    if (favorites[id]) dispatch(deleteFavoriteMovie(id));
    else dispatch(addFavoriteMovie(movie));
  };

  return (
    <CardStyled>
      <CardHeader
        sx={{ height: 0, p: 0 }}
        action={
          <IconButton
            sx={{ color: "white", padding: 2 }}
            aria-label={`favorite`}
            onClick={handleFavoriteClick}
          >
            {favorites[id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        }
      />
      <CardMedia
        onClick={handleClick}
        component="img"
        image={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
    </CardStyled>
  );
};

export default MovieCard;
