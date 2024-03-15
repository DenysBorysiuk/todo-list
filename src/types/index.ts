export type Status = 'all' | 'active' | 'completed';

export interface State {
  tasks: [];
  filters: { status: Status };
}

export interface ITask {
  id: number;
  text: string;
  completed: boolean;
}
