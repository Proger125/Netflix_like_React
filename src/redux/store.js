import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import modalSlice from './modalSlice';

const store = configureStore({
  reducer: {
    movie: movieReducer,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
