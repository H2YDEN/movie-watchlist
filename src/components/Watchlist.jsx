import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({ list, removeMovie, watchList }) => {
  const movieDisplay = list.map((movie) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      removeMovie={removeMovie}
      watchList={watchList}
    />
  ));

  return (
    <div className="watchlist">
      <h2>My Watchlist</h2>
      {list.length === 0 && <p>Your watchlist is empty.</p>}
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
