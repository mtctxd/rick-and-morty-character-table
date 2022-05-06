import { Character, IFilterOptions } from '../models.ts';

const getOptions = (
  charactersList: Character[],
  propertyName: keyof IFilterOptions
) => {
  const infoToPass = charactersList.map((character) => {
    let propertyValue = character[propertyName];

    if (propertyName === 'origin') {
      propertyValue = character.origin.name;
    }

    return propertyValue;
  });

  return infoToPass.filter(
    (property, index, array) => array.indexOf(property) === index
  );
};

export default getOptions;