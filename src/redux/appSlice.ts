import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getAllCharacters from '../feature/getAllCharacters';
import getOptions from '../feature/getOptions';
import isOptionsFiled from '../feature/isOptionsFilled';
import preparedOptions from '../feature/prepareOptions';
import { Character, IAppState, OptionKey } from '../models.ts';
import { RootState } from './store';

const initialState: IAppState = {
  charactersList: [],
  preparedCharacterList: [],
  searchQuery: '',
  filterOptions: {
    [OptionKey.origin]: {},
    [OptionKey.species]: {},
    [OptionKey.status]: {},
  },
};

export const initialCharactersFetch = createAsyncThunk(
  'app/initialCharactersFetch',
  getAllCharacters
);

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    prepareCharacterList: (state) => {
      state.preparedCharacterList = state.charactersList;
    },
    filterBySearch: (state, action) => {
      if (state.searchQuery) {
        state.preparedCharacterList = (action.payload as Character[]).filter(
          (character) => {
            const checkCondition = character.name
              .split(' ')
              .join()
              .toLowerCase()
              .includes(state.searchQuery.split(' ').join().toLowerCase());

            return checkCondition;
          }
        );
      }
    },
    filterByOptions: (state, action) => {
      state.preparedCharacterList = action.payload;
    },
    changeSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
    toggleOption: (state, action) => {
      const { name, status, propertyName } = action.payload;

      state.filterOptions = {
        ...state.filterOptions,
        [propertyName]: {
          ...state.filterOptions[propertyName],
          [name]: !status,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initialCharactersFetch.fulfilled, (state, { payload }) => {
      state.charactersList = payload;
      state.preparedCharacterList = payload;
      state.filterOptions.species = getOptions(payload, OptionKey.species);
      state.filterOptions.origin = getOptions(payload, OptionKey.origin);
      state.filterOptions.status = getOptions(payload, OptionKey.status);
    });
  },
});

export const {
  prepareCharacterList,
  changeSearchQuery,
  filterBySearch,
  toggleOption,
  filterByOptions,
} = appSlice.actions;

// should i use it???
export const selectApp = (state: RootState) => state.appSlice;

export default appSlice.reducer;
