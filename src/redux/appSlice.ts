import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import getAllCharacters from '../feature/getAllCharacters';
import { Character, IAppState } from '../models.ts';
import { RootState } from './store';

const initialState: IAppState = {
  charactersList: [],
  preparedCharacterList: [],
  searchQuery: '',
  filterOptions: {
    origin: '',
    species: '',
    status: '',
  },
  headerCheckboxStatus: false,
  sortTypes: {
    name: {
      isReversed: false,
    },
    origin: {
      isReversed: false,
    },
    status: {
      isReversed: false,
    },
    episode: {
      isReversed: false,
    },
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
    filterBySearch: (state) => {
      if (state.searchQuery) {
        state.preparedCharacterList = state.preparedCharacterList.filter(
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
    filterByOptions: (state) => {
      Object.entries(state.filterOptions).map(([key, value]) => {
        if (value) {
          switch (key) {
            case 'species':
              state.preparedCharacterList = state.preparedCharacterList.filter(
                (character) => character.species === value
              );
              break;
            case 'origin':
              state.preparedCharacterList = state.preparedCharacterList.filter(
                (character) => character.origin.name === value
              );
              break;
            case 'status':
              state.preparedCharacterList = state.preparedCharacterList.filter(
                (character) => character.status === value
              );
              break;

            default:
              break;
          }
        }
      });
    },
    changeSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
    changeFilterOptions: (state, { payload }) => {
      const { event, selectorName } = payload;

      switch (selectorName) {
        case 'species':
          if (event?.value) {
            state.filterOptions.species = event.value;
            break;
          }
          state.filterOptions.species = '';
          break;
        case 'origin':
          if (event?.value) {
            state.filterOptions.origin = event.value;
            break;
          }
          state.filterOptions.origin = '';
          break;
        case 'status':
          if (event?.value) {
            state.filterOptions.status = event.value;
            break;
          }
          state.filterOptions.status = '';
          break;

        default:
          break;
      }
    },
    deleteCheckToggler: (state, { payload }) => {
      state.charactersList.map((character) => {
        if (character.id === payload) {
          character.isChecked = !character.isChecked;
        }

        return character;
      });
    },
    deleteToggleMultiple: (state, { payload }) => {
      let { currentItems } = payload;
      state.headerCheckboxStatus = !state.headerCheckboxStatus;

      currentItems.forEach((item: Character) => {
        state.charactersList.map((character) => {
          if (character.id === item.id) {
            character.isChecked = state.headerCheckboxStatus;
          }

          return character;
        });
      });
    },
    deleteSelectedCharacters: (state) => ({
      ...state,
      charactersList: state.charactersList.filter(
        (character) => !character.isChecked
      ),
      headerCheckboxStatus: false,
    }),
    sortInitialList: (state, { payload }) => {
      switch (payload) {
        case 'name':
          if (state.sortTypes.name.isReversed) {
            state.charactersList.sort((character, comparsionCharacter) =>
              character.name > comparsionCharacter.name ? -1 : 1
            );
            state.sortTypes.name.isReversed = !state.sortTypes.name.isReversed;
          } else {
            state.charactersList.sort((character, comparsionCharacter) =>
              character.name > comparsionCharacter.name ? 1 : -1
            );
            state.sortTypes.name.isReversed = !state.sortTypes.name.isReversed;
          }
          break;
        case 'origin':
          if (state.sortTypes.origin.isReversed) {
            state.charactersList.sort((character, comparsionCharacter) =>
              character.origin.name > comparsionCharacter.origin.name ? -1 : 1
            );
            state.sortTypes.origin.isReversed =
              !state.sortTypes.origin.isReversed;
          } else {
            state.charactersList.sort((character, comparsionCharacter) =>
              character.origin.name > comparsionCharacter.origin.name ? 1 : -1
            );
            state.sortTypes.origin.isReversed =
              !state.sortTypes.origin.isReversed;
          }
          break;
        case 'episode':
          if (state.sortTypes.episode.isReversed) {
            state.charactersList.sort((character, comparsionCharacter) =>
              character.episode.names[0] > comparsionCharacter.episode.names[0] ? -1 : 1
            );
            state.sortTypes.episode.isReversed =
              !state.sortTypes.episode.isReversed;
          } else {
            state.charactersList.sort((character, comparsionCharacter) =>
              character.episode.names[0] > comparsionCharacter.episode.names[0] ? 1 : -1
            );
            state.sortTypes.episode.isReversed =
              !state.sortTypes.episode.isReversed;
          }
          break;
          case 'status':
          if (state.sortTypes.status.isReversed) {
            state.charactersList.sort((character, comparsionCharacter) =>
              character.status > comparsionCharacter.status ? -1 : 1
            );
            state.sortTypes.status.isReversed =
              !state.sortTypes.status.isReversed;
          } else {
            state.charactersList.sort((character, comparsionCharacter) =>
              character.status > comparsionCharacter.status ? 1 : -1
            );
            state.sortTypes.status.isReversed =
              !state.sortTypes.status.isReversed;
          }
          break;

        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initialCharactersFetch.fulfilled, (state, { payload }) => {
      state.charactersList = payload;
      state.preparedCharacterList = payload;
    });
  },
});

export const {
  prepareCharacterList,
  changeSearchQuery,
  filterBySearch,
  changeFilterOptions,
  filterByOptions,
  deleteCheckToggler,
  deleteToggleMultiple,
  deleteSelectedCharacters,
  sortInitialList,
} = appSlice.actions;

// should i use it???
export const selectApp = (state: RootState) => state.appSlice;

export default appSlice.reducer;
