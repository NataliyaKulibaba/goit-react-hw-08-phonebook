// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const getContacts = createAsyncThunk(
//   'contacts /getContacts',
//   async function (_, { rejectWithValue }) {
//     try {
//       const response = await fetch(
//         'https://connections-api.herokuapp.com/contacts'
//       );
//       if (!response.ok) {
//         throw new Error('Oh my God! It is ERROR!');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addNewContact = createAsyncThunk(
//   'contacts/addNewContact',
//   async function (newContact, { rejectWithValue, dispatch }) {
//     try {
//       const response = await fetch(
//         'https://connections-api.herokuapp.com/contacts',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(newContact),
//         }
//       );
//       if (!response.ok) {
//         throw new Error('Oh my God! It is ERROR! You can not add contact');
//       }
//       const data = await response.json();
//       dispatch(add(data));
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async function (id, { rejectWithValue, dispatch }) {
//     try {
//       const response = await fetch(
//         `https://connections-api.herokuapp.com/contacts/${id}`,
//         { method: 'DELETE' }
//       );

//       if (!response.ok) {
//         throw new Error('Something wrong. Server error!');
//       }

//       dispatch(remove({ id }));
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


// const setError = (state, action) => {
//   state.status = 'rejected';
//   state.error = action.payload;
// };


// export const contactsSlice = createSlice({
//   name: 'contacts ',
//   initialState: {
//     contacts: [],
//     status: null,
//     error: null,
//   },
//   reducers: {
//     add(state, action) {
//       state.contacts.push(action.payload);
//     },
//     remove(state, action) {
//       state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
//     },
//   },
//   extraReducers: {
//     [getContacts.pending]: state => {
//       state.status = 'loading';
//     },
//     [getContacts.fulfilled]: (state, action) => {
//       state.status = 'resolved';
//       state.contacts = action.payload;
//     },
//     [getContacts.rejected]: setError,
//     [deleteContact.rejected]: setError,
//   },
// });

// export const { add, remove } = contactsSlice.actions;
