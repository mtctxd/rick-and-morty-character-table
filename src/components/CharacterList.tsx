import { ChangeEvent, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ITEMS_PER_PAGE } from '../constants';
import { Character, SortTypes } from '../models.ts';
import { deleteToggleMultiple, sortInitialList } from '../redux/appSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CharacterInList from './CharacterInList';
import SortSVGIcon from './SortSVGIcon';

const Table = () => {
  const {
    preparedCharacterList,
    filterOptions,
    searchQuery,
    headerCheckboxStatus,
  } = useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();

  const [currentItems, setCurrentItems] = useState(null);
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

  const handleChange = () => {
    dispatch(deleteToggleMultiple({ currentItems }));
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

  const handleSortClick = (type: SortTypes) => {
    dispatch(sortInitialList(type));
  };

  return (
    <>
      <div className="list">
        <ul className="list__container">
          <li className="list__item list__item--heading">
            <div className="list__item-cell list__item-cell--checkbox">
              <input
                type="checkbox"
                className="checkbox "
                onChange={handleChange}
                checked={headerCheckboxStatus}
              />
            </div>
            <div
              className="list__item-cell list__item-cell--with-sort"
              onClick={() => handleSortClick('name')}
            >
              Name
              <SortSVGIcon sortName="name" />
            </div>
            <div className="list__item-cell-combined">
              <div
                className="list__item-cell list__item-cell--with-sort"
                onClick={() => handleSortClick('location')}
              >
                Avatar / Location
                <SortSVGIcon sortName="location" />
              </div>
              <div
                className="list__item-cell list__item-cell--with-sort"
                onClick={() => handleSortClick('origin')}
              >
                Origin
                <SortSVGIcon sortName="origin" />
              </div>
              <div
                className="list__item-cell list__item-cell--with-sort"
                onClick={() => handleSortClick('episode')}
              >
                Episode
                <SortSVGIcon sortName="episode" />
              </div>
              <div
                className="list__item-cell list__item-cell--with-sort"
                onClick={() => handleSortClick('status')}
              >
                Status
                <SortSVGIcon sortName="status" />
              </div>
            </div>
          </li>
          {currentItems &&
            (currentItems as Character[]).map((characterFromList) => (
              <CharacterInList
                character={characterFromList}
                key={characterFromList.id}
              />
            ))}
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

export default Table;
