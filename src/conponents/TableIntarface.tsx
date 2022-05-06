import CharacterSearch from "./CharacterSearch";

const TableInterface = () => {
  return (
    <div className="table-app__interface interface">
      <CharacterSearch />
      <div className="interface__options">
        <div className="interface__option interface-item interface-item--option">
          Species
        </div>
        <div className="interface__option interface-item interface-item--option">
          Origin
        </div>
        <div className="interface__option interface-item interface-item--option">
          Status
        </div>
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
