import { useAppDispatch } from '@/hooks';
import { deleteTask, updateStatusTask } from '@/redux/tasks/operations';
import { MdClose } from 'react-icons/md';

import css from './Task.module.css';
import { TaskProps } from './type';

export const Task: React.FC<TaskProps> = ({ _id, text, completed }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => dispatch(deleteTask(_id));
  const handleToggleStatus = () => dispatch(updateStatusTask({ _id, completed: !completed }));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={completed}
        onChange={handleToggleStatus}
      />

      <p className={css.text}>{text}</p>

      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
