import React, { useState } from 'react';
import PropTypes from 'prop-types';

const genres = [
  {
    genre: 'Documentary',
  },
  {
    genre: 'Comedy',
  },
  {
    genre: 'Horror',
  },
  {
    genre: 'Crime',
  },
];

export default function AddOrEditMovieModalContent(props) {
  const [isTogglerUp, setIsTogglerUp] = useState(false);

  const { movie } = props;
  let movieName = null;
  let movieReleaseDate = null;
  if (movie != null) {
    movieName = movie.name;
    movieReleaseDate = movie.movieCreationDate;
  }
  let generOptions = null;
  if (isTogglerUp) {
    generOptions = (
      <div className="gener-options">
        {genres.map((genre) => (
          <label className="genre-option-label" htmlFor={genre}>
            <input type="checkbox" id={genre} />
            {genre.genre}
          </label>
        ))}
      </div>
    );
  }
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
            value={movieName}
          />
        </div>
        <div className="modal-form-group with-left-margin">
          <span className="modal-form-group-header">RELEASE DATE</span>
          <input
            className="modal-form-group-input right-column"
            type="date"
            value={movieReleaseDate}
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
            {generOptions}
          </div>
        </div>
        <div className="modal-form-group with-left-margin">
          <span className="modal-form-group-header">RUNTIME</span>
          <input
            className="modal-form-group-input right-column"
            type="text"
            placeholder="minutes"
          />
        </div>
        <div className="modal-form-group">
          <span className="modal-form-group-header">OVERVIEW</span>
          <textarea className="modal-form-overview" />
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
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    movieCreationDate: PropTypes.string.isRequired,
    movieGenres: PropTypes.string,
  }),
};

AddOrEditMovieModalContent.defaultProps = {
  movie: {
    img: 'default.png',
    name: 'Movie name',
    movieCreationDate: '1994-01-01',
    movieGenres: 'Nice movie',
  },
};
