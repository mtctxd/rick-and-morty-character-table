import TableInterfaceOption from './Option';
import TableInterfaceRemove from './TableInterfaceRemove';
import TableInterfaceSearch from './TableInterfaceSearch';

const TableInterface = () => {
  return (
    <div className="table-app__interface interface">
      <TableInterfaceSearch />
      <div className="interface__options">
        <TableInterfaceOption selectorName={'species'}/>
        <TableInterfaceOption selectorName={'origin'}/>
        <TableInterfaceOption selectorName={'status'}/>
      </div>
      <div className="interface__actions">
        
        <div className="interface__action interface-item interface-item__action interface-item--action-blue">
          Change status
        </div>
        <TableInterfaceRemove />
      </div>
    </div>
  );
};

export default TableInterface;
