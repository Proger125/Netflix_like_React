import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function SortByOption() {
  const [isTogglerUp, setIsTogglerUp] = useState(false);
  const router = useRouter();
  const { genre, sortBy, search } = router.query;
  const searchParam = search === undefined ? '' : search;
  const sortByOptions = useSelector((state) => state.movie.sortByOptions);
  return (
    <div
      className="sort-by-option"
      onClick={() => setIsTogglerUp(!isTogglerUp)}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      <span className="selected-sort-by-option">
        {sortBy?.toUpperCase().replace('_', ' ')}
      </span>
      <div className="arrow-down" />
      {isTogglerUp && (
        <div className="sort-by-options">
          {sortByOptions.map((option) => (
            <div key={option}>
              <span
                onClick={() => {
                  router.push(
                    `/search?genre=${genre}&sortBy=${option}&search=${searchParam}`,
                  );
                }}
                role="button"
                tabIndex={0}
                aria-hidden="true"
                className="sort-by-option-item"
              >
                {option.toUpperCase().replace('_', ' ')}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
