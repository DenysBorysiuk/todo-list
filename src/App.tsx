import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { PrivateRoute } from '@/routes/PrivateRoute';
import { RestrictedRoute } from '@/routes/RestrictedRoute';
import { refreshUser } from './redux/auth/operations';
import { useAuth, useAppDispatch } from './hooks';

const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));
const TasksPage = lazy(() => import('./pages/Tasks'));

export const App = () => {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />}
          />

          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />}
          />

          <Route
            path="/tasks"
            element={<PrivateRoute redirectTo="/login" component={<TasksPage />} />}
          />
        </Route>
      </Routes>
    </>
  );
};
