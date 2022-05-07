import { ChangeEvent } from 'react';
import { Character } from '../models.ts';
import { deleteCheckToggler } from '../redux/appSlice';
import { useAppDispatch } from '../redux/hooks';

type Props = {
  character: Character;
};

const CharacterInTable: React.FC<Props> = ({ character }) => {
  const { name, image, origin, episode, status, shouldDelete, id } = character;
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(deleteCheckToggler(id));
  };

  return (
    <tr>
      <td>
        <input type="checkbox" checked={shouldDelete} onChange={handleChange} />
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
