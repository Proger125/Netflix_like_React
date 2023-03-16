/* eslint camelcase: 0 */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  type: 'none',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalType(state, action) {
      state.type = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.modal,
      };
    },
  },
});
export const { setModalType } = modalSlice.actions;
export default modalSlice.reducer;
