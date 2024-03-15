import { useSelector } from 'react-redux';

import { getTasks, getStatusFilter } from '@/redux/selectors';

import { Task } from '@/components';

import { ITask, Status } from '@/types';

import css from './TaskList.module.css';

const getVisibleTasks = (tasks: ITask[], statusFilter: Status) => {
  switch (statusFilter) {
    case 'active':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task: ITask) => (
        <li className={css.listItem} key={task.id}>
          <Task {...task} />
        </li>
      ))}
    </ul>
  );
};
