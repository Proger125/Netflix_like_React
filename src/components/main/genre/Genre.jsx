import React from 'react';
import '../../../static/css/content-style.css';
import PropTypes from 'prop-types';

export default function Genre(props) {
  const { genre, isSelected } = props;
  return (
    <div className="genre">
      <span>{genre}</span>
      {isSelected && <div className="is-selected-block" />}
    </div>
  );
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
