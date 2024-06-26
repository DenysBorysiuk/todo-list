import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useAppDispatch } from '@/hooks';
import { registration } from '@/redux/auth/operations';

import css from './RegisterForm.module.css';

type FormData = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { register, reset, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    try {
      await dispatch(registration(data)).unwrap();
      reset();
      toast.success('Registration success');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={css.label}>
        Username
        <input {...register('name')} />
      </label>

      <label className={css.label}>
        Email
        <input {...register('email')} />
      </label>

      <label className={css.label}>
        Password
        <input {...register('password')} />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};
