import Task from '../Task/Task';

import './TaskList.css';

export const TaskList = ({ todos, onDeleted }) => {
  const tasks = todos.map((item) => {
    const { id, ...itemProps } = item;

    return <Task key={id} {...itemProps} onDeleted={() => onDeleted(id)} />;
  });

  return (
    <section className="main">
      <ul className="todo-list">{tasks}</ul>
    </section>
  );
};
