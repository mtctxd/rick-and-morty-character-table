import { useEffect } from 'react';
import preparedOptions from '../feature/prepareOptions';
import { IFilterOptions } from '../models.ts';
import {
  filterByOptions,
  filterBySearch,
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
    dispatch(filterBySearch());
    dispatch(filterByOptions());
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
