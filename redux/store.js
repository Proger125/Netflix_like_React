import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import movieSlice from './movieSlice';
import modalSlice from './modalSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      movie: movieSlice,
      modal: modalSlice,
    },
    devTools: true,
  });
export default createWrapper(makeStore);
