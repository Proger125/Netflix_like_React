import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Movie from './Movie';
import { setMovieNumber } from '../../../redux/movieSlice';

export default function Movies() {
  const { movies } = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovieNumber(movies.length));
  }, [movies]);
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
