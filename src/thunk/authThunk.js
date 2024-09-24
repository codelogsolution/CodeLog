// import {createAsyncThunk} from '@reduxjs/toolkit';
// import {LOGIN, LOGOUT} from '../redux/constants/authTypes';
// import {AUTH} from '../services/urls';
// import api from '../services/api';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const loginAction = createAsyncThunk(LOGIN, async credentials => {
//   try {
//     const response = await api.post(AUTH.SIGNIN, credentials);
//     return response?.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const logoutAction = createAsyncThunk(LOGOUT, async () => {
//   try {
//     await AsyncStorage.removeItem('@token_store');
//   } catch (error) {
//     console.error(error);
//   }
// });

// // store token from API
// export const setToken = async token => {
//   await AsyncStorage.setItem('@token_store', token);
// };

import {loginSuccess, logoutSuccess} from '../redux/reducers/authReducer';
import store from '../redux/store/index';
import {AUTH} from '../services/urls';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authService = {
  async loginAction(credentials) {
    try {
      const response = await api.post(AUTH.SIGNIN, credentials);
      const userData = response?.data;
      store.dispatch(loginSuccess(userData));
      return userData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async logoutAction() {
    try {
      await AsyncStorage.removeItem('@token_store');
      store.dispatch(logoutSuccess());
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

// // store token from API
export const setToken = async token => {
  await AsyncStorage.setItem('@token_store', token);
};
