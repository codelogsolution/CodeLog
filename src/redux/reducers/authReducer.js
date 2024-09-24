import {createReducer} from '@reduxjs/toolkit';
import {loginAction, logoutAction, setToken} from '../actions/authAction';

const authReducer = createReducer(
  {
    isLoggedIn: false,
    userData: '',
    token: null,
  },
  builder => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
      state.token = action.payload.accessToken;
      setToken(action.payload.accessToken);
    });
    builder.addCase(logoutAction.fulfilled, state => {
      state.isLoggedIn = false;
      state.token = null;
    });
  },
);

export default authReducer;
