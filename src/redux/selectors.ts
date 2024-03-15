type Status = 'all' | 'active' | 'completed';

interface State {
  tasks: [];
  filters: { status: Status };
}

export const getTasks = (state: State) => state.tasks;
export const getStatusFilter = (state: State) => state.filters.status;
