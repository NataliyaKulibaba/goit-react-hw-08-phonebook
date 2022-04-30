import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../redux/filterSlice';

import { contactsSelectors, changeFilter } from '../../../redux/contacts';

import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  // const changeFilter = e => {
  //   dispatch(setFilter(e.currentTarget.value));
  // };

  return (
    <label className={s.filter}>
      <input
        type="text"
        value={filter}
        onChange={e=>dispatch(changeFilter(e.currentTarget.value))}
        placeholder="Find contacts by name"
      />
    </label>
  );
}

