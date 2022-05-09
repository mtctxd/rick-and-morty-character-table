import React from 'react';

import { Character, SortTypes } from '../models.ts';
import { deleteToggleMultiple, sortInitialList } from '../redux/appSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import SortSVGIcon from './SortSVGIcon';

type Props = {
  currentItems: Character[] | null;
};

const CharacterListHeading: React.FC<Props> = ({ currentItems }) => {
  const { headerCheckboxStatus } = useAppSelector((store) => store.appSlice);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(deleteToggleMultiple({ currentItems }));
  };

  const handleSortClick = (type: SortTypes) => {
    dispatch(sortInitialList(type));
  };

  return (
    <li className="list__item list__item--heading">
      <div className="list__item-cell list__item-cell--checkbox">
        <input
          type="checkbox"
          className="checkbox "
          onChange={handleChange}
          checked={headerCheckboxStatus}
        />
      </div>
      <div
        className="list__item-cell list__item-cell--with-sort"
        onClick={() => handleSortClick('name')}
      >
        Name
        <SortSVGIcon sortName="name" />
      </div>
      <div className="list__item-cell-combined">
        <div
          className="list__item-cell list__item-cell--with-sort"
          onClick={() => handleSortClick('location')}
        >
          Avatar / Location
          <SortSVGIcon sortName="location" />
        </div>
        <div
          className="list__item-cell list__item-cell--with-sort"
          onClick={() => handleSortClick('origin')}
        >
          Origin
          <SortSVGIcon sortName="origin" />
        </div>
        <div
          className="list__item-cell list__item-cell--with-sort"
          onClick={() => handleSortClick('episode')}
        >
          Episode
          <SortSVGIcon sortName="episode" />
        </div>
        <div
          className="list__item-cell list__item-cell--with-sort"
          onClick={() => handleSortClick('status')}
        >
          Status
          <SortSVGIcon sortName="status" />
        </div>
      </div>
    </li>
  );
};

export default CharacterListHeading;
