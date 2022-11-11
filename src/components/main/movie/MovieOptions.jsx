import React from 'react';
import ModalContext from '../../modal/ModalContext';
import SelectedMovieContext from './SelectedMovieContext';

export default function MovieOptions(props) {
  let options;
  const { movie, isOpened, setOpened } = props;
  if (isOpened) {
    options = (
      <div className="movie-options-opened">
        <span
          className="movie-options-close-button"
          onClick={() => setOpened(false)}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          &times;
        </span>
        <ModalContext.Consumer>
          {(setModalType) => (
            <SelectedMovieContext.Consumer>
              {(setSelectedMovie) => (
                <span
                  className="movie-options-option"
                  onClick={() => {
                    setModalType('editMovie');
                    setSelectedMovie(movie);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-hidden="true"
                >
                  Edit
                </span>
              )}
            </SelectedMovieContext.Consumer>
          )}
        </ModalContext.Consumer>
        <ModalContext.Consumer>
          {(setModalType) => (
            <span
              className="movie-options-option"
              onClick={() => setModalType('deleteMovie')}
              role="button"
              tabIndex={0}
              aria-hidden="true"
            >
              Delete
            </span>
          )}
        </ModalContext.Consumer>
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
