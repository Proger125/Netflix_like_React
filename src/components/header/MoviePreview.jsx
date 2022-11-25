import React from 'react';
import PropTypes from 'prop-types';

export default function MoviePreview(props) {
  const { movie } = props;
  return (
    <div className="movie-preview">
      <div className="movie-preview-icon">
        <img src={`img/${movie.img}`} alt="" />
      </div>
      <div className="movie-preview-info">
        <div className="movie-preview-info-header">
          <span className="movie-preview-info-name">{movie.name}</span>
          <span className="movie-preview-info-rating">{movie.rating}</span>
        </div>
        <span className="movie-preview-info-genres">{movie.movieGenres}</span>
        <div className="movie-preview-info-year-and-duration">
          <span className="movie-preview-info-year">
            {movie.movieCreationDate.substring(0, 4)}
          </span>
          <span className="mvoie-preview-info-duration">{movie.duration}</span>
        </div>
        <span className="movie-preview-info-description">
          {movie.description}
        </span>
      </div>
    </div>
  );
}

MoviePreview.propTypes = {
  movie: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    movieCreationDate: PropTypes.string.isRequired,
    movieGenres: PropTypes.string,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

MoviePreview.defaultProps = {
  movie: {
    movieGenres: 'Nice movie',
  },
};
