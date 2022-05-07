import ListInterfaceOption from './ListInterfaceOption';
import ListInterfaceRemove from './ListInterfaceRemove';
import ListInterfaceSearch from './ListInterfaceSearch';

const ListInterface = () => {
  return (
    <div className="list-app__interface interface">
      <ListInterfaceSearch />
      <div className="interface__options">
        <ListInterfaceOption selectorName={'species'}/>
        <ListInterfaceOption selectorName={'origin'}/>
        <ListInterfaceOption selectorName={'status'}/>
      </div>
      <div className="interface__actions">
        
        <div className="interface__action interface-item interface-item__action interface-item--action-blue">
          Change status
        </div>
        <ListInterfaceRemove />
      </div>
    </div>
  );
};

export default ListInterface;
