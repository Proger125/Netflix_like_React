import React, { useState } from 'react';
import Genres from './genre/Genres';
import MovieNumber from './movie/MovieNumber';
import Movies from './movie/Movies';
import SortBy from './sort/SortBy';

export default function Content() {
  const [movieNumber, setMovieNumber] = useState(0);
  const [moviesGenreFilter, setMoviesGenreFilter] = useState('All');
  const [sortField, setSortField] = useState('release_date');
  return (
    <div className="main-content">
      <Genres
        setMoviesGenreFilter={setMoviesGenreFilter}
        moviesGenreFilter={moviesGenreFilter}
      />
      <SortBy sortField={sortField} setSortField={setSortField} />
      <MovieNumber movieNumber={movieNumber} />
      <Movies
        setMovieNumber={setMovieNumber}
        moviesGenreFilter={moviesGenreFilter}
        sortField={sortField}
      />
    </div>
  );
}
