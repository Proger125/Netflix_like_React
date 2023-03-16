import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import AddOrEditMovieModalContent from './content/AddOrEditMovieModalContent';
import DeleteMovieModalContent from './content/DeleteMovieModalContent';
import { setModalType } from '../../redux/modalSlice';
import { getMovieById } from '../../pages/api';

export default function Modal({ movie }) {
  const modalType = useSelector((state) => state.modal.type);
  const router = useRouter();
  const { genre, sortBy } = router.query;
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
    await dispatch(setModalType('none'));
  });
  return (
    <div className={modalType !== 'none' ? 'modal active' : 'modal'}>
      <form className="modal-content" ref={outsideRef}>
        <span
          className="modal-close-button"
          onClick={async (event) => {
            await dispatch(setModalType('none'));
            event.currentTarget.parentElement.submit();
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          &times;
        </span>
        <ModalContent modalType={modalType} movie={movie} />
        <input type="hidden" name="genre" value={genre} />
        <input type="hidden" name="sortBy" value={sortBy} />
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

export async function getServerSideProps({ params }) {
  const { movieId } = params.query;
  const movie = await getMovieById(movieId);
  return {
    props: {
      movie,
    },
  };
}

Modal.propTypes = {
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

Modal.defaultProps = {
  movie: {},
};

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
