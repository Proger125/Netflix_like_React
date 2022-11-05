import React from 'react';
import Genres from './genre/Genres';
import MovieNumber from './movie/MovieNumber';
import Movies from './movie/Movies';
import SortBy from './sort/SortBy';

export default function Content() {
  return (
    <div className="main-content">
      <Genres />
      <SortBy />
      <MovieNumber movieNumber={39} />
      <Movies />
    </div>
  );
}
