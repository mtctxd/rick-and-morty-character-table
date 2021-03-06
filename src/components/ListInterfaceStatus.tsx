import React, { useState } from 'react';

import { Character, CharacterStatus } from '../models.ts';
import { changeStatus } from '../redux/appSlice';
import { useAppDispatch } from '../redux/hooks';

type Props = {
  checkedCharacter: Character;
};

const ListInterfaceStatus: React.FC<Props> = ({ checkedCharacter }) => {
  const dispatch = useAppDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChangeStatus = (
    character: Character,
    status: CharacterStatus
  ) => {
    dispatch(changeStatus({ character, status }));
  };

  return (
    <button
      className="interface__action interface-item interface-item__action interface-item--action-blue"
      onMouseMove={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.48879 3.55844C2.80175 3.24548 3.22623 3.06966 3.66883 3.06966H7.4652C7.7878 3.06966 8.04933 3.3312 8.04933 3.65382C8.04933 3.97644 7.7878 4.23797 7.4652 4.23797H3.66883C3.53609 4.23797 3.40877 4.2907 3.31491 4.38457C3.22105 4.47844 3.16831 4.60574 3.16831 4.73848V12.3312C3.16831 12.4639 3.22105 12.5913 3.31491 12.6851C3.40877 12.779 3.53609 12.8317 3.66883 12.8317H11.2615C11.3943 12.8317 11.5216 12.779 11.6155 12.6851C11.7093 12.5913 11.7621 12.4639 11.7621 12.3312V8.53486C11.7621 8.2122 12.0236 7.95066 12.3462 7.95066C12.6688 7.95066 12.9303 8.2122 12.9303 8.53486V12.3312C12.9303 12.7738 12.7545 13.1983 12.4416 13.5112C12.1286 13.8242 11.7041 14 11.2615 14H3.66883C3.22623 14 2.80175 13.8242 2.48879 13.5112C2.17582 13.1983 2 12.7738 2 12.3312V4.73848C2 4.29588 2.17582 3.87141 2.48879 3.55844Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3461 3.0875C12.1959 3.0875 12.0519 3.14717 11.9457 3.25338L6.90787 8.29114L6.64092 9.359L7.7088 9.09207L12.7465 4.05426C12.8527 3.94806 12.9124 3.80401 12.9124 3.65382C12.9124 3.50362 12.8527 3.35958 12.7465 3.25338C12.6403 3.14717 12.4963 3.0875 12.3461 3.0875ZM11.1195 2.42725C11.4449 2.10195 11.8861 1.91919 12.3461 1.91919C12.8061 1.91919 13.2474 2.10195 13.5727 2.42725C13.898 2.75256 14.0807 3.19376 14.0807 3.65382C14.0807 4.11387 13.898 4.55508 13.5727 4.88038L8.42047 10.0326C8.3456 10.1075 8.2518 10.1605 8.14907 10.1862L5.97975 10.7285C5.78069 10.7783 5.57011 10.72 5.42501 10.5749C5.27992 10.4298 5.22159 10.2193 5.27136 10.0202L5.81369 7.8508C5.83937 7.74814 5.89249 7.65434 5.96735 7.57947L11.1195 2.42725Z"
          fill="white"
        />
      </svg>

      <span className="interface-item__action-word">Change status</span>
      {showDropdown && (
        <div className="interface-item__action-dropdown">
          {checkedCharacter.status === 'Alive' && (
            <div
              className="interface-item__action-dropdown-item"
              onClick={() => handleChangeStatus(checkedCharacter, 'Dead')}
            >
              Dead
            </div>
          )}
          {checkedCharacter.status === 'unknown' && (
            <>
              <div
                className="interface-item__action-dropdown-item"
                onClick={() => handleChangeStatus(checkedCharacter, 'Alive')}
              >
                Alive
              </div>
              <div
                className="interface-item__action-dropdown-item"
                onClick={() => handleChangeStatus(checkedCharacter, 'Dead')}
              >
                Dead
              </div>
            </>
          )}
          {checkedCharacter.status === 'Dead' && (
            <div className="interface-item__action-dropdown-item">
              Sorry, you can not resurrect him...
            </div>
          )}
        </div>
      )}
    </button>
  );
};

export default ListInterfaceStatus;
