import { useEffect, useState } from 'react';
import useGetAllCharacters from '../hooks/useGetAllCharacters';
import { useAppSelector } from '../redux/hooks';
import Table from './Table';
import TableInterface from './TableIntarface';

const Characters = () => {
  const { searchQuery } = useAppSelector((store) => store.appSlice);
  const characters = useGetAllCharacters();
  let preparedCharacters = characters;

  useEffect(() => {
    if (searchQuery) {
      preparedCharacters = preparedCharacters.map((character) => {
        const validNameString = character.name.split(' ').join();
        const checkCondition = validNameString.includes(searchQuery);
        if (checkCondition) {
          return character;
        }
      });
      console.log(preparedCharacters.length);
    }
  }, [searchQuery]);

  return (
    <div className="container">
      <div className="table-app">
        <div className="table-app__container">
          <div className="table-app__heading">Characters</div>
          <TableInterface />
          <Table characters={preparedCharacters} />
        </div>
      </div>
    </div>
  );
};

export default Characters;
