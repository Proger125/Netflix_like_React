/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import reducer, {
  addMovie,
  deleteMovie,
  editMovie,
  setMovieNumber,
} from './movieSlice';

describe('Movie slice tests', () => {
  test('should set movie number', () => {
    const previousState = { movieNumber: 0 };
    expect(reducer(previousState, setMovieNumber(10))).toEqual({
      movieNumber: 10,
    });
  });

  test('should add movie', async () => {
    const movieToAdd = {
      title: 'Test Movie',
    };
    const postSpy = jest
      .spyOn(axios, 'post')
      .mockResolvedValueOnce({ data: { id: 1 } });
    const store = configureStore({
      reducer(state, action) {
        switch (action.type) {
          case 'movies/addMovie/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(addMovie(movieToAdd));
    expect(postSpy).toBeCalledWith('http://localhost:4000/movies', movieToAdd);
    const state = store.getState();
    expect(state).toEqual({ id: 1 });
  });

  test('should edit movie', async () => {
    const movieToEdit = {
      id: 1,
      title: 'Test Movie',
    };
    const putSpy = jest
      .spyOn(axios, 'put')
      .mockResolvedValueOnce({ data: { id: 1, title: 'Test Movie' } });
    const store = configureStore({
      reducer(state, action) {
        switch (action.type) {
          case 'movies/editMovie/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(editMovie(movieToEdit));
    expect(putSpy).toBeCalledWith('http://localhost:4000/movies', movieToEdit);
    const state = store.getState();
    expect(state).toEqual(movieToEdit);
  });
  test('should delete movie', async () => {
    const movieToDelete = {
      id: 1,
    };
    const deleteSpy = jest
      .spyOn(axios, 'delete')
      .mockResolvedValueOnce({ data: { message: 'deleted' } });
    const store = configureStore({
      reducer(state, action) {
        switch (action.type) {
          case 'movies/deleteMovie/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(deleteMovie(movieToDelete));
    expect(deleteSpy).toBeCalledWith('http://localhost:4000/movies/1');
    const state = store.getState();
    expect(state).toEqual(1);
  });
});
