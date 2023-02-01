import React from 'react';
import { useDispatch } from 'react-redux';
import { useSubmit, useLoaderData, Form } from 'react-router-dom';
import { setModalType } from '../../../redux/modalSlice';

export default function MovieOptions(props) {
  let options;
  const { movie, isOpened, setOpened } = props;
  const dispatch = useDispatch();
  const submit = useSubmit();
  const { genreParam, sortBy } = useLoaderData();
  if (isOpened) {
    options = (
      <Form className="movie-options-opened">
        <span
          className="movie-options-close-button"
          onClick={() => {
            setOpened(false);
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          &times;
        </span>
        <span
          className="movie-options-option"
          onClick={async (event) => {
            submit(event.currentTarget.parentElement);
            await dispatch(setModalType('editMovie'));
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          Edit
        </span>
        <span
          className="movie-options-option"
          onClick={async (event) => {
            submit(event.currentTarget.parentElement);
            await dispatch(setModalType('deleteMovie'));
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          Delete
        </span>
        <input type="hidden" name="genre" value={genreParam} />
        <input type="hidden" name="sortBy" value={sortBy} />
        <input type="hidden" name="movieId" value={movie.id} />
      </Form>
    );
  } else {
    options = (
      <div
        className="movie-options-closed"
        onClick={() => setOpened(true)}
        role="button"
        tabIndex={0}
        aria-hidden="true"
      >
        <div className="movie-options-circle" />
        <div className="movie-options-circle" />
        <div className="movie-options-circle" />
      </div>
    );
  }
  return options;
}
