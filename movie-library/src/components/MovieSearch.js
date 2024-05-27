import React, { useState } from 'react';
import axios from 'axios';
import MovieDetail from './MovieDetail';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=YOUR_OMDB_API_KEY`);
    setMovies(res.data.Search);
  };

  return (
    <div>
      <form onSubmit={searchMovies}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies" required />
        <button type="submit">Search</button>
      </form>
      <div>
        {movies.map(movie => (
          <MovieDetail key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
