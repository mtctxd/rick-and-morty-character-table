import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface AppState {
  value: number;
}

const initialState: AppState = {
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
