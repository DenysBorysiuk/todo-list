import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useAppDispatch } from '@/hooks';
import { logIn } from '@/redux/auth/operations';

import css from './LoginForm.module.css';

type FormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { register, reset, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    try {
      const res = await dispatch(logIn(data)).unwrap();
      reset();
      toast.success(`Hello ${res.user.name}`);
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={css.label}>
        Email
        <input {...register('email')} />
      </label>

      <label className={css.label}>
        Password
        <input {...register('password')} />
      </label>

      <button type="submit">Log In</button>
    </form>
  );
};
