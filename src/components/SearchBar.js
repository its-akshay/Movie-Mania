import React, { useState } from "react";
import instance from "../axios";
import "./SearchBar.css";

const API_KEY = "096732adc467be461fdcb1d50130bf93";
const base_url = "https://image.tmdb.org/t/p/original/";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
      setSearchResults(response.data.results);
      setSelectedMovie(null);
      setShowResults(!showResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleMovieClick = (movie) => {
    if (selectedMovie && selectedMovie.id === movie.id) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          className="input-text"
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {showResults && searchResults.length > 0 && (
        <div className="search-results">
          <h2>Search Results:</h2>
          <div className="row_posters">
            {searchResults.map((result) => (
              <img
                key={result.id}
                onClick={() => handleMovieClick(result)}
                className="row_poster"
                src={`${base_url}${result.poster_path}`}
                alt={result.title}
              />
            ))}
          </div>

          {selectedMovie && (
            <div className="row_details">
              <div className="movie_description">
                <h3>{selectedMovie.title}</h3>
                <p>{selectedMovie.overview}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
