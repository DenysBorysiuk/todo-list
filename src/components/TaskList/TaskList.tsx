import { useSelector } from 'react-redux';

// import { statusFilters } from '@/redux/constants';
import { getTasks, getStatusFilter } from '@/redux/selectors';

import { Task } from '@/components';

import css from './TaskList.module.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

type Status = 'all' | 'active' | 'completed';

const getVisibleTasks = (tasks: Task[], statusFilter: Status) => {
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
  const statusFilter: Status = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task: Task) => (
        <li className={css.listItem} key={task.id}>
          <Task {...task} />
        </li>
      ))}
    </ul>
  );
};
