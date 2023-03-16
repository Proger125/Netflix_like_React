import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Movie from '../../components/main/movie/Movie';
import searchMovies, { getMovieById } from '../api';
import { setMovie, setMovieNumber } from '../../redux/movieSlice';
import Layout from '../../components/Layout';

function App({ pageProps }) {
  const { movies, movie } = pageProps;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovieNumber(movies?.length));
    dispatch(setMovie(movie));
  }, [movies, movie]);

  return (
    <Layout>
      <div className="movies">
        {movies?.length ? (
          <>
            {movies.map((m) => (
              <Movie movie={m} key={m.id} />
            ))}
          </>
        ) : null}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { genre, sortBy, search, movieId } = context.query;
  const movies = await searchMovies(genre, sortBy, search);
  const movie = movieId === undefined ? null : await getMovieById(movieId);
  return {
    props: {
      movies,
      movie,
    },
  };
}

App.propTypes = {
  pageProps: PropTypes.any.isRequired,
};

export default App;
