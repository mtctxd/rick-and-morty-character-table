import { Character, IFilterOptions, OptionKey } from '../models.ts';

const getOptions = (charactersList: Character[], propertyName: OptionKey) => {
  //   const infoToPass = charactersList.map((character) => {
  //     let propertyValue = character[propertyName];

  //     if (propertyName === OptionKey.origin) {
  //       propertyValue = character.origin.name;
  //     }

  //     return propertyValue;
  //   });

  //   return infoToPass
  //     .filter((property, index, array) => array.indexOf(property) === index)
  //     .map((propertyValue) => ({
  //       name: propertyValue,
  //       checked: false,
  //     }));
  let infoToPass = {};

  charactersList.forEach((character) => {
    let propertyValue = character[propertyName];

    if (propertyName === OptionKey.origin) {
      propertyValue = character.origin.name;
    }

    infoToPass = {
        ...infoToPass,
        [propertyValue as string]: false,
    };
  });

  return infoToPass;
};

export default getOptions;
