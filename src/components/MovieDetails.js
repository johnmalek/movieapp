import { useEffect, React, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try{
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
                );
                const data = await response.json();

                if (response.ok){
                    setMovie = data;
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
            <h2>{movie.title}</h2>
            {movie.poster_path && <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />}
            <p><strong>Release Date: </strong>{movie.release_date}</p>
            <p><strong>Description: </strong>{movie.overview}</p>
            
        </div>
    );
}

export default MovieDetails;