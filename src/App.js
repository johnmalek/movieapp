
import { useState } from 'react';
import './App.css';
import MovieDetails from './components/MovieList';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('');

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const fetchMovies = async (title) => {
    setError('');
    setMovieData(null);
    setSelectedMovie(null);

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

  const fetchMovieDetails = async (movieId) => {
    try{
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      );
      const data = await response.json();
      setSelectedMovie(data)
    }catch{
      setError("Failed to fetch movie details");
    }
  };

  const renderContent = () => {
    if (selectedMovie) {
      return <MovieDetails movie={selectedMovie} />;
    }
    return <MovieList movies={movieData} onSelectMovie={fetchMovieDetails} />;
  };


  return (
    <div>
      <h1>Movie App</h1>
      <MovieForm onSubmit={fetchMovies} />

      {error && <p>{error}</p>}

      {renderContent()}

      <MovieDetails movieData={movieData}/>
    </div>
  );
}

export default App;
