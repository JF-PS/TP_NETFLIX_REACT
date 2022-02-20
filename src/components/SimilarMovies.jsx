import React from "react";
import data from "../data.json";
import { useNavigate } from "react-router-dom";

const SimilarMovies = (props) => {
  const navigate = useNavigate();

  const { movies } = data;
  const { genre_ids } = props;
  const list = movies.filter((movie) => movie.genre_ids.includes(genre_ids));

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div>
      {list.map((movie) => (
        <img
          style={{
            width: "100px",
            cursor: "pointer",
          }}
          onClick={() => handleClick(movie.id)}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ))}
    </div>
  );
};

export default SimilarMovies;
