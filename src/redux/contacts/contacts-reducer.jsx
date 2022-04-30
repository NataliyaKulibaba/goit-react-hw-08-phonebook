import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
  } from './contacts-actions';
  

const contacts = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
    // [toggleCompletedSuccess]: (state, { payload }) =>
    //   state.map(todo => (todo.id === payload.id ? payload : todo)),
  });

  const loading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    // [toggleCompletedRequest]: () => true,
    // [toggleCompletedSuccess]: () => false,
    // [toggleCompletedError]: () => false,
  });

  const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
  });

  const error = createReducer(null, {});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});