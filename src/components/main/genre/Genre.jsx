import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieFilter } from '../../../redux/movieSlice';
import '../../../static/css/content-style.css';

export default function Genre(props) {
  const { genre } = props;
  const movieFilter = useSelector((state) => state.movie.movieFilter);
  const isSelected = genre === movieFilter;
  const dispatch = useDispatch();
  return (
    <div
      className="genre"
      onClick={async () => dispatch(setMovieFilter(genre))}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      <span>{genre.toUpperCase()}</span>
      {isSelected && <div className="is-selected-block" />}
    </div>
  );
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
};
