
import { useState } from 'react';
import './App.css';
import MovieDetails from './components/MovieDetails';
import MovieForm from './components/MovieForm';

function App() {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = "86172d742f3c19c30a582a54af799235";

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
    <div>
      <h1>Movie App</h1>
      <MovieForm onSubmit={fetchMovies} />

      {error && <p>{error}</p>}

      <MovieDetails movieData={movieData}/>
    </div>
  );
}

export default App;
