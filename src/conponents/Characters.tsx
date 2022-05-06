import { useEffect } from 'react';
import {
  changePreparedCharacterList,
  initialCharactersFetch,
} from '../redux/appSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Table from './Table';
import TableInterface from './TableIntarface';

const Characters = () => {
  const { searchQuery, charactersList } = useAppSelector(
    (store) => store.appSlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initialCharactersFetch());
  }, []);

  useEffect(() => {
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
  }, [searchQuery]);

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
