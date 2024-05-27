import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default MovieDetail;
