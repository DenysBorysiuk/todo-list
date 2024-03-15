import { configureStore } from '@reduxjs/toolkit';

import { tasksReducer } from '@/redux/tasksSlice';
import { filtersReducer } from '@/redux/filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
