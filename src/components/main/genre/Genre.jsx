import React from 'react';
import '../../../static/css/content-style.css';
import PropTypes from 'prop-types';

export default function Genre(props) {
  const { genre, isSelected, setMoviesGenreFilter } = props;
  return (
    <div
      className="genre"
      onClick={() => setMoviesGenreFilter(genre)}
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
  isSelected: PropTypes.bool.isRequired,
  setMoviesGenreFilter: PropTypes.func.isRequired,
};
