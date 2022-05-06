import { changeSearchQuery } from "../redux/appSlice";
import { useAppDispatch } from "../redux/hooks";

const TableInterfaceSearch = () => {
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchQuery(event.target.value));
    }

  return (
    <input type="text" className="interface__search interface-item interface-item--search" placeholder="Search"
    onChange={handleChange}
    />
  );
};

export default TableInterfaceSearch;
