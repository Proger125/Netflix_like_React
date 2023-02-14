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
});
export const { setMovieNumber } = movieSlice.actions;
export default movieSlice.reducer;
