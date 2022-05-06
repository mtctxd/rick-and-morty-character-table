import { useAppSelector } from '../redux/hooks';
import CharacterInTable from './CharacterInTable';

const Table = () => {
  const { preparedCharacterList } = useAppSelector((store) => store.appSlice);

  return (
    <table className="table-app-table table">
      <thead className="table__heading">
        <tr>
          <th>
            <input type="checkbox" />
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
