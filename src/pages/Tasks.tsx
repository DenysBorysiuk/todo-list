import { useEffect } from 'react';

import { fetchTasks } from '@/redux/tasks/operations';
import { selectIsLoading } from '@/redux/tasks/selectors';

import { useAppDispatch, useAppSelector } from '@/hooks';

import { TaskForm, TaskList, StatusFilter, TaskCounter, DocumentTitle } from '@/components';

const styles = {
  filter: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
};

const Tasks = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your tasks</DocumentTitle>

      <div style={styles.filter}>
        <StatusFilter />

        <TaskCounter />
      </div>

      <TaskForm />

      <div>{isLoading && 'Request in progress...'}</div>

      <TaskList />
    </>
  );
};

export default Tasks;
