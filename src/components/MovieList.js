import React from "react";
import { Link } from "react-router-dom";

function MovieList({ movies }) {
    if(!movies) return null;
    return (
        <div>
            <ul>
                {movies.map((movie) => (
                <li key={movie.id || Math.random()}>
                    <Link to={`/movie/${movie.id}`}>
                        {movie.title} ({movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A"})
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;