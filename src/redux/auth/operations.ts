import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { RootState } from '../store';

axios.defaults.baseURL = 'https://todo-list-api-by74.onrender.com';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk('auth/registration', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/users/register', credentials);
    setAuthHeader(res.data.token);
    toast.success('Registration success');
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    toast.error('Something went wrong');
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', credentials);
    setAuthHeader(res.data.token);
    toast.success(`Hello ${res.data.user.email}`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    toast.error('Login or password is incorrect');
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    toast.success('Logout success');
  } catch (error) {
    const err = error as AxiosError;
    toast.error('Something went wrong');
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
    toast.error(`Something went wrong`);
    return thunkAPI.rejectWithValue(err.message);
  }
});
