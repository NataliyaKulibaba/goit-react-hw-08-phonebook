import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { contactsSelectors, changeFilter } from '../../../redux/contacts';
import {deleteContact } from '../../redux/contacts/contacts-operations'



function Contacts() {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <ul className={s.contactLict}>
      {getVisibleContacts().map(({ name, number, id }) => (
        <li key={id} className={s.contactLictItem}>
          {name}
          <span>{number}</span>
          <button
            type="button"
            className={s.btnDel}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts;