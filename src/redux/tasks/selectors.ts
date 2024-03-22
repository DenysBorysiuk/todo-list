import { RootState } from '@/redux/store';

export const selectAllTasks = (state: RootState) => state.tasks.items;

export const selectIsLoading = (state: RootState) => state.tasks.isLoading;

export const selectFilter = (state: RootState) => state.filter.status;

// export const selectVisibleTasks = state => {
//   const tasks = selectTasks(state);
//   const statusFilter = selectStatusFilter(state);

//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

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
