import { Character } from '../models.ts';
import CharacterInTable from './CharacterInTable';

type Props = {
  characters: Character[];
};

const Table: React.FC<Props> = ({ characters }) => {
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
        {characters.map((characterFromList) => (
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
