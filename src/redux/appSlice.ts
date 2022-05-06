import { createSlice } from '@reduxjs/toolkit';
import { IAppState } from '../models.ts';
import { RootState } from './store';

const initialState: IAppState = {
  searchQuery: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeSearchQuery: (state, { payload }) => {
        state.searchQuery = payload;
    },
  },
});

export const { changeSearchQuery } = appSlice.actions;

export const selectApp = (state: RootState) => state.appSlice;

export default appSlice.reducer;
