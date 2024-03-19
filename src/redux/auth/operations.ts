import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FieldValues } from 'react-hook-form';

import { RootState } from '@/redux/store';

axios.defaults.baseURL = import.meta.env.VITE_ENDPOINT_URL;

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (credentials: FieldValues, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (credentials: FieldValues, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const token = (thunkAPI.getState() as RootState).auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('No valid token');
  }

  setAuthHeader(token);

  try {
    const res = await axios.get('/users/current');
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.message);
  }
});
