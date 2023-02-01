import React from 'react';
import PropTypes from 'prop-types';

export default function MoviePreview(props) {
  const { movie } = props;
  const {
    poster_path,
    title,
    vote_average,
    genres,
    release_date,
    runtime,
    overview,
  } = movie;
  return (
    <div className="movie-preview">
      <div className="movie-preview-icon">
        <img src={poster_path} alt="Poster" />
      </div>
      <div className="movie-preview-info">
        <div className="movie-preview-info-header">
          <span className="movie-preview-info-name">{title}</span>
          <span className="movie-preview-info-rating">{vote_average}</span>
        </div>
        <span className="movie-preview-info-genres">{genres.join(', ')}</span>
        <div className="movie-preview-info-year-and-duration">
          <span className="movie-preview-info-year">
            {release_date.substring(0, 4)}
          </span>
          <span className="mvoie-preview-info-duration">{runtime}</span>
        </div>
        <span className="movie-preview-info-description">{overview}</span>
      </div>
    </div>
  );
}

MoviePreview.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    budget: PropTypes.number,
    overview: PropTypes.string.isRequired,
    revenue: PropTypes.number,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};
