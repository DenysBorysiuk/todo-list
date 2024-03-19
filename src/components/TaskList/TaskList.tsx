import { useAppSelector } from '@/hooks';

import { selectAllTasks, selectFilter } from '@/redux/tasks/selectors';

import { Task } from '@/components';

import { ITask, FilterStatus } from '@/types';

import css from './TaskList.module.css';

const getVisibleTasks = (tasks: ITask[], statusFilter: FilterStatus) => {
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
  const tasks = useAppSelector(selectAllTasks);
  const statusFilter = useAppSelector(selectFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

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
