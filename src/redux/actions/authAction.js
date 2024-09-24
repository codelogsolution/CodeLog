import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../services/api';
import {AUTH} from '../../services/urls';
import {LOGIN, LOGOUT} from '../constants/authTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginAction = createAsyncThunk(LOGIN, async credentials => {
  const response = await api.post(AUTH.SIGNIN, credentials);
  return response?.data;
});

export const logoutAction = createAsyncThunk(LOGOUT, async () => {
  try {
    await AsyncStorage.removeItem('@token_store');
  } catch (error) {
    console.error(error);
  }
});

// store token from API
export const setToken = async token => {
  await AsyncStorage.setItem('@token_store', token);
};
