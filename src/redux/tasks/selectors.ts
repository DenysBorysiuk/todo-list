import { RootState } from '@/redux/store';

export const selectAllTasks = (state: RootState) => state.tasks.items;

export const selectFilter = (state: RootState) => state.filter.status;
