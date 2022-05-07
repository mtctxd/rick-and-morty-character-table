import { ChangeEvent } from 'react';
import { deleteToggleMultiple } from '../redux/appSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CharacterInTable from './CharacterInTable';

const Table = () => {
  const { preparedCharacterList } = useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();

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
        {preparedCharacterList.map((characterFromList) => (
          <CharacterInTable
            character={characterFromList}
            key={characterFromList.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
