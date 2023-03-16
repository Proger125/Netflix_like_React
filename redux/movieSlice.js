/* eslint camelcase: 0 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';

const initialState = {
  movieNumber: 0,
  genres: [
    'All',
    'Drama',
    'Romance',
    'Animation',
    'Adventure',
    'Family',
    'Comedy',
    'Fantasy',
    'Science Fiction',
    'Action',
  ],
  sortByOptions: ['release_date', 'title', 'runtime', 'budget'],
  movie: {
    poster_path: '',
    title: '',
    vote_average: 0,
    genres: [],
    release_date: '',
    runtime: 0,
    overview: '',
  },
};

export const addMovie = createAsyncThunk('movies/addMovie', async (movie) => {
  return axios
    .post('http://localhost:4000/movies', movie)
    .then((response) => response.data);
});

export const editMovie = createAsyncThunk('movies/editMovie', async (movie) => {
  return axios
    .put('http://localhost:4000/movies', movie)
    .then((response) => response.data);
});

export const deleteMovie = createAsyncThunk(
  'movies/deleteMovie',
  async (movie) => {
    axios
      .delete(`http://localhost:4000/movies/${movie.id}`)
      .then((response) => {
        console.log(response.status);
      });
    return movie.id;
  },
);

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieNumber(state, action) {
      state.movieNumber = action.payload;
    },
    setMovie(state, action) {
      state.movie = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.movie,
      };
    },
  },
});
export const { setMovieNumber, setMovie } = movieSlice.actions;
export default movieSlice.reducer;
