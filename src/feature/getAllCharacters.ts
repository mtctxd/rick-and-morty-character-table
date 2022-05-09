import { API_RNM } from '../constants';
import { Character } from '../models.ts';

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
      const { origin, episode, location } = character;

      if (origin.name !== 'unknown') {
        const entryData = await fetch(origin.url);
        const entry = await entryData.json();
        character.origin.entry = entry.type;
      }

      const episodeNames = await Promise.all(
        episode.map(async (episodeUrl: string) => {
          const episodeData = await fetch(episodeUrl);
          const episodeJson = await episodeData.json();

          return episodeJson.name;
        })
      );

      if (location.url) {
        const locationTypeData = await fetch(location.url);
        const locationData = await locationTypeData.json();

        character.location.type = locationData.type;
      }

      character.shouldDelete = false;
      character.episode = {
        url: episode,
        names: episodeNames,
      };

      return character;
    })
  );

  return preparedResult;
};

export default getAllCharacters;
