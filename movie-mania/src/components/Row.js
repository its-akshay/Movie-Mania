import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    const handleClick = (movie) => {
        if (selectedMovie && selectedMovie.id === movie.id) {
            setSelectedMovie(null);
        } else {
            setSelectedMovie(movie);
        }
    };
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className="row_poster"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {selectedMovie && (
                <div className="row_details">
                    {selectedMovie && (
                        <div className="movie_description">
                            <h3>{selectedMovie.name}</h3>
                            <p>{selectedMovie.overview}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Row;
