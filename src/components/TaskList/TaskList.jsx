import { Task } from '../Task/Task';
import './TaskList.css';

export const TaskList = ({ todos }) => {
  const tasks = todos.map((item) => {
    const { id, ...itemProps } = item;

    return <Task key={id} {...itemProps} />;
  });

  return (
    <section className="main">
      <ul className="todo-list">{tasks}</ul>
    </section>
  );
};
