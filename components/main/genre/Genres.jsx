import React from 'react';
import { useSelector } from 'react-redux';
import Genre from './Genre';

export default function Genres() {
  const genres = useSelector((state) => state.movie.genres);

  return (
    <div className="genres">
      {genres.map((genre) => (
        <Genre key={genre} genreTitle={genre} />
      ))}
    </div>
  );
}
