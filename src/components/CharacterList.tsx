import { ChangeEvent, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ITEMS_PER_PAGE } from '../constants';
import { Character, SortTypes } from '../models.ts';
import { deleteToggleMultiple, sortInitialList } from '../redux/appSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CharacterInList from './CharacterInList';

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
    dispatch(sortInitialList(type))
  }

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
            <div className="list__item-cell list__item-cell--with-sort"
            onClick={() => handleSortClick('name')}
            >
              Name
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6141 9H4.38588C4.04383 9 3.86958 9.41304 4.11483 9.65829L7.72892 13.2724C7.87736 13.4209 8.1226 13.4209 8.2711 13.2724L11.8852 9.65829C12.1304 9.41304 11.9561 9 11.6141 9Z"
                  fill="#5F6569"
                />
                <path
                  d="M4.38593 6.3838H11.6141C11.9562 6.3838 12.1304 5.97076 11.8852 5.72551L8.27109 2.11138C8.12265 1.96295 7.87741 1.96295 7.72891 2.11138L4.11481 5.72551C3.86963 5.97076 4.04388 6.3838 4.38593 6.3838Z"
                  fill="#C6C8C9"
                />
              </svg>
            </div>
            <div className="list__item-cell-combined">
              <div className="list__item-cell list__item-cell--with-sort">
                Avatar
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6141 9H4.38588C4.04383 9 3.86958 9.41304 4.11483 9.65829L7.72892 13.2724C7.87736 13.4209 8.1226 13.4209 8.2711 13.2724L11.8852 9.65829C12.1304 9.41304 11.9561 9 11.6141 9Z"
                    fill="#5F6569"
                  />
                  <path
                    d="M4.38593 6.3838H11.6141C11.9562 6.3838 12.1304 5.97076 11.8852 5.72551L8.27109 2.11138C8.12265 1.96295 7.87741 1.96295 7.72891 2.11138L4.11481 5.72551C3.86963 5.97076 4.04388 6.3838 4.38593 6.3838Z"
                    fill="#C6C8C9"
                  />
                </svg>
              </div>
              <div className="list__item-cell list__item-cell--with-sort" onClick={() => handleSortClick('origin')}>
                Origin
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6141 9H4.38588C4.04383 9 3.86958 9.41304 4.11483 9.65829L7.72892 13.2724C7.87736 13.4209 8.1226 13.4209 8.2711 13.2724L11.8852 9.65829C12.1304 9.41304 11.9561 9 11.6141 9Z"
                    fill="#5F6569"
                  />
                  <path
                    d="M4.38593 6.3838H11.6141C11.9562 6.3838 12.1304 5.97076 11.8852 5.72551L8.27109 2.11138C8.12265 1.96295 7.87741 1.96295 7.72891 2.11138L4.11481 5.72551C3.86963 5.97076 4.04388 6.3838 4.38593 6.3838Z"
                    fill="#C6C8C9"
                  />
                </svg>
              </div>
              <div className="list__item-cell list__item-cell--with-sort" onClick={() => handleSortClick('episode')}>
                Episode
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6141 9H4.38588C4.04383 9 3.86958 9.41304 4.11483 9.65829L7.72892 13.2724C7.87736 13.4209 8.1226 13.4209 8.2711 13.2724L11.8852 9.65829C12.1304 9.41304 11.9561 9 11.6141 9Z"
                    fill="#5F6569"
                  />
                  <path
                    d="M4.38593 6.3838H11.6141C11.9562 6.3838 12.1304 5.97076 11.8852 5.72551L8.27109 2.11138C8.12265 1.96295 7.87741 1.96295 7.72891 2.11138L4.11481 5.72551C3.86963 5.97076 4.04388 6.3838 4.38593 6.3838Z"
                    fill="#C6C8C9"
                  />
                </svg>
              </div>
              <div className="list__item-cell list__item-cell--with-sort" onClick={() => handleSortClick('status')}>
                Status
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6141 9H4.38588C4.04383 9 3.86958 9.41304 4.11483 9.65829L7.72892 13.2724C7.87736 13.4209 8.1226 13.4209 8.2711 13.2724L11.8852 9.65829C12.1304 9.41304 11.9561 9 11.6141 9Z"
                    fill="#5F6569"
                  />
                  <path
                    d="M4.38593 6.3838H11.6141C11.9562 6.3838 12.1304 5.97076 11.8852 5.72551L8.27109 2.11138C8.12265 1.96295 7.87741 1.96295 7.72891 2.11138L4.11481 5.72551C3.86963 5.97076 4.04388 6.3838 4.38593 6.3838Z"
                    fill="#C6C8C9"
                  />
                </svg>
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
