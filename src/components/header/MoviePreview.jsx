import React from 'react';
import PropTypes from 'prop-types';

export default function MoviePreview(props) {
  const { movie } = props;
  return (
    <div className="movie-preview">
      <div className="movie-preview-icon">
        <img src={movie.poster_path} alt="" />
      </div>
      <div className="movie-preview-info">
        <div className="movie-preview-info-header">
          <span className="movie-preview-info-name">{movie.title}</span>
          <span className="movie-preview-info-rating">
            {movie.vote_average}
          </span>
        </div>
        <span className="movie-preview-info-genres">
          {movie.genres.join(', ')}
        </span>
        <div className="movie-preview-info-year-and-duration">
          <span className="movie-preview-info-year">
            {movie.release_date.substring(0, 4)}
          </span>
          <span className="mvoie-preview-info-duration">{movie.runtime}</span>
        </div>
        <span className="movie-preview-info-description">{movie.overview}</span>
      </div>
    </div>
  );
}

MoviePreview.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    budget: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    revenue: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};

MoviePreview.defaultProps = {
  movie: {
    movieGenres: 'Nice movie',
  },
};
