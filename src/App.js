import React, { useState } from "react";
import { FaSearch, FaArrowRight } from 'react-icons/fa'; 
import './App.css';
import MovieCard from "./MovieCard";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [isApiKeySet, setIsApiKeySet] = useState(false);

    const searchMovies = async (title) => {
        if (!apiKey) {
            console.warn("Please provide a valid API key.");
            return;
        }
        const API_URL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
        const response = await fetch(API_URL);
        const data = await response.json();

        setMovies(data.Search || []);
    }

    const handleSetApiKey = () => {
        if (apiKey) {
            setIsApiKeySet(true);
            searchMovies('Batman');
        } else {
            alert("Please enter an API key.");
        }
    }

    return (
        <div className="app">
            <h1>Movie Search App</h1>
            <h3>By: Bardan Phuyel</h3>
            
            {!isApiKeySet ? (
                <><div className="search">
                    <input 
                        type="text"
                        placeholder="Enter OMDB API Key..."
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                    />
                    <FaArrowRight 
                        className="arrow-icon" 
                        onClick={handleSetApiKey} 
                        style={{ cursor: "pointer", marginLeft: "10px" }}
                    />
                </div>
                <h4>Get a free key at https://www.omdbapi.com</h4><br/>
                </>
            ) : (
                <>
                    <div className="search">
                        <input 
                            placeholder="Search for a movie or TV show..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch 
                            className="search-icon" 
                            onClick={() => searchMovies(searchTerm)}
                        /> 
                    </div>

                    {movies.length > 0 ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard key={movie.imdbID} movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )}
                </>
            )}

            <div>
                <p className="footer">
                    Created using React,<br />
                    OMDB API to fetch movie details,<br /> 
                    CSS by YT: javascriptmastery,
                    then edited by me
                </p>
            </div>
        </div>
    );
};

export default App;
