import { useAppSelector } from '@/hooks';

import { selectVisibleTasks } from '@/redux/tasks/selectors';

import { Task } from '@/components';

import { ITask } from '@/types';

import css from './TaskList.module.css';

export const TaskList = () => {
  const visibleTasks = useAppSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task: ITask) => (
        <li className={css.listItem} key={task._id}>
          <Task {...task} />
        </li>
      ))}
    </ul>
  );
};
