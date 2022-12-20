import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortField } from '../../../redux/movieSlice';

export default function SortByOption() {
  const [isTogglerUp, setIsTogglerUp] = useState(false);
  const sortField = useSelector((state) => state.movie.sortField);
  const sortByOptions = useSelector((state) => state.movie.sortByOptions);
  const dispatch = useDispatch();
  return (
    <div
      className="sort-by-option"
      onClick={() => setIsTogglerUp(!isTogglerUp)}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      <span>{sortField.toUpperCase().replace('_', ' ')}</span>
      <div className="arrow-down" />
      {isTogglerUp && (
        <div className="sort-by-options">
          {sortByOptions.map((option) => (
            <span
              onClick={async () => dispatch(setSortField(option))}
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
