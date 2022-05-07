import { Character } from '../models.ts';

type Props = {
  character: Character;
};

const CharacterInTable: React.FC<Props> = ({ character }) => {
  const { name, image, origin, episode, status } = character;

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{name}</td>
      <td>
        <img src={image} alt={name} />
      </td>
      <td>
        <div>{origin.name}</div>
        {origin.entry && <div>{origin.entry}</div>}
      </td>
      <td>{name}</td>
      <td>{status}</td>
    </tr>
  );
};

export default CharacterInTable;
