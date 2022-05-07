import { changeSearchQuery } from '../redux/appSlice';
import { useAppDispatch } from '../redux/hooks';

const TableInterfaceSearch = () => {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchQuery(event.target.value));
  };

  return (
    <div className="interface__search interface-item">
      <input
        type="text"
        className="interface-item--search"
        placeholder="Search"
        onChange={handleChange}
      />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='interface-item__search-icon'
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.33332 3.33334C5.5719 3.33334 3.33332 5.57191 3.33332 8.33334C3.33332 11.0948 5.5719 13.3333 8.33332 13.3333C11.0947 13.3333 13.3333 11.0948 13.3333 8.33334C13.3333 5.57191 11.0947 3.33334 8.33332 3.33334ZM1.66666 8.33334C1.66666 4.65144 4.65142 1.66667 8.33332 1.66667C12.0152 1.66667 15 4.65144 15 8.33334C15 12.0152 12.0152 15 8.33332 15C4.65142 15 1.66666 12.0152 1.66666 8.33334Z"
          fill="#0088DA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9107 11.9107C12.2362 11.5853 12.7638 11.5853 13.0892 11.9107L18.0892 16.9108C18.4147 17.2362 18.4147 17.7638 18.0892 18.0893C17.7638 18.4147 17.2362 18.4147 16.9107 18.0893L11.9107 13.0893C11.5853 12.7638 11.5853 12.2362 11.9107 11.9107Z"
          fill="#0088DA"
        />
      </svg>
    </div>
  );
};

export default TableInterfaceSearch;
