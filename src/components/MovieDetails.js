import React from 'react';

function MovieDetails({ movieData }) {
    if(!movieData) return null;

    const [title, year, description, image] = movieData;

    return (
        <div>
            <h1>{title}</h1>
            <p>{year}</p>
            <p>{description}</p>
            <img src={image} alt={title} />
        </div>
    );
}

export default MovieDetails;