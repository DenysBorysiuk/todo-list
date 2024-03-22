import { RootState } from '@/redux/store';

export const selectAllTasks = (state: RootState) => state.tasks.items;

export const selectIsLoading = (state: RootState) => state.tasks.isLoading;

export const selectFilter = (state: RootState) => state.filter.status;

export const selectVisibleTasks = (state: RootState) => {
  const tasks = selectAllTasks(state);
  const statusFilter = selectFilter(state);

  switch (statusFilter) {
    case 'active':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const selectTaskCount = (state: RootState) => {
  const tasks = selectAllTasks(state);

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
};
