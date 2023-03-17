import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalType } from '../../../redux/modalSlice';
import { setMovie } from '../../../redux/movieSlice';

export default function MovieOptions(props) {
  let options;
  const { movie, isOpened, setOpened } = props;
  const dispatch = useDispatch();
  if (isOpened) {
    options = (
      <form className="movie-options-opened">
        <span
          className="movie-options-close-button"
          onClick={() => {
            setOpened(false);
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          &times;
        </span>
        <span
          className="movie-options-option"
          onClick={async () => {
            dispatch(setModalType('editMovie'));
            dispatch(setMovie(movie));
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          Edit
        </span>
        <span
          className="movie-options-option"
          onClick={async () => {
            dispatch(setModalType('deleteMovie'));
            dispatch(setMovie(movie));
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          Delete
        </span>
      </form>
    );
  } else {
    options = (
      <div
        className="movie-options-closed"
        onClick={() => setOpened(true)}
        role="button"
        tabIndex={0}
        aria-hidden="true"
      >
        <div className="movie-options-circle" />
        <div className="movie-options-circle" />
        <div className="movie-options-circle" />
      </div>
    );
  }
  return options;
}
