import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import MovieOptions from './MovieOptions';
import SelectedMovieContext from './SelectedMovieContext';

export default function Movie(props) {
  const [isOpened, setIsOpened] = useState(false);
  const selectedMovieContextValue = useContext(SelectedMovieContext);
  const { movie } = props;
  return (
    <div
      className="movie"
      onMouseLeave={() => setIsOpened(false)}
      onClick={() => selectedMovieContextValue(movie)}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      <div className="movie-icon">
        <img src={`img/${movie.img}`} alt="" />
      </div>
      <span className="movie-name">{movie.name}</span>
      <span className="movie-creation-date">
        {movie.movieCreationDate.substring(0, 4)}
      </span>
      <br />
      <span className="movie-genres">{movie.movieGenres}</span>
      <MovieOptions isOpened={isOpened} setOpened={setIsOpened} movie={movie} />
    </div>
  );
}
Movie.propTypes = {
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

Movie.defaultProps = {
  movie: {
    movieGenres: 'Nice movie',
  },
};
