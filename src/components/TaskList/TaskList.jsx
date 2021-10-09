import { Task } from '../Task/Task';

import './TaskList.css';

export const TaskList = ({
  todos,
  onDeleted,
  onToggleDone,
  onToggleEditing,
}) => {
  const tasks = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <Task
        key={id}
        {...itemProps}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        onToggleEditing={() => onToggleEditing(id)}
      />
    );
  });

  return (
    <section className="main">
      <ul className="todo-list">{tasks}</ul>
    </section>
  );
};
