import { useEffect } from 'react';
import preparedOptions from '../feature/prepareOptions';
import { IFilterOptions } from '../models.ts';
import {
  changePreparedCharacterList,
  initialCharactersFetch,
} from '../redux/appSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Table from './Table';
import TableInterface from './TableIntarface';

const Characters = () => {
  const { searchQuery, charactersList, filterOptions } = useAppSelector(
    (store) => store.appSlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initialCharactersFetch());
  }, []);

  useEffect(() => {
    const options = preparedOptions(filterOptions);
    if (searchQuery) {
      dispatch(
        changePreparedCharacterList(
          charactersList.filter((character) => {
            const checkCondition = character.name
              .split(' ')
              .join()
              .toLowerCase()
              .includes(searchQuery.split(' ').join().toLowerCase());

            return checkCondition;
          })
        )
      );
    }

    if (Object.values(options).some(checkProperty => checkProperty.length)) {
      console.log(Object.values(options));
    }
  }, [searchQuery, filterOptions, charactersList]);

  return (
    <div className="container">
      <div className="table-app">
        <div className="table-app__container">
          <div className="table-app__heading">Characters</div>
          <TableInterface />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Characters;
