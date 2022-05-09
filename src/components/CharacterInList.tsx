import cutWord from '../feature/cutWord';
import { Character } from '../models.ts';
import { deleteCheckToggler } from '../redux/appSlice';
import { useAppDispatch } from '../redux/hooks';

import classNames from 'classnames';

import StatusIcon from './StatusIcon';

type Props = {
  character: Character;
};

const CharacterInList: React.FC<Props> = ({ character }) => {
  const { name, image, origin, episode, status, isChecked, id, species } =
    character;
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(deleteCheckToggler(id));
  };

  return (
    <li
      className={classNames('list__item', {
        'list__item--background-grey': status === 'Dead',
      })}
    >
      <div className="list__item-cell list__item-cell--checkbox">
        <input
          type="checkbox"
          className="checkbox"
          onChange={handleChange}
          checked={isChecked}
        />
      </div>
      <div className="list__item-cell">
        <div className="list__item-cell-container">
          <div
            className={classNames('list__word', {
              'list__word--dead': status === 'Dead',
            })}
          >
            {cutWord(name)}
          </div>
          <div
            className={classNames('list__word--secondary', {
              'list__word--secondary-dead': status === 'Dead',
            })}
          >
            {cutWord(species)}
          </div>
        </div>
      </div>
      <div className="list__item-cell list__item-cell-combined">
        <div className="list__item-cell">
          <img src={image} alt={name} className="list__image" />
        </div>
        <div className="list__item-cell">
          <div className="list__item-cell-container">
            <div
              className={classNames('list__word', {
                'list__word--unknown-location': origin.name === 'unknown',
              })}
            >
              {cutWord(origin.name)}
            </div>
            <div className="list__word--secondary">
              {origin.entry && cutWord(origin.entry)}
            </div>
          </div>
        </div>
        <div className="list__item-cell">
          <div className="list__item-cell-container">
            {episode.names.slice(0, 2).map((episodeName) => (
              <div
                key={episodeName}
                className={classNames('list__word', 'list__word--episode', {
                  'list__word--dead': status === 'Dead',
                })}
              >
                {cutWord(episodeName)}
              </div>
            ))}
          </div>
        </div>
        <div className="list__item-cell">
          <div className="list__item-cell-container list__item-cell-container--horisontal">
            <StatusIcon status={status} />
            <span
              className={classNames('list__word-status', {
                'list__word-status--unknown': status === 'unknown',
              })}
            >
              {status}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CharacterInList;
