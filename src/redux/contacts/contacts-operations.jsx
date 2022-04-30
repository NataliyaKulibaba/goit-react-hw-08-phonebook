import axios from 'axios';
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
} from './contacts-actions';

// GET @ /tasks
export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
  
    try {
      const { data } = await axios.get('/contacts');
  
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error.message));
    }
  };

  // POST @ /tasks
export const addContact = description => dispatch => {
    // console.log(description)
    // const contact = {
    //   description,
    // //   completed: false,
    // };
    // console.log(contact)
    dispatch(addContactRequest());
  
    axios
      .post('/contacts', description)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error.message)));
  };
  
  // DELETE @ /tasks/:id
  export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());
  
    axios
      .delete(`/contacts/${contactId}`)
      .then(() => dispatch(deleteContactSuccess(contactId)))
      .catch(error => dispatch(deleteContactError(error.message)));
  };


  const contactsOperations = {
    fetchContacts,
    addContact,
    deleteContact,
    // toggleCompleted,
  };
  export default contactsOperations;