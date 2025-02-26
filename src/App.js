
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieList';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

  const fetchMovies = async (title) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`);
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Movie App</h1>
              <MovieForm onSubmit={fetchMovies} />
              <MovieList movies={movies} onSelectMovie={fetchMovieDetails} />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails movie={selectedMovie} />} />
      </Routes>
    </Router>
  );
}

export default App;
