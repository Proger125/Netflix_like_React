/* eslint camelcase: 0 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
  modalType: 'none',
  error: '',
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
  },
  extraReducers: (builder) => {
    builder.addCase(editMovie.fulfilled, (state, action) => {
      const {
        id,
        title,
        release_date,
        poster_path,
        genres,
        runtime,
        overview,
      } = action.payload;
      const existingMovie = state.movies.find((movie) => movie.id === id);
      if (existingMovie) {
        existingMovie.title = title;
        existingMovie.release_date = release_date;
        existingMovie.poster_path = poster_path;
        existingMovie.genres = genres;
        existingMovie.runtime = runtime;
        existingMovie.overview = overview;
      }
    });
    builder.addCase(deleteMovie.fulfilled, (state, action) => {
      console.log(action.payload);
      const existingMovieIndex = state.movies.findIndex(
        (movie) => movie.id === action.payload,
      );
      state.movies.splice(existingMovieIndex, 1);
    });
  },
});
export const { setMovieNumber } = movieSlice.actions;
export default movieSlice.reducer;
