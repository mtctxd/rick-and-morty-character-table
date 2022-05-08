import cutWord from '../feature/cutWord';
import { Character } from '../models.ts';
import { deleteCheckToggler } from '../redux/appSlice';
import { useAppDispatch } from '../redux/hooks';
import StatusIcon from './StatusIcon';

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
        <input
          type="checkbox"
          className="checkbox"
          onChange={handleChange}
          checked={shouldDelete}
        />
      </div>
      <div className="list__item-cell">
        <div className="list__item-cell-container">
          <div>{cutWord(name)}</div>
          <div>{cutWord(species)}</div>
        </div>
      </div>
      <div className="list__item-cell list__item-cell-combined">
        <div className="list__item-cell">
          <img src={image} alt={name} className="list__image" />
        </div>
        <div className="list__item-cell">
          <div className="list__item-cell-container">
            <div>{cutWord(origin.name)}</div>
            <div>{origin.entry && cutWord(origin.entry)}</div>
          </div>
        </div>
        <div className="list__item-cell">
          <div className="list__item-cell-container">
            {episode.names.slice(0, 2).map((episodeName) => (
              <div>{cutWord(episodeName)}</div>
            ))}
          </div>
        </div>
        <div className="list__item-cell">
          <div className="list__item-cell-container list__item-cell-container--horisontal">
            <StatusIcon status={status} />
            {status}
          </div>
        </div>
      </div>
    </li>
  );
};

export default CharacterInList;
