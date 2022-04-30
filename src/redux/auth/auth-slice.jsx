import { createSlice } from '@reduxjs/toolkit';
// import {register} from './auth-operations'
// import {logIn} from './auth-operations'
// import {logOut} from './auth-operations'
import authOperations from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
}


export const authSlice = createSlice({
  name: 'auth ',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state,action){
      state.user=action.payload.user;
      state.token=action.payload.token;
      state.isLoggedIn=true;
    },

    [authOperations.logIn.fulfilled](state,action){
      state.user=action.payload.user;
      state.token=action.payload.token;
      state.isLoggedIn=true;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    
  },
});

export default authSlice.reducer;