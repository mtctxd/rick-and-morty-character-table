import { useEffect, useState } from 'react';
import { API_RNM } from '../constants';
import { Character, ICharactersFromApi } from '../models.ts';
import { useGetCharactersQuery } from '../redux/rnmApi';

async function fetchChar(): Promise<Character[]> {
  let res = await fetch(`${API_RNM}/character/`);
  let data = await res.json();

  const restOfThepages = await Promise.all(
    Array(data.info.pages - 1)
      .fill(0)
      .map((i) =>
        fetch(`${API_RNM}/character/?page=${i + 2}`)
          .then((res) => res.json())
          .then((d) => d.results)
      )
  );

  const flattenedData = restOfThepages.reduce((acc, d) => [...acc, ...d], []);
  return [...data.results, ...flattenedData];
}

const useGetAllCharacters = () => {
  const [resultData, setResultData] = useState<Character[]>([]);

  useEffect(() => {
    fetchChar().then(data => setResultData(data));
  }, []);

  return resultData;
};

export default useGetAllCharacters;
