import  React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

        const fetchMovieDetails = async () => {
            try{
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
                );
                const data = await response.json();

                if (response.ok){
                    setMovie(data);
                } else {
                    setError("Movie Details not found");
                }
            } catch {
                setError("Failed to fetch movie details");
            }
        };

        fetchMovieDetails();
    }, [id]);

    if(error) {
        return <p>{error}</p>
    }

    if(!movie){
        return <p>Loading...</p>
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