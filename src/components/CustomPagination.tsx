import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { ITEMS_PER_PAGE } from '../constants';
import { Character } from '../models.ts';
import { useAppSelector } from '../redux/hooks';

type Props = {
  paginationUtilities: {
    pageCount: number;
    itemOffset: number;
    setPageCount: React.Dispatch<React.SetStateAction<number>>;
    setItemOffset: React.Dispatch<React.SetStateAction<number>>;
    setCurrentItems: React.Dispatch<React.SetStateAction<Character[] | null>>;
  };
};

const CustomPagination: React.FC<Props> = ({ paginationUtilities }) => {
  const { preparedCharacterList, filterOptions, searchQuery } = useAppSelector(
    (store) => store.appSlice
  );
  const {
    pageCount,
    itemOffset,
    setPageCount,
    setItemOffset,
    setCurrentItems,
  } = paginationUtilities;

  const paginationClassNames = {
    containerClassName: 'pagination__container',
    activeLinkClassName: 'pagination__active',
    nextClassName: 'pagination__item pagination__buttons',
    previousClassName: 'pagination__item pagination__buttons',
    pageLinkClassName: 'pagination__item',
    breakClassName: 'pagination__break',
    disabledClassName: 'pagination__disabled-button',
  };

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

  return (
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
  );
};

export default CustomPagination;
