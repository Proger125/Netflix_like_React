import React from 'react';
import { useSelector } from 'react-redux';

export default function MoviePreview() {
  const movie = useSelector((state) => state.movie.movie);
  return (
    <div className="movie-preview">
      <div className="movie-preview-icon">
        <img src={movie?.poster_path} alt="Poster" />
      </div>
      <div className="movie-preview-info">
        <div className="movie-preview-info-header">
          <span className="movie-preview-info-name">{movie?.title}</span>
          <span className="movie-preview-info-rating">
            {movie?.vote_average}
          </span>
        </div>
        <span className="movie-preview-info-genres">
          {movie?.genres.join(', ')}
        </span>
        <div className="movie-preview-info-year-and-duration">
          <span className="movie-preview-info-year">
            {movie?.release_date.substring(0, 4)}
          </span>
          <span className="mvoie-preview-info-duration">{movie?.runtime}</span>
        </div>
        <span className="movie-preview-info-description">
          {movie?.overview}
        </span>
      </div>
    </div>
  );
}
