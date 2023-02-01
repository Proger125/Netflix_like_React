import React from 'react';
import { Formik, Form } from 'formik';
import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../../redux/movieSlice';
import { setModalType } from '../../../redux/modalSlice';

export default function DeleteMovieModalContent() {
  const dispatch = useDispatch();
  const { movie } = useLoaderData();
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
