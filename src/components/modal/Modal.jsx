import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../static/css/modal.css';
import AddOrEditMovieModalContent from './content/AddOrEditMovieModalContent';
import DeleteMovieModalContent from './content/DeleteMovieModalContent';
import ModalContext from './ModalContext';

export default function Modal(props) {
  const { modalType, selectedMovie } = props;
  const contextValue = React.useContext(ModalContext);
  const outsideRef = useRef();
  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  }
  useOnClickOutside(outsideRef, () => contextValue('none'));
  return (
    <div className={modalType !== 'none' ? 'modal active' : 'modal'}>
      <div className="modal-content" ref={outsideRef}>
        <span
          className="modal-close-button"
          onClick={() => contextValue('none')}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          &times;
        </span>
        <ModalContent modalType={modalType} selectedMovie={selectedMovie} />
      </div>
    </div>
  );
}

function ModalContent(props) {
  const { modalType, selectedMovie } = props;
  switch (modalType) {
    case 'addMovie':
      return <AddOrEditMovieModalContent />;
    case 'editMovie':
      return <AddOrEditMovieModalContent movie={selectedMovie} />;
    case 'deleteMovie':
      return <DeleteMovieModalContent />;
    default:
      return null;
  }
}

Modal.propTypes = {
  modalType: PropTypes.oneOf(['addMovie', 'editMovie', 'deleteMovie', 'none']),
  selectedMovie: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    movieCreationDate: PropTypes.string.isRequired,
    movieGenres: PropTypes.string,
  }),
};

ModalContent.propTypes = {
  modalType: PropTypes.oneOf(['addMovie', 'editMovie', 'deleteMovie', 'none']),
  selectedMovie: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    movieCreationDate: PropTypes.string.isRequired,
    movieGenres: PropTypes.string,
  }),
};

Modal.defaultProps = {
  selectedMovie: {
    img: 'default.png',
    name: 'Movie name',
    movieCreationDate: '1994-01-01',
    movieGenres: 'Nice movie',
  },
  modalType: 'none',
};

ModalContent.defaultProps = {
  selectedMovie: {
    img: 'default.png',
    name: 'Movie name',
    movieCreationDate: '1994-01-01',
    movieGenres: 'Nice movie',
  },
  modalType: 'none',
};
