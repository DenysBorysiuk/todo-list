/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useSelector } from 'react-redux';

// import { getTasks } from '@/redux/selectors';

// import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  // const tasks: any = useSelector(getTasks);

  // const count = tasks.reduce(
  //   (acc: any, task: any) => {
  //     if (task.completed) {
  //       acc.completed += 1;
  //     } else {
  //       acc.active += 1;
  //     }
  //     return acc;
  //   },
  //   { active: 0, completed: 0 }
  // );

  return (
    <div>
      {/* <p className={css.text}>Active: {count.active}</p> */}
      {/* <p className={css.text}>Completed: {count.completed}</p> */}
    </div>
  );
};
