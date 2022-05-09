import Select, { components, SingleValue } from 'react-select';

import capitalize from '../feature/capitalize';
import makeOptionsList from '../feature/makeList';
import { selectStyles } from '../jsStyles';
import { filterOption } from '../models.ts';
import { changeFilterOptions } from '../redux/appSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

type Props = {
  selectorName: string;
};

const ListInterfaceOption: React.FC<Props> = ({ selectorName }) => {
  const { charactersList } = useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();

  const options = makeOptionsList(charactersList, selectorName);

  const selectComponnets = {
    DropdownIndicator: (baseProps: any) => (
      <components.DropdownIndicator {...baseProps}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
        >
          <path
            d="M8.1201 0.75H1.00485C0.668151 0.75 0.496621 1.174 0.738031 1.42575L4.29567 5.1357C4.44178 5.2881 4.6832 5.2881 4.82938 5.1357L8.387 1.42575C8.6284 1.174 8.4568 0.75 8.1201 0.75Z"
            fill="#5F6569"
          />
        </svg>
      </components.DropdownIndicator>
    ),
    IndicatorSeparator: () => null,
  };

  const handleChange = (
    event: SingleValue<filterOption>,
    selectorName: string
  ) => {
    dispatch(changeFilterOptions({ event, selectorName }));
  };

  return (
    <Select
      options={options}
      isClearable
      components={selectComponnets}
      styles={selectStyles}
      placeholder={capitalize(selectorName)}
      onChange={(event) => handleChange(event, selectorName)}
    />
  );
};

export default ListInterfaceOption;
