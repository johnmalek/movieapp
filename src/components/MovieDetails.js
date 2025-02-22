import React from "react";

function MovieDetails({ movie }) {
    if (!movie) return null;

    return(
        <div>
            <h2>{movie.title}</h2>
            {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
            )}
            <p><strong>Release Date: </strong>{movie.release_date}</p>
            <p><strong>Description: </strong>{movie.overview}</p>
            
        </div>
    );
}

export default MovieDetails;