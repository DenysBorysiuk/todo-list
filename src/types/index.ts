import { Action } from '@reduxjs/toolkit';

export type Status = 'all' | 'active' | 'completed';

export interface State {
  tasks: [];
  filters: { status: Status };
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
