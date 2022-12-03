import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import '../../static/css/modal.css';
import AddOrEditMovieModalContent from './content/AddOrEditMovieModalContent';
import DeleteMovieModalContent from './content/DeleteMovieModalContent';
import { setSelectedMovie } from '../../redux/movieSlice';
import { setModalType } from '../../redux/modalSlice';

export default function Modal() {
  const modalType = useSelector((state) => state.modal.type);
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
      <div className="modal-content" ref={outsideRef}>
        <span
          className="modal-close-button"
          onClick={async () => {
            await dispatch(setModalType('none'));
            await dispatch(setSelectedMovie(null));
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          &times;
        </span>
        <ModalContent modalType={modalType} />
      </div>
    </div>
  );
}

function ModalContent(props) {
  const { modalType } = props;
  switch (modalType) {
    case 'addMovie':
      return <AddOrEditMovieModalContent />;
    case 'editMovie':
      return <AddOrEditMovieModalContent />;
    case 'deleteMovie':
      return <DeleteMovieModalContent />;
    default:
      return null;
  }
}

ModalContent.propTypes = {
  modalType: PropTypes.oneOf(['addMovie', 'editMovie', 'deleteMovie', 'none']),
};

ModalContent.defaultProps = {
  modalType: 'none',
};
