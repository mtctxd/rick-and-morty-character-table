import React from 'react';
import { SORT_ICON_DARKEN, SORT_ICON_LIGHTEN } from '../jsStyles';
import { SortTypes } from '../models.ts';
import { useAppSelector } from '../redux/hooks';

type Props = {
  sortName: SortTypes;
};

const SortSVGIcon: React.FC<Props> = ({ sortName }) => {
  const { sortTypes } = useAppSelector((store) => store.appSlice);

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.38593 6.3838H11.6141C11.9562 6.3838 12.1304 5.97076 11.8852 5.72551L8.27109 2.11138C8.12265 1.96295 7.87741 1.96295 7.72891 2.11138L4.11481 5.72551C3.86963 5.97076 4.04388 6.3838 4.38593 6.3838Z"
        fill={`${
          !sortTypes[sortName].isReversed ? SORT_ICON_DARKEN : SORT_ICON_LIGHTEN
        }`}
      />
      <path
        d="M11.6141 9H4.38588C4.04383 9 3.86958 9.41304 4.11483 9.65829L7.72892 13.2724C7.87736 13.4209 8.1226 13.4209 8.2711 13.2724L11.8852 9.65829C12.1304 9.41304 11.9561 9 11.6141 9Z"
        fill={`${
          sortTypes[sortName].isReversed ? SORT_ICON_DARKEN : SORT_ICON_LIGHTEN
        }`}
      />
    </svg>
  );
};

export default SortSVGIcon;
