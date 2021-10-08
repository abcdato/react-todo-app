import './App.css';
import { NewTaskForm } from '../NewTaskForm/NewTaskForm';
import { TaskList } from '../TaskList/TaskList';
import { Footer } from '../Footer/Footer';

const App = () => {
  const todoData = [
    {
      label: 'Completed task',
      active: false,
      editing: false,
      id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
    },
    {
      label: 'Editing task',
      active: true,
      editing: true,
      id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
    },
    {
      label: 'Active task',
      active: true,
      editing: false,
      id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
    },
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <TaskList todos={todoData} />
      <Footer />
    </section>
  );
};

export default App;
