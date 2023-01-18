import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSubmit, useLoaderData, Form } from 'react-router-dom';

import MovieOptions from './MovieOptions';

export default function Movie(props) {
  const [isOpened, setIsOpened] = useState(false);
  const { genreParam, sortBy } = useLoaderData();
  const submit = useSubmit();
  const { movie } = props;
  return (
    <div className="movie" onMouseLeave={() => setIsOpened(false)}>
      <Form
        onClick={(event) => submit(event.currentTarget)}
        role="button"
        tabIndex={0}
        aria-hidden="true"
      >
        <div className="movie-icon">
          <img src={movie.poster_path} alt="" />
        </div>
        <span className="movie-name">{movie.title.substring(0, 30)}</span>
        <span className="movie-creation-date">
          {movie.release_date.substring(0, 4)}
        </span>
        <br />
        <span className="movie-genres">{movie.genres.join(', ')}</span>
        <input type="hidden" name="genre" value={genreParam} />
        <input type="hidden" name="sortBy" value={sortBy} />
        <input type="hidden" name="movieId" value={movie.id} />
      </Form>
      <MovieOptions isOpened={isOpened} setOpened={setIsOpened} movie={movie} />
    </div>
  );
}
Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    budget: PropTypes.number,
    overview: PropTypes.string.isRequired,
    revenue: PropTypes.number,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};

Movie.defaultProps = {
  movie: {
    movieGenres: 'Nice movie',
  },
};
