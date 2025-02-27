import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import MovieForm from "./components/MovieForm";

function App() {
  const [movies, setMovies] = useState([]);
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

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Movie App</h1>
              <MovieForm onSubmit={fetchMovies} />
              <MovieList movies={movies} />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
