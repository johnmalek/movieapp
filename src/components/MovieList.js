import { Link } from "react-router-dom";

function MovieList({ movies }) {
    if (!movies || movies.length === 0) {
        return null;
      }
    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            {movie.title} - ({movie.release_date ? movie.release_date.split("-")[0] : "Unknown Year"})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;