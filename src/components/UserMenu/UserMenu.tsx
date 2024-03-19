import toast from 'react-hot-toast';

import { useAuth, useAppDispatch } from '@/hooks';

import { logOut } from '@/redux/auth/operations';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();

  const handleLogOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
      toast.success('Logged out');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user?.name}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
