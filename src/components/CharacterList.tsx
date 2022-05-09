import { useState } from 'react';

import { EMPTY_CHARACTER, LOADER_CHARACTER } from '../constants';
import { Character } from '../models.ts';
import { useAppSelector } from '../redux/hooks';

import CharacterInList from './CharacterInList';
import CharacterListHeading from './CharacterListHeading';
import CustomPagination from './CustomPagination';

const CharacterList = () => {
  const { charactersList } = useAppSelector((store) => store.appSlice);

  const [currentItems, setCurrentItems] = useState<Character[] | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const paginationUtilities = {
    pageCount,
    itemOffset,
    setPageCount,
    setItemOffset,
    setCurrentItems,
  };

  return (
    <>
      <div className="list">
        <ul className="list__container">
          <CharacterListHeading currentItems={currentItems} />
          {currentItems &&
          currentItems.length !== 0 &&
          charactersList.length !== 0 ? (
            (currentItems as Character[]).map((characterFromList) => (
              <CharacterInList
                character={characterFromList}
                key={characterFromList.id}
              />
            ))
          ) : charactersList && charactersList.length === 0 ? (
            <CharacterInList character={LOADER_CHARACTER} />
          ) : (
            <CharacterInList character={EMPTY_CHARACTER} />
          )}
        </ul>
      </div>
      <CustomPagination paginationUtilities={paginationUtilities} />
    </>
  );
};

export default CharacterList;
