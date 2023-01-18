import React, { useState } from 'react';
import { useSubmit, useLoaderData, Form } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SortByOption() {
  const [isTogglerUp, setIsTogglerUp] = useState(false);
  const { sortBy, genreParam, movie } = useLoaderData();
  const sortByOptions = useSelector((state) => state.movie.sortByOptions);
  const submit = useSubmit();
  return (
    <div
      className="sort-by-option"
      onClick={() => setIsTogglerUp(!isTogglerUp)}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      <span>{sortBy.toUpperCase().replace('_', ' ')}</span>
      <div className="arrow-down" />
      {isTogglerUp && (
        <div className="sort-by-options">
          {sortByOptions.map((option) => (
            <Form key={option}>
              <span
                onClick={(event) => {
                  submit(event.currentTarget.parentElement);
                }}
                role="button"
                tabIndex={0}
                aria-hidden="true"
                className="sort-by-option-item"
              >
                <input type="hidden" name="sortBy" value={option} />
                <input type="hidden" name="genre" value={genreParam} />
                {movie && (
                  <input type="hidden" name="movieId" value={movie.id} />
                )}
                {option.toUpperCase().replace('_', ' ')}
              </span>
            </Form>
          ))}
        </div>
      )}
    </div>
  );
}
