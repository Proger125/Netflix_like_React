import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../../redux/movieSlice';
import { setModalType } from '../../../redux/modalSlice';

export default function DeleteMovieModalContent({ movie }) {
  const dispatch = useDispatch();
  return (
    <>
      <span className="modal-header">DELETE MOVIE</span>
      <Formik
        initialValues={{
          id: movie ? movie.id : '',
          title: movie ? movie.title : '',
          release_date: movie ? movie.release_date : '1994-10-05',
          vote_average: movie ? movie.vote_average : 0,
          poster_path: movie
            ? movie.poster_path
            : 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
          genres: movie ? movie.genres : [],
          runtime: movie ? movie.runtime : '',
          overview: movie ? movie.overview : '',
        }}
        onSubmit={async (values) => {
          await dispatch(setModalType('none'));
          await dispatch(deleteMovie(values));
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

DeleteMovieModalContent.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    budget: PropTypes.number,
    overview: PropTypes.string.isRequired,
    revenue: PropTypes.number,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};
