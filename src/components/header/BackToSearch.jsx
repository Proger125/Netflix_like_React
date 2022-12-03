import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedMovie } from '../../redux/movieSlice';

export default function BackToSearch() {
  const dispatch = useDispatch();
  return (
    <div
      className="back-to-search"
      onClick={async () => dispatch(setSelectedMovie(null))}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      <img src="img/search.png" alt="Search icon" />
    </div>
  );
}
