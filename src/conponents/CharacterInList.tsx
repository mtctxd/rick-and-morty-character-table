import { Character } from '../models.ts';
import { deleteCheckToggler } from '../redux/appSlice';
import { useAppDispatch } from '../redux/hooks';

type Props = {
  character: Character;
};

const CharacterInList: React.FC<Props> = ({ character }) => {
  const { name, image, origin, episode, status, shouldDelete, id, species } =
    character;
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(deleteCheckToggler(id));
  };

  return (
    <li className="list__item">
      <div className="list__item-cell list__item-cell--checkbox">
        <input type="checkbox" className="checkbox " onChange={handleChange} />
      </div>
      <div className="list__item-cell">
        <div className="list__item-cell-container">
          <div>{name}</div>
          <div>{species}</div>
        </div>
      </div>
      <div className="list__item-cell">
        <img src={image} alt={name} className="list__image" />
      </div>
      <div className="list__item-cell">
        <div className="list__item-cell-container">
          <div>{origin.name}</div>
          <div>{origin.entry}</div>
        </div>
      </div>
      <div className="list__item-cell">{status}</div>
      <div className="list__item-cell">{status}</div>
    </li>
  );
};

export default CharacterInList;
