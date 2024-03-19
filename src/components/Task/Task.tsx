import { useState } from 'react';

import { useAppDispatch } from '@/hooks';
import { deleteTask, updateStatusTask } from '@/redux/tasks/operations';
import { MdClose } from 'react-icons/md';

import css from './Task.module.css';
import { TaskProps } from './type';

export const Task: React.FC<TaskProps> = ({ _id, text, completed }) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const dispatch = useAppDispatch();

  const handleDelete = async () => await dispatch(deleteTask(_id));

  const handleToggleStatus = async () => {
    setIsCompleted(!isCompleted);
    await dispatch(updateStatusTask({ _id, completed: isCompleted }));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={isCompleted}
        onChange={handleToggleStatus}
      />

      <p className={css.text}>{text}</p>

      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
