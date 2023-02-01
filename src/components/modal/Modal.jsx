import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useSubmit, useLoaderData, Form } from 'react-router-dom';
import '../../static/css/modal.css';
import AddOrEditMovieModalContent from './content/AddOrEditMovieModalContent';
import DeleteMovieModalContent from './content/DeleteMovieModalContent';
import { setModalType } from '../../redux/modalSlice';

export default function Modal() {
  const modalType = useSelector((state) => state.modal.type);
  const dispatch = useDispatch();
  const submit = useSubmit();
  const { genreParam, sortBy } = useLoaderData();
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
      <Form className="modal-content" ref={outsideRef}>
        <span
          className="modal-close-button"
          onClick={async (event) => {
            await dispatch(setModalType('none'));
            submit(event.currentTarget.parentElement);
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          &times;
        </span>
        <ModalContent modalType={modalType} />
        <input type="hidden" name="genre" value={genreParam} />
        <input type="hidden" name="sortBy" value={sortBy} />
      </Form>
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
