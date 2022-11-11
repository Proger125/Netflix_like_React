import React from 'react';
import PropTypes from 'prop-types';

export default function SortByOption(props) {
  const { sortByOption } = props;
  return (
    <div className="sort-by-option">
      <span>{sortByOption}</span>
      <div className="arrow-down" />
    </div>
  );
}

SortByOption.propTypes = {
  sortByOption: PropTypes.string,
};

SortByOption.defaultProps = {
  sortByOption: 'RELEASE DATE',
};
