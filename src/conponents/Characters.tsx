import { useEffect } from 'react';
import {
  filterByOptions,
  filterBySearch,
  initialCharactersFetch,
  prepareCharacterList,
} from '../redux/appSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Table from './Table';
import TableInterface from './TableIntarface';

const Characters = () => {
  const { searchQuery, charactersList, filterOptions } =
    useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initialCharactersFetch());
  }, []);

  useEffect(() => {
    // dispatchers should be in that order !!!
    dispatch(prepareCharacterList());
    dispatch(filterByOptions());
    dispatch(filterBySearch());
  }, [searchQuery, filterBySearch, filterOptions, charactersList]);

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
