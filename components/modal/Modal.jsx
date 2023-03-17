import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import AddOrEditMovieModalContent from './content/AddOrEditMovieModalContent';
import DeleteMovieModalContent from './content/DeleteMovieModalContent';
import { setModalType } from '../../redux/modalSlice';
import { setMovie } from '../../redux/movieSlice';

export default function Modal() {
  const modalType = useSelector((state) => state.modal.type);
  const movie = useSelector((state) => state.movie.movie);
  const dispatch = useDispatch();
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
  useOnClickOutside(outsideRef, async () => {
    dispatch(setModalType('none'));
    dispatch(setMovie(null));
  });
  return (
    <div className={modalType !== 'none' ? 'modal active' : 'modal'}>
      <form className="modal-content" ref={outsideRef}>
        <span
          className="modal-close-button"
          onClick={async () => {
            dispatch(setModalType('none'));
            dispatch(setMovie(null));
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          &times;
        </span>
        <ModalContent modalType={modalType} movie={movie} />
      </form>
    </div>
  );
}

function ModalContent(props) {
  const { modalType, movie } = props;
  switch (modalType) {
    case 'addMovie':
      return <AddOrEditMovieModalContent />;
    case 'editMovie':
      return <AddOrEditMovieModalContent movie={movie} />;
    case 'deleteMovie':
      return <DeleteMovieModalContent movie={movie} />;
    default:
      return null;
  }
}

ModalContent.propTypes = {
  modalType: PropTypes.oneOf(['addMovie', 'editMovie', 'deleteMovie', 'none']),
  movie: PropTypes.shape({
    id: PropTypes.number,
    budget: PropTypes.number,
    overview: PropTypes.string,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
  }),
};

ModalContent.defaultProps = {
  movie: {},
};

ModalContent.defaultProps = {
  modalType: 'none',
};
