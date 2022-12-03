import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, setSelectedMovie } from '../../../redux/movieSlice';
import { setModalType } from '../../../redux/modalSlice';

export default function DeleteMovieModalContent() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.SelectedMovie);
  return (
    <>
      <span className="modal-header">DELETE MOVIE</span>
      <Formik
        onSubmit={async () => {
          console.log(movie);
          await dispatch(deleteMovie(movie.id));
          await dispatch(setSelectedMovie(null));
          await dispatch(setModalType('none'));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="modal-form">
            <span className="modal-text">
              Are you sure you want to delete this movie
            </span>
            <div className="modal-form-control-buttons">
              <button
                className="modal-form-control-button submit-button"
                type="submit"
                disabled={isSubmitting}
              >
                SUBMIT
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
