import  React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails({ movie }) {
    const { id } = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {
        if(movie){
            console.log(movie.title);
            console.log(movie.release_date);
            console.log(movie.overview);
            console.log(movie.poster_path);
        }
    }, [movie]);

    if(!movie){
        return <p>Loading movie details...</p>;
    }

    return(
        <div>
            <h1>{movie.title}</h1>
            <p>Release Date: {movie.release_date}</p>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
    );
}

export default MovieDetails;