import { IAppState, SortTypes } from '../models.ts';

// here is big mistake i know about

const manageSort = (state: IAppState, payload: SortTypes) => {
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
        state.sortTypes.origin.isReversed = !state.sortTypes.origin.isReversed;
      } else {
        state.charactersList.sort((character, comparsionCharacter) =>
          character.origin.name > comparsionCharacter.origin.name ? 1 : -1
        );
        state.sortTypes.origin.isReversed = !state.sortTypes.origin.isReversed;
      }
      break;
    case 'episode':
      if (state.sortTypes.episode.isReversed) {
        state.charactersList.sort((character, comparsionCharacter) =>
          character.episode.names[0] > comparsionCharacter.episode.names[0]
            ? -1
            : 1
        );
        state.sortTypes.episode.isReversed =
          !state.sortTypes.episode.isReversed;
      } else {
        state.charactersList.sort((character, comparsionCharacter) =>
          character.episode.names[0] > comparsionCharacter.episode.names[0]
            ? 1
            : -1
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
        state.sortTypes.status.isReversed = !state.sortTypes.status.isReversed;
      } else {
        state.charactersList.sort((character, comparsionCharacter) =>
          character.status > comparsionCharacter.status ? 1 : -1
        );
        state.sortTypes.status.isReversed = !state.sortTypes.status.isReversed;
      }
      break;
    case 'location':
      if (state.sortTypes.location.isReversed) {
        state.charactersList.sort((character, comparsionCharacter) =>
          character.location.name > comparsionCharacter.location.name ? -1 : 1
        );
        state.sortTypes.location.isReversed = !state.sortTypes.location.isReversed;
      } else {
        state.charactersList.sort((character, comparsionCharacter) =>
          character.location.name > comparsionCharacter.location.name ? 1 : -1
        );
        state.sortTypes.location.isReversed = !state.sortTypes.location.isReversed;
      }
      break;

    default:
      break;
  }
};

export default manageSort;
