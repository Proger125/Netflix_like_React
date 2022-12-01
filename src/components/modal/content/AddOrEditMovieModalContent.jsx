import React, { useState } from 'react';
import PropTypes from 'prop-types';

const genres = [
  'Drama',
  'Romance',
  'Animation',
  'Adventure',
  'Family',
  'Comdedy',
  'Fantasy',
  'Science Fiction',
  'Action',
];

export default function AddOrEditMovieModalContent(props) {
  const [isTogglerUp, setIsTogglerUp] = useState(false);

  const { movie } = props;
  return (
    <>
      <span className="modal-header">ADD MOVIE</span>
      <form className="modal-form">
        <div className="modal-form-group">
          <span className="modal-form-group-header">TITLE</span>
          <input
            className="modal-form-group-input left-column"
            type="text"
            placeholder="Film Title"
            value={movie ? movie.title : null}
          />
        </div>
        <div className="modal-form-group with-left-margin">
          <span className="modal-form-group-header">RELEASE DATE</span>
          <input
            className="modal-form-group-input right-column"
            type="date"
            value={movie ? movie.release_date : null}
          />
        </div>
        <div className="modal-form-group">
          <span className="modal-form-group-header">MOVIE URL</span>
          <input
            className="modal-form-group-input left-column"
            type="text"
            placeholder="https://"
          />
        </div>
        <div className="modal-form-group with-left-margin">
          <span className="modal-form-group-header">RATING</span>
          <input
            className="modal-form-group-input right-column"
            type="text"
            placeholder="7.8"
            value={movie ? movie.vote_average : null}
          />
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
                {genres.map((genre) => (
                  <label className="genre-option-label" htmlFor={genre}>
                    <input
                      type="checkbox"
                      id={genre}
                      checked={
                        movie.genres == null
                          ? false
                          : movie.genres.includes(genre)
                      }
                    />
                    {genre}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="modal-form-group with-left-margin">
          <span className="modal-form-group-header">RUNTIME</span>
          <input
            className="modal-form-group-input right-column"
            type="text"
            placeholder="minutes"
            value={movie ? movie.runtime : null}
          />
        </div>
        <div className="modal-form-group">
          <span className="modal-form-group-header">OVERVIEW</span>
          <textarea
            className="modal-form-overview"
            value={movie ? movie.overview : null}
          />
        </div>
        <div className="modal-form-control-buttons">
          <button
            className="modal-form-control-button reset-button"
            type="submit"
          >
            RESET
          </button>
          <button
            className="modal-form-control-button submit-button"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}

AddOrEditMovieModalContent.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    budget: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    revenue: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};

AddOrEditMovieModalContent.defaultProps = {
  movie: {
    poster_path: 'default.png',
    title: 'Movie name',
    release_date: '1994-01-01',
  },
};
