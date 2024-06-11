import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = ({
  movieList,
  page,
  setPage,
  addMovie,
  removeMovie,
  watchList,
}) => {
  const movieDisplay = movieList.map((movie) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      addMovie={addMovie}
      removeMovie={removeMovie}
      watchList={watchList}
    />
  ));

  const decrement = () => {
    setPage(page - 1);
  };

  const increment = () => {
    setPage(page + 1);
  };

  return (
    <div className="page">
      <h1>Hayden's Movie Theater</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={decrement} disabled={page === 1}>
          Previous
        </button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
