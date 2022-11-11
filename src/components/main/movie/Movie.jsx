import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MovieOptions from './MovieOptions';

export default function Movie(props) {
  const [isOpened, setIsOpened] = useState(false);

  const { movie } = props;
  return (
    <div className="movie" onMouseLeave={() => setIsOpened(false)}>
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
    movieCreationDate: PropTypes.string.isRequired,
    movieGenres: PropTypes.string,
  }),
};

Movie.defaultProps = {
  movie: {
    img: 'default.png',
    name: 'Movie name',
    movieCreationDate: '1994-01-01',
    movieGenres: 'Nice movie',
  },
};
