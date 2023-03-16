import React from 'react';
import Genres from './genre/Genres';
import MovieNumber from './movie/MovieNumber';
import SortBy from './sort/SortBy';

export default function Content() {
  return (
    <div className="main-content">
      <Genres />
      <SortBy />
      <MovieNumber />
    </div>
  );
}
