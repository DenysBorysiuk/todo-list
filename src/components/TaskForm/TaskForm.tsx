import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@/components';
import { addTask } from '@/redux/tasksSlice';

import css from './TaskForm.module.css';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const textValue = form.text.value;

    dispatch(addTask(textValue));

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.field} type="text" name="text" placeholder="Enter task text..." />

      <Button type="submit">Add task</Button>
    </form>
  );
};
