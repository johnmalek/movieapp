import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, onSelectMovie }) => {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} onClick={() => onSelectMovie(movie.id)}>
              {movie.title} ({movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A"})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
