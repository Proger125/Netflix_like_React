import React from 'react';
import { useSelector } from 'react-redux';

export default function MovieNumber() {
  const movieNumber = useSelector((state) => state.movie.movieNumber);
  return (
    <span className="movie-number">
      <b>{movieNumber}</b> movies found
    </span>
  );
}
