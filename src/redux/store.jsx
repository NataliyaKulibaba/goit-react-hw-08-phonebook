

import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import { itemsSlice } from './contacts/contactsSlice';
// import { filterSlice } from './filterSlice';
import { authSlice } from './auth/auth-slice';
import { contactsReducer } from './contacts';
// import { contactsSlice } from './contacts/contactsSlice';


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const rootReducer = combineReducers({
  // items: itemsSlice.reducer,
  // filter: filterSlice.reducer,
  auth:authSlice.reducer,
  contacts:contactsReducer,
  // filter: filterSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['token'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools:process.env.NODE_ENV ==='development'
});

export const persistor = persistStore(store);
export default store;
