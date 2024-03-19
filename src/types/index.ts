import { Action } from '@reduxjs/toolkit';

export type FilterStatus = 'all' | 'active' | 'completed';

export interface FilterState {
  status: FilterStatus;
}

export interface ITask {
  _id: string;
  text: string;
  completed: boolean;
}

export interface TasksState {
  items: ITask[];
  isLoading: boolean;
  error: string | null;
}

export interface RejectedAction extends Action {
  payload: string | null;
}
