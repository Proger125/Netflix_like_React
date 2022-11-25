import React, { useContext } from 'react';
import SelectedMovieContext from '../main/movie/SelectedMovieContext';

export default function BackToSearch() {
  const selectedMovieContextValue = useContext(SelectedMovieContext);
  return (
    <div
      className="back-to-search"
      onClick={() => selectedMovieContextValue(null)}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      <img src="img/search.png" alt="Search icon" />
    </div>
  );
}
