import { useEffect } from 'react';

import { fetchTasks } from '@/redux/tasks/operations';
import { selectIsLoading } from '@/redux/tasks/selectors';

import { useAppDispatch, useAppSelector } from '@/hooks';

import { TaskForm, TaskList, StatusFilter, TaskCounter, DocumentTitle } from '@/components';

const Tasks = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your tasks</DocumentTitle>

      <TaskCounter />

      <StatusFilter />

      <TaskForm />

      <div>{isLoading && 'Request in progress...'}</div>

      <TaskList />
    </>
  );
};

export default Tasks;
