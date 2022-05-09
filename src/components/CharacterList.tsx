import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { ITEMS_PER_PAGE, LOADER_CHARACTER } from '../constants';
import { Character } from '../models.ts';
import { useAppSelector } from '../redux/hooks';

import CharacterInList from './CharacterInList';
import CharacterListHeading from './CharacterListHeading';

const CharacterList = () => {
  const { preparedCharacterList, filterOptions, searchQuery } = useAppSelector(
    (store) => store.appSlice
  );

  const [currentItems, setCurrentItems] = useState<Character[] | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setCurrentItems(
      (preparedCharacterList as any).slice(itemOffset, endOffset)
    );
    setPageCount(Math.ceil(preparedCharacterList.length / ITEMS_PER_PAGE));
  }, [
    itemOffset,
    ITEMS_PER_PAGE,
    preparedCharacterList,
    searchQuery,
    filterOptions,
  ]);

  const handlePageClick = (event: any) => {
    const newOffset =
      (event.selected * ITEMS_PER_PAGE) % preparedCharacterList.length;
    setItemOffset(newOffset);
  };

  const paginationClassNames = {
    containerClassName: 'pagination__container',
    activeLinkClassName: 'pagination__active',
    nextClassName: 'pagination__item pagination__buttons',
    previousClassName: 'pagination__item pagination__buttons',
    pageLinkClassName: 'pagination__item',
    breakClassName: 'pagination__break',
    disabledClassName: 'pagination__disabled-button',
  };

  return (
    <>
      <div className="list">
        <ul className="list__container">
          <CharacterListHeading currentItems={currentItems} />
          {currentItems && currentItems.length !== 0 ? (
            (currentItems as Character[]).map((characterFromList) => (
              <CharacterInList
                character={characterFromList}
                key={characterFromList.id}
              />
            ))
          ) : (
            <CharacterInList character={LOADER_CHARACTER} />
          )}
        </ul>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="&#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="&#60;"
        renderOnZeroPageCount={() => null}
        {...paginationClassNames}
      />
    </>
  );
};

export default CharacterList;
