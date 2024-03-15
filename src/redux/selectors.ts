import { State } from '@/types';

export const getTasks = (state: State) => state.tasks;
export const getStatusFilter = (state: State) => state.filters.status;
