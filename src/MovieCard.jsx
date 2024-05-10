import React from "react";

const MovieCard = ({ movie }) => {

    if (!movie) {
        return null;
    }

    return (
        <div className="movie">
            <div>
                <p>Title: {movie.Title}</p>
                <p>IMDB ID: {movie.imdbID}</p>
                <p>Type: {movie.Type}</p>
                <p>Released: {movie.Year}</p>
            </div>

            <div>
                <img 
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
                    alt={movie.Title}
                />
            </div>

            <div>
                <h3>{movie.Title}</h3>
                <span>Type: {movie.Type}</span>
            </div>
        </div>
    );
};

export default MovieCard;
