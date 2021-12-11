import { Task } from '../Task/Task';
import './TaskList.css';

export const TaskList = ({
  todos,
  handleDelete,
  handleEdit,
  onToggleDone,
  onToggleEditing,
}) => {
  const tasks = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <Task
        key={id}
        id={id}
        {...itemProps}
        handleDelete={() => handleDelete(id)}
        handleEdit={handleEdit}
        onToggleDone={() => onToggleDone(id)}
        onToggleEditing={() => onToggleEditing(id)}
      />
    );

  return (
    <section className="main">
      <ul className="todo-list">{tasks}</ul>
    </section>
  );
};
