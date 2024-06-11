import React from "react";

const MovieCard = ({ movie, addMovie, removeMovie, watchList }) => {
  const inWatchlist =
    watchList.filter((item) => item.id === movie.id).length > 0;
  const button = inWatchlist ? (
    <button onClick={() => removeMovie(movie)}>Remove</button>
  ) : (
    <button onClick={() => addMovie(movie)}>Add to List</button>
  );

  return (
    <div className="movie-card">
      <div>
        {movie.poster_path && (
          <img
            style={{ maxWidth: "200px", maxHeight: "300px" }}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.original_title}
          />
        )}
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
