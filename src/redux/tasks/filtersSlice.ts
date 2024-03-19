import { createSlice } from '@reduxjs/toolkit';

import { FilterState } from '@/types';

const initialState: FilterState = {
  status: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
