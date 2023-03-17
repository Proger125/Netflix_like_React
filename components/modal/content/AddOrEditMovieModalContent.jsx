import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { addMovie, editMovie, setMovie } from '../../../redux/movieSlice';
import { setModalType } from '../../../redux/modalSlice';

const movieValidationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  release_date: Yup.date().required('Required'),
  vote_average: Yup.number().min(0).max(100).required('Required'),
  genres: Yup.array().min(1).required('Required'),
  runtime: Yup.number().min(0).required('Required'),
  overview: Yup.string().required('Required'),
});

export default function AddOrEditMovieModalContent({ movie }) {
  const [isTogglerUp, setIsTogglerUp] = useState(false);
  const genres = useSelector((state) => state.movie.genres);
  const dispatch = useDispatch();
  const router = useRouter();
  const { genre, sortBy, search } = router.query;
  return (
    <>
      <span className="modal-header">ADD MOVIE</span>
      <Formik
        initialValues={{
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
        validationSchema={movieValidationSchema}
        onSubmit={async (values) => {
          values.vote_average = Number(values.vote_average);
          if (movie) {
            values.id = movie.id;
            dispatch(editMovie(values));
          } else {
            dispatch(addMovie(values));
          }
          dispatch(setModalType('none'));
          router.push(
            `/search?genre=${genre}&sortBy=${sortBy}&movieId=${movie.id}&search=${search}`,
          );
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form className="modal-form" method="POST">
            <div className="modal-form-group">
              <span className="modal-form-group-header">TITLE</span>
              <Field
                className="modal-form-group-input left-column"
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="Film Title"
                value={values.title}
              />
              <div className="modal-form-group-error">
                <ErrorMessage name="title" />
              </div>
            </div>
            <div className="modal-form-group with-left-margin">
              <span className="modal-form-group-header">RELEASE DATE</span>
              <Field
                className="modal-form-group-input right-column"
                type="date"
                name="release_date"
                onChange={handleChange}
                value={values.release_date}
              />
              <div className="modal-form-group-error">
                <ErrorMessage name="release_date" />
              </div>
            </div>
            <div className="modal-form-group">
              <span className="modal-form-group-header">MOVIE URL</span>
              <Field
                className="modal-form-group-input left-column"
                type="text"
                name="movie_url"
                onChange={handleChange}
                placeholder="https://"
                value={values.poster_path}
              />
            </div>
            <div className="modal-form-group with-left-margin">
              <span className="modal-form-group-header">RATING</span>
              <Field
                className="modal-form-group-input right-column"
                type="text"
                name="vote_average"
                onChange={handleChange}
                placeholder="7.8"
                value={values.vote_average}
              />
              <div className="modal-form-group-error">
                <ErrorMessage name="vote_average" />
              </div>
            </div>
            <div className="modal-form-group">
              <span className="modal-form-group-header">GENRE</span>
              <div className="genre-dropdown">
                <input className="genre-dropdown-input" type="text" disabled />
                <div
                  className="genre-dropdown-toggler-wrapper"
                  onClick={() => {
                    setIsTogglerUp(!isTogglerUp);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-hidden="true"
                >
                  <div
                    className={
                      isTogglerUp
                        ? 'genre-dropdown-toggler-up'
                        : 'genre-dropdown-toggler-down'
                    }
                  />
                </div>
                {isTogglerUp && (
                  <div className="gener-options">
                    {genres.map((g) => (
                      <label className="genre-option-label" htmlFor={g} key={g}>
                        <Field
                          type="checkbox"
                          id={g}
                          name="genres"
                          value={g}
                          onChange={handleChange}
                          checked={
                            values.genres ? values.genres.includes(g) : false
                          }
                        />
                        {g}
                      </label>
                    ))}
                  </div>
                )}
                <div className="modal-form-group-error">
                  <ErrorMessage name="genres" />
                </div>
              </div>
            </div>
            <div className="modal-form-group with-left-margin">
              <span className="modal-form-group-header">RUNTIME</span>
              <Field
                className="modal-form-group-input right-column"
                type="number"
                name="runtime"
                onChange={handleChange}
                placeholder="minutes"
                value={values.runtime}
              />
              <div className="modal-form-group-error">
                <ErrorMessage name="runtime" />
              </div>
            </div>
            <div className="modal-form-group">
              <span className="modal-form-group-header">OVERVIEW</span>
              <Field
                component="textarea"
                className="modal-form-overview"
                name="overview"
                onChange={handleChange}
                value={values.overview}
              />
              <div className="modal-form-group-error">
                <ErrorMessage name="overview" />
              </div>
            </div>
            <div className="modal-form-control-buttons">
              <button
                className="modal-form-control-button reset-button"
                type="button"
                onClick={async () => {
                  dispatch(setModalType('none'));
                  dispatch(setMovie(null));
                }}
              >
                RESET
              </button>
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

AddOrEditMovieModalContent.propTypes = {
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
  }),
};

AddOrEditMovieModalContent.defaultProps = {
  movie: null,
};
