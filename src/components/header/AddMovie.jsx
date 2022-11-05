import React from 'react';
import ModalContext from '../modal/ModalContext';

export default function AddMovie() {
  return (
    <ModalContext.Consumer>
      {(setModalType) => (
        <button
          className="add-movie-button"
          onClick={() => setModalType('addMovie')}
          type="button"
        >
          <b>+ ADD MOVIE</b>
        </button>
      )}
    </ModalContext.Consumer>
  );
}
