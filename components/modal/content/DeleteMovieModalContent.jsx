import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { deleteMovie, setMovie } from '../../../redux/movieSlice';
import { setModalType } from '../../../redux/modalSlice';

export default function DeleteMovieModalContent({ movie }) {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <>
      <span className="modal-header">DELETE MOVIE</span>
      <div className="modal-form">
        <span className="modal-text">
          Are you sure you want to delete this movie
        </span>
        <div className="modal-form-control-buttons">
          <button
            className="modal-form-control-button submit-button"
            type="button"
            onClick={() => {
              dispatch(setModalType('none'));
              dispatch(setMovie(null));
              dispatch(deleteMovie(movie));
              router.reload();
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
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
