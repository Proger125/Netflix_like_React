import React, { useContext } from 'react';
import ModalContext from '../../modal/ModalContext';
import SelectedMovieContext from './SelectedMovieContext';

export default function MovieOptions(props) {
  let options;
  const { movie, isOpened, setOpened } = props;
  const modalContextValue = useContext(ModalContext);
  const selectedMovieContextValue = useContext(SelectedMovieContext);
  if (isOpened) {
    options = (
      <div className="movie-options-opened">
        <span
          className="movie-options-close-button"
          onClick={() => {
            setOpened(false);
            selectedMovieContextValue(null);
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          &times;
        </span>
        <span
          className="movie-options-option"
          onClick={() => {
            modalContextValue('editMovie');
            selectedMovieContextValue(movie);
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          Edit
        </span>
        <span
          className="movie-options-option"
          onClick={() => modalContextValue('deleteMovie')}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          Delete
        </span>
      </div>
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
