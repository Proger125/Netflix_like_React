import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalType } from '../../redux/modalSlice';

export default function AddMovie() {
  const dispatch = useDispatch();
  return (
    <button
      className="add-movie-button"
      onClick={async () => dispatch(setModalType('addMovie'))}
      type="button"
    >
      <b>+ ADD MOVIE</b>
    </button>
  );
}
