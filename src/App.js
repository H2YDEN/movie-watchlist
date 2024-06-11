import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchlist] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const addMovie = (movie) => {
    setWatchlist([...watchList, movie]);
  };

  const removeMovie = (movie) => {
    const newState = watchList.filter((item) => item.id !== movie.id);
    setWatchlist(newState);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          movieList={movieList}
          page={page}
          setPage={setPage}
          addMovie={addMovie}
          removeMovie={removeMovie}
          watchList={watchList}
        />
        <Watchlist
          list={watchList}
          removeMovie={removeMovie}
          watchList={watchList}
        />
      </main>
    </div>
  );
}

export default App;
