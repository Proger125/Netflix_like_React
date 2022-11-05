import React from 'react';
import PropTypes from 'prop-types';

export default function MovieNumber(props) {
  const { movieNumber } = props;
  return (
    <span className="movie-number">
      <b>{movieNumber}</b> movies found
    </span>
  );
}

MovieNumber.propTypes = {
  movieNumber: PropTypes.number.isRequired,
};
