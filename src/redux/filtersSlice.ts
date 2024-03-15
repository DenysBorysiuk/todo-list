import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { statusFilters } from './constants';

type Status = 'all' | 'active' | 'completed';

const initialState = {
  status: 'all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatusFilter: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
