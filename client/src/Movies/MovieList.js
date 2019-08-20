import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const MovieList = props => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = () => {
            axios
                .get('http://localhost:5000/api/movies')
                .then(response => {
                    setMovies(response.data);
                })
                .catch(error => {
                    console.error('Server Error', error);
                });
        };

        getMovies();
    }, []);

    const saveMovie = movie => {
        props.addToSavedList(movie);
    };

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <div>
                    <Link to={`/movies/${movie.id}`}>
                        <MovieDetails key={movie.id} movie={movie} />
                    </Link>
                    <div
                        className="save-button"
                        onClick={() => saveMovie(movie)}
                    >
                        Save
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
