import { API_RNM } from "../constants";
import { Character } from "../models.ts";

const getAllCharacters = async (): Promise<Character[]> => {
  let res = await fetch(`${API_RNM}/character/`);
  let data = await res.json();

  const restOfThepages = await Promise.all(
    Array(data.info.pages - 1)
      .fill(0)
      .map(async (item, index) => {
        const validIteratorIndex = item + index + 2;
        const data = await fetch(
          `${API_RNM}/character/?page=${validIteratorIndex}`
        );
        const { results } = await data.json();

        return results;
      })
  );

  const flattenedData = restOfThepages.reduce((acc, d) => [...acc, ...d], []);

  const result = [...data.results, ...flattenedData];

  const preparedResult = await Promise.all(
    result.map(async (character) => {
      const {name, url} = character.origin;

      if (name === 'unknown') {
        return character;
      }

      const entryData = await fetch(url);
      const entry = await entryData.json();

      character.origin.entry = entry.type;
      character.shouldDelete = false;

      return character;
    })
  );

  return preparedResult;
};

export default getAllCharacters;
