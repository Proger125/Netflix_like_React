import React, { useState } from 'react';
import PropTypes from 'prop-types';

const sortByOptions = ['release_date', 'title', 'runtime', 'budget'];

export default function SortByOption(props) {
  const [isTogglerUp, setIsTogglerUp] = useState(false);

  const { sortByOption, setSortField } = props;
  return (
    <div
      className="sort-by-option"
      onClick={() => setIsTogglerUp(!isTogglerUp)}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      <span>{sortByOption.replace('_', ' ')}</span>
      <div className="arrow-down" />
      {isTogglerUp && (
        <div className="sort-by-options">
          {sortByOptions.map((option) => (
            <span
              onClick={() => setSortField(option)}
              role="button"
              tabIndex={0}
              aria-hidden="true"
              key={option}
            >
              {option.toUpperCase().replace('_', ' ')}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

SortByOption.propTypes = {
  sortByOption: PropTypes.string.isRequired,
  setSortField: PropTypes.func.isRequired,
};
