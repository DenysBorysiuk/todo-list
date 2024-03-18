import { Layout, AppBar, TaskForm, TaskList } from '@/components';

const Tasks = () => {
  return (
    <Layout>
      <AppBar />

      <TaskForm />

      <TaskList />
    </Layout>
  );
};

export default Tasks;
