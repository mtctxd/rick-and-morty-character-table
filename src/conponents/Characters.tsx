import useGetAllCharacters from "../hooks/useGetAllCharacters";
import Table from "./Table";
import TableInterface from "./TableIntarface";

const Characters = () => {
  const characters = useGetAllCharacters();

  return (
    <div className="container">
      <div className="table-app">
        <div className="table-app__container">
          <div className="table-app__heading">Characters</div>
          <TableInterface />
          <Table characters={characters} />
        </div>
      </div>
    </div>
  );
};

export default Characters;
