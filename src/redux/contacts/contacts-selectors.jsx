import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.contacts;

// const getTotalTodoCount = state => {
//   const todos = getAllTodos(state);
//   return todos.length;
// };

// const getCompletedTodoCount = createSelector([getAllTodos], todos => {
//   return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
// });

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
//   getTotalTodoCount,
//   getCompletedTodoCount,
};
export default contactsSelectors;