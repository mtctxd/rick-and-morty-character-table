import { createSlice } from '@reduxjs/toolkit';
import { IAppState } from '../models.ts';
import { RootState } from './store';

const initialState: IAppState = {
  value: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = appSlice.actions;

export const selectApp = (state: RootState) => state.appSlice;

export default appSlice.reducer;
