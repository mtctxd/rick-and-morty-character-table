import CharacterSearch from './TableInterfaceSearch';
import Option from './Option';
import { useAppSelector } from '../redux/hooks';

const TableInterface = () => {
  return (
    <div className="table-app__interface interface">
      <CharacterSearch />
      <div className="interface__options">
        {/* <TableInterfaceOption propertyName={OptionKey.species} />
        <TableInterfaceOption propertyName={OptionKey.origin} />
        <TableInterfaceOption propertyName={OptionKey.status} /> */}
        <Option selectorName={'species'}/>
        <Option selectorName={'origin'}/>
        <Option selectorName={'status'}/>
      </div>
      <div className="interface__actions">
        <div className="interface__action interface-item interface-item--action interface-item--action-blue">
          Change status
        </div>
        <div className="interface__action interface-item interface-item--action interface-item--action-red">
          Remove character
        </div>
      </div>
    </div>
  );
};

export default TableInterface;
