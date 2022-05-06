import { useEffect } from 'react';
import isOptionsFiled from '../feature/isOptionsFilled';
import preparedOptions from '../feature/prepareOptions';
import { IFilterOptions, OptionKey } from '../models.ts';
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
  const { searchQuery, charactersList, filterOptions, preparedCharacterList } =
    useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initialCharactersFetch());
  }, []);

  useEffect(() => {
    const options = preparedOptions(filterOptions);

    // dispatchers should be in that order !!!
    dispatch(prepareCharacterList());

    if (isOptionsFiled(options)) {
      Object.entries(options).forEach(([key, value]) => {
       
        const newCharacterList = charactersList
            .map((character) => {
              let optionKey = character.species;

              switch (key) {
                case OptionKey.origin:
                  optionKey = character.origin.name;
                  break;
                case OptionKey.species:
                  optionKey = character.species;
                  break;
                case OptionKey.status:
                  optionKey = character.status;
                  break;
              
                default:
                  break;
              }

              if (value.includes(optionKey)) {
                return character;
              }
            })
            .filter((item) => item !== undefined);

          dispatch(filterByOptions(newCharacterList));
      });
    }
    dispatch(filterBySearch(preparedCharacterList));

    
  }, [searchQuery, filterBySearch, filterOptions]);

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
