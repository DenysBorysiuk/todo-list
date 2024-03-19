import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_ENDPOINT_URL;

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/tasks');
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const addTask = createAsyncThunk(
  'tasks/addContact',
  async ({ text }: { text: string }, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text });
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: string, thunkAPI) => {
  try {
    const response = await axios.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ _id, text }: { _id: string; text: string }, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${_id}`, {
        text,
      });
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateStatusTask = createAsyncThunk(
  'tasks/updateStatusTask',
  async ({ _id, completed }: { _id: string; completed: boolean }, thunkAPI) => {
    try {
      const response = await axios.patch(`/tasks/${_id}/completed`, {
        completed,
      });
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
