import React from 'react';
import PropTypes from 'prop-types';
import SortByOption from './SortByOption';

export default function SortBy(props) {
  const { sortField, setSortField } = props;
  return (
    <div className="sort-by">
      <span>SORT BY</span>
      <SortByOption
        sortByOption={sortField.toUpperCase()}
        setSortField={setSortField}
      />
    </div>
  );
}

SortBy.propTypes = {
  sortField: PropTypes.string.isRequired,
  setSortField: PropTypes.func.isRequired,
};
