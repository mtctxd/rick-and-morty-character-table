import { useEffect } from 'react';
import {
  filterByOptions,
  filterBySearch,
  initialCharactersFetch,
  prepareCharacterList,
} from '../redux/appSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import List from './CharacterList';
import ListInterface from './ListInterface';

const Characters = () => {
  const { searchQuery, charactersList, filterOptions } = useAppSelector(
    (store) => store.appSlice
  );
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
      <div className="list-app">
        <div className="list-app__container">
          <div className="list-app__heading">Characters</div>
          <ListInterface />
          <List />
        </div>
      </div>
    </div>
  );
};

export default Characters;
