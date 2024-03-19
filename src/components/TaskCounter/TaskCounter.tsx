import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { selectAllTasks } from '@/redux/tasks/selectors';

import { ITask } from '@/types';

import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  const tasks = useSelector(selectAllTasks);
  const [counter, setCounter] = useState({ active: 0, completed: 0 });

  useEffect(() => {
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

    setCounter(count);
  }, [tasks]);

  return (
    <div>
      <p className={css.text}>Active: {counter.active}</p>

      <p className={css.text}>Completed: {counter.completed}</p>
    </div>
  );
};
