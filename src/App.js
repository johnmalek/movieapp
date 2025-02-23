
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieList';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState('');

  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

  const fetchMovies = async (title) => {
    setError('');
    setMovieData(null);

    try{
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`
      );
      const data = await response.json();

      if(data.results && data.results.length > 0) {
        setMovieData(data.results);
      }else{
        setError(`${title} not found!`);
      }
    } catch{
      setError("Failed to fetch movie data");
    }
  }


  return (
    <Router>
      <div>
        <h1>Movie App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <MovieForm onSubmit={fetchMovies} />
              {error && <p>{error}</p>}
              <MovieList movies={movieData} />
            </>
          } />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
