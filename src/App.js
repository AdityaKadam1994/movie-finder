import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./App.css";

const App = () => {
  const api_key = "6058da8f";

  const [movies, setMovies] = useState([]);
  const [search, updateSearch] = useState("");
  const [query, setQuery] = useState("Avengers");

  /*Get Movie api call*/
  const getMovies = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${api_key}`
    );
    const response_data = await response.json();
    setMovies(response_data.Search);
  };

  /* Setting typed value*/
  const setSearch = e => {
    updateSearch(e.target.value);
  };

  /* On form submit*/
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  useEffect(() => {
    getMovies();
  }, [query]);
  return (
    <div className="App">
      <form className="movie-form" onSubmit={getSearch}>
        <input
          type="text"
          className="movie-input"
          onChange={setSearch}
          value={search}
          placeholder="Enter Movie Name"
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="movie-wrapper">
        {movies ? (
          movies.map(movie => (
            <Movie
              key={movie.imdbId}
              title={movie.Title}
              type={movie.Type}
              year={movie.Year}
              img={movie.Poster}
              imdb={movie.imdbID}
            />
          ))
        ) : (
          <div className="no-data">No data found </div>
        )}
      </div>
    </div>
  );
};

export default App;
