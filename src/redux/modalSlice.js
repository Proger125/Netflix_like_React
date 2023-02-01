/* eslint camelcase: 0 */
import { createSlice } from '@reduxjs/toolkit';

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
});
export const { setModalType } = modalSlice.actions;
export default modalSlice.reducer;
