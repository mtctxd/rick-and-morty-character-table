import { useAppSelector } from '../redux/hooks';

import ListInterfaceOption from './ListInterfaceOption';
import ListInterfaceRemove from './ListInterfaceRemove';
import ListInterfaceSearch from './ListInterfaceSearch';
import ListInterfaceStatus from './ListInterfaceStatus';

const ListInterface = () => {
  const { charactersList } = useAppSelector((store) => store.appSlice);

  const checkedCharacters = charactersList.filter(
    (character) => character.isChecked
  );

  return (
    <div className="list-app__interface interface">
      <ListInterfaceSearch />
      <div className="interface__options">
        <ListInterfaceOption selectorName={'species'} />
        <ListInterfaceOption selectorName={'origin'} />
        <ListInterfaceOption selectorName={'status'} />
      </div>
      <div className="interface__actions">
        {checkedCharacters.length === 1 && <ListInterfaceStatus checkedCharacter={checkedCharacters[0]}/>}
        <ListInterfaceRemove />
      </div>
    </div>
  );
};

export default ListInterface;
