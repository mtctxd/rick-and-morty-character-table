import { useEffect, useState } from 'react';
import classNames from 'classnames';
import capitalize from '../feature/capitalize';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const TableInterfaceOption = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="interface__option interface-item interface-item--option">
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
    </div>
  );
};

export default TableInterfaceOption;
