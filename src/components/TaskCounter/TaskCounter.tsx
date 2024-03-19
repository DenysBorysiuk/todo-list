import { useSelector } from 'react-redux';

import { selectAllTasks } from '@/redux/tasks/selectors';

import css from './TaskCounter.module.css';
import { ITask } from '@/types';

export const TaskCounter = () => {
  const tasks = useSelector(selectAllTasks);

  const count = tasks.reduce(
    (acc, task: ITask) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
