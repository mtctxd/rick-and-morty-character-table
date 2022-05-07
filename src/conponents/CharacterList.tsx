import { ChangeEvent, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ITEMS_PER_PAGE } from '../constants';
import { Character } from '../models.ts';
import { deleteToggleMultiple } from '../redux/appSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CharacterInTable from './CharacterInTable';

const Table = () => {
  const { preparedCharacterList } = useAppSelector((store) => store.appSlice);
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
  }, [itemOffset, ITEMS_PER_PAGE, preparedCharacterList]);

  const handlePageClick = (event: any) => {
    const newOffset =
      (event.selected * ITEMS_PER_PAGE) % preparedCharacterList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(deleteToggleMultiple(event.target.checked));
    console.log(event.target.checked);
  };

  return (
    <table className="table-app-table table">
      <thead className="table__heading">
        <tr>
          <th>
            <input type="checkbox" onChange={handleChange} />
          </th>
          <th>Name</th>
          <th>Avatar</th>
          <th>Origin</th>
          <th>Epizod</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {currentItems &&
          (currentItems as Character[]).map((characterFromList) => (
            <CharacterInTable
              character={characterFromList}
              key={characterFromList.id}
            />
          ))}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={() => null}
        />
      </tbody>
    </table>
  );
};

export default Table;
