import React from 'react';

const MovieDetails = ({ movie }) => {
    const { title, director, metascore, stars } = movie;
    return (
        <div className="movie-card">
            <h2>{title}</h2>
            <div className="movie-director">
                Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
                Metascore: <strong>{metascore}</strong>
            </div>
            <h3>Actors</h3>

            {!stars ? (
                <h2>Loading Stars...</h2>
            ) : (
                stars.map(star => (
                    <div key={star} className="movie-star">
                        {star}
                    </div>
                ))
            )}
        </div>
    );
};

export default MovieDetails;
