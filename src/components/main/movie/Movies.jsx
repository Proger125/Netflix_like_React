import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../../redux/movieSlice';
import Movie from './Movie';

export default function Movies() {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies(movie.movieFilter, movie.sortField));
  }, [movie.movieFilter, movie.sortField]);
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
