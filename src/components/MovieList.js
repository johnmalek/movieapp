import React from 'react';

function MovieList({ movies, onSelectMovie }) {
    if(!movies || movies.length === 0) {
        return null;
    }

    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id} onClick={() => onSelectMovie(movie.id)} style={{ cursor: 'pointer', margin: '10px 0' }}>
                        <h3>{movie.title} - ({movie.release_date ? movie.release_date.split('-')[0] : 'N/A'})</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;