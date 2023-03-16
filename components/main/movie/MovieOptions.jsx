import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setModalType } from '../../../redux/modalSlice';

export default function MovieOptions(props) {
  let options;
  const router = useRouter();
  const { movie, isOpened, setOpened } = props;
  const dispatch = useDispatch();
  const { genre, sortBy } = router.query;
  if (isOpened) {
    options = (
      <form className="movie-options-opened">
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
            event.currentTarget.parentElement.submit();
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
            event.currentTarget.parentElement.submit();
            await dispatch(setModalType('deleteMovie'));
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
        >
          Delete
        </span>
        <input type="hidden" name="genre" value={genre} />
        <input type="hidden" name="sortBy" value={sortBy} />
        <input type="hidden" name="movieId" value={movie.id} />
      </form>
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
