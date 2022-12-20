import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../../redux/movieSlice';
import Movie from './Movie';

export default function Movies() {
  const { movies, movieFilter, sortField } = useSelector(
    (state) => state.movie,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies({ movieFilter, sortField }));
  }, [movieFilter, sortField]);
  return (
    <div className="movies">
      {movies.length ? (
        <>
          {movies.map((m) => (
            <Movie movie={m} key={m.id} />
          ))}
        </>
      ) : null}
    </div>
  );
}
