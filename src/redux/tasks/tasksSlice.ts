import { createSlice, Action } from '@reduxjs/toolkit';

import { fetchTasks, addTask, deleteTask, updateTask } from './operations';
import { TasksState, RejectedAction } from '@/types';

const initialState: TasksState = {
  items: [],
  isLoading: false,
  error: null,
};

function isFulfilledAction(action: Action) {
  return action.type.endsWith('fulfilled');
}

function isPendingAction(action: Action) {
  return action.type.endsWith('pending');
}

function isRejectedAction(action: Action): action is RejectedAction {
  return action.type.endsWith('rejected');
}

const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    return builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        const index = state.items.findIndex(contact => contact._id === action.payload._id);
        state.items.splice(index, 1);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.items.findIndex(contact => contact._id === action.payload._id);
        state.items[index] = action.payload;
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
      })
      .addMatcher(isRejectedAction, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(isFulfilledAction, state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
