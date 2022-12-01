import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../../redux/movieSlice';
import Movie from './Movie';

export default function Movies(props) {
  const { setMovieNumber, moviesGenreFilter, sortField } = props;
  const movie = useSelector((state) => state.movie);
  setMovieNumber(movie.movies.length);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies(moviesGenreFilter, sortField));
  }, [moviesGenreFilter, sortField]);
  return (
    <div className="movies">
      {movie.movies.length ? (
        <>
          {movie.movies.map((m) => (
            <Movie movie={m} key={m.id} />
          ))}
        </>
      ) : null}
    </div>
  );
}

Movies.propTypes = {
  setMovieNumber: PropTypes.func.isRequired,
  moviesGenreFilter: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
};
