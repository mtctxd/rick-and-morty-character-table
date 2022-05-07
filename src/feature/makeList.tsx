import { Character, filterOption } from '../models.ts';
import checkAndAdd from './checkAndAdd';

const makeOptionsList = (charactersList: Character[], selectorName: string) => {
  const listToReturn: filterOption[] = [];
  const flag: {
    [key: string]: string;
  } = {};

  for (let character of charactersList) {
    switch (selectorName) {
      case 'status':
        checkAndAdd(character.status, listToReturn, flag);
        break;
      case 'species':
        checkAndAdd(character.species, listToReturn, flag);
        break;
      case 'origin':
        checkAndAdd(character.origin.name, listToReturn, flag);
        break;
      default:
        break;
    }
  }

  return listToReturn;
};

export default makeOptionsList;
