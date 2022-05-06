import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getAllCharacters from '../feature/getAllCharacters';
import { IAppState } from '../models.ts';
import { RootState } from './store';

const initialState: IAppState = {
  charactersList: [],
  preparedCharacterList: [],
  searchQuery: '',
};

export const initialCharactersFetch = createAsyncThunk(
  'app/initialCharactersFetch',
  getAllCharacters
);

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changePreparedCharacterList: (state, { payload }) => {
      state.preparedCharacterList = payload;
    },
    changeSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initialCharactersFetch.fulfilled, (state, { payload }) => {
      state.charactersList = payload;
      state.preparedCharacterList = payload;
    });
  },
});

export const { changeSearchQuery, changePreparedCharacterList } =
  appSlice.actions;

// should i use it???
export const selectApp = (state: RootState) => state.appSlice;

export default appSlice.reducer;
