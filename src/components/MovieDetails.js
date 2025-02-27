import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [apiKey, id]); // Run when the movie ID changes

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movie) return <p>No movie found.</p>;

  return (
    <div className="movie-details-container">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>Release Date: {movie.release_date}</p>
      <p>{movie.overview}</p>

      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default MovieDetails;
