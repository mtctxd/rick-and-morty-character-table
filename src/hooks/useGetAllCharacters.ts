import { useEffect, useState } from 'react';
import getAllCharacters from '../feature/getAllCharacters';
import { Character } from '../models.ts';

const useGetAllCharacters = () => {
  const [resultData, setResultData] = useState<Character[]>([]);

  useEffect(() => {
    getAllCharacters().then((data) => setResultData(data));
  }, []);

  return resultData;
};

export default useGetAllCharacters;
