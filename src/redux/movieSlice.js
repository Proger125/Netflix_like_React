import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movies: [],
  error: '',
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (moviesGenreFilter, sortField) => {
    if (moviesGenreFilter === 'All') {
      moviesGenreFilter = '';
    }
    return axios
      .get('http://localhost:4000/movies', {
        params: { filter: [moviesGenreFilter], sortBy: sortField },
      })
      .then((response) => response.data.data);
  },
);

/*
export const addMovie = createAsyncThunk('movies/addMovie', async (movie) => {
  return axios
    .post('http://localhost:4000/movies', movie)
    .then((response) => response.data);
});
*/
const movieSlice = createSlice({
  name: 'movie',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.error = '';
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.movies = [];
      state.error = action.error.message;
    });
  },
});

export default movieSlice.reducer;
