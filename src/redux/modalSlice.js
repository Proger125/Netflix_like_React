/* eslint camelcase: 0 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  type: 'none',
};

export const setModalType = createAsyncThunk('modalType', async (modalType) => {
  return modalType;
});

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setModalType.fulfilled, (state, action) => {
      state.type = action.payload;
    });
  },
});

export default modalSlice.reducer;
